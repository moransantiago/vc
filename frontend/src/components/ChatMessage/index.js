import React from 'react'

import { DivContainer, DivMessage, Img, Span, Title, ParagraphBody } from './styles'

export const ChatMessage = ({ message: { headers: { author, spoiler, isMine }, body } }) => (
    <DivContainer isMine={isMine} >
        <DivMessage isMine={isMine} >
            <Img src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
            <Span isMine={isMine}>
                {!isMine && <Title>{author.username}</Title>}
                <ParagraphBody>{body}</ParagraphBody>
            </Span>
        </DivMessage>
    </DivContainer>
)
