import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getFriends = gql`
	query getMe {
		getMe {
			friends {
				_id
				username
			}
			friendRequests {
				_id
				username
			}
		}
	}
`

export const GetUserFriends = ({ children, onCompleted }) => (
	<Query query={getFriends} onCompleted={onCompleted}>
		{children}
	</Query>
)
