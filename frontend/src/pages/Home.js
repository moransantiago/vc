import React from 'react'

import { HomeLayout } from '../components/HomeLayout'

const HomePage = ({ serverId, chatId }) => (
	<HomeLayout serverId={serverId} chatId={chatId} />
)

// TRUE = NOT RERENDER
// FALSE = RERENDER
export const Home = React.memo(
	HomePage,
	(prevProps, props) =>
		prevProps.serverId !== props.serverId &&
		prevProps.channelId !== props.channelId
)
