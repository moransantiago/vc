const jwt = require('jsonwebtoken')

const { config } = require('../../config/index')

module.exports = {
    bindSignalingEvents: io => {
        io.on('connect', socket => {
			io.clients((error, clients) => {
				if (error) throw error
				console.log('Signaling clients:', clients.length, clients)
			})

			socket.on('signal', offerOrAnswer => { // When the server recieves a signal, it broadcasts it to every client on this namespace but the sender
				const room = Object.keys(socket.rooms)[1] // I get the list of rooms this socket is connected to from socket.rooms[<socketId>, <roomName>]
				socket.broadcast.to(room).emit('signal', offerOrAnswer)
			})

			socket.on('join', ({ auth, room }) => { // When the server recieves a join, it checks if there are empty and then joins the socket room
				console.log('object')
				try {
					jwt.verify(auth, config.authJwtSecret, async (err, tokenPayload) => {
						if (err) {
							throw new Error(err)
						}
						socket.join(room, () => {
							console.log(`User ${tokenPayload.id} joined channel ${room}`)
							socket.broadcast.to(room).emit('joiner', tokenPayload.id) // Broadcast to everyone in the room that a new user has joined
						})
					})
				} catch (err) {
					console.log(err)
				}
			})
			
			socket.on('left', ({ auth }) => {
				// When the server recieves a signal, it broadcasts it to every client on this namespace but the sender
				try {
					jwt.verify(auth, config.authJwtSecret, async (err, tokenPayload) => {
						if (err) {
							throw new Error(err)
						}

						const room = Object.keys(socket.rooms)[1] // I get the list of rooms this socket is connected to from socket.rooms[<socketId>, <roomName>]
						socket.leave(room, () => {
							console.log(`User ${tokenPayload.id} left channel ${room}`)
							socket.broadcast.to(room).emit('left', tokenPayload.id) // Broadcast the info inside a room that a peer has left it
							socket.emit('you left room')
						})
					})
				} catch (err) {
					console.log(err)
				}
			})
		})
    }
}
