import { useState } from 'react'
import ws from 'socket.io-client'

export const useServerEvents = () => {
	const [userData, setUserData] = useState(undefined)

	const wsClient = ws.connect(`${process.env.REACT_APP_API}/ws/servers`)
	wsClient.on('connect', () => {
		wsClient.on('message', data => {
			setUserData({ data })
		})
	})

	return { userData, setUserData }
}
