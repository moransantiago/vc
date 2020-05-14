import React, { useState } from 'react'

import { ServersNavbar } from '../SeversNavbar'
import { SubmitButton } from '../SubmitButton'

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
} from './styles'

export const ServersPanel = () => {
    const image = useInputValue({ initialValue: '', resetOnEsc: true })
    const channel = useInputValue({ initialValue: '', resetOnEsc: true })
    const chat = useInputValue({ initialValue: '', resetOnEsc: true })

    const [channels, setChannels] = useState([])
    const [chats, setChats] = useState([])

    const onKeyChannels = e => {
        if (e.keyCode === 13) {
            console.log(e.target)
            setChannels(prevState => {
                console.log(prevState)
                const withNewChannel = prevState.push(channel.value)
                return withNewChannel
            })
        }
    }

    const onKeyChats = e => {
        if (e.keyCode === 13) {
            console.log(e.target)
            setChats(prevState => prevState.push(chat.value))
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
				<Section>
					<Label>Name</Label>
					<Input placeholder='Ex: School' />
				</Section>
				<Section>
					<Label>Image</Label>
					<div>
						<Img src={image.value} placeholder='server image' />
						<Input {...image} placeholder='src (url)' />
					</div>
				</Section>
				<Section>
					<Label>Voice Channels</Label>
					<TextArea {...channel} onKeyDown={onKeyChannels} />
				</Section>
				<Section>
					<Label>Text Chats</Label>
					<TextArea {...chat} onKeyDown={onKeyChats} />
				</Section>
				<Section>
					<div className='buttons'>
						<CancelButton>Reset</CancelButton>
						<SubmitButton>Create my server</SubmitButton>
					</div>
				</Section>
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
