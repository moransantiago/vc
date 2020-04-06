import { useState } from 'react'

import { peerSetUp } from '../utils/peer/main'

export const useRTCSocket = () => {
	const [socket, setSocket] = useState(null)

	const obtainSocket = async username => socket === null && await peerSetUp(username)

	return [socket, setSocket, obtainSocket]
}
