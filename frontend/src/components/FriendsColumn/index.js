import React, { useState } from 'react'

import 'bulma/css/bulma.css'

import { MyFriends } from '../MyFriends'
import { SearchFriendsColumn } from '../SearchFriendsColumn'
import { FriendsSectionFooter } from '../FriendsSectionFooter'

import { DivColumn } from './styles'

import { useInputValue } from '../../hooks/useInputValue'

export const FriendsColumn = ({ friends, friendRequests }) => {
	const friendSearchInput = useInputValue('')
	const [ myFriends, setFriends ] = useState(friends)
	const [ myFriendRequests, setFriendRequests ] = useState(friendRequests)

	return (
		<DivColumn className='column is-2'>
			{!friendSearchInput.value
				? <MyFriends myFriends={myFriends} />
				: <SearchFriendsColumn keyword={friendSearchInput.value} />
			}
			<FriendsSectionFooter myFriends={myFriends} myFriendRequests={myFriendRequests} setFriends={setFriends} setFriendRequests={setFriendRequests} friendSearchInput={friendSearchInput}/>
		</DivColumn>
	)
}
