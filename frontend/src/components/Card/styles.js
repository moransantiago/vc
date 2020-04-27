import styled from 'styled-components'

export const DivContainer = styled.div`
	flex: 1;
	border-radius: 4px;
	padding: 2% 4%;
	font-size: 14px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	cursor: pointer;
	transition: 0.1s;
	&:hover {
		background-color: ${({ hover }) => hover};
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
	height: ${({ size }) => size};
	width: ${({ size }) => size};
	min-width: ${({ size }) => size};
	min-height: ${({ size }) => size};
`

export const Header = styled.div`
	display: flex;
	align-items: center;
	overflow-x: hidden;
`

export const Title = styled.h1`
	font-size: 15px;
	font-weight: bolder;
	color: #ededed;
`
