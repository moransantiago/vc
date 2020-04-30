import { useState, useCallback } from 'react'

import { peerSetUp } from '../scripts/peer/main'

export const useRTCSocket = () => {
	const [socket, setSocket] = useState(null)

	const join = useCallback(async (username, channelId) => {
		if (!socket) {
			try {
				const webSocket = await peerSetUp(username)
				webSocket.emit('join', {
					id: username,
					room: channelId,
				})

				await setSocket(webSocket)
			} catch (err) {
				console.log(err)
			}
		} else {
			socket.emit('join', {
				id: username,
				room: channelId,
			})
		}
	}, [socket])

	const leave = useCallback(async username => {
		if (!socket) {
			try {
				const webSocket = await peerSetUp(username)
				webSocket.emit('left', { id: username })

				await setSocket(webSocket)
			} catch (err) {
				console.log(err)
			}
		} else {
			socket.emit('left', { id: username })
		}
	}, [socket])

	const attachEvent = useCallback(async (eventName, cb) => {
		if (!socket) {
			try {
				const webSocket = await peerSetUp(username)
				webSocket.on(eventName, cb)

				await setSocket(webSocket)
			} catch (err) {
				console.log(err)
			}
		} else {
			socket.on(eventName, cb)
		}
	}, [socket])

	return { join, leave, attachEvent }
}
