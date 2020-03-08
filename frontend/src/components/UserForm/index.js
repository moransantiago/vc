import React from 'react'

import { Form, Input, Title, Error, Div } from './styles'

import { SubmitButton } from '../SubmitButton'

export const UserForm = ({
	disabled = false,
	handleSubmit = null,
	title = 'Login',
	email = 'sa',
	password = 'as'
}) => (
	<Form disabled={disabled} onSubmit={handleSubmit}>
		<Div>
			<Title>{title}</Title>
			<Input disabled={disabled} placeholder='Email' {...email} />
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
)
