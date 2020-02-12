import React from 'react'

import { DivColumn, DivContainer, Title, Link } from './styles'

import { Card } from '../Card/index'

export const LeftColumn = ({ channels }) => {
	return channels ? (
		<DivColumn className="column is-2 has-background-light">
			<Title>Server</Title>
			<DivContainer>
				{channels.map((channel, index) => (
					<Link to={`?room=${channel._id}`} key={index}>
						<Card title={channel.name} />
					</Link>
				))}
			</DivContainer>
		</DivColumn>
	) : (
		<p>Loading...</p>
	)
}
