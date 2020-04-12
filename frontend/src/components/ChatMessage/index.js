import React from 'react'

import { DivContainer, DivMessage, Img, Span, Title, ParagraphBody } from './styles'

export const ChatMessage = ({ isMine = false, author = 'author', body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget nisl feugiat, rutrum mauris congue, lacinia eros. Integer leo lorem, viverra sit amet bibendum tempus, eleifend eu dui.' }) => (
    <DivContainer isMine={isMine} >
        <DivMessage isMine={isMine} >
            <Img src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
            <Span isMine={isMine}>
                {!isMine && <Title>{author}</Title>}
                <ParagraphBody>{body}</ParagraphBody>
            </Span>
        </DivMessage>
    </DivContainer>
)
