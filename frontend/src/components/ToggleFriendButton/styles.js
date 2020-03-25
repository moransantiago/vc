import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const Button = styled.button`
    display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	height: 30px;
	width: 30px;
	padding: 1px;
	border-radius: 3px;
	background-color: inherit;
	&:hover {
		${props => (!props.disabled && buttonsHover({ time: '0.2s' }))};
	}
`
