import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const removeFriend = gql`
	mutation removeFriend($userId: ID!) {
		removeFriend(userId: $userId) {
			_id
		}
	}
`

export const RemoveFriend = ({ children }) => (
	<Mutation mutation={removeFriend}>
        {children}
    </Mutation>
)
