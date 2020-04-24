import React, { useContext } from 'react'

import { Router, Redirect } from '@reach/router'

import { Home } from './pages/Home'
import { User } from './pages/User'
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
				{!isAuth && <Redirect noThrow  from='/channels/:serverId/:chatId' to='/login/:serverId/:chatId' />}
				{isAuth && <Home path='/' />}
				{isAuth && <Home path='/channels/:serverId/:chatId' />}
				{isAuth && <User path='/users/:id' />}
				{isAuth && <Redirect noThrow from='/login' to='/' />}
				{isAuth && <Redirect noThrow from='/login/:serverId/:chatId' to='/channels/:serverId/:chatId' />}
				{isAuth && <Redirect noThrow from='/signup' to='/' />}
			</Router>
		</>
	)
}
