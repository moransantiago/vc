import React from 'react'

import {
	DivContainer,
	DivColumn,
	SpanServerTitle,
	Div,
	Title,
	Subtitle,
	Button,
	Link,
} from './styles'

import ContentLoader, { rect } from 'react-content-loader'
import { navigate } from '@reach/router'

import { Card } from '../Card/index'

import { GetUserServers } from '../../containers/GetUserServers'

import { useRTCSocket } from '../../hooks/useRTCSocket'

export const LeftColumn = ({ serverId, chatId }) => {
	const [socket, obtainSocket] = useRTCSocket()

	return (
		<GetUserServers>
			{({ loading, error, data }) => {
				if (error) return 'Internal server error'

				const handleConnection = async channelId => {
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
				}

				if (data) {
					var server = serverId
						? data.getMe.servers.filter(server => server._id === serverId)[0]
						: data.getMe.servers[0]._id
	
					const chat =
						chatId && server
							? server.chats.filter((chat) => chat._id === chatId)[0]
							: data.getMe.servers[0].chats[0]._id
	
					if (!serverId || !chatId) {
						navigate(`/channels/${server}/${chat}`)
					} else if (chatId && !server) {
						navigate('/')
					}
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
								<Subtitle>Chats (text)</Subtitle>
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
								<Subtitle>Channels (voice)</Subtitle>
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
								<Subtitle>Chats (text)</Subtitle>
								{server.chats.map((chat, index) => (
									<Link
										to={`/channels/${server._id}/${chat._id}`}
										key={index}
									>
										<Card img={false} title={chat.name} />
									</Link>
								))}
							</Div>
							<div>
								<Subtitle>Channels (voice)</Subtitle>
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
										/>
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
