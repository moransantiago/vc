import React, { useState, useEffect, useContext } from 'react'

import { NavBar } from '../NavBar'
import { ServersColumn } from '../ServersColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'
import { ConferenceModal } from '../ConferenceModal'

import { useServerEventSocket } from '../../hooks/useServerEventSocket'

import { DivContainer, DivColumns } from './styles'
import { Context } from '../../Context'

export const HomePageLayout = ({ serverId, chatId }) => {
	const { RTC, isAuth } = useContext(Context)
	useServerEventSocket()
	
	useEffect(() => {
		return () => {
			if (RTC && !isAuth) {
				RTC.disconnect()
			}
		}
	}, [RTC, isAuth])

	const [isModalOpened, toggleModal] = useState(false)

	return (
		<DivContainer>
			<NavBar/>
			<DivColumns>
				<ServersColumn serverId={serverId} chatId={chatId}/>
				<ServersAndChatColumn serverId={serverId} chatId={chatId} isModalOpened={isModalOpened} onClick={() => toggleModal(true)}/>
				<FriendsColumn/>
			</DivColumns>
			{isModalOpened && <ConferenceModal id='videosModal' onClick={() => toggleModal(false)}/>}
		</DivContainer>
	)
}
