const express = require('express')
const app = express()
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path')

const { bindSignalingEvents } = require('./sockets/signaling') // => Function to set the events on the future sockets

app.use('/', express.static(path.join(__dirname, 'src')))

bindSignalingEvents(io.of('/ws/signaling')) // => Create an endpoint where the clients can be connected to perform signaling

server.listen(process.env.PORT, () =>
	console.log(`Listening http://localhost:${server.address().port}`)
)
