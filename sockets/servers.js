module.exports = {
	bindServerEvents: io => {
		const serverList = [] // [{ _id, channels: [{ _id, users: [{ _id }] }] }]

		io.on('connect', socket => {
			socket.on('setup', servers => {
                const serverIdList = serverList.map(({ _id }) => _id)
				servers.forEach(({ _id, channels }) => {
                    socket.join(_id)
                    if (!serverIdList.includes(_id)) {
                        const channelsArrayWithUsers = channels.map(channel => ({ _id: channel, users: [] }))
                        serverList.push({ _id, channels: channelsArrayWithUsers })
                    }
                })
                
				// socket.emit('connected_users', serverList)
			})

			socket.on('join_channel', ({ userId, channel }) => {
                for (let i = 0 ; i < serverList.length ; i++) {
                    for (let j = 0 ; j < serverList[i].channels.length ; j++) {
                        if (serverList[i].channels[j]._id == channel && !serverList[i].channels[j].users.includes(userId)) {
                            serverList[i].channels[j].users.push(userId)
                        }
                    }
                }

				// socket.broadcast.to(room).emit('test', 'test') // Broadcast the info inside a room that a peer has left it
            })
            
			socket.on('leave_channel', ({ userId, channel }) => {
                for (let i = 0 ; i < serverList.length ; i++) {
                    for (let j = 0 ; j < serverList[i].channels.length ; j++) {
                        for (let k = 0 ; k < serverList[i].channels[j].users.length ; k++) {
                            if (serverList[i].channels[j].users[k] == userId && serverList[i].channels[j]._id == channel) {
                                serverList[i].channels[j].users.splice(k, 1)
                            }
                        }
                    }
                }
				// socket.broadcast.to(room).emit('test', 'test') // Broadcast the info inside a room that a peer has left it
			})

			socket.on('message', ({ room, chat, data }) => {
				/*	Message (data) structure:
                    {
                        headers: {
                            author: ID!,
                            spoiler: bool!
                        },
                        body: String!
                    }
                */
				socket.broadcast.to(room).emit('message', { room, data }) // Broadcast the info inside a room that a peer has left it
			})
		})
	},
}
