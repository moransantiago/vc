import React from 'react'

import { Div } from './styles'

import { Server } from '../Server/index'

export const ServersBar = ({ currentServer = null, servers }) => (
	<Div className='column is-12'>
		{servers.map((server, index) => (
			<Server {...server} currentserver={currentServer === servers[index]._id ? true : false} key={index} />
		))}
	</Div>
)
