import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const Div = styled.div`
	height: 60px;
	padding: 7px;
	overflow-x: auto;
	overflow-y: hidden;
	background-color: #282828;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	border-bottom: 1px solid #3c3c3c;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	height: 38px;
	width: 38px;
	padding: 0;
	border-radius: 50%;
	background-color: inherit;
	position: absolute;
	right: 10px;
	&:hover {
		${props => !props.disabled && buttonsHover({ time: '0.2s' })};
	}
`
