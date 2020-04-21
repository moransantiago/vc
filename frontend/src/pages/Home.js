import React from 'react'

import { HomePageLayout } from '../components/HomePageLayout'

const HomePage = ({ serverId, chatId }) => (
	<HomePageLayout serverId={serverId} chatId={chatId} />
)

// TRUE = NOT RERENDER
// FALSE = RERENDER
export const Home = React.memo(
	HomePage,
	(prevProps, props) =>
		prevProps.serverId !== props.serverId &&
		prevProps.channelId !== props.channelId
)
