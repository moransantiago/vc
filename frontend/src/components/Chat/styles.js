import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const DivContainer = styled.div`
	margin: 0;
`

export const DivColumn = styled.div`
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #282828;
	height: calc(100vh - 60px - 50px);
`

export const DivColumnVideos = styled.div`
	padding: 2%;
	display: flex;
	flex-direction: column;
	background-color: #282828;
	height: calc(100vh - 60px - 50px);
	border-top: 1px solid;
	border-left: 1px solid;
`

export const DivTitle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 12px 12px 38px;
	background-color: #282828;
	color: #ededed;
	border-bottom: 1px solid #3c3c3c;
	border-top: 1px solid #3c3c3c;
	flex-grow: 1;
`

export const DivBodyChat = styled.div`
	padding: 0 5% 0 5%;
	overflow-y: auto;
	word-wrap: break-word;
	flex-grow: 1;
	color: #b7b7b7;
`

export const Title = styled.p`
	font-size: 25px;
	font-weight: bold;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	height: 30px;
	width: 30px;
	padding: 1px;
	border-radius: 3px;
	background-color: inherit;
	&:hover {
		${props => !props.disabled && buttonsHover({ time: '0.2s' })};
	}
`

export const Input = styled.input`
	border: 0;
	height: 38px;
	background-color: #5e5e5e;
	border-radius: 4px;
	width: 100%;
	color: #ededed;
	font-weight: bolder;
	font-size: 16px;
	padding: 10px;
	font-family: Montserrat;
`

export const DivInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #3c3c3c;
	padding: 3%;
	flex-grow: 1;
`
