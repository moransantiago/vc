const Peer = require('simple-peer')
const io = require('socket.io-client')
const myId = prompt('Insert your username')
let myOffer
let imInitiator = false
const peers = [] // => Will be an array of objects: { id: <name>, peer: new Peer() }

const gotUserMedia = stream => {
	// => This will be executed if the stream is successfully obtained
	bindVideoToHtml(document.getElementById('localVideo'), stream) // => Bind the media that we recieve from the user into localVideo html element
	const socket = io('http://localhost:3000/ws/signaling')

	socket.on('connect', () => {
		socket.on('signal', ({ id, offerOrAnswer, peerId }) => {
			if (offerOrAnswer.type === 'offer' && id === myId) {
				const newPeer = createPeer(false)
				setPeerEvents(newPeer, socket, peerId)
				newPeer.signal(offerOrAnswer)
				peers.push({ id: peerId, peer: newPeer })
			} else if (offerOrAnswer.type === 'answer' && id === myId) {
				const signaledFrom = peers.filter(peer => peer.id === peerId)
				signaledFrom[0].peer.signal(offerOrAnswer)
			}
		})

		socket.on('joiner', id => {
			console.log('A new user has joined this room')
			const newPeer = createPeer(true)
			setPeerEvents(newPeer, socket, id)
			peers.push({ id, peer: newPeer })
		})

		socket.on('initiator', () => {
			imInitiator = true
		})
	})

	document.getElementById('room1').addEventListener('click', () => {
		socket.emit('join', { id: myId, room: 'room1' }) // => PEERS ALWAYS HAVE TO EMIT THIS EVENT TO CONNECT TO THE ROOM BEFORE THEY EMIT SIGNAL EVENT
		if (myOffer && !imInitiator) {
			socket.emit('signal', { id: peer.otherId, offerOrAnswer: myOffer, peerId: myId })
		}
	})

	document.getElementById('room2').addEventListener('click', () => {
		socket.emit('join', { id: myId, room: 'room2' }) // => PEERS ALWAYS HAVE TO EMIT THIS EVENT TO CONNECT TO THE ROOM BEFORE THEY EMIT SIGNAL EVENT
		if (myOffer && !imInitiator) {
			socket.emit('signal', { id: peer.otherId, offerOrAnswer: myOffer, peerId: myId })
		}
	})

	document.getElementById('room3').addEventListener('click', () => {
		socket.emit('join', { id: myId, room: 'room3' }) // => PEERS ALWAYS HAVE TO EMIT THIS EVENT TO CONNECT TO THE ROOM BEFORE THEY EMIT SIGNAL EVENT
		if (myOffer && !imInitiator) {
			socket.emit('signal', { id: peer.otherId, offerOrAnswer: myOffer, peerId: myId })
		}
	})
}

const setPeerEvents = (peer, socket, id) => {
	peer.otherId = id // => To perform signaling

	peer.on('signal', offerOrAnswer => {
		socket.emit('signal', { id: peer.otherId, offerOrAnswer, peerId: myId })
		// => Whenever a peer recieves a signal, it emit the signal event to every connected peer
	})

	peer.on('connect', () => {
		console.log('A peer has just connected')
	})

	peer.on('error', err => {
		console.log(err)
	})

	peer.on('data', data => {
		document.getElementById('messages').textContent += data + '\n'
	})

	peer.on('stream', stream => {
		const newVideo = createNewVideoElement()
		bindVideoToHtml(newVideo, stream)
		// => Bind the stream that we recieve from the other peer into remoteVideo html element
	})
}

const createPeer = initiator =>
	new Peer({
		initiator: initiator,
		trickle: false,
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

const createNewVideoElement = () => {
	const body = document.getElementById('body')
	const newVideoElement = document.createElement('video')
	body.appendChild(newVideoElement)

	return newVideoElement
}

const sale = async () => {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: false,
			audio: true
		})
		gotUserMedia(stream)
	} catch (error) {
		console.log(`Error: ${error.message}`)
	}
}

sale()
