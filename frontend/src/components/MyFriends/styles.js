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

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
	color: #e6e6e6;
`

export const Title = styled.h1`
	position: fixed;
	font-size: 20px !important;
	margin: 0 0 4px 0;
	color: #e6e6e6;
`

export const DivFriends = styled.div`
	overflow-y: auto;
`

export const DivScrollable = styled.div`
	margin: 25px 0 0 0;
	overflow-y: auto;
	overflow-x: auto;
`
