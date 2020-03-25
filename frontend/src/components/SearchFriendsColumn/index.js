import React from 'react'

import { SearchFriends } from '../../containers/SearchFriends'
import { AddFriend } from '../../containers/AddFriend'

import { UsersResults } from '../UsersResults'

import { Title } from './styles'

export const SearchFriendsColumn = ({ keyword, friends }) => (
	<AddFriend>
        {addFriend => {
            const onClick = ({ userId }) => {
                const variables = { userId }
                addFriend({ variables }).catch(err => err)
			}
			
            return (
				<SearchFriends username={keyword}>
					{({ loading, data }) => {
						if (loading) return <Title>Results</Title>
						return <UsersResults users={data && data.filterUsers} friends={friends} onClick={onClick} />
					}}
				</SearchFriends>
            )
        }}
    </AddFriend>
)
