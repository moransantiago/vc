import React from 'react'

import { DivContainer, DivChat, DivFlex } from './styles'

import { NavBar } from '../NavBar'
import { UserBadge } from '../UserBadge'
import { FriendsTotem } from '../FriendsTotem'
import { Chat } from '../Chat'

export const UserPageLayout = () => (
    <DivContainer>
        <NavBar />
        <DivFlex>
            <UserBadge />
            <FriendsTotem />
            <DivChat>
                <Chat sendMessage={() => alert('Message!')} chat={{ name: 'moransantiago', messages: [] }} onClick={null} isPersonal={true} />
            </DivChat>
        </DivFlex>
    </DivContainer>
)

