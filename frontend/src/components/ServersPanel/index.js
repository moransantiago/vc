import React, { useState } from 'react'

import { ServersNavbar } from '../SeversNavbar'
import { SubmitButton } from '../SubmitButton'

import { TwitterPicker } from 'react-color'

import { useInputValue } from '../../hooks/useInputValue'

import {
	DivContainer,
	BodyDiv,
	Section,
	Input,
	Label,
	TextArea,
	CancelButton,
	DivResponsive,
	Img,
	Divider,
	Card,
	DivTextArea,
	Form
} from './styles'

export const ServersPanel = () => {
	const name = useInputValue({ initialValue: '' })
	const image = useInputValue({ initialValue: '', resetOnEsc: true })
    const channel = useInputValue({ initialValue: '' })
    const chat = useInputValue({ initialValue: '' })
	
	const [color, setColor] = useState('#EDEDED')
    const [channels, setChannels] = useState([])
    const [chats, setChats] = useState([])

	const reset = () => {
		setChannels(() => [])
		setChats(() => [])
		channel.setValue('')
		chat.setValue('')
		image.setValue('')
		name.setValue('')
		setColor('#EDEDED')
	}

	const onChangeColor = ({ hex }) => setColor(hex)

    const onKeyChannels = e => {
        if (e.keyCode === 13 && channels.length < 3) {
			e.preventDefault()
			if (channel.value !== '') {
				setChannels(prevState => {
					const newState = [...prevState]
					newState.push(channel.value)
	
					return newState
				})
				channel.setValue('')
			}
        }
    }

    const onKeyChats = e => {
		if (e.keyCode === 13 && chats.length < 3) {
			e.preventDefault()
			if (chat.value !== '') {
				setChats(prevState => {
					const newState = [...prevState]
					newState.push(chat.value)
	
					return newState
				})
				chat.setValue('')
			}
        }
    }

	const url = window.location.href
	let body

	if (url.includes('my-servers')) {
		body = (
			<BodyDiv>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
			</BodyDiv>
		)
	} else if (url.includes('create-server')) {
		body = (
			<BodyDiv>
				<Form onSubmit={() => {alert('saleeee')}}>
					<Section>
						<Label>Name</Label>
						<Input {...name} placeholder='Ex: School' />
					</Section>
					<Section>
						<Label className='responsive'>Appeareance</Label>
						<Divider className='responsive'/>
						<div className='column'>
							<div className='row'>
								<Label>Thumnail</Label>
								<Section>
									<Input {...image} placeholder='src (url)' />
									<Img
										src={image.value}
										border={color}
										alt='server image'
									/>
								</Section>
							</div>
							<div className='row'>
								<Label>Color</Label>
								<Section>
									<TwitterPicker
										color={color}
										colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107']}
										onChange={onChangeColor}
										width='100%'
										triangle='hide'
									/>
								</Section>
							</div>
						</div>
					</Section>
					<Section>
						<Label>
							Voice Channels
							<p className='responsive'>
								(3 max)
							</p>
						</Label>
						<div className='row'>
							<TextArea {...channel} onKeyDown={onKeyChannels} />
							<DivTextArea>
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									{channels.map(chat => <Card border={color}>{chat}</Card>)}
								</div>
							</DivTextArea>
						</div>
					</Section>
					<Section>
						<Label>
							Text Chats
							<p className='responsive'>
								(3 max)
							</p>
						</Label>
						<div className='row'>
							<TextArea {...chat} onKeyDown={onKeyChats} />
							<DivTextArea>
								<div style={{ display: 'flex', flexWrap: 'wrap' }}>
									{chats.map(chat => <Card border={color}>{chat}</Card>)}
								</div>
							</DivTextArea>
						</div>
					</Section>
					<Section>
						<div className='buttons'>
							<CancelButton type='button' onClick={reset}>Reset</CancelButton>
							<SubmitButton>Create my server</SubmitButton>
						</div>
					</Section>
				</Form>
			</BodyDiv>
		)
	} else if (url.includes('explore')) {
		body = (
			<BodyDiv>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
				<Section>sadaldna</Section>
			</BodyDiv>
		)
	}

	return (
		<DivContainer>
			<ServersNavbar />
			<DivResponsive>{body}</DivResponsive>
		</DivContainer>
	)
}
