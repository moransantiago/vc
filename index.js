const express = require('express')
const app = express()
const path = require('path')
const io = require('socket.io')(server)

const { bindSignalingEvents } = require('./sockets/signaling')

app.use('/', express.static(path.join(__dirname, 'src')))

bindSignalingEvents(io.of('/ws/signaling')) //<--Create an endpoint where the clients can be connected to perform signaling

const server = app.listen(3000, () =>
	console.log(`Listening http://localhost:${server.address().port}`)
)
