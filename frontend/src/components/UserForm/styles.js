import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { inputFocus } from '../Styles/animations'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 40%;
	height: 100vh;
	background-color: #e0e0e0;
`

export const Span = styled.span`
	font-family: Montserrat;
	font-size: 12px;
`

export const Input = styled.input`
	border: 1px solid #ededed;
	background-color: #ededed;
	border-radius: 4px;
	height: 35px;
	width: 100%;
	padding: 5px 10px;
	font-family: Montserrat;
	margin: 8px 0;
	&[disabled] {
		opacity: 0.3;
	}
	&:hover {
		background-color: #e8e8e8;
	}
	&:focus {
		${inputFocus()};
	}
`

export const Div = styled.div`
	padding: 16px;
	border-radius: 3px;
	background-color: #f7f7f7;
`

export const Title = styled.h2`
	font-size: 22px;
	font-weight: bold;
	padding: 8px 0;
	font-family: Montserrat;
`

export const Error = styled.span`
	color: red;
	font-size: 14px;
`

export const Link = styled(LinkRouter)`
	text-decoration: none;
`
