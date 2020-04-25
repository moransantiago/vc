import React from 'react'

import {
	DivColumnVideos,
	DivVideos,
	DivUsers,
	Button,
	DivConferenceHeader,
} from './styles'

import { UserBubble } from '../UserBubble/'

import { FiMaximize2 } from 'react-icons/fi'

export const VideosColumn = ({ onClick, collapsed, users }) => {
	return users ? (
		<DivColumnVideos
			collapsed={collapsed}
			className={`column ${collapsed ? 'is-1' : 'is-4'}`}
		>
			<DivConferenceHeader collapsed={collapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			<DivUsers>
				{collapsed && users.map((user, index) => (
					<UserBubble
						key={index}
						{...user}
						width='38px'
						height='38px'
					/>
				))}
			</DivUsers>
			<DivVideos style={collapsed ? { display: 'none' } : null} id='videos'></DivVideos>
		</DivColumnVideos>
	) : (
		<DivColumnVideos
			collapsed={collapsed}
			className={`column ${collapsed ? 'is-1' : 'is-4'}`}
		>
			<DivConferenceHeader collapsed={collapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			<DivVideos></DivVideos>
		</DivColumnVideos>
	)
}
