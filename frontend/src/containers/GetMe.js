import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getMe = gql`
	query getMe {
		getMe {
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

export const GetMe = ({ children }) => (
	<Query query={getMe} fetchPolicy='network-only'>
		{children}
	</Query>
)
