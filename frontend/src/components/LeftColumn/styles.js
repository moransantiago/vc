import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const DivColumn = styled.div`
	background-color: #3c3c3c;
	padding: 15px 15px 15px 15px;
	display: flex;
	flex-direction: column;
`

export const Title = styled.h1`
	font-size: 20px;
	font-weight: bold;
	margin: 0 0 10px 0;
	color: #ededed;
`

export const DivContainer = styled.div`
	height: 85%;
	overflow-y: auto;
`

export const Link = styled(LinkRouter)`
	color: #4a4a4a;
    text-align: center;
    text-decoration: none;
`
