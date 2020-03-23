import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Image = styled.img`
	border-radius: 50%;
	overflow: hidden;
	object-fit: cover;
	height: 35px;
	width: 35px;
`

export const Nav = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	min-height: 50px;
	height: 50px;
	width: 100vw;
	padding: 0 20px;
	background-color: #242424;
`

export const NavHeader = styled.span`
	display: flex;
	align-items: center;
`

export const Paragraph = styled.p`
	color: #ededed;
	margin-left: 15px;
	font-weight: bold;
`

export const Link = styled(LinkRouter)`
	font-family: Montserrat;
	font-size: 16px;
	border-radius: 3px;
	border: 0;
	height: 34px;
	width: 90px;
	font-size: 16px;
	background-color: #c86740;
	color: #e6e6e6;
	font-weight: bold;
	text-align: center;
	padding: 5px;
	&:hover {
		background-color: #9b5134;
		color: #aeaeae;
	}
`
