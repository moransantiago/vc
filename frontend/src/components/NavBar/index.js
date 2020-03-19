import React, { useContext } from 'react'

import 'bulma/css/bulma.css'

import { Image, Nav, NavHeader, Paragraph, Link } from './styles'

import { Context } from '../../Context'

export const NavBar = ({ username }) => {
	const { removeAuth } = useContext(Context)

	return (
		<Nav>
			<NavHeader>
				<Image src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
				<Paragraph className='is-size-5'>{username}</Paragraph>
			</NavHeader>
			<Link to='/' onClick={removeAuth}>Log out</Link>
		</Nav>
	)
}
