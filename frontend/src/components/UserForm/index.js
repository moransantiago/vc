import React from 'react'

import { Form, Input, Title, Error, Div } from './styles'

import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ disabled, onSubmit, error, title }) => {
	const username = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = e => {
		e.preventDefault()
		onSubmit({ username: username.value, password: password.value })
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
					<SubmitButton disabled={disabled}>
						{disabled ? 'Loading' : title}
					</SubmitButton>
				</Div>
			</Form>
			{error && <Error>{error}</Error>}
		</>
	)
}
