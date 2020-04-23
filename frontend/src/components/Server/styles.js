import styled, { css } from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

import { selectServer } from '../Styles/animations'

export const Img = styled.img`
	border-radius: 20%;
	border: 1px solid #3c3b3b;
	overflow: hidden;
	object-fit: cover;
	width: 42px;
	height: 42px;
	min-width: 42px;
	min-height: 42px;
`

export const Link = styled(LinkRouter)`
	margin: 0 4px 0 4px;
	display: inline-flex;
	border-radius: 18%;
	position: relative;
	transition: 0.2s;
	${(props) =>
		!props.currentserver
			? css`
					 {
						&:hover {
							transform: scale(1.1);
						}
					}
			  `
			: css`
					 {
						&:after {
							content: '';
							position: absolute;
							top: -6px;
							height: 3px;
							background: #ededed;
							border-radius: 0px 0px 7px 7px;
							${selectServer({ time: '0.2s' })};
						}
						transform: scale(1.1);
					}
			  `};
`
