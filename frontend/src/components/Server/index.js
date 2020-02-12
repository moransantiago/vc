import React from 'react'

import { Img } from './styles'

export const Server = ({ img = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Indio_Solari_2_color.jpg' }) => (
    <a href='/'>
        <Img src={img} />
    </a>
)
