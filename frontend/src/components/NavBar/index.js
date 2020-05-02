import React, { useContext } from 'react'

import ContentLoader, { rect, circle } from 'react-content-loader'
import { Link } from '@reach/router'

import { useLocalStorage } from '../../hooks/useLocalStorage'

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
	const { isAuth, removeAuth, RTC, serversSocket } = useContext(Context)
	const [connectedChannel, setConnectedChannel] = useLocalStorage('connected-channel', null)

	const handleLogOut = async userId => {
		await RTC.leave(isAuth)
		if (connectedChannel) {
			serversSocket.emit('leave_channel', { userId, channel: connectedChannel })
			setConnectedChannel(null)
		}
		removeAuth()
	}	

	return (
		<GetUserInfo>
			{({ loading, error, data }) => {
				if (error) return 'Internal server error'

				return loading ? (
					<Nav>
						<ContentLoader
							style={{
								borderTop: '1px solid transparent',
								borderRight: '2px solid #3c3c3c',
								borderBottom: '1px solid transparent',
								borderLeft: '1px solid transparent'
							}}
							speed='1'
							width='14%'
							height='100%'
							viewBox='0 0 100% 100'
							backgroundColor='#757575'
							foregroundColor='#545454'
						>
							<circle cx='20' cy='50%' r='17' />
							<rect
								x='48'
								y='30%'
								rx='5'
								ry='5'
								width='69%'
								height='40%'
							/>
						</ContentLoader>
						<ContentLoader
							speed='1'
							width='250'
							height='35'
							viewBox='0 0 100% 100'
							backgroundColor='#757575'
							foregroundColor='#545454'
						>
							<rect x="10%" y="40%" rx="5" ry="5" width="21%" height="20%" />
							<rect x="38%" y="40%" rx="5" ry="5" width="21%" height="20%" />
							<rect x="66%" y="40%" rx="5" ry="5" width="21%" height="20%" />
						</ContentLoader>
					</Nav>
				) : (
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
						<LogOut to='/' onClick={() => handleLogOut(data.getMe._id)}>
							Log out
						</LogOut>
					</Nav>
				)
			}}
		</GetUserInfo>
	)
}
