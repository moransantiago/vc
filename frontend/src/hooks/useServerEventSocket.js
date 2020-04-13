import { useState } from 'react'
import ws from 'socket.io-client'

export const useServerEventSocket = () => {
	const [userData, setUserData] = useState(undefined)

	if (userData && userData.servers) {
		const wsClient = ws.connect(`${process.env.REACT_APP_API}/ws/servers`)
		const servers = userData.servers.map(({ _id, channels }) => {
			const chatIds = chats.map(({ _id }) => _id)
			const channelIds = channels.map(({ _id }) => _id)

			return { _id, chats: chatIds, channels: channelIds }
		})
		
		wsClient.on('connect', () => {
			wsClient.emit('setup', servers)
			setTimeout(() => {
				wsClient.emit('message', { room: userData.servers[0]._id, data: 'watafa' })
				// wsClient.emit('join_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
			}, 1000)
			// setTimeout(() => {
				// wsClient.emit('leave_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
			// }, 4000)
			
			wsClient.on('message', ({ room, data }) => {
				// const serverIds = userData.servers.map(({ _id }) => _id)
				const { servers } = userData
				const { chats } = servers.map(({ _id }) => _id).includes(room)
				const chat = chats.map(({ _id }) => _id).includes(room)
				// setUserData({ data })
			})
		})
	}

	return { userData, setUserData }
}
