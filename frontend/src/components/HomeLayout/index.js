import React, { useState } from 'react'

import { NavBar } from '../NavBar'
import { LeftColumn } from '../LeftColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'
import { ConferenceModal } from '../ConferenceModal'

import { DivContainer, DivColumns } from './styles'

export const HomeLayout = ({ serverId, chatId }) => {
	const [isModalOpened, toggleModal] = useState(false)
	
	return (
		<DivContainer>
			<NavBar />
			<DivColumns>
				<LeftColumn serverId={serverId} chatId={chatId} />
				<ServersAndChatColumn
					serverId={serverId}
					chatId={chatId}
					onClick={() => toggleModal(true)}
				/>
				<FriendsColumn/>
			</DivColumns>
			{isModalOpened && <ConferenceModal id='videosModal' onClick={() => toggleModal(false)} />}
		</DivContainer>
	)
}
