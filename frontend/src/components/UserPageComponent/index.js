import React from 'react'

import { Div, DivChat } from './styles'

import { UserBadge } from '../UserBadge'
import { FriendsTotem } from '../FriendsTotem'
import { Chat } from '../Chat'

export const UserPageComponent = () => (
    <Div>
        <UserBadge />
        <FriendsTotem />
        <DivChat>
            <Chat sendMessage={() => alert('Message!')} chat={{ name: 'moransantiago', messages: [] }} onClick={null} isPersonal={true} />
        </DivChat>
    </Div>
)

