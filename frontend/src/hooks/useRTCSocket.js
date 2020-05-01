import { useRef, useCallback } from 'react'

import { peerSetUp } from '../scripts/peer/main'

export const useRTCSocket = () => {
	const socket = useRef(null)

	const join = useCallback(async (token, channelId) => {
		if (socket.current !== null) {
			socket.current.emit('join', {
				auth: token,
				room: channelId,
			})
		} else {
			try {
				socket.current = await peerSetUp(token)
				socket.current.emit('join', {
					auth: token,
					room: channelId,
				})

			} catch (err) {
				console.log(err)
			}	
		}
	}, [])

	const leave = useCallback(async token => {
		if (socket.current !== null) {
			socket.current.emit('left', { auth: token })
		} else {
			try {
				socket.current = await peerSetUp(token)
				socket.current.emit('left', { auth: token })
			} catch (err) {
				console.log(err)
			}
		}
	}, [])

	const attachEvent = useCallback(async (token, eventName, cb) => {
		if (socket.current !== null) {
			socket.current.on(eventName, cb)
		} else {
			try {
				socket.current = await peerSetUp(token)
				socket.current.on(eventName, cb)
			} catch (err) {
				console.log(err)
			}
		}
	}, [])

	return { join, leave, attachEvent }
}
