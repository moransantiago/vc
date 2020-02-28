import styled, { css } from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { transformServer } from '../Styles/animations'

export const Img = styled.img`
	border-radius: 20%;
	overflow: hidden;
	object-fit: cover;
	width: 50px;
	height: 50px;
	min-width: 40px;
	min-height: 40px;
	max-height: 100%;
	max-width: 100%;
`

export const Link = styled(LinkRouter)`
	margin: 0 3px 0 3px;
	border: 1px solid #ddd;
	border-radius: 20%;
	&:hover {
		${transformServer({ time: '0.1s' })};
	}
	${props =>
		props.currentServer &&
		css`
			 {
				border: 2px solid red;
			}
		`}
`
