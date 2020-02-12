import React from 'react'

import { LeftColumn } from '../components/LeftColumn'
import { Chat } from '../components/Chat/index'
import { FriendsColumn } from '../components/FriendsColumn/index'
import { NavBar } from '../components/NavBar/index'
import { ServersBar } from '../components/ServersBar'

import { GetUserData } from '../containers/GetUserData'

export const Home = ({ serverId }) => (
	<>
		<GetUserData id={'5e2e60a24e824700d9d78277'}>
			{({ loading, error, data }) => {
				if (loading) return 'Loading'
				if (error) return 'Internal server error'
				const channels = serverId ? data.getUser.servers.filter(server => server._id === serverId)[0].channels : null
				return (
					<>
						<ServersBar servers={data.getUser.servers} />
						<div
							className="columns is-marginless"
							style={{
								backgroundColor: 'rgb(140, 136, 168)',
								height: '100vh',
								fontFamily: 'Montserrat'
							}}
						>
							<LeftColumn channels={channels} />
							<Chat />
							<FriendsColumn
								friends={data.getUser.friends}
								friendRequests={data.getUser.friendRequests}
							/>
						</div>
						<NavBar
							username={data.getUser.username}
							email={data.getUser.email}
						/>
					</>
				)
			}}
		</GetUserData>
	</>
)
