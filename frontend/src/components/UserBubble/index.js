import React from 'react'

import { Link, Img } from './styles'

export const UserBubble = ({
	height = '36px',
	width = '36px',
	username,
	img = 'https://citas.in/media/authors/diego-maradona.detail.jpg',
}) => (
	<Link to={`/users/${username}`}>
		<Img src={img} height={height} width={width} />
	</Link>
)
