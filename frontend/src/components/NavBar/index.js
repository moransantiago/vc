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

import { GetUserInfo } from '../../containers/GetUserInfo'

import { Context } from '../../Context'

export const NavBar = () => {
	const { removeAuth } = useContext(Context)

	return (
		<GetUserInfo>
			{({ loading, error, data }) => {
				if (loading) return 'Loading...'
				if (error) return 'Internal server error'
				
				return (
					<Nav>
						<NavHeader>
							<Image src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
							<Paragraph>{data.getMe.username}</Paragraph>
						</NavHeader>
						<NavBody>
							<Link to='/'>
								<NavItem>Home</NavItem>
							</Link>
							<Link to='/servers'>
								<NavItem>Servers</NavItem>
							</Link>
						</NavBody>
						<LogOut to='/' onClick={removeAuth}>
							Log out
						</LogOut>
					</Nav>
				)
			}}
		</GetUserInfo>
	)
}
