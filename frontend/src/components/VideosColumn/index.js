import React, { useState, useEffect, useContext } from 'react'

import {
	DivColumnVideos,
	DivVideos,
	DivUsers,
	Button,
	DivConferenceHeader,
} from './styles'

import { UserBubble } from '../UserBubble/'

import { FiMaximize2 } from 'react-icons/fi'

import { useNewVideoElement } from '../../hooks/useNewVideoElement'

import { Context } from '../../Context'

export const VideosColumn = ({ onClick, collapsed, isModalOpened, users, userId }) => {
	const [connectedUsers, setConnectedUsers] = useState([])
	const [ref, addVideoElement] = useNewVideoElement()
	const { isAuth, RTC } = useContext(Context)
	const { current } = ref

	// useEffect(() => {
	// 	if (isAuth && userId && users) {
	// 		console.log('offerOrAnswer.type, id, userId')
	// 		RTC.attachEvent(isAuth, 'signal', ({ id, offerOrAnswer, peerId }) => {
	// 			console.log('offerOrAnswer.type, id, userId')
	// 			if (offerOrAnswer.type === 'offer' && id === userId) {
	// 				setConnectedUsers(userList => {
	// 					const [user] = users.filter(user => user.id === peerId)
	// 					userList.push({ user, status: 'connecting' })
						
	// 					return userList
	// 				})
	// 			} else if (offerOrAnswer.type === 'answer' && id === userId) {
	// 				setConnectedUsers(userList => {
	// 					const [user] = users.filter(user => user.id === peerId)
	// 					userList.map(() => {
	// 						return userList.filter(u => {
	// 							if (u._id !== user._id) return false
	// 							return true
	// 						})
	// 					})
						
	// 					return userList
	// 				})
	// 			}
	// 		})
	// 	}
	// }, [isAuth, setConnectedUsers, RTC, userId, users])

	useEffect(() => {
		if (current) {
			const videoPortal = document.getElementById('videosPortal')
			const videos = videoPortal.childNodes
			videos.forEach(video => addVideoElement(video))
		}
	}, [current])

	return users ? (
		<DivColumnVideos
			collapsed={collapsed}
			className={`column ${collapsed ? 'is-2' : 'is-4'}`}
		>
			<DivConferenceHeader collapsed={collapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			<DivUsers style={!collapsed ? { display: 'none' } : null}>
				{collapsed && connectedUsers.map((user, index) => (
					<UserBubble
						key={index}
						{...user}
						width='38px'
						height='38px'
					/>
				))}
			</DivUsers>
			<DivVideos ref={ref} style={collapsed ? { display: 'none' } : null} id='videos' />
		</DivColumnVideos>
	) : (
		<DivColumnVideos
			collapsed={collapsed}
			className={`column ${collapsed ? 'is-2' : 'is-4'}`}
		>
			<DivConferenceHeader collapsed={collapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			<DivVideos />
		</DivColumnVideos>
	)
}
