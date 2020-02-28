import React from 'react'

import { DivColumn, DivContainer, Title, Link } from './styles'

import { Card } from '../Card/index'

export const LeftColumn = ({ server, channels }) => {
	return channels ? (
		<DivColumn className='column is-2 has-background-light'>
			<Title>{server.name}</Title>
			<DivContainer>
				{channels.map((channel, index) => (
					<Link to={`/${server.id}/${channel._id}`} key={index}>
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
