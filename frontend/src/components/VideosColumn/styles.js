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
	cursor: pointer;
	&:hover {
		background-color: rgba(200, 103, 64, 0.2);
	}
`

export const DivConferenceHeader = styled.div`
	margin: 0 0 20px 0;
	display: flex;
	justify-content: ${({ collapsed }) => (collapsed ? 'center' : 'flex-end')};
	width: 100%;
`

export const DivUsers = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	overflow-y: auto;
`

export const DivVideos = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
`

export const DivColumnVideos = styled.div`
	padding: 2%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background-color: #282828;
	height: calc(100vh - 60px - 50px);
	border-left: 2px solid #3c3c3c;
	transition: 0.2s;
`
