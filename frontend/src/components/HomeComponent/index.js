import React, { useState } from 'react'

import { LeftColumn } from '../LeftColumn'
import { Chat } from '../Chat'
import { FriendsColumn } from '../FriendsColumn'
import { NavBar } from '../NavBar'
import { ServersBar } from '../ServersBar'

import { DivColumns } from './styles'

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

    return (
        <>
            <NavBar username={userData.username} />
            <ServersBar servers={userData.servers} currentServer={server._id}/>
            <DivColumns
                className='columns is-marginless'
                style={{
                    backgroundColor: 'rgb(140, 136, 168)',
                    height: '100vh',
                    fontFamily: 'Montserrat'
                }}
            >
                <LeftColumn
                    server={
                        server && {
                            id: server._id,
                            name: server.name
                        }
                    }
                    channels={server && server.channels}
                />
                <Chat channel={channel} />
                <FriendsColumn friends={userData.friends} friendRequests={userData.friendRequests} addNewFriend={addNewFriend} />
            </DivColumns>
        </>
    )
}
