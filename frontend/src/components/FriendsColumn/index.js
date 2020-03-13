import React from 'react'

import 'bulma/css/bulma.css'

import {
	DivButtons,
	DivColumn,
	Title,
	Subtitle,
	Tag,
	DivDropdown,
	DivFriends,
	Input,
	Buttons,
	Button
} from './styles'

import { SearchFriends } from '../../containers/SearchFriends'
import { AddFriend } from '../../containers/AddFriend'

import { UsersSearch } from '../UsersSearch'
import { Card } from '../Card'

import { useInputValue } from '../../hooks/useInputValue'

import { MdSettings, MdCall, MdMessage, MdDone, MdCancel } from 'react-icons/md'

import { FaUserFriends } from 'react-icons/fa'

export const FriendsColumn = ({ friends, friendRequests }) => {
	const friendSearchInput = useInputValue('')

	return (
		<DivColumn className='column is-2 has-background-light'>
			{!friendSearchInput.value ? (
				<>
					<Title>Friends</Title>
					<div style={{ marginTop: '25px' }}>
						<DivFriends>
							<Subtitle>Online</Subtitle>
							{friends.map((friend, index) => (
								<Card key={index} title={friend.username}>
									<Buttons>
										<Button>
											<MdCall size='15px' />
										</Button>
										<Button>
											<MdMessage size='15px' />
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
										<Button disabled={true}>
											<MdCall size='15px' />
										</Button>
										<Button>
											<MdMessage size='15px' />
										</Button>
									</Buttons>
								</Card>
							))}
						</DivFriends>
					</div>
				</>
			) : (
				<AddFriend>
					{addFriend => {
						const onClick = ({ userId }) => {
							const variables = { userId }
							addFriend({ variables })
								.then(data => console.log(data))
								.catch(err => console.log(err))
						}

						return (
							<SearchFriends username={friendSearchInput.value}>
								{({ loading, data }) => {
									if (loading)
										return (
											<h1 style={{ 'font-size': '22px' }}>
												Results
											</h1>
										)
									return (
										<UsersSearch
											onClick={onClick}
											users={data && data.filterUsers}
										/>
									)
								}}
							</SearchFriends>
						)
					}}
				</AddFriend>
			)}
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
						<DivDropdown
							className='dropdown-menu'
							id='dropdown-menu4'
							role='menu'
						>
							<div className='dropdown-content is-paddingless'>
								<div className='dropdown-item is-paddingless'>
									<AddFriend>
										{addFriend => {
											const onClick = ({ userId }) => {
												const variables = { userId }
												addFriend({ variables }).catch(
													err => err
												)
											}

											return friendRequests.length > 0 ? (
												friendRequests.map(
													(
														{ username, _id },
														index
													) => (
														<Card
															key={index}
															title={username}
														>
															<Buttons>
																<Button
																	onClick={() => {
																		onClick(
																			{
																				userId: _id
																			}
																		)
																	}}
																>
																	<MdDone size='15px' />
																</Button>
																<Button>
																	<MdCancel size='15px' />
																</Button>
															</Buttons>
														</Card>
													)
												)
											) : (
												<h1>
													You don't have friend
													requests
												</h1>
											)
										}}
									</AddFriend>
								</div>
							</div>
						</DivDropdown>
						{friendRequests.length > 0 && (
							<Tag className='tag'>{friendRequests.length}</Tag>
						)}
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
