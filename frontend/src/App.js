import React, { useContext } from 'react'

import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'

import { GlobalStyle } from './components/Styles/GlobalStyle'

import { Context } from './Context'

export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<>
			<GlobalStyle />
			<Router>
				<Login path='/login' />
				{!isAuth && <Redirect from='/' to='/login' />}
				<Home path='/' />
				<Home path='/:serverId' />
				<Home path='/:serverId/:channelId' />
			</Router>
		</>
	)
}
