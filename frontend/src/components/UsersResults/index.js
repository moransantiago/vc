import React from 'react'

import { Card } from '../Card'
import { ToggleFriendButton } from '../ToggleFriendButton'

import { Title, Div } from './styles'

export const UsersResults = ({ users, friends }) => (
	<div>
		<Title>Results</Title>
		<Div>
			{users && users.length > 0 ? (
				users.map(({ username, _id }, index) => (
					<Card key={index} title={username}>
						<ToggleFriendButton isFriend={friends.includes(_id)} id={_id}/>
					</Card>
				))
			) : (
				<h1>No users found</h1>
			)}
		</Div>
	</div>
)
