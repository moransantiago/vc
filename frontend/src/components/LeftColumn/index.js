import React, { useState, useEffect } from 'react'

import { DivColumn, Title, Subtitle, Link } from './styles'

import { Card } from '../Card/index'

import { peerSetUp } from '../../utils/peer/main'

const useJoinChannel = username => {
	const [socket, setSocket] = useState()

	useEffect(() => {
		peerSetUp(username).then(socket => setSocket(socket))
	}, [username])

	return [socket, setSocket]
}

export const LeftColumn = ({ server, channels, username }) => {
	const [socket] = useJoinChannel(username)

	return channels ? (
		<DivColumn className='column is-2'>
			<Title>{server.name}</Title>
			<div>
				<Subtitle>Chats</Subtitle>
				<div>
					<Card img={false} title='chat-1' />
					<Card img={false} title='chat-2' />
					<Card img={false} title='memes' />
				</div>
			</div>
			<div>
				<Subtitle>Channels (voice)</Subtitle>
				{channels.map((channel, index) => (
					<Link
						to={`/${server.id}/${channel._id}`}
						onClick={() => {
							socket.emit('left', { id: username })
							socket.emit('join', { id: username, room: channel._id })
						}}
						key={index}
					>
						<Card img={false} title={channel.name} />
					</Link>
				))}
			</div>
		</DivColumn>
	) : (
		<DivColumn className='column is-2'>
			<Title>Server</Title>
			<div>
				<p>Loading...</p>
			</div>
		</DivColumn>
	)
}
