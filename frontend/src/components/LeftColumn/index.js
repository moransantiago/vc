import React from 'react'

import { DivColumn, DivContainer, Title, Link } from './styles'

import { Card } from '../Card/index'

export const LeftColumn = ({ serverId, channels }) => {
	console.log(serverId)
	return channels ? (
		<DivColumn className="column is-2 has-background-light">
			<Title>Server</Title>
			<DivContainer>
				{channels.map((channel, index) => (
					<Link to={`/${serverId}/${channel._id}`} key={index}>
						<Card title={channel.name} />
					</Link>
				))}
			</DivContainer>
		</DivColumn>
	) : (
		<p>Loading...</p>
	)
}
