import React, { useState } from 'react'

import { HomeComponent } from '../components/HomeComponent'
import { Loader } from '../components/Loader'

import { GetMe } from '../containers/GetMe'

const HomePage = ({ serverId, chatId, navigate }) => {
	const [userData, setUserData] = useState(undefined)

	return (
		// => When the Query is COMPLETED (apollo client event)
		// => Set our state data
		<GetMe onCompleted={async ({ getMe }) => await setUserData(getMe)}>
			{({ loading, error }) => {
				if (loading || !userData) return <Loader message='Loading...' />
				if (error) return 'Internal server error'

				const server = serverId
					? userData.servers.filter(
							(server) => server._id === serverId
					  )[0]
					: userData.servers[0]._id
				const chat =
					chatId && server
						? server.chats.filter((chat) => chat._id === chatId)[0]
						: userData.servers[0].chats[0]._id
				if (!serverId || !chatId) navigate(`/${server}/${chat}`)
				
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
					<HomeComponent
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
