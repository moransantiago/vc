import styled from 'styled-components'

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

export const DivTitle = styled.div`
	padding: 12px 12px 12px 38px;
	background-color: #282828;
	color: #e6e6e6;
	border-bottom: 1px solid #4f4f4f;
	border-top: 1px solid #4f4f4f;
	flex-grow: 1;
`

export const DivBodyChat = styled.div`
	padding: 0 5% 0 5%;
	overflow-y: auto;
	word-wrap: break-word;
	flex-grow: 1;
`

export const Title = styled.p`
	font-size: 20px;
	font-weight: 500;
`

export const Input = styled.input`
	border: 0;
	height: 38px;
	background-color: #5e5e5e;
	border-radius: 4px;
	width: 100%;
	color: #b3b3b3;
	font-weight: bolder;
	font-size: 16px;
	padding: 10px;
	font-family: Montserrat;
`

export const DivInput = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #4f4f4f;
	padding: 3%;
	flex-grow: 1;
`
