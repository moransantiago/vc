import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
		${props => !props.disabled && buttonsHover({ time: '0.2s' })};
	}
`

export const DivDropdown = styled.div`
	left: -20px;
	width: 240px;
	padding: 0;
`

export const DivDropdownContainer = styled.div`
	padding: 4px;
	border: 1px solid #4b4b4b;
	background-color: #424242;
	text-align: center;
`

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
	color: #ededed;
`

export const DivFooter = styled.div``

export const DivButtons = styled.div`
	padding: 6% 6% 6% 6%;
	display: flex;
	justify-content: space-between;
`

export const Tag = styled.span`
	position: absolute;
	top: -8px;
	left: 20px;
	border-radius: 50px !important;
	border: 2px solid #dbdbdb;
	color: #ffffff !important;
	background-color: #cc6b44 !important;
`

export const Input = styled.input`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #ededed;
	font-weight: bold;
	height: 32px;
	width: 100%;
	padding: 5px 10px;
	font-family: BalooPaaji;
`
