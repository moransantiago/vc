import React, { useState } from 'react'

import 'bulma/css/bulma.css'

import {
	DivContainer,
	DivColumn,
	DivColumnVideos,
	DivTitle,
	DivVideos,
	DivBodyChat,
	Title,
	DivInput,
	Input,
	Button,
	DivConferenceHeader
} from './styles'

import { ChatMessage } from '../ChatMessage/index'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FiMaximize2 } from 'react-icons/fi'

export const Chat = ({ chat, onClick }) => {
	const [colapsed, setColapsed]  = useState(true)

	const ArrowIcon = colapsed ? IoIosArrowBack : IoIosArrowForward

	return (
		<DivContainer className='columns'>
			<DivColumn className={`column ${colapsed ? 'is-11' : 'is-8'}`}>
				<DivTitle>
					<Title>
						{chat ? `${chat.name}'s chat` : `Chat`}
					</Title>
					<Button onClick={() => setColapsed(colapsed ? false : true)}><ArrowIcon size='20px' color='#ededed' /></Button>
				</DivTitle>
				<DivBodyChat>
					<ChatMessage isMine />
					<ChatMessage isMine />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage isMine />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage />
					<ChatMessage isMine />
				</DivBodyChat>
				<DivInput>
					<Input type='text' placeholder={`Your message on chat`}></Input>
				</DivInput>
			</DivColumn>
			<DivColumnVideos colapsed={colapsed} className={`column ${colapsed ? 'is-1' : 'is-4'}`}>
				<DivConferenceHeader colapsed={colapsed}>
					<Button onClick={onClick} >
						<FiMaximize2 size='16px' color='#ededed' />
					</Button>
				</DivConferenceHeader>
				<DivVideos id='videos'>
				</DivVideos>
			</DivColumnVideos>
		</DivContainer>
	)
}
