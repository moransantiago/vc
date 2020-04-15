import React, { useContext } from 'react'

import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { NotFound } from './pages/NotFound'

import { GlobalStyle } from './components/Styles/GlobalStyle'

import { Context } from './Context'

export const App = () => {
	const { isAuth } = useContext(Context)

	return (
		<>
			<GlobalStyle />
			<Router>
				<NotFound default />
				{!isAuth && <Login path='/login' />}
				{!isAuth && <Login path='/login/:serverId/:chatId' />}
				{!isAuth && <Signup path='/signup' />}
				{!isAuth && <Redirect noThrow  from='/' to='/login' />}
				{!isAuth && <Redirect noThrow  from='/:serverId/:chatId' to='/login/:serverId/:chatId' />}
				{isAuth && <Home path='/' />}
				{isAuth && <Home path='/:serverId/:chatId' />}
				{isAuth && <Redirect noThrow from='/login' to='/' />}
				{isAuth && <Redirect noThrow from='/login/:serverId/:chatId' to='/:serverId/:chatId' />}
				{isAuth && <Redirect noThrow from='/signup' to='/' />}
			</Router>
		</>
	)
}
