import React, { useState, useContext, useEffect } from 'react'

import {
	DivContainer,
	DivColumn,
	SpanServerTitle,
	Div,
	Title,
	Subtitle,
	Button,
	Link,
	MessageAlert,
	SubtitleContainer,
	DisconnectButton,
	DivUsersConnected
} from './styles'

import ContentLoader, { rect } from 'react-content-loader'
import { navigate } from '@reach/router'

import { Card } from '../Card/index'

import { GetUserServers } from '../../containers/GetUserServers'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useRTCSocket } from '../../hooks/useRTCSocket'

import { Context } from '../../Context'

import { IoMdChatbubbles, IoMdVideocam } from 'react-icons/io'
import { MdCallEnd } from 'react-icons/md'

export const ServersColumn = ({ serverId, chatId }) => {
	const [connectedChannel, setConnectedChannel] = useLocalStorage('connected-channel', null)
	const [setupDone, setSetupDone] = useState(false)
	const [userId, setUserId] = useState(undefined)
	const [servers, setServers] = useState(undefined)
	const { join, leave } = useRTCSocket()
	const { serversSocket } = useContext(Context)

	useEffect(() => {
		if (serversSocket) {	
			serversSocket.on('message', ({ server, chat }) => {
				setServers(prevServers => {
					const nextState = [...prevServers]
					const [messagedServer] = nextState.filter(currentServer => currentServer._id === server)
					const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
					messagedChat.unreadMessages ? messagedChat.unreadMessages++ : messagedChat.unreadMessages = 1
					
					return nextState
				})
			})

			serversSocket.on('connected_users', serverList => {
				setServers(prevState => {
					const nextState = [ ...prevState ]
					nextState.forEach(server => {
						const [getServer] = serverList.filter(({ _id }) => _id === server._id)
						if (getServer) {
							server.channels.forEach(channel => {
								const [getChannel] = getServer.channels.filter(({ _id }) => _id === channel._id)
								const users = getChannel.users.map(id => {
									const [userInServer] = server.users.filter(user => user._id === id)

									return userInServer
								})
								channel.connectedUsers = [...users]
							})
						}
					})

					return nextState
				})
			})
		}

		return () => {
			if (serversSocket) {
				serversSocket.off('message')
				serversSocket.off('connected_users')
				serversSocket.disconnect()
			}
		}
	}, [serversSocket])
	
	useEffect(() => {
		if (servers && serversSocket && !setupDone) {
			const serversToSuscribe = servers.map(server => {
				const chats = server.chats.map(({ _id }) => _id)
				const channels = server.channels.map(({ _id }) => _id)

				return { _id: server._id, chats, channels }
			})
			
			serversSocket.emit('setup', serversToSuscribe)
			setSetupDone(true)
		}
	}, [servers, serversSocket, setupDone])

	// The following effect connects the user to a channel whenever:
	//  1. The connectedChannel(useLocalStorage) mutates: When we change it in handleConnection
	//	 or
	//	2. The page gets refreshed and there is a connectedChannel(useLocalStorage) stored
	useEffect(() => {
		if (connectedChannel && userId) {
			join(userId, connectedChannel)
		}
	}, [connectedChannel, userId, join])

	return (
		<GetUserServers
			onCompleted={async ({ getMe }) => {
				await setServers(getMe.servers)
				await setUserId(getMe._id)
			}}
		>
			{({ loading, error, data }) => {
				if (error) return 'Internal server error'

				const handleConnection = async channelId => {
					if (connectedChannel !== channelId) {
						await handleDisconnection()
						serversSocket.emit('join_channel', { userId: data.getMe._id, channel: channelId })
						setConnectedChannel(channelId)
					}
				}

				const handleDisconnection = async () => {
					if (connectedChannel) {
						await leave(data.getMe._id)
						serversSocket.emit('leave_channel', { userId: data.getMe._id, channel: connectedChannel })
						setConnectedChannel(null)
					}
				}

				if (servers) {
					var [server] = servers.filter(server => server._id === serverId)
					
					if (!serverId || !chatId) {
						navigate(`/channels/${servers[0]._id}/${servers[0].chats[0]._id}`)
					} else if (chatId && !server) {
						navigate('/')
					}
				}


				return loading || !server ? (
					<DivContainer className='column is-2'>
						<SpanServerTitle>
							<ContentLoader
								speed='1'
								width='100%'
								height='100%'
								viewBox='0 0 100% 100'
								backgroundColor='#757575'
								foregroundColor='#545454'
							>
								<rect
									x='0'
									y='5'
									rx='5'
									ry='5'
									width='100%'
									height='30'
								/>
							</ContentLoader>
						</SpanServerTitle>
						<DivColumn>
							<Div>
								<SubtitleContainer>
									<Subtitle>Chats</Subtitle>
									<IoMdChatbubbles size='20' color='#b7b7b7' />
								</SubtitleContainer>
								<ContentLoader
									speed={1}
									width='100%'
									height='132'
									viewBox='0 0 100% 100'
									backgroundColor='#757575'
									foregroundColor='#545454'
								>
									<rect
										x='0'
										y='10'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='40'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='70'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='100'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
								</ContentLoader>
							</Div>
							<div>
								<SubtitleContainer>
									<Subtitle>Channels</Subtitle>
									<IoMdVideocam size='20' color='#b7b7b7' />
								</SubtitleContainer>
								<ContentLoader
									speed='1'
									width='100%'
									height='132'
									viewBox='0 0 100% 100'
									backgroundColor='#757575'
									foregroundColor='#545454'
								>
									<rect
										x='0'
										y='10'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='40'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='70'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='100'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
								</ContentLoader>
							</div>
						</DivColumn>
					</DivContainer>
				) : (
					<DivContainer className='column is-2'>
						<SpanServerTitle>
							<Title>{data.getMe.servers[0].name}</Title>
						</SpanServerTitle>
						<DivColumn>
							<Div>
								<SubtitleContainer>
									<Subtitle>
										Chats
									</Subtitle>
									<IoMdChatbubbles size='20' color='#b7b7b7' />
								</SubtitleContainer>
								{server.chats.map((chat, index) => (
									<Link
										to={`/channels/${server._id}/${chat._id}`}
										key={index}
										onClick={() => {
											setServers(prevServers => {
												const nextState = [...prevServers]
												const [messagedServer] = servers.filter(currentServer => {
													return currentServer.chats.filter(({ _id }) => chat._id === _id).length > 0
												})
												const [messagedChat] = messagedServer.chats.filter(({ _id }) => chat._id === _id )
												messagedChat.unreadMessages = null
												
												return nextState
											})
										}}
									>
										<Card img={false} title={chat.name} >
											{chat.unreadMessages &&
											<MessageAlert>
												{chat.unreadMessages}
											</MessageAlert>}
										</Card>
									</Link>
								))}
							</Div>
							<div>
								<SubtitleContainer>
									<Subtitle>Channels</Subtitle>
									<IoMdVideocam size='20' color='#b7b7b7' />
								</SubtitleContainer>
								{server.channels.map((channel, index) => (
									<div key={index}>
										<Button
											onClick={() => handleConnection(channel._id)}
										>
											<Card
												img={false}
												title={channel.name}
											>
												{connectedChannel === channel._id &&
													<DisconnectButton onClick={handleDisconnection}>
														<MdCallEnd size='16' color='inherit' />
													</DisconnectButton>}
											</Card>
										</Button>
										{channel.connectedUsers && channel.connectedUsers.length > 0 &&
											<DivUsersConnected>
												{channel.connectedUsers.map((user, index) => (
													<Link key={index} to={`/users/${user.username}`}>
														<Card imgSize='22px' hoverColor='#6a6a6a' title={user.username}/>
													</Link>
												))}
											</DivUsersConnected>
										}
									</div>
								))}
							</div>
						</DivColumn>
					</DivContainer>
				)
			}}
		</GetUserServers>
	)
}
