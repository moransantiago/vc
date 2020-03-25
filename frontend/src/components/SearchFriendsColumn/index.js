import React from 'react'

import { SearchFriends } from '../../containers/SearchFriends'

import { UsersResults } from '../UsersResults'

import { Title } from './styles'

export const SearchFriendsColumn = ({ keyword, friends }) => (
	<SearchFriends username={keyword}>
		{({ loading, data }) => {
			if (loading) return <Title>Results</Title>
			return <UsersResults users={data && data.filterUsers} friends={friends} />
		}}
	</SearchFriends>
)
