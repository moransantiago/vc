import React from 'react'

import { Chat } from '../Chat'
import { ServersBar } from '../ServersBar'

import { Div } from './styles'

export const ServersAndChatColumn = ({ servers, chat, currentServer, onClick }) => (
    <Div className='column is-paddingless is-8'>
        <ServersBar servers={servers} currentServer={currentServer} />
        <Chat chat={chat} onClick={onClick} />
    </Div>
)
