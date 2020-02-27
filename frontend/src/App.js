import React from 'react'

import { Router } from '@reach/router'

import { Home } from './pages/Home'

import { GlobalStyle } from './components/Styles/GlobalStyle'

export const App = () => {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Home path='/' />
                <Home path='/:serverId' />
                <Home path='/:serverId/:channelId' />
            </Router>
        </>
    )
}
