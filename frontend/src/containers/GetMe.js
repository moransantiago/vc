import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getMe = gql`
	query getMe {
		getMe {
			_id
			username
			servers {
				_id
				name
				chats {
					_id
					name
				}
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

export const GetMe = ({ children, onCompleted }) => (
	<Query query={getMe} fetchPolicy='network-only' onCompleted={onCompleted}>
		{children}
	</Query>
)
