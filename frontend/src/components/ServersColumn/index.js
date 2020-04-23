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
	const [servers, setServers] = useState(undefined)
	const [socket, obtainSocket] = useRTCSocket()
	const { serversSocket } = useContext(Context)

	useEffect(() => {
		if (serversSocket) {	
			serversSocket.on('message', async ({ server, chat }) => {
				await setServers(prevServers => {
					const nextState = [...prevServers]
					const [messagedServer] = nextState.filter(currentServer => currentServer._id === server)
					const [messagedChat] = messagedServer.chats.filter(currentChat => currentChat._id === chat)
					messagedChat.unreadMessages ? messagedChat.unreadMessages++ : messagedChat.unreadMessages = 1
					
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
		<GetUserServers onCompleted={({ getMe }) => setServers(getMe.servers)} >
			{({ loading, error, data }) => {
				if (error) return 'Internal server error'

				const handleConnection = async channelId => {
					if (connectedChannel !== channelId) {
						if (!socket) {
							const webSocket = await obtainSocket(data.getMe._id)
							webSocket.emit('left', { id: data.getMe._id })
							webSocket.emit('join', {
								id: data.getMe._id,
								room: channelId,
							})
						} else {
							socket.emit('left', { id: data.getMe._id })
							socket.emit('join', {
								id: data.getMe._id,
								room: channelId,
							})
						}
						setConnectedChannel(channelId)
					}
				}
				
				const handleDisconnection = () => {
					socket.emit('left', { id: data.getMe._id })
					setConnectedChannel(null)
				}				

				if (servers && serversSocket) {
					var server = serverId
						? servers.filter(server => server._id === serverId)[0]
						: servers[0]._id
	
					const chat =
						chatId && server
							? server.chats.filter((chat) => chat._id === chatId)[0]
							: servers[0].chats[0]._id
	
					if (!serverId || !chatId) {
						navigate(`/channels/${server}/${chat}`)
					} else if (chatId && !server) {
						navigate('/')
					}

					const serversToSuscribe = servers.map(server => {
						const chats = server.chats.map(({ _id }) => _id)
						const channels = server.channels.map(({ _id }) => _id)
			
						return { _id: server._id, chats, channels }
					})
				
					serversSocket.emit('setup', serversToSuscribe)
				}

				return loading || !server || !server.chats ? (
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
									height='156'
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
										y='45'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='80'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='115'
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
									height='156'
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
										y='45'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='80'
										rx='5'
										ry='5'
										width='100%'
										height='15'
									/>
									<rect
										x='0'
										y='115'
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
