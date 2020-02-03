import React from 'react'

import { FriendsColumn } from '../components/FriendsColumn/index'
import { NavBar } from '../components/NavBar/index'

export const Home = () => (
	<div style={{'background': 'grey'}}>
        <FriendsColumn />
		<NavBar />
	</div>
)
