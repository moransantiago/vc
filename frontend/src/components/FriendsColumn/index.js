import React from 'react'

import 'bulma/css/bulma.css'

import {
	DivButtons,
	DivColumn,
	Title,
	Subtitle,
	Tag,
	DivFriends,
	Input
} from './styles'

import { Card } from '../Card/index'

import { useInputValue } from '../../hooks/useInputValue'

import { MdSettings } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'

export const FriendsColumn = ({ friends, friendRequests }) => {
	const friendSearchInput = useInputValue('')

	return (
		<DivColumn className='column is-2 has-background-light'>
			<Title>Friends</Title>
			<div style={{ marginTop: '25px' }}>
				<DivFriends>
					<Subtitle>Online</Subtitle>
					{friends.map((friend, index) => (
						<Card key={index} title={friend.username} isUser />
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
							isOnline={false}
							isUser
						/>
					))}
				</DivFriends>
			</div>
			<div>
				<Input
					placeholder='Find new friends'
					type='text'
					{...friendSearchInput}
				/>
				<DivButtons>
					<div className='dropdown is-up is-hoverable'>
						<FaUserFriends size='30px' className='dropdown-trigger'>
							<button
								className='button'
								aria-haspopup='true'
								aria-controls='dropdown-menu4'
							>
								<span>
									<Subtitle className='is-marginless'>
										Friend Requests
									</Subtitle>
								</span>
								<span className='icon is-small'>
									<i
										className='fas fa-angle-down'
										aria-hidden='true'
									></i>
								</span>
							</button>
						</FaUserFriends>
						<div
							className='dropdown-menu'
							id='dropdown-menu4'
							role='menu'
						>
							<div className='dropdown-content'>
								<div className='dropdown-item'>
									{friendRequests.map((user, index) => (
										<Card
											key={index}
											title={user.username}
										/>
									))}
								</div>
							</div>
						</div>
						<Tag className='tag'>{friendRequests.length}</Tag>
					</div>
					<MdSettings
						size='30px'
						onClick={() => {
							alert('Settings!')
						}}
					/>
				</DivButtons>
			</div>
		</DivColumn>
	)
}
