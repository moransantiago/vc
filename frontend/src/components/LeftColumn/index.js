import React, { useEffect, useContext } from 'react'

import { DivColumn, DivContainer, Title, Link } from './styles'

import { Card } from '../Card/index'

import { Context } from '../../Context'

// import { sale } from '../../utils/peer/main'

export const LeftColumn = ({ server, channels }) => {
	const { username } = useContext(Context)

	// useEffect(() => { sale(username) }, [])

	return channels ? (
		<DivColumn className='column is-2 has-background-light'>
			<Title>{server.name}</Title>
			<DivContainer>
				{channels.map((channel, index) => (
					<Link
						to={`/${server.id}/${channel._id}`}
						// onClick={() => {
						// 	sale(channel._id, username)
						// }}
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
