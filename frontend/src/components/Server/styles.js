import styled, { css } from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { zoomServer } from '../Styles/animations'

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
	margin: 0 4px 0 4px;
	border-radius: 20%;
	&:hover {
		${zoomServer({ time: '0.1s' })};
	}
	${props =>
		props.currentServer &&
		css`
			 {
				transform: scale(1.1);
			}
		`}
`
