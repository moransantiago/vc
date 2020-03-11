import styled from 'styled-components'

export const Image = styled.img`
	border: 1px solid #ddd;
	border-radius: 50%;
	height: auto;
	overflow: hidden;
    margin: 0 0 0 10px;
	object-fit: cover;
	height: 45px;
	width: 45px;
`

export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center !important;
	margin: 0 400px 0 0;
	height: 10vh;
	padding: 8px;
	border: 2px solid #ededed;
`

export const NavSpan = styled.span`
	display: flex;
	flex-direction: column;
	margin-left: 15px;
	text-align: left !important;
`

export const Button = styled.button`
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
