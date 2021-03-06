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
	justify-content: flex-start;
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
	cursor: pointer;
	height: 100%;
	padding: 0 18px;
	border-top: 1px solid transparent;
	border-right: 1px solid #3c3c3c;
	border-bottom: 1px solid transparent;
	border-left: 1px solid transparent;
	&:hover {
		background-color: #1e1e1e;
	}
`

export const Paragraph = styled.p`
	color: #ededed;
	margin-left: 15px;
	font-size: 17px;
	font-weight: bold;
`

export const LogOut = styled(LinkRouter)`
	font-family: BalooPaaji;
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
	margin-left: auto;
	&:hover {
		background-color: #9b5134;
		color: #aeaeae;
	}
`

export const NavBody = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 100%;
	padding: 1%;
`

export const NavItem = styled.span`
	border-radius: 3px;
	padding: 8px;
	font-size: 14px;
	cursor: pointer;
	color: #ededed;
	&:hover {
		background-color: #2d2d2d;
	}
`
