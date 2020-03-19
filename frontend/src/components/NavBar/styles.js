import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Image = styled.img`
	border-radius: 50%;
	height: auto;
	overflow: hidden;
    margin: 0 0 0 10px;
	object-fit: cover;
	height: 45px;
	width: 45px;
`

export const Nav = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	min-height: 15px;
	width: 100vw;
	background-color: #242424;
`

export const NavHeader = styled.span`
	display: flex;
`

export const Paragraph = styled.p`
	color: #e6e6e6;
	margin-left: 15px;
	display: table-cell;
	vertical-align: middle;
	font-weight: bold;
`

export const Link = styled(LinkRouter)`
	font-family: Montserrat;
	color: #8c88a8;
	font-size: 16px;
	border-radius: 8px;
	background-color: inherit;
	border: 1px solid #8c88a8;
	padding: 10px;
	&:hover{
		border: 1px solid #464646;
		color: #464646;
	}
`
