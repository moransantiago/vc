import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUser = gql`
	query getUser($id: ID!) {
		getUser(id: $id) {
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

export const GetUserData = ({ id, children }) => (
	<Query query={getUser} variables={{ id }}>
		{children}
	</Query>
)
