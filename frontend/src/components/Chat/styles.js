import styled from 'styled-components'

import { inputFocus } from '../Styles/animations'

export const DivColumn = styled.div`
	margin-top: 60px;
	background-color: #282828;
	border: 1px solid #4f4f4f;
`

export const DivTitle = styled.div`
	padding: 12px 12px 12px 38px;
	background-color: #282828;
	color: #e6e6e6;
	border-bottom: 1px solid #4f4f4f;
`

export const DivBodyChat = styled.div`
	padding: 0 5% 0 5%;
	overflow-y: auto;
	word-wrap: break-word;
	height: 75%;
`

export const Title = styled.p`
	font-size: 20px;
	font-weight: 500;
`

export const Input = styled.input`
	border: 1px solid #ededed;
	background-color: #ededed;
	height: 35px;
	width: 100%;
	padding: 5px 10px;
	font-family: Montserrat;
	&:hover {
		background-color: #e8e8e8;
	}
	&:focus {
		${inputFocus()};
	}
`

export const DivInput = styled.div`
	height: auto;
`
