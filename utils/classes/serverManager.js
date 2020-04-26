class serverManager {
	constructor() {
		this.servers = []
		this.chats = []
		this.channels = []
	}

	registerServers(servers, socket) {
		servers.forEach(({ _id, chats, channels }) => {
			socket.join(_id)
			this.addServer(_id, chats, channels)
		})
		const usersInChannels = this.getUsersInChannels(servers)

		return usersInChannels
	}

	addServer(_id, chats, channels) {
		const serverIdList = this.getServerIds(this.servers)
		if (!serverIdList.includes(_id)) {
			const chatsArray = chats.map(chats => ({ _id: chats }))
			const channelsArrayWithUsers = channels.map(channel => ({
				_id: channel,
				users: [],
			}))
			this.servers.push({
				_id,
				chats: chatsArray,
				channels: channelsArrayWithUsers
			})
		}
	}

	getServerBasedOnChat(chatId) { 
		const [server] = this.servers.map(({ _id, chats }) => {
			const chatIds = chats.map(({ _id }) => _id)
			if (chatIds.includes(chatId)) {
				return _id
			}
		})

		return server
	}

	getServerBasedOnChannel(channelId) { 
		const [server] = this.servers.map(({ _id, channels }) => {
			const channelIds = channels.map(({ _id }) => _id)
			if (channelIds.includes(channelId)) {
				return _id
			}
		})

		return server
	}

	userJoinChannel(userId, channelId) {
		for (let i = 0 ; i < this.servers.length ; i++) {
			for (let j = 0 ; j < this.servers[i].channels.length ; j++) {
				if (this.servers[i].channels[j]._id == channelId && !this.servers[i].channels[j].users.includes(userId)) {
					this.servers[i].channels[j].users.push(userId)
				}
			}
		}
		const server = this.getServerBasedOnChannel(channelId)
		const usersInChannels = this.getUsersInChannels([{ _id: server }])

		return { server, usersInChannels }
	}

	userLeaveChannel(userId, channelId) {
		const server = this.getServerBasedOnChannel(channelId)

		for (let i = 0 ; i < this.servers.length ; i++) {
			for (let j = 0 ; j < this.servers[i].channels.length ; j++) {
				for (let k = 0 ; k < this.servers[i].channels[j].users.length ; k++) {
					if (this.servers[i].channels[j].users[k] == userId && this.servers[i].channels[j]._id == channelId) {
						this.servers[i].channels[j].users.splice(k, 1)
					}
				}
			}
		}
		const usersInChannels = this.getUsersInChannels([{ _id: server }])

		return { server, usersInChannels }
	}
	
	getServers() {
		return this.servers
	}

	getServerIds(servers) {
		return servers.map(({ _id }) => _id)
	}

	getUsersInChannels(servers) {
		const userServerIds = this.getServerIds(servers)
		const eachServerWithUsers = this.servers.filter(server => userServerIds.includes(server._id)) // If current iteration server id is in the users server list, returns
		const serversWithUsers = [ ...eachServerWithUsers ]
		serversWithUsers.forEach(server => delete server.chats)

		return serversWithUsers
	}
}

module.exports = new serverManager()
