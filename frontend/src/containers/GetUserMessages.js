import React from 'react'

import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const getUserMessages = gql`
	query getMe {
		getMe {
			_id
			username
			servers {
				_id
				chats {
					_id
					name
					messages {
						headers {
							author {
								username
							}
						}
						body
					}
				}
				users {
					_id
					username
				}
			}
		}
	}
`

export const GetUserMessages = ({ children, onCompleted }) => (
	<Query query={getUserMessages} onCompleted={onCompleted}>
		{children}
	</Query>
)
