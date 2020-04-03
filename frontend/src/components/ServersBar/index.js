import React from 'react'

import { Div, Button } from './styles'

import { Server } from '../Server/index'

import { MdAdd } from 'react-icons/md'

export const ServersBar = ({ currentServer = false, servers }) => (
	<Div className='column is-12'>
		{servers.map((server, index) => (
			<Server {...server} currentserver={currentServer === servers[index]._id ? true : false} key={index} />
		))}
		<Button><MdAdd size='28px' color='#ededed' /></Button>
	</Div>
)
