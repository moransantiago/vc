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
	DisconnectButton
} from './styles'

import ContentLoader, { rect } from 'react-content-loader'
import { navigate } from '@reach/router'

import { Card } from '../Card/index'

import { GetUserServers } from '../../containers/GetUserServers'

import { useRTCSocket } from '../../hooks/useRTCSocket'

import { Context } from '../../Context'

import { IoMdChatbubbles, IoMdVideocam } from 'react-icons/io'
import { MdCallEnd } from 'react-icons/md'

export const ServersColumn = ({ serverId, chatId }) => {
	const [connectedChannel, setConnectedChannel] = useState(null)
	const [setupDone, setSetupDone] = useState(false)
	const [servers, setServers] = useState(undefined)
	const [RTCsocket, obtainSocket] = useRTCSocket()
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
				console.log(serverList)
				// setServers(prevServers => {
				// 	const nextState = [...prevServers]
				// 	const [messagedServer] = nextState.filter(currentServer => currentServer._id === server)
				// 	const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
				// 	messagedChat.unreadMessages ? messagedChat.unreadMessages++ : messagedChat.unreadMessages = 1
					
				// 	return nextState
				// })
			})
		}

		return () => {
			if (serversSocket) {
				serversSocket.off('message')
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

	return (
		<GetUserServers onCompleted={async ({ getMe }) => await setServers(getMe.servers)}>
			{({ loading, error, data }) => {
				if (error) return 'Internal server error'

				const handleConnection = async channelId => {
					if (connectedChannel !== channelId) {
						if (!RTCsocket) {
							const webSocket = await obtainSocket(data.getMe._id)
							webSocket.emit('left', { id: data.getMe._id })
							webSocket.emit('join', {
								id: data.getMe._id,
								room: channelId,
							})
						} else {
							RTCsocket.emit('left', { id: data.getMe._id })
							RTCsocket.emit('join', {
								id: data.getMe._id,
								room: channelId,
							})
						}
						setConnectedChannel(channelId)
					}
				}

				const handleDisconnection = () => {
					RTCsocket.emit('left', { id: data.getMe._id })
					setConnectedChannel(null)
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
								speed={1}
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
									<Button
										key={index}
										onClick={() =>
											handleConnection(channel._id)
										}
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
								))}
							</div>
						</DivColumn>
					</DivContainer>
				)
			}}
		</GetUserServers>
	)
}
