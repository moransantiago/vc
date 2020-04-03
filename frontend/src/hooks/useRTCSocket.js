import { useState, useEffect } from 'react'

import { peerSetUp } from '../utils/peer/main'

export const useRTCSocket = username => {
	const [socket, setSocket] = useState()

	useEffect(() => {
		peerSetUp(username).then(socket => setSocket(socket))
	}, [username])

	return [socket]
}
