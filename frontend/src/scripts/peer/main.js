export const peerSetUp = async username => {
	const Peer = require('simple-peer')
	const io = require('socket.io-client')
	const peers = [] // Will be an array of objects: { id: <name>, peer: new Peer() }

	const gotUserMedia = stream => {
		// This will be executed if the stream is successfully obtained
		const localVideo = createVideoElement(true)
		bindVideoToHtml(localVideo, stream) // Bind the media that we recieve from the user into localVideo html element
		const socket = io(`${process.env.REACT_APP_API}/ws/signaling`)

		socket.on('connect', () => {
			socket.on('signal', ({ id, offerOrAnswer, peerId }) => {
				if (offerOrAnswer.type === 'offer' && id === username) {
					const newPeer = createPeer(false, stream)
					setPeerEvents(newPeer, socket, peerId)
					newPeer.signal(offerOrAnswer)
					peers.push({ id: peerId, peer: newPeer })
				} else if (offerOrAnswer.type === 'answer' && id === username) {
					const signaledFrom = peers.filter(peer => peer.id === peerId)
					signaledFrom[0].peer.signal(offerOrAnswer)
				}
			})

			socket.on('joiner', id => {
				console.log('A new user has joined this room')
				setUpNewJoiner(stream, id, socket)
			})

			socket.on('left', id => {
				console.log('A user has left the channel')
				removePeer(id)
			})

			socket.on('you left room', () => {
				removeAllPeers()
			})
		})

		return socket
	}

	const setUpNewJoiner = (stream, id, socket) => {
		// If the user is already on the room and wants to reconnect,
		// we remove the peer and then create it again
		const [peerAlreadyExists] = peers.filter(peer => peer.id === id)
		if (peerAlreadyExists) {
			removePeer(id)
		}
		const newPeer = createPeer(true, stream)
		setPeerEvents(newPeer, socket, id)
		peers.push({ id, peer: newPeer })
	}

	const removePeer = id => {
		const peerIds = peers.map(({ id }) => id)
		const peerIndex = peerIds.indexOf(id)	// Get the position of the left peer inside the connected peers
		if (peerIndex > -1) { // If finds the peer
			peers[peerIndex].peer.destroy()
			peers.splice(peerIndex, 1) // Removes it
		}
		removeVideoElement(id)
	}

	const removeAllPeers = id => {
		peers.forEach(singlePeer => {
			removeVideoElement(singlePeer.id)
			singlePeer.peer.destroy()
		})
		peers.splice(0, peers.length)	// Reset the peers array cause I left room
	}

	const setPeerEvents = (peer, socket, id) => {
		peer.on('signal', offerOrAnswer => {
			socket.emit('signal', { id, offerOrAnswer, peerId: username })
			// Whenever a peer recieves a signal, it emit the signal event to every connected peer
		})

		peer.on('connect', () => {
			console.log('A peer has just connected')
		})

		peer.on('error', err => {
			console.log(err)
		})
		
		peer.on('stream', stream => {
			const newVideo = createVideoElement(false, id)
			bindVideoToHtml(newVideo, stream)
			// Bind the stream that we recieve from the other peer into remoteVideo html element
		})
	}

	const createPeer = (initiator, stream) =>
		new Peer({
			initiator: initiator,
			trickle: false,
			stream: stream,
			config: {
				iceServers: [
					{
						urls: ['stun:stun.l.google.com:19302']
					},
					{
						urls: 'turn:webrtcweb.com:7788',
						username: 'muazkh',
						credential: 'muazkh'
					}
				]
			}
		})

	const bindVideoToHtml = (DOMElements, stream) => {
		DOMElements.forEach(video => {
			if ('srcObject' in video) {
				video.srcObject = stream
			} else {
				video.src = window.URL.createObjectURL(stream) // For older browsers
			}
			video.play()
		});
	}

	const removeVideoElement = id => {
		const videoElements = document.querySelectorAll(`video[data-user="${id}"]`)
		videoElements.forEach(video => video.remove())
	}

	const createVideoElement = (isMine, id) => {
		const videoContainer = document.getElementById('videos')
		const videosPortal = document.getElementById('videosPortal')
		const globalVideoElement = document.createElement('video')
		const visibleVideoElement = document.createElement('video')
		if (id) {
			globalVideoElement.dataset.user = id
			visibleVideoElement.dataset.user = id
		}
		globalVideoElement.muted = isMine // If the video is remote, we do not mute it
		globalVideoElement.volume = 0.3
		visibleVideoElement.style.flexGrow = 1
		visibleVideoElement.style.flexShrink = 1
		visibleVideoElement.style.flexBasis = '50%'
		visibleVideoElement.style.borderRadius = '4px'
		visibleVideoElement.style.border = '2px solid #3c3c3c'
		visibleVideoElement.style.margin = '10px'
		visibleVideoElement.muted = true
		visibleVideoElement.playsInline = true
		visibleVideoElement.autoPlay = true
		videoContainer.appendChild(visibleVideoElement)
		videosPortal.appendChild(globalVideoElement)

		return [globalVideoElement, visibleVideoElement]
	}

	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: false,
			audio: true
		})

		return gotUserMedia(stream)
	} catch (error) {
		console.log(error)
	}
}
