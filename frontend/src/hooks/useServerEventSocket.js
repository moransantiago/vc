import { useEffect, useContext } from 'react'
import ws from 'socket.io-client'

import { Context } from '../Context'

export const useServerEventSocket = () => {
	const { setServersSocket } = useContext(Context)

	useEffect(() => {
		const client = ws(`${process.env.REACT_APP_API}/ws/servers`)
		client.on('connect', () => setServersSocket(client))

		return () => {
			client.disconnect()
			setServersSocket(undefined)
		}
	}, [setServersSocket])
}
