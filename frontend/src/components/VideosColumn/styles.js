import styled from 'styled-components'

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid transparent;
	height: 42px;
	width: 42px;
	padding: 0;
	border-radius: 50%;
	background-color: inherit;
	transition: 0.2s;
	&:hover {
		background-color: rgba(200, 103, 64, 0.2);
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
	transition: 0.2s;
`
