import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUser = gql`
	query getUser($username: String!) {
		getUser(username: $username) {
			_id
			username
			email
			servers {
				_id
				name
				channels {
					_id
					name
				}
			}
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

export const GetUserData = ({ username, children }) => (
	<Query query={getUser} variables={{ username }}>
		{children}
	</Query>
)
