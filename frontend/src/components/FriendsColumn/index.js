import React from 'react'

import 'bulma/css/bulma.css'

import { MyFriends } from '../MyFriends'
import { SearchFriendsColumn } from '../SearchFriendsColumn'
import { FriendsSectionFooter } from '../FriendsSectionFooter'

import { DivColumn } from './styles'

import { useInputValue } from '../../hooks/useInputValue'

export const FriendsColumn = ({ friends, friendRequests, addNewFriend }) => {
	const friendSearchInput = useInputValue('')

	return (
		<DivColumn className='column is-2'>
			{!friendSearchInput.value
				? <MyFriends friends={friends} />
				: <SearchFriendsColumn keyword={friendSearchInput.value} />
			}
			<FriendsSectionFooter friendRequests={friendRequests} addNewFriend={addNewFriend} friendSearchInput={friendSearchInput} />
		</DivColumn>
	)
}
