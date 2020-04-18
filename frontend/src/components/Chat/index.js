import React, { useRef, useEffect } from 'react'

import 'bulma/css/bulma.css'

import {
	DivColumn,
	DivTitle,
	DivBodyChat,
	Title,
	DivInput,
	Input,
	SendButonn,
	Button,
	Form,
	Hero,
	DivNoMessages
} from './styles'

import { ChatMessage } from '../ChatMessage/index'

import { useInputValue } from '../../hooks/useInputValue'

import { MdSend } from 'react-icons/md'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const Chat = ({ sendMessage, chat, colapsed, setColapsed, isPersonal = false }) => {
	const message = useInputValue({ initialValue: '' })
	const bodyChat = useRef()

	useEffect(() => {
		bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight)
	}, [])

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (message.value !== '') {
			await sendMessage(chat._id, false, message.value)
			bodyChat.current.scrollTo(0, bodyChat.current.scrollHeight)
		}
		message.setValue('')
	}

	const ArrowIcon = colapsed ? IoIosArrowBack : IoIosArrowForward

	return (
		<>
			<DivColumn className={`column ${colapsed ? 'is-11' : 'is-8'} ${isPersonal && 'is-12'}`}>
				<DivTitle>
					<Title>{chat ? `${chat.name}'s chat` : `Chat`}</Title>
					{!isPersonal && (
						<Button
							onClick={() => setColapsed(colapsed ? false : true)}
						>
							<ArrowIcon size='20px' color='#ededed' />
						</Button>
					)}
				</DivTitle>
				<DivBodyChat ref={bodyChat}>
					{chat.messages && chat.messages.length > 0 ? (
						chat.messages.map((message, index) => (
							<ChatMessage key={index} message={message} />
						))
					) : (
						<Hero>
							<DivNoMessages>No messages yet :(</DivNoMessages>
						</Hero>
					)}
				</DivBodyChat>
				<DivInput>
					<Form onSubmit={handleSubmit}>
						<Input
							type='text'
							placeholder={`Your message on ${chat.name}`}
							{...message}
						/>
						<SendButonn>
							<MdSend color='#ededed' size='20px' />
						</SendButonn>
					</Form>
				</DivInput>
			</DivColumn>
		</>
	)
}
