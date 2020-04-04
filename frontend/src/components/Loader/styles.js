import styled from 'styled-components'

export const Div = styled.div`
	display: flex;
    flex-direction: column;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
    background-color: #373737;
`

export const Title = styled.h1`
    font-family: BalooPaaji;
    font-size: 30px;
	font-weight: bold;
    margin: 25px 0 0 0;
	color: #ededed;
`

export const Loader = styled.svg`
	animation: rotate 2s linear infinite;
	margin: -25px 0 0 -25px;
	width: 50px;
	height: 50px;

	& .path {
		stroke: #c86740;
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
