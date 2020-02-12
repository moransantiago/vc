import React from 'react'

import { Div } from './styles'

import { Server } from '../Server/index'

import { Link } from '@reach/router'

export const ServersBar = ({
	servers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}) => (
	<Div className="has-background-light column is-6 is-offset-3">
		{servers.map((server, index) => (
			<Link to={`/${server._id}`} key={index}>
				<Server />
			</Link>
		))}
	</Div>
)
