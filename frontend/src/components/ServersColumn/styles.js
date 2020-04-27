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
	transition: 0.2s;
	${fadeInDisconnectButton({ time: '0.3s' })}
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
	user-select: none;
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
	user-select: none;
`

export const DivUsersConnected = styled.div`
    background-color: #808080;
    color: #ededed;
    padding: 5px;
    border-radius: 0 5px 5px 5px;
    position: relative;
    margin: 10px 0 10px 25px;
    /* box-shadow: 1px 1px 15px -4px #000; */
	&:before {
		content: '';
    	position: absolute;
    	top: -14px;
    	left: 0;
    	border-bottom: 8px solid #808080;
    	width: 0;
    	height: 0;
    	border-top: 8px solid transparent;
    	border-right: 8px solid transparent;
	}
	div {
		height: 30px;
	}
`

export const Div = styled.div`
	margin-bottom: 50px;
`

export const Button = styled.span`
	display: flex;
	width: 100%;
	margin: 5px 0;
`

export const Link = styled(LinkRouter)`
	color: #4a4a4a;
	text-align: center;
	text-decoration: none;
	position: relative;
	display: flex;
	margin: 5px 0;
	&[aria-current] {
		&:before {
			content: '';
			position: absolute;
			width: 8px;
			height: 8px;
			top: 35%;
			left: -18px;
			border-radius: 50%;
			background: #ffffff;
			cursor: pointer;
		}
	}
`
