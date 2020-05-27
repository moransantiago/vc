import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

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
	font-size: 22px;
	border-bottom: 2px solid #3c3c3c;
	color: #ededed;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid transparent;
	height: 42px;
	width: 42px;
	padding: 0;
	border-radius: 50%;
	background-color: inherit;
	position: absolute;
	right: 10px;
	transition: 0.2s;
	cursor: pointer;
	&:hover {
		background-color: rgba(200, 103, 64, 0.2);
	}
`

export const Link = styled(LinkRouter)`
	color: #c86740;
	font-size: 20px;
	margin-left: 15px;
`
