import React from 'react'

import { DivOverlay, DivStreams, DivClose } from './styles'

import { MdClose } from 'react-icons/md'

export const ConferenceModal = ({ onClick }) => (
    <DivOverlay>
        <DivStreams>
            <DivClose>
                <MdClose style={{'cursor': 'pointer'}} color='#ededed' size='24px' onClick={onClick} />
            </DivClose>
        </DivStreams>
    </DivOverlay>
)
