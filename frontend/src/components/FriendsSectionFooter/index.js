import React from 'react'

import { AddFriend } from '../../containers/AddFriend'

import { Card } from '../Card'

import { DivFooter, DivButtons, Subtitle, Tag, DivDropdown, Input, Buttons, Button } from './styles'

import { MdSettings, MdDone, MdCancel } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'

export const FriendsSectionFooter = ({ friendRequests, addNewFriend, friendSearchInput }) => (
	<DivFooter>
		<Input placeholder='Find new friends' type='text' {...friendSearchInput} />
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
									const onClick = ({ userId, username }) => {
										const variables = { userId }
										addFriend({ variables })
											.then(() => { addNewFriend({ _id: userId, username }) })
											.catch(err => err)
									}

									return friendRequests.length > 0 ? (
										friendRequests.map(
											({ username, _id }, index) => (
												<Card
													key={index}
													title={username}
												>
													<Buttons>
														<Button
															onClick={() => {
																onClick({
																	userId: _id,
																	username
																})
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
										<h1>You don't have friend requests</h1>
									)
								}}
							</AddFriend>
						</div>
					</div>
				</DivDropdown>
				{friendRequests.length > 0 && <Tag className='tag'>{friendRequests.length}</Tag>}
			</div>
			<MdSettings size='30px' onClick={() => { alert('Settings!') }} />
		</DivButtons>
	</DivFooter>
)
