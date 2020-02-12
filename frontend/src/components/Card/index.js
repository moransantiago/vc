import React from 'react'

import { DivContainer, Header, Image, Buttons, Button } from './styles'

import { MdCall, MdMessage } from 'react-icons/md'

export const Card = ({
	isOnline = true,
	title,
	userImage = 'https://citas.in/media/authors/diego-maradona.detail.jpg',
	isUser = false
}) => (
	<DivContainer isOnline={isOnline}>
		<Header>
			<Image src={userImage} />
			{title}
		</Header>
		{isUser && (
			<Buttons>
				<Button disabled={!isOnline}>
					<MdCall size="15px" />
				</Button>
				<Button disabled={!isOnline}>
					<MdMessage size="15px" />
				</Button>
			</Buttons>
		)}
	</DivContainer>
)
