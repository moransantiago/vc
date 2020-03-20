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

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
	color: #e6e6e6;
`

export const DivFooter = styled.div`
	position: fixed;
	bottom: 0px;
`

export const DivButtons = styled.div`
	padding: 6% 6% 6% 6%;
	display: flex;
	justify-content: space-between;
`

export const Tag = styled.span`
	position: absolute;
	top: -5px;
	left: 18px;
	border-radius: 50px !important;
	border: 2px solid #dbdbdb;
	color: #ffffff !important;
	background-color: rgb(140, 136, 168) !important;
`

export const Input = styled.input`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #b3b3b3;
	font-weight: bolder;
	height: 32px;
	width: 100%;
	padding: 5px 10px;
	font-family: Montserrat;
`
