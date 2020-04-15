import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

export const DivContainer = styled.div`
	margin: 0;
`

export const DivConferenceHeader = styled.div`
	margin: 0 0 20px 0;
	display: flex;
	justify-content: ${({ colapsed }) => (colapsed ? 'center' : 'flex-end')};
`

export const Video = styled.video`
	flex: 1 1 50%;
`

export const DivColumn = styled.div`
	padding: 0;
	display: flex;
	flex-direction: column;
	background-color: #282828;
	height: calc(100vh - 60px - 50px);
`

export const DivVideos = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
`

export const DivColumnVideos = styled.div`
	padding: 2%;
	width: ${({ colapsed }) =>
		!colapsed
			? '33.3333333333333333333333333333333% !important'
			: '8.33333333333333333333333333333333% !important'};
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	background-color: #282828;
	height: calc(100vh - 60px - 50px);
	border-top: 1px solid #3c3c3c;
	border-left: 1px solid #3c3c3c;
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
	flex-grow: 0;
	-webkit-box-shadow: 0px 6px 12px -9px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 6px 12px -9px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 6px 12px -9px rgba(0, 0, 0, 0.75);
`

export const DivBodyChat = styled.div`
	overflow-y: auto;
	word-wrap: break-word;
	flex-grow: 18;
	flex-shrink: 18;
	color: #b7b7b7;
	display: flex;
	flex-direction: column;
`

export const Form = styled.form`
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
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
		${(props) => !props.disabled && buttonsHover({ time: '0.2s' })};
	}
`

export const Input = styled.input`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px 0 0 4px;
	min-height: 40px;
	height: 50%;
	width: 90%;
	color: #ededed;
	font-weight: bolder;
	font-size: 16px;
	padding: 15px;
	font-family: BalooPaaji;
`

export const SendButonn = styled.button`
	background-color: #5e5e5e;
	border: 0;
	border-radius: 0 4px 4px 0;
	height: 50%;
	width: 50px;
	min-height: 40px;
	min-width: 40px;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: #535353;
	}
`

export const DivInput = styled.div`
	-webkit-box-shadow: 0px -6px 12px -9px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px -6px 12px -9px rgba(0, 0, 0, 0.75);
	box-shadow: 0px -6px 12px -9px rgba(0, 0, 0, 0.75);
	border-top: 1px solid #3c3c3c;
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 80px;
	overflow: hidden;
	padding: 0 2%;
`

export const Hero = styled.div`
	padding: 2%;
`

export const DivNoMessages = styled.div`
	color: #ededed;
	background-color: #b7b7b7;
	font-size: 25px;
	font-weight: bolder;
	padding: 3%;
	border-radius: 6px;
`
