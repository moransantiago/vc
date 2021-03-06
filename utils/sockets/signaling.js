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

			socket.on('join', ({ id, room }) => { // When the server recieves a join, it checks if there are empty and then joins the socket room
				socket.join(room, () => {
					console.log(`User ${id} joined channel ${room}`)
					socket.broadcast.to(room).emit('joiner', id) // Broadcast to everyone in the room that a new user has joined
				})
			})
			
			socket.on('left', ({ id }) => {
				// When the server recieves a signal, it broadcasts it to every client on this namespace but the sender
				const room = Object.keys(socket.rooms)[1] // I get the list of rooms this socket is connected to from socket.rooms[<socketId>, <roomName>]
				socket.leave(room, () => {
					console.log(`User ${id} left channel ${room}`)
					socket.broadcast.to(room).emit('left', id) // Broadcast the info inside a room that a peer has left it
					socket.emit('you left room')
				})
			})
		})
    }
}
