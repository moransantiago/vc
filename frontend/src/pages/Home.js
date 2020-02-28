import React, { useContext } from 'react'

import { LeftColumn } from '../components/LeftColumn'
import { Chat } from '../components/Chat/index'
import { FriendsColumn } from '../components/FriendsColumn/index'
import { NavBar } from '../components/NavBar/index'
import { ServersBar } from '../components/ServersBar'

import { GetUserData } from '../containers/GetUserData'

import { Context } from '../Context'

export const Home = ({ serverId, channelId }) => {
	const { username } = useContext(Context)

	return (
		<>
			<GetUserData username={username}>
				{({ loading, error, data }) => {
					if (loading) return 'Loading'
					if (error) return 'Internal server error'
					const server = serverId
						? data.getUser.servers.filter(
								server => server._id === serverId
						  )[0]
						: null
					const channel =
						channelId && server
							? server.channels.filter(
									channel => channel._id === channelId
							  )[0]
							: null

					return (
						<>
							<ServersBar
								servers={data.getUser.servers}
								currentServer={serverId}
							/>
							<div
								className='columns is-marginless'
								style={{
									backgroundColor: 'rgb(140, 136, 168)',
									height: '100vh',
									fontFamily: 'Montserrat'
								}}
							>
								<LeftColumn
									server={
										server && {
											id: serverId,
											name: server.name
										}
									}
									channels={server && server.channels}
								/>
								<Chat channel={channel} />
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
}
