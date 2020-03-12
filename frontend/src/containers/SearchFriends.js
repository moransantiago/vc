import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const filterUsers = gql`
	query filterUsers($username: String!) {
		filterUsers(username: $username) {
			_id
			username
		}
	}
`

export const SearchFriends = ({ username, children }) => (
	<Query query={filterUsers} variables={{ username }}>
		{children}
	</Query>
)
