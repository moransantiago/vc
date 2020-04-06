import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const Title = styled.h1`
    font-family: BalooPaaji;
    font-size: 22px;
    font-weight: bold;
	color: #ededed;
	margin: 0 0 5px 0;
`

export const Div = styled.div`
    overflow-y: auto;
	color: #ededed;
`

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
