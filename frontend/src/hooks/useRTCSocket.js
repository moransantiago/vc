import { useState } from 'react'

import { peerSetUp } from '../utils/peer/main'

export const useRTCSocket = () => {
	const [socket, setSocket] = useState(null)

	const obtainSocket = async username => {
		if (socket === null) {
			const webSocket = await peerSetUp(username)
			await setSocket(webSocket)
			
			return webSocket
		}
	}

	return [socket, obtainSocket]
}
