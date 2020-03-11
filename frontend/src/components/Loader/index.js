import React from 'react'

import { Loader as Spinner, Div, Title } from './styles'

export const Loader = ({ message = 'Loading'}) => (
	<Div>
		<Spinner viewBox='0 0 50 50'>
			<circle
				className='path'
				cx='25'
				cy='25'
				r='20'
				fill='none'
				strokeWidth='4'
			/>
		</Spinner>
        <Title>{message}</Title>
	</Div>
)
