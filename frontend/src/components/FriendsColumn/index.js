import React, { useState } from 'react'

import 'bulma/css/bulma.css'

import { MyFriends } from '../MyFriends'
import { SearchFriendsColumn } from '../SearchFriendsColumn'
import { FriendsSectionFooter } from '../FriendsSectionFooter'

import { DivColumn } from './styles'

import { useInputValue } from '../../hooks/useInputValue'

import { GetUserFriends } from '../../containers/GetUserFriends'

export const FriendsColumn = () => {
	const [friends, setFriends] = useState()
	const [friendRequests, setFriendRequests] = useState()
	const friendSearchInput = useInputValue({
		initialValue: '',
		resetOnEsc: true,
	})
	const friendsIdList = friends && friends.map(friend => friend._id)

	const addNewFriend = user => {
		const friendsCopied = [...friends]
		const friendsReqCopied = [...friendRequests]
		friendsCopied.push(user)
		const [request] = friendsReqCopied.filter(({ _id }) => _id === user._id)
		const requestIndex = friendsReqCopied.indexOf(request)
		if (requestIndex > -1) {
			friendsReqCopied.splice(requestIndex, 1)
		}
		setFriends({ ...friendsCopied })
		setFriendRequests({ ...friendsReqCopied })
	}
		// const removeFriend = user => {
		//     const { friends } = userData
		//     const friendIndex = friends.indexOf(user)
		//     friendIndex && friends.shift(friendIndex, 1)
		//     setUserData({ ...userData })
		// }

	return (
		<GetUserFriends
			onCompleted={({ getMe }) => {
				setFriends(getMe.friends)
				setFriendRequests(getMe.friendRequests)
			}}
		>
			{({ error }) => {
				if (error) {
					console.log(error.message)
					return 'Internal server error'
				}

				return (
					<DivColumn className='column is-2'>
						{!friendSearchInput.value
							? <MyFriends friends={friends} />
							: <SearchFriendsColumn keyword={friendSearchInput.value} friends={friendsIdList} />}
						<FriendsSectionFooter
							friendRequests={friendRequests || []}
							addNewFriend={addNewFriend}
							friendSearchInput={friendSearchInput}
						/>
					</DivColumn>
				)
			}}
		</GetUserFriends>
	)
}
