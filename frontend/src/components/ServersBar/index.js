import React from 'react'

import { Div } from './styles'

import { Server } from '../Server/index'

export const ServersBar = ({
	currentServer = null,
	servers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}) => (
	<Div className='column is-8 is-offset-2'>
		{servers.map((server, index) => (
			<Server {...server} currentserver={currentServer === servers[index]._id ? true : false} key={index} />
		))}
	</Div>
)
