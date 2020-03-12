import React, { useContext } from 'react'

import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'

import { GlobalStyle } from './components/Styles/GlobalStyle'

import { Context } from './Context'

export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<>
			<GlobalStyle />
			<Router>
				{!isAuth && <Login path='/login' />}
				{!isAuth && <Signup path='/signup' />}
				{!isAuth && <Redirect noThrow  from='/' to='/login'/>}
				<Home path='/' />
				{isAuth && <Home path='/:serverId' />}
				{isAuth && <Home path='/:serverId/:channelId' />}
				{isAuth && <Redirect noThrow  from='/login' to='/' />}
				{isAuth && <Redirect noThrow  from='/signup' to='/' />}
			</Router>
		</>
	)
}
