import styled from 'styled-components'

import { inputFocus, buttonsHover } from '../Styles/animations'

export const DivColumn = styled.div`
	border-top-left-radius: 5px;
	margin-top: 35px;
	padding: 15px 15px 15px 15px;
	box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

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

export const Title = styled.h1`
	position: fixed;
	font-size: 20px !important;
	margin: 0 0 4px 0;
`

export const DivDropdown = styled.div`
	left: -20px;
	width: 240px;
	padding: 0;
`

export const DivFriends = styled.div`
	overflow-y: auto;
`

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
`

export const DivButtons = styled.div`
	padding: 6% 6% 0 6%;
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
	border: 1px solid #e8e8e8;
	background-color: #ededed;
	border-radius: 4px;
	height: 35px;
	width: 100%;
	padding: 5px 10px;
	font-family: Montserrat;
	&:hover {
		background-color: #e8e8e8;
	}
	&:focus {
		${inputFocus()};
	}
`
