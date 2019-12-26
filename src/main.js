const Peer = require('simple-peer')
const peer = new Peer({
    initiator: location.hash === '#init',
    trickle: false
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