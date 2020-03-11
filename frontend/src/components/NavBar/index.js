import React, { useContext } from 'react'

import 'bulma/css/bulma.css'

import { Image, Nav, NavSpan, Button } from './styles'

import { Context } from '../../Context'

export const NavBar = ({ username, email }) => {
	const { removeAuth } = useContext(Context)

	return (
		<Nav
			className='navbar is-fixed-bottom is-white'
			role='navigation'
			aria-label='main navigation'
		>
			<div className='navbar-brand'>
				<Image src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
				<a
					href='www.google.com'
					role='button'
					className='navbar-burger burger'
					aria-label='menu'
					aria-expanded='false'
					data-target='navbarBasicExample'
				>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
					<span aria-hidden='true'></span>
				</a>
			</div>
			<div id='navbarBasicExample' className='navbar-menu'>
				<div className='navbar-start'>
					<NavSpan className='navbar-item'>
						<p className='is-size-5'>{username}</p>
						<p className='is-size-7'>{email}</p>
					</NavSpan>
				</div>
				<div className='navbar-end'>
					<div className='navbar-item'>
						<Button
							onClick={removeAuth}
							href='www.google.com'
						>
							Log out
						</Button>
					</div>
				</div>
			</div>
		</Nav>
	)
}
