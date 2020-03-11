import React from 'react'

import { Form, Input, Title, Error, Div, Link } from './styles'

import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ disabled, onSubmit, error, title }) => {
	const username = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = async e => {
		e.preventDefault()
		await onSubmit({ username: username.value, password: password.value })
	}

	return (
		<>
			<Form disabled={disabled} onSubmit={handleSubmit}>
				<Div>
					<Title>{title}</Title>
					<Input
						disabled={disabled}
						placeholder='Username'
						{...username}
					/>
					<Input
						disabled={disabled}
						placeholder='Password'
						type='password'
						{...password}
					/>
					{error && <Error>{error}</Error>}
					<SubmitButton disabled={disabled}>
						{disabled ? 'Loading' : title}
					</SubmitButton>
					{title === 'Login' ? (
						<span>
							New here?
							<Link to='/signup'> Create an account</Link>
						</span>
					) : (
						<span>
							Already have an account?
							<Link to='/login'> Login here</Link>
						</span>
					)}
				</Div>
			</Form>
		</>
	)
}
