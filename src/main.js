const Peer = require('simple-peer')
const io = require('socket.io-client')
let myOffer
let isInARoom = false
let imInitiator = false

const gotUserMedia = stream => {
	// => This will be executed if the stream is successfully obtained
	bindVideoToHtml(document.getElementById('localVideo'), stream) // => Bind the media that we recieve from the user into localVideo html element
	const peer = createPeer(stream)
	const socket = io('http://localhost:3000/ws/signaling')

	socket.on('connect', () => {
		socket.on('signal', offerOrAnswer => {
			peer.signal(offerOrAnswer)
		})

		socket.on('joiner', () => {
			console.log('A new user has joined this room')
		})

		socket.on('initiator', () => { imInitiator = true })
	})

	peer.on('signal', data => {
		const offerOrAnswer = JSON.stringify(data)
		if (isInARoom) {
			socket.emit('signal', offerOrAnswer) // => Whenever a peer recieves a signal, it emit the signal event to every connected peer
		} else {
			myOffer = offerOrAnswer
		}
	})

	peer.on('connect', () => {
		console.log('A peer has just connected')
	})

	peer.on('data', data => {
		document.getElementById('messages').textContent += data + '\n'
	})

	peer.on('stream', stream => {
		bindVideoToHtml(document.getElementById('remoteVideo'), stream) // => Bind the stream that we recieve from the other peer into remoteVideo html element
		alert('Got track')
	})

	document.getElementById('send').addEventListener('click', () => {
		const yourMessage = document.getElementById('yourMessage').value
		peer.send(yourMessage)
	})

	document.getElementById('room1').addEventListener('click', () => {
		if (myOffer && !imInitiator) {
			socket.emit('signal', myOffer)
		}
		socket.emit('join', 'room1')
		isInARoom = true
	})

	document.getElementById('room2').addEventListener('click', () => {
		socket.emit('join', 'room2')
		if (myOffer && !imInitiator) {
			socket.emit('signal', myOffer)
		}
		isInARoom = true
	})

	document.getElementById('room3').addEventListener('click', () => {
		if (myOffer && !imInitiator) {
			socket.emit('signal', myOffer)
		}
		socket.emit('join', 'room3')
		isInARoom = true
	})
}

const createPeer = stream =>
	new Peer({
		initiator: true,
		trickle: false,
		stream: stream,
		config: {
			iceServers: [
				{
					urls: [
						'stun:stun.l.google.com:19302',
						'stun:stun1.l.google.com:19302',
						'stun:stun2.l.google.com:19302',
						'stun:stun.l.google.com:19302?transport=udp'
					]
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
		DOMElement.src = window.URL.createObjectURL(stream) // => For older browsers
	}
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
