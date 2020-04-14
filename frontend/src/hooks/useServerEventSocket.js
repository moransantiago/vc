import { useState, useEffect } from 'react'
import ws from 'socket.io-client'

export const useServerEventSocket = () => {
	const [userData, setUserData] = useState(undefined)
	const [socket, setSocket] = useState(undefined)

	useEffect(() => {
		if (userData && userData.servers && !socket) {
			const wsClient = ws(`${process.env.REACT_APP_API}/ws/servers`)
			const servers = userData.servers.map((server) => {
				const chats = server.chats.map(({ _id }) => _id)
				const channels = server.channels.map(({ _id }) => _id)
	
				return { _id: server._id, chats, channels }
			})
	
			wsClient.on('connect', () => {
				wsClient.emit('setup', servers)
				// setTimeout(() => {
				// wsClient.emit('join_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
				// }, 1000)
				// setTimeout(() => {
				// wsClient.emit('leave_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
				// }, 4000)
	
				wsClient.on('message', ({ server, chat, data }) => {
					const [messagedServer] = userData.servers.filter(currentServer => currentServer._id === server)
					const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
					messagedChat.messages.push(data)
					setUserData({ ...userData })
				})
			})
			setSocket(wsClient)
		} else {
			return () => {
				if (socket) {
					socket.disconnect()
					setSocket(undefined)
				}
			}
		}
	}, [userData, socket])

	const sendMessage = (chatId, spoiler, body) => {
		const [messagedServer] = userData.servers.filter(currentServer => {
			return currentServer.chats.filter(({ _id }) => chatId === _id).length > 0
		})
		const [messagedChat] = messagedServer.chats.filter(chat => chat._id === chatId)
		messagedChat.messages.push({
			headers: {
				author: {
					_id: userData._id,
					username: userData.username
				}, 
				spoiler
			},
			body
		})
		socket.emit('message', {
			chat: chatId,
			data: {
				headers: {
					author: {
						_id: userData._id,
						username: userData.username,
					},
					spoiler,
				},
				body,
			},
		})
		setUserData({ ...userData })
	}

	return { userData, setUserData, sendMessage }
}
