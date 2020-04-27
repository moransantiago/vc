import React from 'react'

import { DivContainer, Header, Image, Title } from './styles'

export const Card = ({
    disabled = false,
    children,
    title,
    img = true,
    imgSize = '30px',
    hoverColor = '#313131',
    userImage = 'https://citas.in/media/authors/diego-maradona.detail.jpg'
}) => (
    <DivContainer hover={hoverColor} disabled={disabled}>
        <Header>
            {img && <Image src={userImage} size={imgSize} />}
            <Title>{title}</Title>
        </Header>
        {children}
    </DivContainer>
)
