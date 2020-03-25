import React from 'react'

import { Card } from '../Card'

import { DivScrollable, Title, Subtitle, Buttons, Button, DivFriends } from './styles'

import { MdMessage } from 'react-icons/md'

export const MyFriends = ({ friends }) => (
    <>
		<Title>Friends</Title>
		<DivScrollable>
			<DivFriends>
				<Subtitle>Online</Subtitle>
				{friends.map((friend, index) => (
					<Card key={index} title={friend.username}>
						<Buttons>
							<Button>
								<MdMessage color='#b7b7b7' size='15px' />
							</Button>
						</Buttons>
					</Card>
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
					>
						<Buttons>
							<Button>
								<MdMessage size='15px' />
							</Button>
						</Buttons>
					</Card>
				))}
			</DivFriends>
		</DivScrollable>
	</>
)