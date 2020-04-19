import React from 'react'

import { HomeLayout } from '../components/HomeLayout'

import { useServerEventSocket } from '../hooks/useServerEventSocket'

const HomePage = ({ serverId, chatId }) => {
	const { userData, setUserData, sendMessage } = useServerEventSocket()

	return (
		// const addNewFriend = (user) => {
		// 	const { friends } = userData
		// 	const { friendRequests } = userData
		// 	friends.push(user)
		// 	const users = friendRequests.filter(
		// 		({ _id }) => _id === user._id
		// 	)
		// 	const requestIndex = friendRequests.indexOf(users[0])
		// 	if (requestIndex > -1) {
		// 		friendRequests.splice(requestIndex, 1)
		// 	}
		// 	setUserData({ ...userData })
		// }
		// const removeFriend = user => {
		//     const { friends } = userData
		//     const friendIndex = friends.indexOf(user)
		//     friendIndex && friends.shift(friendIndex, 1)
		//     setUserData({ ...userData })
		// }

		// return (
		<HomeLayout
			serverId={serverId}
			chatId={chatId}
			sendMessage={sendMessage}
		/>
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
