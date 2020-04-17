import React from 'react'

import { Card } from '../Card'

import { Link } from '@reach/router'

import { DivScrollable, Title, Subtitle, DivFriends } from './styles'

export const MyFriends = ({ friends }) => (
    <>
		<Title>Friends</Title>
		<DivScrollable>
			<DivFriends>
				<Subtitle>Online</Subtitle>
				{friends.map((friend, index) => (
					<Link to={`/user/${friend.username}`}>
						<Card key={index} title={friend.username} />
					</Link>
				))}
				<Subtitle>Offline</Subtitle>
				{[
					'Agustin',
					'Santiago',
					'Manuel',
					'Agustin',
					'Santiago',
					'Manuel'
				].map((friend, index) => (
					<Card
						key={index}
						title={friend}
						disabled={true}
					/>
				))}
			</DivFriends>
		</DivScrollable>
	</>
)