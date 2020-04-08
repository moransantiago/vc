import React from 'react'

import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

const signUp = gql`
	mutation signUp($input: UserInput!) {
		signUp(input: $input)
	}
`

export const SignupMutation = ({ children }) => (
	<Mutation
        mutation={signUp}
        awaitRefetchQueries={true}
		refetchQueries={({ data: { signUp } }) => {
			window.sessionStorage.setItem('token', signUp)
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
