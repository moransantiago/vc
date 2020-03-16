import React from 'react'

import { Card } from '../Card'

import { MdPersonAdd } from 'react-icons/md'

import { Title, Button, Div } from './styles'

export const UsersSearch = ({ users, onClick }) => (
	<div>
		<Title>Results</Title>
		<Div>
			{users.length > 0 ? (
				users.map(({ username, _id }, index) => (
					<Card key={index} title={username}>
						<Button onClick={() => { onClick({ userId: _id }) }}>
							<MdPersonAdd size='15px' />
						</Button>
					</Card>
				))
			) : (
				<h1>No users found</h1>
			)}
		</Div>
	</div>
)
