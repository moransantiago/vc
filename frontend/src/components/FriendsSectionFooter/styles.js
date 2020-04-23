import styled from 'styled-components'

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid transparent;
	height: 30px;
	width: 30px;
	padding: 1px;
	border-radius: 3px;
	background-color: inherit;
	transition: 0.2s;
	&:hover {
		background-color: #3b3b3b;
		border: 1px solid #9b5134;
	}
`

export const CancelButton = styled.button`
	position: absolute;
	padding: 5px;
	right: 4px;
	top: 10%;
	display: flex;
	border: 0;
	background-color: inherit;
	border-radius: 3px;
	transition: 0.1s;
	&:hover {
		background-color: #535353;
	}
`

export const DivInput = styled.div`
	position: relative;
`

export const DivDropdown = styled.div`
	left: -20px;
	width: 240px;
	padding: 0;
`

export const DivDropdownContainer = styled.div`
	padding: 4px;
	border: 1px solid #4b4b4b;
	background-color: #424242;
	text-align: center;
`

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
	color: #ededed;
`

export const DivFooter = styled.div``

export const DivButtons = styled.div`
	padding: 6% 6% 6% 6%;
	display: flex;
	justify-content: space-between;
`

export const Tag = styled.span`
	position: absolute;
	top: -8px;
	left: 17px;
	border-radius: 50%;
	color: #ffffff;
	background-color: #c86740;
	min-width: 20px;
	min-height: 20px;
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	box-shadow: 0px 0px 0px 3px #3c3c3c;
`

export const Input = styled.input`
	border: 0;
	background-color: #5e5e5e;
	border-radius: 4px;
	color: #ededed;
	font-weight: bold;
	height: 32px;
	width: 100%;
	padding: 5px 10px;
	font-family: BalooPaaji;
	margin-bottom: 5px;
	&:hover {
		background-color: #575757;
	}
`
