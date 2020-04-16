import { useState, useEffect } from 'react'
import ws from 'socket.io-client'

/*
	IMPORTANT INFO ABOUT THIS HOOK:

		!The fact of creating 3 useEffect's prevents mi code 
		to open lots of sockets because of re-render events!

		1st useEffect:
			Creates and connects the socket and stores it inside socket state
		2nd useEffect:
			Checks if {
				* The userData has already been fetched from the API,
				AND
				* the socket has already been fetched created and connected (1st useEffect)
				AND
				* the socket events has already been declared
			}
			and then sets the events that the socket is going to listen to
		3rd useEffect:
			Uses the cleanup function to disconnect the socket
*/

export const useServerEventSocket = () => {
	const [userData, setUserData] = useState(undefined)
	const [socket, setSocket] = useState(undefined)
	const [socketEvents, setSocketEvents] = useState(false)

	useEffect(() => {
		const client = ws(`${process.env.REACT_APP_API}/ws/servers`)
		client.on('connect', async () => await setSocket(client))
	}, [])

	useEffect(() => {
		// setTimeout(() => {
		// wsClient.emit('join_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
		// }, 1000)
		// setTimeout(() => {
		// wsClient.emit('leave_channel', { userId: userData.friends[0]._id, channel: userData.servers[0].channels[0]._id })
		// }, 4000)
		if (userData && socket && !socketEvents) {
			const servers = userData.servers.map(server => {
				const chats = server.chats.map(({ _id }) => _id)
				const channels = server.channels.map(({ _id }) => _id)
	
				return { _id: server._id, chats, channels }
			})
	
			socket.emit('setup', servers)
			
			socket.on('message', ({ server, chat, data }) => {
				const [messagedServer] = userData.servers.filter(currentServer => currentServer._id === server)
				const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
				messagedChat.messages.push(data)
				setUserData({ ...userData })
				console.log('data')
			})
			setSocketEvents(true)
		}
	}, [userData, socket, socketEvents])

	useEffect(() => {
		return async () => {
			if (socket) {
				socket.disconnect()
				await setSocket(undefined)
			}
		}
	}, [socket])

	const sendMessage = (chatId, spoiler, body) => {
		const [messagedServer] = userData.servers.filter(currentServer => {
			return currentServer.chats.filter(({ _id }) => chatId === _id).length > 0
		})
		const [messagedChat] = messagedServer.chats.filter(chat => chat._id === chatId)
		const now = new Date()
		const hours = ('0' + now.getHours()).slice(-2)
		const minutes = ('0' + now.getMinutes()).slice(-2)
		messagedChat.messages.push({
			headers: {
				author: {
					_id: userData._id,
					username: userData.username
				}, 
				spoiler,
				isMine: true,
				time: `${hours}:${minutes}`
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
					isMine: false,
					time: `${hours}:${minutes}`
				},
				body,
			},
		})
		setUserData({ ...userData })
	}

	return { userData, setUserData, setSocket, sendMessage }
}
