import React from 'react'

import { LeftColumn } from '../components/LeftColumn'
import { Chat } from '../components/Chat/index'
import { FriendsColumn } from '../components/FriendsColumn/index'
import { NavBar } from '../components/NavBar/index'
import { ServersBar } from '../components/ServersBar'
import { Loader } from '../components/Loader'

import { GetMe } from '../containers/GetMe'

const HomePage = ({ serverId, channelId, navigate }) => (		
	<GetMe>
		{({ loading, error, data }) => {
			if (loading) return <Loader message='Loading...'/>
			if (error) return 'Internal server error'
			const server = serverId ? data.getMe.servers.filter(server => server._id === serverId)[0] : data.getMe.servers[0]._id
			const channel = channelId && server ? server.channels.filter(channel => channel._id === channelId )[0] : data.getMe.servers[0].channels[0]._id
			if (!serverId || !channelId) navigate(`/${server}/${channel}`)

			return (
				<>
					<NavBar username={data.getMe.username} />
					<ServersBar servers={data.getMe.servers} currentServer={serverId}/>
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
							friends={data.getMe.friends}
							friendRequests={data.getMe.friendRequests}
						/>
					</div>
				</>
			)
		}}
	</GetMe>
)

// React.memo: 
// (<COMPONENT TO REMEMBER>, FUNC THAT RECIEVES PROPS ANF RETURNS:
// TRUE = NOT RERENDER)
// FALSE = RERENDER)
export const Home = React.memo(HomePage, (prevProps, props) => prevProps.serverId === props.serverId && prevProps.channelId === props.channelId)
