import styled from 'styled-components'

import { inputFocus } from '../Styles/animations'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 32%;
	height: 100vh;
    background-color: #e0e0e0;
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
	padding: 10px;
    border-radius: 3px;
	background-color: #ededed;
`

export const Button = styled.button`
	background: #8d00ff;
	border-radius: 3px;
	color: #fff;
	height: 32px;
	display: block;
	width: 100%;
	text-align: center;
	&[disabled] {
		opacity: 0.3;
	}
`

export const Title = styled.h2`
	font-size: 16px;
	font-weight: 500;
	padding: 8px 0;
`

export const Error = styled.span`
	color: red;
	font-size: 14px;
`
