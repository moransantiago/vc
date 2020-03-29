export const peerSetUp = async username => {
	const Peer = require('simple-peer')
	const io = require('socket.io-client')
	const peers = [] // => Will be an array of objects: { id: <name>, peer: new Peer() }

	const gotUserMedia = stream => {
		// => This will be executed if the stream is successfully obtained
		const newVideo = createNewVideoElement(true)
		bindVideoToHtml(newVideo, stream) // => Bind the media that we recieve from the user into localVideo html element
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
				const newPeer = createPeer(true, stream)
				setPeerEvents(newPeer, socket, id)
				peers.push({ id, peer: newPeer })
			})

			socket.on('left', id => {
				console.log('A user has left the channel');
				const peerIndex = peers.indexOf(id)	// => Get the position of the left peer inside the connected peers
				if (peerIndex > -1) { // => If finds the peer
					peers[peerIndex].peer.destroy()
					peers.splice(peerIndex, 1) // => Removes it
					console.log(peers)
				}
			})
		})

		/*
            The returned function is the socket.emit
            function in order to call the join event this way:
            => socket.emit('join', { id: username, room: channel })
        */
		return socket
	}

	const setPeerEvents = (peer, socket, id) => {
		peer.on('signal', offerOrAnswer => {
			socket.emit('signal', { id, offerOrAnswer, peerId: username })
			// => Whenever a peer recieves a signal, it emit the signal event to every connected peer
		})

		peer.on('connect', () => {
			console.log('A peer has just connected')
		})

		peer.on('error', err => {
			console.log(err)
		})
		
		peer.on('stream', stream => {
			const newVideo = createNewVideoElement(false)
			bindVideoToHtml(newVideo, stream)
			// => Bind the stream that we recieve from the other peer into remoteVideo html element
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

	const bindVideoToHtml = (DOMElement, stream) => {
		if ('srcObject' in DOMElement) {
			DOMElement.srcObject = stream
		} else {
			DOMElement.src = window.URL.createObjectURL(stream)
			// => For older browsers
		}
		DOMElement.play()
	}

	const createNewVideoElement = isMine => {
		const videoContainer = document.getElementById('videos')
		const newVideoElement = document.createElement('video')
		newVideoElement.muted = isMine // => If the video is remote, we do not mute it
		newVideoElement.playsInline = true
		newVideoElement.autoPlay = true
		videoContainer.appendChild(newVideoElement)

		return newVideoElement
	}

	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: false,
			audio: true
		})
		return gotUserMedia(stream)
	} catch (error) {
		console.log(`Error: ${error.message}`)
	}
}
