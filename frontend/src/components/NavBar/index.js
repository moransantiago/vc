import React, { useContext } from 'react'

import { Link } from '@reach/router'

import {
	Image,
	Nav,
	NavHeader,
	Paragraph,
	LogOut,
	NavBody,
	NavItem,
} from './styles'

import { Context } from '../../Context'

export const NavBar = ({ username }) => {
	const { removeAuth } = useContext(Context)

	return (
		<Nav>
			<NavHeader>
				<Image src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
				<Paragraph>{username}</Paragraph>
			</NavHeader>
			<NavBody>
				<Link to='/servers'>
					<NavItem>Servers</NavItem>
				</Link>
			</NavBody>
			<LogOut to='/' onClick={removeAuth}>
				Log out
			</LogOut>
		</Nav>
	)
}
