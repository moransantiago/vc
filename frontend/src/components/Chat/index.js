import React, { useState, useRef, useEffect } from 'react'

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
	SendButonn,
	Button,
	Form,
	Hero,
	DivNoMessages,
	DivConferenceHeader,
} from './styles'

import { ChatMessage } from '../ChatMessage/index'

import { useInputValue } from '../../hooks/useInputValue'

import { MdSend } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FiMaximize2 } from 'react-icons/fi'

export const Chat = ({ sendMessage, chat, onClick }) => {
	const [colapsed, setColapsed] = useState(true)
	const message = useInputValue({ initialValue: '' })
	const bodyChat = useRef()

	useEffect(() => {
		bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight)
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		if (message.value !== '') {
			sendMessage(chat._id, false, message.value)
		}
		message.setValue('')
	}

	const ArrowIcon = colapsed ? IoIosArrowBack : IoIosArrowForward

	return (
		<DivContainer className='columns'>
			<DivColumn className={`column ${colapsed ? 'is-11' : 'is-8'}`}>
				<DivTitle>
					<Title>{chat ? `${chat.name}'s chat` : `Chat`}</Title>
					<Button
						onClick={() => setColapsed(colapsed ? false : true)}
					>
						<ArrowIcon size='20px' color='#ededed' />
					</Button>
				</DivTitle>
				<DivBodyChat ref={bodyChat}>
					{chat.messages && chat.messages.length > 0 ? (
						chat.messages.map((message, index) => (
							<ChatMessage
								author={message.headers.author}
								key={index}
								body={message.body}
							/>
						))
					) : (
						<Hero>
							<DivNoMessages>
								No messages yet :(
							</DivNoMessages>
						</Hero>
					)}
				</DivBodyChat>
				<DivInput>
					<Form onSubmit={handleSubmit}>
						<Input type='text' placeholder={`Your message on ${chat.name}`} {...message} />
						<SendButonn>
							<MdSend color='#ededed' size='20px' />
						</SendButonn>
					</Form>
				</DivInput>
			</DivColumn>
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
		</DivContainer>
	)
}
