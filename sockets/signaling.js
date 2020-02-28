module.exports = {
	bindSignalingEvents: io => {
		// => Recieves a namespace
		io.on('connect', socket => {
			io.clients((error, clients) => {
				if (error) throw error
				console.log(clients) // => [PZDoMHjiu8PYfRiKAAAF, Anw2LatarvGVVXEIAAAD]
			})

			socket.on('signal', offerOrAnswer => {
				// => When the server recieves a signal, it broadcasts it to every client on this namespace but the sender
				const room = Object.keys(socket.rooms)[1] // => I get the list of rooms this socket is connected to from socket.rooms[<socketId>, <roomName>]
				socket.broadcast.to(room).emit('signal', offerOrAnswer)
			})

			socket.on('join', ({ id, room }) => {
				// => When the server recieves a join, it checks if there are empty and then joins the socket room
				socket.join(room, () => {
					const amountOfSocketsInRoom = Object.keys(
						io.adapter.rooms[room].sockets
					).length // => This is the amount of sockets joined to this room
					if (amountOfSocketsInRoom < 2) socket.emit('initiator') // => If this is the only socket in this room, we notify the client this so he wont perform signaling
					socket.broadcast.to(room).emit('joiner', id) // => Broadcast to everyone in the room that a new user has joined
				})
			})
		})
	}
}
