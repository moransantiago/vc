import React from 'react'

import { DivContainer, Header, Image, Title } from './styles'

export const Card = ({
    disabled = false,
    children,
    title,
    userImage = 'https://citas.in/media/authors/diego-maradona.detail.jpg'
}) => (
    <DivContainer disabled={disabled}>
        <Header>
            <Image src={userImage} />
            <Title>{title}</Title>
        </Header>
        {children}
    </DivContainer>
)
