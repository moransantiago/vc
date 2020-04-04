import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 3px;
	padding: 5%;
	background-color: #2d2d2d;
	-webkit-box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);
	box-shadow: 0px 8px 40px -19px rgba(0, 0, 0, 0.75);
`

export const Span = styled.span`
	font-family: BalooPaaji;
	font-size: 12px;
	color: #ededed;
`

export const Input = styled.input`
	border: 1px solid #ededed;
	background-color: #ededed;
	border-radius: 4px;
	height: 35px;
	width: 100%;
	padding: 5px 10px;
	font-family: BalooPaaji;
	margin: 8px 0;
	&[disabled] {
		opacity: 0.3;
	}
	&:hover {
		background-color: #e8e8e8;
	}
`

export const DivColumns = styled.div`
	background-color: #373737;
`

export const Loader = styled.svg`
	animation: rotate 2s linear infinite;
	width: 18px;
	height: 18px;

	& .path {
		stroke: #ededed;
		stroke-linecap: round;
		animation: dash 1.5s ease-in-out infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`

export const DivColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 0;
	background-color: #373737;
`

export const Title = styled.h2`
	font-size: 26px;
	font-weight: bold;
	padding: 8px 0;
	font-family: BalooPaaji;
	color: #ededed;
`

export const Error = styled.span`
	color: red;
	font-size: 14px;
`

export const Link = styled(LinkRouter)`
	text-decoration: none;
`
