import React from 'react'

import { HomeComponent } from '../components/HomeComponent'
import { Loader } from '../components/Loader'

import { GetMe } from '../containers/GetMe'

const HomePage = ({ serverId, chatId, navigate }) => (		
	<GetMe>
		{({ loading, error, data }) => {
			if (loading) return <Loader message='Loading...'/>
			if (error) return 'Internal server error'
			const server = serverId ? data.getMe.servers.filter(server => server._id === serverId)[0] : data.getMe.servers[0]._id
			const chat = chatId && server ? server.chats.filter(chat => chat._id === chatId)[0] : data.getMe.servers[0].chats[0]._id
			if (!serverId || !chatId) navigate(`/${server}/${chat}`)
			
			return <HomeComponent data={data.getMe} server={server} chat={chat} />
		}}
	</GetMe>
)

// React.memo: 
// (<COMPONENT TO REMEMBER>, FUNC THAT RECIEVES PROPS ANF RETURNS:
// TRUE = NOT RERENDER)
// FALSE = RERENDER)
export const Home = React.memo(HomePage, (prevProps, props) => prevProps.serverId !== props.serverId && prevProps.channelId !== props.channelId)
