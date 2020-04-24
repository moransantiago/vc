import React from 'react'

import {
	DivColumnVideos,
	DivVideos,
	Button,
	DivConferenceHeader,
} from './styles'

import { UserBubble } from '../UserBubble/'

import { FiMaximize2 } from 'react-icons/fi'

export const VideosColumn = ({ onClick, colapsed, users }) => {
	// const connectedUsers = user
	return users ? (
		<DivColumnVideos
			colapsed={colapsed}
			className={`column ${colapsed ? 'is-1' : 'is-4'}`}
		>
			<DivConferenceHeader colapsed={colapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			{colapsed ? (
				users.map((user, index) => <UserBubble key={index} {...user} width='40px' height='40px' />)
			) : (
				<DivVideos id='videos'></DivVideos>
			)}
		</DivColumnVideos>
	) : (
		<DivColumnVideos
			colapsed={colapsed}
			className={`column ${colapsed ? 'is-1' : 'is-4'}`}
		>
			<DivConferenceHeader colapsed={colapsed}>
				<Button onClick={onClick}>
					<FiMaximize2 size='16' color='rgb(200, 103, 64)' />
				</Button>
			</DivConferenceHeader>
			<DivVideos id='videos'></DivVideos>
		</DivColumnVideos>
	)
}
