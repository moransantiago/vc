module.exports = {
	bindSignalingEvents: io => {//<--Recieves a namespace
		io.on('connect', () => console.log('A user has just connected'))

		io.on('signal', offerOrAnswer => {//<--When the server recieves a signal, it broadcasts it to every client on this namespace
			io.emit('signal', offerOrAnswer)
		})
	}
}
