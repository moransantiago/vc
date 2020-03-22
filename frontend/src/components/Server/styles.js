import styled, { css } from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { zoomServer } from '../Styles/animations'

export const Img = styled.img`
	border-radius: 20%;
	border: 1px solid #4f4f4f;
	overflow: hidden;
	object-fit: cover;
	width: 50px;
	height: 50px;
	min-width: 40px;
	min-height: 40px;
	max-height: 100%;
	max-width: 100%;
	&:after {
					content: '.';
					position: absolute;
					top: 0;
					font-size: 34px;
					line-height: 20px;
				}
`

export const Link = styled(LinkRouter)`
	margin: 0 4px 0 4px;
	display: inline-flex;
	border-radius: 20%;
	color: #ffffff;
	&:hover {
		${zoomServer({ time: '0.1s' })};
	}
	${props =>
		props.currentserver &&
		css`
			 {
				&:after {
					content: '.';
					position: absolute;
					top: 0;
					font-size: 34px;
					line-height: 20px;
				}
				transform: scale(1.1);
			}
		`}
`
