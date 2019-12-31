const Peer = require('simple-peer')
const io = require('socket.io-client')

const gotUserMedia = stream => {
	// => This will be executed if the stream is successfully obtained
	const localVideo = document.getElementById('localVideo')
	if ('srcObject' in localVideo) {
		localVideo.srcObject = stream
	} else {
		localVideo.src = window.URL.createObjectURL(stream) // for older browsers
	}
	const peer = new Peer({
		initiator: location.hash === '#init',
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

	const socket = io(`/ws/signaling`)

	socket.on('connect', () => {
		socket.on('signal', offerOrAnswer => {
			peer.signal(offerOrAnswer)
		})
	})

	peer.on('signal', data => {
		console.log(data)
		socket.emit('signal', data) // => Whenever a peer recieves a signal, it emit the signal event to every connected peer
	})

	document.getElementById('connect').addEventListener('click', () => {
		const otherId = JSON.parse(document.getElementById('otherId').value)
		peer.signal(otherId)
	})

	document.getElementById('send').addEventListener('click', () => {
		const yourMessage = document.getElementById('yourMessage').value
		peer.send(yourMessage)
	})

	peer.on('data', data => {
		document.getElementById('messages').textContent += data + '\n'
	})

	peer.on('stream', stream => {
		const remoteVideo = document.getElementById('remoteVideo')
		if ('srcObject' in remoteVideo) {
			remoteVideo.srcObject = stream
		} else {
			remoteVideo.src = window.URL.createObjectURL(stream) // for older browsers
		}
		remoteVideo.play()
		alert('Got track')
	})
}

const sale = async () => {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			video: true,
			audio: false
		})
		gotUserMedia(stream)
	} catch (error) {
		console.log(`Error: ${error.message}`)
	}
}

sale()
