import React from 'react'

import { List, ListItem, Link } from './styles'

export const ServersNavbar = () => (
	<List>
		<ListItem>
			<Link to='/servers/my-servers'>My servers</Link>
		</ListItem>
		<ListItem>
			<Link to='/servers/create-server'>New server</Link>
		</ListItem>
		<ListItem>
			<Link to='/servers/explore'>Explore</Link>
		</ListItem>
	</List>
)
