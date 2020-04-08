import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

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

export const SpanServerTitle = styled.span`
	padding: 10px;
	height: 61px;
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
