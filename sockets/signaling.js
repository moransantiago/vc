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
				socket.broadcast.emit('signal', offerOrAnswer)
			})
		})
	}
}
