import React from 'react'

import {
	Form,
	Input,
	Title,
	Error,
	DivColumns,
	DivColumn,
	Span,
	Link,
	Loader as Spinner
} from './styles'

import { SubmitButton } from '../SubmitButton'

import { useInputValue } from '../../hooks/useInputValue'

export const UserForm = ({ disabled, onSubmit, error, title }) => {
	const username = useInputValue('')
	const email = useInputValue('')
	const password = useInputValue('')

	const handleSubmit = async e => {
		e.preventDefault()
		await onSubmit({
			username: username.value,
			email: email.value,
			password: password.value
		})
	}

	return (
		<DivColumns>
			<DivColumn className='column is-4 is-offset-4'>
				<Form disabled={disabled} onSubmit={handleSubmit}>
					<Title>{title}</Title>
					<Input
						disabled={disabled}
						placeholder='Username'
						{...username}
					/>
					{title === 'Sign Up' && (
						<Input
							disabled={disabled}
							placeholder='Email'
							type='email'
							{...email}
						/>
					)}
					<Input
						disabled={disabled}
						placeholder='Password'
						type='password'
						{...password}
					/>
					{error && <Error>{error}</Error>}
					<SubmitButton disabled={disabled}>
						{disabled ? (
							<Spinner viewBox='0 0 50 50'>
								<circle
									className='path'
									cx='25'
									cy='25'
									r='20'
									fill='none'
									strokeWidth='4'
								/>
							</Spinner>
						) : (
							title
						)}
					</SubmitButton>
					{title === 'Login' ? (
						<Span>
							New here?
							<Link to='/signup'> Create an account</Link>
						</Span>
					) : (
						<Span>
							Already have an account?
							<Link to='/login'> Login here</Link>
						</Span>
					)}
				</Form>
			</DivColumn>
		</DivColumns>
	)
}
