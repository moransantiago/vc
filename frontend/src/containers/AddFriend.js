import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const AddFriendMutation = gql`
	mutation($userId: ID!) {
		addFriend(userId: $userId) {
			_id
			username
		}
	}
`

export const AddFriend = ({ children }) => (
    <Mutation mutation={AddFriendMutation}>
        {children}
    </Mutation>
)
