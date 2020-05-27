import React from 'react'

import ContentLoader, { rect } from 'react-content-loader'

import { Div, Button, Link } from './styles'

import { Server } from '../Server/index'

import { MdAdd } from 'react-icons/md'

export const ServersBar = ({ currentServer = false, servers }) => {
	if (servers) {
		return servers.length < 1 ? (
			<Div className='column is-12'>
				No servers yet... <Link to='/servers/explore'>Find servers</Link>
				<Button>
					<MdAdd size='28px' color='rgb(200, 103, 64)' />
				</Button>
			</Div>
		) : (
			<Div className='column is-12'>
				{servers.map((server, index) => (
					<Server {...server} currentserver={currentServer === servers[index]._id ? true : false} key={index} />
				))}
				<Button>
					<MdAdd size='28px' color='rgb(200, 103, 64)' />
				</Button>
			</Div>
		)
	}

	
	return (
		<Div className='column is-12'>
			<ContentLoader
					speed={1}
					width='295'
					height='42'
					viewBox='0 0 100% 100'
					backgroundColor='#757575'
					foregroundColor='#545454'
				>
					<rect
						x='0'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
					<rect
						x='50'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
					<rect
						x='100'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
					<rect
						x='150'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
					<rect
						x='200'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
					<rect
						x='250'
						y='0'
						rx='5'
						ry='5'
						width='44'
						height='100%'
					/>
				</ContentLoader>
		</Div>
	)
}
