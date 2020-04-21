import React, { useState } from 'react'

import { NavBar } from '../NavBar'
import { ServersColumn } from '../ServersColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'
import { ConferenceModal } from '../ConferenceModal'

import { useServerEventSocket } from '../../hooks/useServerEventSocket'

import { DivContainer, DivColumns } from './styles'

export const HomePageLayout = ({ serverId, chatId }) => {
	useServerEventSocket()
	const [isModalOpened, toggleModal] = useState(false)

	return (
		<DivContainer>
			<NavBar/>
			<DivColumns>
				<ServersColumn serverId={serverId} chatId={chatId}/>
				<ServersAndChatColumn serverId={serverId} chatId={chatId} onClick={() => toggleModal(true)}/>
				<FriendsColumn/>
			</DivColumns>
			{isModalOpened && <ConferenceModal id='videosModal' onClick={() => toggleModal(false)}/>}
		</DivContainer>
	)
}
