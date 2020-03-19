import React from 'react'

import { SearchFriends } from '../../containers/SearchFriends'
import { AddFriend } from '../../containers/AddFriend'

import { UsersSearch } from '../UsersSearch'

export const SearchFriendsColumn = ({ keyword }) => (
    <AddFriend>
		{addFriend => {
			const onClick = ({ userId }) => {
				const variables = { userId }
				addFriend({ variables })
					.catch(err => err)
			}
        
			return  <SearchFriends username={keyword}>
                        {({ loading, data }) => {
                            if (loading) return <h1 style={{ 'fontSize': '22px' }}>Results</h1>
                            return <UsersSearch onClick={onClick} users={data && data.filterUsers} />
                        }}
				    </SearchFriends>
		}}
	</AddFriend>
)
