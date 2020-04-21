import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUserServers = gql`
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
		}
	}
`

export const GetUserServers = ({ children, onCompleted }) => (
	<Query query={getUserServers} onCompleted={onCompleted} >
		{children}
	</Query>
)
