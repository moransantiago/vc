import React, { useState } from 'react'

import { Chat } from '../Chat'
import { ServersBar } from '../ServersBar'
import { VideosColumn } from '../VideosColumn'

import { GetUserMessages } from '../../containers/GetUserMessages'

import { useServerEventSocket } from '../../hooks/useServerEventSocket'

import { DivContainer, DivColumns } from './styles'

import 'bulma/css/bulma.css'

export const ServersAndChatColumn = ({ serverId, chatId, onClick }) => {
	const { servers, setServers, sendMessage } = useServerEventSocket()
	const [colapsed, setColapsed] = useState(true)

	return (
		<GetUserMessages onCompleted={async ({ getMe }) => await setServers(getMe.servers)}>
			{
				({ error, data }) => {
					if (error) return 'Internal server error'

					if (data) {
						const server = serverId
							? data.getMe.servers.filter(server => server._id === serverId)[0]
							: data.getMe.servers[0]._id
						var chat = chatId && server
							? server.chats.filter(chat => chat._id === chatId)[0]
							: data.getMe.servers[0].chats[0]._id
					}

					return (
						<DivContainer className='column is-8'>
							<ServersBar servers={servers} currentServer={serverId} />
							<DivColumns className='columns'>
								<Chat sendMessage={sendMessage} chat={chat} colapsed={colapsed} setColapsed={setColapsed} />
								<VideosColumn onClick={onClick} colapsed={colapsed} />
							</DivColumns>
						</DivContainer>
					)
				}	
			}
		</GetUserMessages>
	)
}
