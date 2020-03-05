import React, { useState, useEffect, useContext } from 'react'

import { DivColumn, DivContainer, Title, Link } from './styles'

import { Card } from '../Card/index'

import { Context } from '../../Context'

import { peerSetUp } from '../../utils/peer/main'

const useJoinChannel = username => {
	const [socket, setSocket] = useState('')

	useEffect(() => {
		peerSetUp(username).then(socket => setSocket(socket))
	}, [username])

	return [socket, setSocket]
}

export const LeftColumn = ({ server, channels }) => {
	const { username } = useContext(Context)
	const [socket, setSocket] = useJoinChannel(username)

	return channels ? (
		<DivColumn className='column is-2 has-background-light'>
			<Title>{server.name}</Title>
			<DivContainer>
				{channels.map((channel, index) => (
					<Link
						to={`/${server.id}/${channel._id}`}
						onClick={() => {
							socket.emit('left', { id: username })
							socket.emit('join', { id: username, room: channel._id })
						}}
						key={index}
					>
						<Card title={channel.name} />
					</Link>
				))}
			</DivContainer>
		</DivColumn>
	) : (
		<DivColumn className='column is-2 has-background-light'>
			<Title>Server</Title>
			<DivContainer>
				<p>Loading...</p>
			</DivContainer>
		</DivColumn>
	)
}
