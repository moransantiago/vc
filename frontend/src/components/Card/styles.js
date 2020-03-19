import styled from 'styled-components'

export const DivContainer = styled.div`
	border-radius: 4px;
	padding: 2% 4%;
	margin: 5px 0;
	font-size: 14px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center !important;
	&:hover {
		background-color: #393939;
	}
	&[disabled] {
		opacity: 0.5;
	}
`

export const Image = styled.img`
	margin: 0 8px 0 0;
	border-radius: 50%;
	height: auto;
	overflow: hidden;
	object-fit: cover;
	height: 30px;
	width: 30px;
	min-width: 30px;
	min-height: 30px;
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	overflow-x: hidden;
`

export const Title = styled.h1`
	font-size: 15px;
	color: #e6e6e6;
`
