import styled from 'styled-components'

import { buttonsHover } from '../Styles/animations'

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

export const DivConferenceHeader = styled.div`
	margin: 0 0 20px 0;
	display: flex;
	justify-content: ${({ colapsed }) => (colapsed ? 'center' : 'flex-end')};
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
	border-left: 2px solid #3c3c3c;
`
