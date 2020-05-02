import { useRef, useCallback } from 'react'

import { peerSetUp } from '../scripts/peer/main'

export const useRTCSocket = () => {
	const socket = useRef(null)

	const join = useCallback((token, channelId) => {
		if (socket.current !== null) {
			socket.current.emit('join', {
				auth: token,
				room: channelId,
			})
		} else if (peerSetUp) {
			peerSetUp(token)
				.then(client => {
					client.emit('join', {
						auth: token,
						room: channelId,
					})
					socket.current = client
				})
				.catch(err => console.log(err))
		}
	}, [])

	const leave = useCallback(token => {
		if (socket.current !== null) {
			socket.current.emit('left', { auth: token })
		} else if (peerSetUp) {
			peerSetUp(token)
				.then(client => {
					client.emit('left', { auth: token })
					socket.current = client
				})
				.catch(err => console.log(err))
		}
	}, [])

	const attachEvent = useCallback(async (token, eventName, cb) => {
		if (socket.current !== null) {
			socket.current.on(eventName, cb)
		} else if (peerSetUp) {
			peerSetUp(token)
				.then(client => {
					client.on(eventName, cb)
					socket.current = client
				})
				.catch(err => console.log(err))
		}
	}, [])

	const disconnect = useCallback(() => {
		if (socket.current !== null) {
			socket.current.disconnect()
		}
	}, [])

	return { join, leave, attachEvent, disconnect }
}
