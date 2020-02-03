import React from 'react'

import { DivContainer } from './styles'
import { Image } from './styles'

export const UserCard = ({ opacity = '1', children, userImage = 'https://citas.in/media/authors/diego-maradona.detail.jpg' }) => (
	<DivContainer style={{'opacity': opacity}}>
		<Image src={userImage} />
		{children}
	</DivContainer>
)
