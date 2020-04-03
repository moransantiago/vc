import React, { useState } from 'react'

import { NavBar } from '../NavBar'
import { LeftColumn } from '../LeftColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'
import { ConferenceModal } from '../ConferenceModal'

import { DivContainer, DivColumns } from './styles'

export const HomeComponent = ({ data, server, chat }) => {
	const [userData, setUserData] = useState(data)
	const [isModalOpened, toggleModal] = useState(false)

	const addNewFriend = user => {
		const { friends } = userData
		const { friendRequests } = userData
		friends.push(user)
		const requestIndex = friendRequests.indexOf(user)
		requestIndex && friendRequests.shift(requestIndex, 1)
		setUserData({ ...userData })
	}
	// const removeFriend = user => {
	//     const { friends } = userData
	//     const friendIndex = friends.indexOf(user)
	//     friendIndex && friends.shift(friendIndex, 1)
	//     setUserData({ ...userData })
	// }

	return (
		<DivContainer>
			<NavBar username={userData.username} />
			<DivColumns>
				<LeftColumn server={server} username={userData.username} />
				<ServersAndChatColumn
					servers={userData.servers}
					chat={chat}
					currentServer={server._id}
					onClick={() => toggleModal(true)}
				/>
				<FriendsColumn
					friends={userData.friends}
					friendRequests={userData.friendRequests}
					addNewFriend={addNewFriend}
				/>
			</DivColumns>
			{isModalOpened && (
				<ConferenceModal
					id='videosModal'
					onClick={() => toggleModal(false)}
				/>
			)}
		</DivContainer>
	)
}
