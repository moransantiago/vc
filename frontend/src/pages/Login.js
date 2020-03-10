import React, { useContext } from 'react'

import { LoginMutation } from '../containers/LoginMutation'

import { UserForm } from '../components/UserForm'

import { Context } from '../Context'

export const Login = () => {
    const { activateAuth } = useContext(Context)

	return (
		<LoginMutation>
			{(logIn, { loading, error }) => {
				const onSubmit = ({ username, password }) => {
					const input = { username, password }
					const variables = { input }
					logIn({ variables })
						.then(({ data: { logIn } }) => {
							activateAuth(logIn, username)
						})
						.catch(err => err)
                }
				const errorMsg = error && 'Wrong username or password'

				return <UserForm onSubmit={onSubmit} disabled={loading} error={errorMsg} title='Login' />
			}}
		</LoginMutation>
	)
}
