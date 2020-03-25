import React from 'react'

import { Card } from '../Card'

import { MdPersonAdd, MdMessage } from 'react-icons/md'
import { Title, Div, Button } from './styles'

export const UsersResults = ({ users, friends, onClick }) => {
	return (
		<div>
			<Title>Results</Title>
			<Div>
				{users && users.length > 0 ? (
					users.map(({ username, _id }, index) => {
						const Icon = friends.includes(_id) ? MdMessage : MdPersonAdd

						return (
							<Card key={index} title={username}>
								<Button onClick={() => { onClick({ userId: _id }) }} >
									<Icon color='#b7b7b7' size='15px' />
								</Button>
							</Card>
						)
					})
				) : (
					<h1>No users found</h1>
				)}
			</Div>
		</div>
	)
}
