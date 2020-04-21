import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { newMessage } from '../Styles/animations'

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

export const MessageAlert = styled.div`
	border-radius: 50%;
	background-color: #e41500;
	min-width: 20px;
	min-height: 20px;
	width: 20px;
	height: 20px;
	box-shadow: 0px 1px 3px 0px #151515;
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
	border-bottom: 1px solid #4d4d4d;
`

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bolder;
	color: #ededed;
`

export const Subtitle = styled.h1`
	font-size: 18px;
	color: #ededed;
	background-color: #313131;
	border-radius: 4px;
	padding: 3px 8px;
	box-shadow: 1px 1px 2px 0px #151515;
	margin-bottom: 10px;
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
