import React from 'react'

import { DivContainer, DivColumn, SpanServerTitle, Div, Title, Subtitle, Button, Link } from './styles'

import { Card } from '../Card/index'

import { useRTCSocket } from '../../hooks/useRTCSocket'

export const LeftColumn = ({ server, username }) => {
	const [socket] = useRTCSocket(username)

	return server.chats ? (
		<DivContainer className='column is-2'>
			<SpanServerTitle>
				<Title>{server.name}</Title>
			</SpanServerTitle>
			<DivColumn>
				<Div>
					<Subtitle>Chats (text)</Subtitle>
					{server.chats.map((chat, index) => (
						<Link to={`/${server._id}/${chat._id}`} key={index}>
							<Card img={false} title={chat.name} />
						</Link>
					))}
				</Div>
				<div>
					<Subtitle>Channels (voice)</Subtitle>
					{server.channels.map((channel, index) => (
						<Button
							key={index}
							onClick={() => {
								socket.emit('left', { id: username })
								socket.emit('join', {
									id: username,
									room: channel._id,
								})
							}}
						>
							<Card img={false} title={channel.name} />
						</Button>
					))}
				</div>
			</DivColumn>
		</DivContainer>
	) : (
		<DivColumn className='column is-2'>
			<Title>Server</Title>
			<div>
				<p>Loading...</p>
			</div>
		</DivColumn>
	)
}
