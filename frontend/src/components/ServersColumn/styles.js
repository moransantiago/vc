import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { newMessage, fadeInDisconnectButton } from '../Styles/animations'

export const DivContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0;
	background-color: #3c3c3c;
`

export const DivColumn = styled.div`
	padding: 15px;
	overflow-y: auto;
`

export const DisconnectButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3px;
	color: #b7b7b7;
	border: 0;
	cursor: default;
	border-radius: 3px;
	box-shadow: 0;
	background-color: inherit;
	transition: 0.4s;
	${fadeInDisconnectButton({ time: '0.4s' })}
	&:hover {
        background-color: #eb3434;
 		box-shadow: 1px 1px 6px -4px #000;
        color: #ededed;
	}
`

export const MessageAlert = styled.div`
	border-radius: 50%;
	background-color: #eb3434;
	min-width: 20px;
	min-height: 20px;
	width: 20px;
	height: 20px;
	box-shadow: 0px 1px 3px -1px #151515;
	color: #fff;
	justify-content: center;
	align-items: center;
	display: flex;
	font-weight: bolder;
	font-size: 14px;
	position: absolute;
	${newMessage()}
`

export const SpanServerTitle = styled.span`
	padding: 10px;
	height: 60px;
	background-color: #3c3c3c;
	border-bottom: 2px solid #4d4d4d;
`

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bolder;
	color: #ededed;
`

export const SubtitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #313131;
	border-radius: 4px;
	padding: 3px 8px;
	box-shadow: 1px 1px 2px 0px #151515;
	margin-bottom: 10px;
`

export const Subtitle = styled.h1`
	font-size: 18px;
	color: #ededed;	
	flex: 1;
`

export const Div = styled.div`
	margin-bottom: 25px;
`

export const Button = styled.button`
	all: unset;
	width: 100%;
`

export const Link = styled(LinkRouter)`
	color: #4a4a4a;
	text-align: center;
	text-decoration: none;
	position: relative;
	display: flex;
	&[aria-current] {
		&:before {
			content: '';
			position: absolute;
			width: 8px;
			height: 20%;
			top: 40%;
			left: -18px;
			border-radius: 50%;
			background: #ffffff;
			cursor: pointer;
		}
	}
`