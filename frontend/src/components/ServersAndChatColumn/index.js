import React, { useState, useContext, useEffect } from 'react'

import { Context } from '../../Context'

import { Chat } from '../Chat'
import { ServersBar } from '../ServersBar'
import { VideosColumn } from '../VideosColumn'

import { GetUserMessages } from '../../containers/GetUserMessages'

import { DivContainer, DivColumns } from './styles'

import 'bulma/css/bulma.css'

export const ServersAndChatColumn = ({ serverId, chatId, onClick }) => {
	const [servers, setServers] = useState(undefined)
	const [collapsed, setColapsed] = useState(true)
	const { serversSocket } = useContext(Context)

	// useEffect(() => {
	// 	if (RTCsocket) {	
	// 		RTCsocket.on('joiner', username => {
	// 			setServers(prevState => {
	// 				const nextState = [...prevState]
	// 				const [channel] = nextState.channels.filter(({ _id }) => _id === connectedChannel)
	// 				channel.connectedUsers.push(username)

	// 				return nextState
	// 			})
	// 		})
	// 	}

	// 	return () => {
	// 		if (RTCsocket) {
	// 			RTCsocket.off('left')
	// 			RTCsocket.off('joiner')
	// 		}
	// 	}
	// }, [RTCsocket, connectedChannel])

	useEffect(() => {
		if (serversSocket) {
			serversSocket.on('message', async ({ server, chat, message }) => {
				await setServers(prevServers => {
					const nextState = [...prevServers]
					const [messagedServer] = nextState.filter(currentServer => currentServer._id === server)
					const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
					nextState[nextState.indexOf(messagedServer)]
						.chats[messagedServer.chats.indexOf(messagedChat)]
						.messages.push(message)
					
					return nextState
				})
			})
		}

		return () => {
			if (serversSocket) {
				serversSocket.off('message')
			}
		}
	}, [serversSocket])

	return (
		<GetUserMessages onCompleted={({ getMe }) => setServers(getMe.servers)}>
			{
				({ error, data }) => {
					if (error) return 'Internal server error'

					if (servers) {
						var server = serverId
							? servers.filter(server => server._id === serverId)[0]
							: servers[0]._id
						var chat = chatId && server
							? server.chats.filter(chat => chat._id === chatId)[0]
							: servers[0].chats[0]._id
					}

					const sendMessage = async (chatId, spoiler, body) => {
						const now = new Date()
						const hours = ('0' + now.getHours()).slice(-2)
						const minutes = ('0' + now.getMinutes()).slice(-2)
						serversSocket.emit('message', {
							chat: chatId,
							message: {
								headers: {
									author: {
										_id: data.getMe._id,
										username: data.getMe.username,
									},
									spoiler,
									isMine: false,
									time: `${hours}:${minutes}`
								},
								body,
							},
						})
						await setServers(prevServers => {
							const [messagedServer] = servers.filter(currentServer => {
								return currentServer.chats.filter(({ _id }) => chatId === _id).length > 0
							})
							const [messagedChat] = messagedServer.chats.filter(chat => chat._id === chatId)
							prevServers[prevServers.indexOf(messagedServer)]
								.chats[messagedServer.chats.indexOf(messagedChat)]
								.messages.push({
									headers: {
										author: {
											_id: data.getMe._id,
											username: data.getMe.username,
										},
										spoiler,
										isMine: true,
										time: `${hours}:${minutes}`
									},
									body,
								})
				
							return prevServers
						})
					}

					return (
						<DivContainer className='column is-8'>
							<ServersBar servers={servers} currentServer={serverId} />
							<DivColumns className='columns'>
								<Chat sendMessage={sendMessage} chat={chat} collapsed={collapsed} setColapsed={setColapsed} />
								<VideosColumn onClick={onClick} collapsed={collapsed} users={server && server.users}/>
							</DivColumns>
						</DivContainer>
					)
				}	
			}
		</GetUserMessages>
	)
}
