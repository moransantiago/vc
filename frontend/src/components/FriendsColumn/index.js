import React from 'react'

import 'bulma/css/bulma.css'

import { DivButtons, DivColumn, Title, Subtitle, Tag, DivFriends } from './styles'

import { Card } from '../Card/index'

import { MdSettings } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'

export const FriendsColumn = ({ friends, friendRequests }) => (
	<DivColumn className="column is-2 has-background-light">
		<Title>Friends</Title>
		<DivFriends>
			<Subtitle>Online</Subtitle>
			{friends.map((friend, index) => (
				<Card key={index} title={friend.username} isUser />
			))}
			<Subtitle>Offline</Subtitle>
			{['Agustin', 'Santiago', 'Manuel', 'Agustin', 'Santiago', 'Manuel'].map(
				(friend, index) => (
					<Card key={index} title={friend} isOnline={false} isUser />
				)
			)}
		</DivFriends>
		<DivButtons>
			<div className="dropdown is-up is-hoverable">
				<FaUserFriends size="30px" className="dropdown-trigger">
					<button
						className="button"
						aria-haspopup="true"
						aria-controls="dropdown-menu4"
					>
						<span>
							<Subtitle className="is-marginless">Friend Requests</Subtitle>
						</span>
						<span className="icon is-small">
							<i className="fas fa-angle-down" aria-hidden="true"></i>
						</span>
					</button>
				</FaUserFriends>
				<div className="dropdown-menu" id="dropdown-menu4" role="menu">
					<div className="dropdown-content">
						<div className="dropdown-item">
							{friendRequests.map((user, index) => (
								<Card key={index} title={user.username} />
							))}
						</div>
					</div>
				</div>
				<Tag className="tag">1</Tag>
			</div>
			<MdSettings
				size="30px"
				onClick={() => {
					alert('Settings!')
				}}
			/>
		</DivButtons>
	</DivColumn>
)
