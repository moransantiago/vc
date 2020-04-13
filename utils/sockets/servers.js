const serverManager = require('../classes/serverManager')

module.exports = {
	bindServerEvents: io => {
		io.on('connect', socket => {			
			socket.on('setup', servers => {
				serverManager.registerServers(servers, socket)
				// socket.emit('connected_users', serverList)
			})

			socket.on('join_channel', ({ userId, channel }) => {
				serverManager.userJoinChannel(userId, channel)
				socket.broadcast.to(room).emit('users_in_room', {}) // Broadcast the info inside a room that a peer has left it
            })
            
			socket.on('leave_channel', ({ userId, channel }) => {
				serverManager.userLeaveChannel(userId, channel)
				socket.broadcast.to(room).emit('users_in_room', {}) // Broadcast the info inside a room that a peer has left it
			})

			socket.on('message', ({ chat, data }) => {
				const server = serverManager.getServerBasedOnChat(chat)
				socket.broadcast.to(server).emit('message', { server, chat, data }) // Broadcast the info inside a room that a peer has left it
			})
		})
	}
}
