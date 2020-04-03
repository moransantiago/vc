import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const DivColumn = styled.div`
	background-color: #3c3c3c;
	padding: 15px 15px 15px 15px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin: 0 0 10px 0;
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
		&::before {
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
