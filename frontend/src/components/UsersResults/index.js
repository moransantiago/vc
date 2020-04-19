import React from 'react'

import { Card } from '../Card'

import { MdPersonAdd } from 'react-icons/md'
import { Title, Div, Button } from './styles'

export const UsersResults = ({ users, friends, onClick }) => {
	return (
		<div>
			<Title>Results</Title>
			<Div>
				{users && users.length > 0 ? (
					users.map(({ username, _id }, index) => (
						<Card key={index} title={username}>
							{!friends.includes(_id) && (
								<Button onClick={() => { onClick({ userId: _id }) }}
								>
									<MdPersonAdd color='#b7b7b7' size='15px' />
								</Button>
							)}
						</Card>
					))
				) : (
					<h1>No users found</h1>
				)}
			</Div>
		</div>
	)
}
