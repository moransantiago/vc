import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
	margin: 0 3px 0 3px;
    border: 1px solid #ddd;
    border-radius: 20%;
    
	&[aria-current] {
		/*<--If has aria-current: paint it black*/
		border: 1px solid red;
	}
`

export const Div = styled.div`
	height: 60px;
	padding: 5px;
	overflow-x: auto;
	overflow-y: hidden;
	position: fixed;
	border-radius: 0 0 12px 12px;
	display: flex;
	justify-content: center;
	align-content: center;
`
