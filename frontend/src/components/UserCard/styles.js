import styled from 'styled-components'

export const DivContainer = styled.div`
	border-radius: 4px;
	padding: 2% 4%;
	margin: 5px 0;
	font-size: 14px;
	display: flex;
	flex-direction: row;
	align-items: center !important;
	/* &:after { Para poner un dot de connectado o no
		content: 'asdadsa.';
		position: absolute;
		bottom: 0;
		font-size: 34px;
		line-height: 20px;
	} */
	:hover {
		background-color: #f0f0f0;
	}
`

export const Image = styled.img`
	border: 1px solid #ddd;
	margin: 0 14px 0 0;
	border-radius: 50%;
	height: auto;
	overflow: hidden;
	object-fit: cover;
	height: 35px;
	width: 35px;
`
