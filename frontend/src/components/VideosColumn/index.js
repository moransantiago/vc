import React from 'react'

import {
	DivColumnVideos,
	DivVideos,
	Button,
	DivConferenceHeader,
} from './styles'

import { FiMaximize2 } from 'react-icons/fi'

export const VideosColumn = ({ onClick, colapsed }) => (
    <DivColumnVideos
		colapsed={colapsed}
		className={`column ${colapsed ? 'is-1' : 'is-4'}`}
	>
		<DivConferenceHeader colapsed={colapsed}>
			<Button onClick={onClick}>
				<FiMaximize2 size='16px' color='#ededed' />
			</Button>
		</DivConferenceHeader>
		<DivVideos id='videos'></DivVideos>
	</DivColumnVideos>
)
