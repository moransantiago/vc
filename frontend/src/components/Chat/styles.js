import styled from 'styled-components'

import { inputFocus } from '../Styles/animations'

export const DivColumn = styled.div`
	margin-top: 70px;
`

export const DivTitle = styled.div`
	padding: 12px 12px 12px 38px;
	background-color: #d1d1d1;
`

export const DivBodyChat = styled.div`
	padding: 0 5% 0 5%;
	overflow-y: auto;
	word-wrap: break-word;
	height: 75%;
`

export const Title = styled.h1`
	font-size: 20px;
`

export const Input = styled.input`
	border: 1px solid #ededed;
	background-color: #ededed;
	border-radius: 4px;
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
	padding: 0 5% 5% 5%;
`
