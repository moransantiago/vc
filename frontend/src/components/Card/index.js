import React from 'react'

import { DivContainer, Header, Image, Buttons, Button } from './styles'

import { MdCall, MdMessage } from 'react-icons/md'

export const Card = ({
    disabled = false,
    title,
    userImage = 'https://citas.in/media/authors/diego-maradona.detail.jpg',
    isUser = false
}) => (
    <DivContainer disabled={disabled}>
        <Header>
            <Image src={userImage} />
            {title}
        </Header>
        {isUser && (
            <Buttons>
                <Button disabled={disabled}>
                    <MdCall size='15px' />
                </Button>
                <Button disabled={disabled}>
                    <MdMessage size='15px' />
                </Button>
            </Buttons>
        )}
    </DivContainer>
)
