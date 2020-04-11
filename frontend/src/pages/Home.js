import React, { useState } from 'react'

import { HomeLayout } from '../components/HomeLayout'
import { Loader } from '../components/Loader'

import { GetMe } from '../containers/GetMe'

const HomePage = ({ serverId, chatId, navigate }) => {
	const {userData, setUserData} = useServerEvents()

	return (
		// When the Query is COMPLETED (apollo client event), set our state data
		<GetMe onCompleted={async ({ getMe }) => await setUserData(getMe)}>
			{({ loading, error }) => {
				if (loading || !userData) return <Loader message='Loading...' />
				if (error) return 'Internal server error'

				const server = serverId
					? userData.servers.filter(server => server._id === serverId)[0]
					: userData.servers[0]._id
				const chat = chatId && server
					? server.chats.filter(chat => chat._id === chatId)[0]
					: userData.servers[0].chats[0]._id
				if (!serverId || !chatId) navigate(`/${server}/${chat}`)
				
				const addNewFriend = user => {
					const { friends } = userData
					const { friendRequests } = userData
					friends.push(user)
					const users = friendRequests.filter(({ _id }) => _id === user._id)
					const requestIndex = friendRequests.indexOf(users[0])
					if (requestIndex > -1) {
						friendRequests.splice(requestIndex, 1)
					}
					setUserData({ ...userData })
				}
				// const removeFriend = user => {
				//     const { friends } = userData
				//     const friendIndex = friends.indexOf(user)
				//     friendIndex && friends.shift(friendIndex, 1)
				//     setUserData({ ...userData })
				// }

				return (
					<HomeLayout
						userData={userData}
						server={server}
						chat={chat}
						addNewFriend={addNewFriend}
					/>
				)
			}}
		</GetMe>
	)
}

// React.memo:
// (<COMPONENT TO REMEMBER>, FUNC THAT RECIEVES PROPS ANF RETURNS:
// TRUE = NOT RERENDER)
// FALSE = RERENDER)
export const Home = React.memo(
	HomePage,
	(prevProps, props) =>
		prevProps.serverId !== props.serverId &&
		prevProps.channelId !== props.channelId
)
