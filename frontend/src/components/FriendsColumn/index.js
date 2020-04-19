import React, { useState } from 'react'

import 'bulma/css/bulma.css'

import { MyFriends } from '../MyFriends'
import { SearchFriendsColumn } from '../SearchFriendsColumn'
import { FriendsSectionFooter } from '../FriendsSectionFooter'

import { DivColumn } from './styles'

import { useInputValue } from '../../hooks/useInputValue'

import { GetUserFriends } from '../../containers/GetUserFriends'

export const FriendsColumn = ({ addNewFriend }) => {
	const [friends, setFriends] = useState()
	const [friendRequests, setFriendRequests] = useState()
	const friendSearchInput = useInputValue({
		initialValue: '',
		resetOnEsc: true,
	})
	const friendsIdList = friends && friends.map(friend => friend._id)

	return (
		<GetUserFriends
			onCompleted={async ({ getMe }) => {
				setFriends(getMe.friends)
				setFriendRequests(getMe.friendRequests)
			}}
		>
			{({ error }) => {
				if (error) return 'Internal server error'

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
