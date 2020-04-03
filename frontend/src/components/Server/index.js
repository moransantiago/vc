import React from 'react'

import { Img, Link } from './styles'

export const Server = ({
	_id,
	chats: [firstChannelOnTheArray],
	currentserver = false,
	img = 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Indio_Solari_2_color.jpg'
}) => (
	<Link currentserver={currentserver} to={`/${_id}/${firstChannelOnTheArray._id}`}>
		<Img src={img} />
	</Link>
)
