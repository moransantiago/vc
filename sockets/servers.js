module.exports = {
	bindServerEvents: io => {
		io.on('connect', socket => {
			socket.on('message', (room, data) => {
                console.log(room)
                console.log(data)
                /*	Message (data) structure:
                    {
                        headers: {
                            author: ID!,
                            spam: bool!
                        },
                        body: String!
                    }
                */
            })
		})
	}
}
