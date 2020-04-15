import React, { useState } from 'react'

import { NavBar } from '../NavBar'
import { LeftColumn } from '../LeftColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'
import { ConferenceModal } from '../ConferenceModal'

import { DivContainer, DivColumns } from './styles'

export const HomeLayout = ({ addNewFriend, sendMessage, userData, server, chat }) => {
	const [isModalOpened, toggleModal] = useState(false)
	
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
					sendMessage={sendMessage}
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
