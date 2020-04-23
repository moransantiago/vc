import React from 'react'

import { Link } from '@reach/router'

import { DivContainer, DivRow, DivMessage, Img, SpanHour, SpanBody, Title, ParagraphBody } from './styles'

export const ChatMessage = ({ message: { headers: { author, spoiler, isMine, time }, body } }) => (
    <DivContainer isMine={isMine} >
        <DivMessage isMine={isMine} >
            <Img src='https://citas.in/media/authors/diego-maradona.detail.jpg' />
            <DivRow isMine={isMine}>
                <SpanBody>
                    {!isMine &&
                        <Link to={`/user/${author._id}`}>
                            <Title>{author.username}</Title>
                        </Link>}
                    <ParagraphBody>{body}</ParagraphBody>
                </SpanBody>
                <SpanHour>{time}</SpanHour>
            </DivRow>
        </DivMessage>
    </DivContainer>
)
