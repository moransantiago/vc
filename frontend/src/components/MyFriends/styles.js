import styled from 'styled-components' 

import { Link as LinkRouter } from '@reach/router'

export const Subtitle = styled.h2`
	font-size: 15px !important;
	margin: 9px 0 8px 4px;
	color: #ededed;
	user-select: none;
`

export const Title = styled.h1`
	position: fixed;
	font-size: 20px !important;
	font-weight: bold;
	margin: 0 0 4px 0;
	color: #ededed;
	user-select: none;
`

export const Link = styled(LinkRouter)`
	margin: 5px 0;
	display: flex;
`

export const DivFriends = styled.div`
	overflow-y: auto;
`

export const DivScrollable = styled.div`
	margin: 25px 0 0 0;
	overflow-y: auto;
	overflow-x: auto;
`
