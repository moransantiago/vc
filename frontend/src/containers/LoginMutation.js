import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const Login = gql`
	mutation logIn($input: UserCredentials!) {
		logIn(input: $input)
	}
`

export const LoginMutation = ({ children }) => (
	<Mutation
		mutation={Login}
		awaitRefetchQueries={true}
		refetchQueries={({ data: { logIn } }) => {
			window.sessionStorage.setItem('token', logIn)
			return [
				{
					query: gql`
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
					`,
				},
			]
		}}
	>
		{children}
	</Mutation>
)
