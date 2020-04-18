import React, { useState } from 'react'

import { Chat } from '../Chat'
import { ServersBar } from '../ServersBar'
import { VideosColumn } from '../VideosColumn'

import { DivContainer, DivColumns } from './styles'

import 'bulma/css/bulma.css'

export const ServersAndChatColumn = ({
	servers,
	sendMessage,
	chat,
	currentServer,
	onClick,
}) => {
	const [colapsed, setColapsed] = useState(true)

	return (
		<DivContainer className='column is-paddingless is-8'>
			<ServersBar servers={servers} currentServer={currentServer} />
			<DivColumns className='columns'>
				<Chat sendMessage={sendMessage} chat={chat} colapsed={colapsed} setColapsed={setColapsed} />
				<VideosColumn onClick={onClick} colapsed={colapsed} />
			</DivColumns>
		</DivContainer>
	)
}
