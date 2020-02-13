import styled, { css } from 'styled-components'

import { buttonsHover } from '../Styles/animations'

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
		background-color: #f0f0f0;
	}
	${props =>
		!props.isOnline &&
		css`
			{
				opacity: 0.5;
			}
		`}
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

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
		${props => (!props.disabled && buttonsHover({ time: '0.2s' }))};
	}
`

export const Header = styled.div`
	display: flex;
	align-items: center;
`
