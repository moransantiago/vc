const gotUserMedia = stream => {
	//<--This will be executed if the stream is successfully obtained
	const localVideo = document.getElementById('localVideo')
	localVideo.srcObject = stream
	const Peer = require('simple-peer')
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

	peer.on('signal', data => {
		document.getElementById('yourId').value = JSON.stringify(data)
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
		remoteVideo.srcObject = stream
		console.log('Got stream');
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
