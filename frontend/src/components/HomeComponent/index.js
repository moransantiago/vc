import React, { useState } from 'react'

import { NavBar } from '../NavBar'
import { LeftColumn } from '../LeftColumn'
import { ServersAndChatColumn } from '../ServersAndChatColumn'
import { FriendsColumn } from '../FriendsColumn'

import { DivContainer, DivColumns } from './styles'

export const HomeComponent = ({ data, server, channel }) => {
    const [userData, setUserData] = useState(data)
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
                <LeftColumn server={ server && { id: server._id, name: server.name } } channels={server && server.channels} username={userData.username} />
                <ServersAndChatColumn servers={userData.servers} channel={channel} currentServer={server._id} />
                <FriendsColumn friends={userData.friends} friendRequests={userData.friendRequests} addNewFriend={addNewFriend} />
            </DivColumns>
        </DivContainer>
    )
}
