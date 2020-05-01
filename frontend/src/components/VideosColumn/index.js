import React, { useEffect } from 'react'

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

export const VideosColumn = ({ onClick, collapsed, isModalOpened, users }) => {
	const [ref, addVideoElement] = useNewVideoElement()
	const { current } = ref

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
				{collapsed && users.map((user, index) => (
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
