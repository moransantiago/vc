import React, { useContext } from 'react'

import { SignupMutation } from '../containers/SignupMutation'

import { UserForm } from '../components/UserForm'

import { Context } from '../Context'

export const Signup = () => {
    const { activateAuth } = useContext(Context)

	return (
		<SignupMutation>
			{(signUp, { loading, error }) => {
				const onSubmit = ({ username, email, password }) => {
					const input = { username, email, password }
					const variables = { input }
					signUp({ variables })
						.then(({ data: { signUp } }) => {
							activateAuth(signUp, username)
						})
						.catch(err => err)
				}
				const errorMsg = error && error.graphQLErrors && error.graphQLErrors[0].message

				return <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} title='Sign Up' />
			}}
		</SignupMutation>
	)
}
