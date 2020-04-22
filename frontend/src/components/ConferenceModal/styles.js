import styled from 'styled-components'

export const DivOverlay = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const DivStreams = styled.div`
	position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
	height: 80%;
	flex: 0 1 80vw;
	background-color: #242424;
	text-align: center;
	border-radius: 4px;
	border: 2px solid #3c3c3c;
`

export const DivClose = styled.div`
   position: absolute;
   top: 5px;
   right: 5px;
`
