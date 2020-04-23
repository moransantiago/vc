import styled from 'styled-components'

export const Title = styled.h1`
    font-family: BalooPaaji;
    font-size: 22px;
    font-weight: bold;
	color: #ededed;
	margin: 0 0 5px 0;
`

export const Div = styled.div`
    overflow-y: auto;
	color: #ededed;
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
