import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const List = styled.ul`
	display: flex;
	justify-content: center;
	background-color: #2d2d2d;
	position: fixed;
	top: 0%;
	border-radius: 0 0 6px 6px;
	padding: 14px 0;
	max-width: 500px;
	max-height: 1500px;
	width: 100%;
    border-bottom: 1px solid #484848;
    border-left: 1px solid #484848;
    border-right: 1px solid #484848;
	z-index: 3;

	@media (max-width: 499px) {
		flex-direction: column;
	}
`

export const ListItem = styled.li`
	display: flex;
	color: #ededed;
	font-family: BalooPaaji;
	margin: 0 8px;
	white-space: nowrap;
	border-radius: 10px;
	padding: 2px 6px;
	transition: 0.2s;

	@media (max-width: 499px) {
		font-size: 18px;
	}

	@media (min-width: 500px) {
		font-size: 24px;
	}

	&:hover {
		background-color: #373737;
	}
`

export const Link = styled(LinkRouter)`
	cursor: pointer;
	position: relative;
	width: 100%;
	color: #ededed;
	transition: 0.2s;
	&:hover {
		color: #ededed;
	}
	&[aria-current] {
		@media (max-width: 499px) {
			flex-direction: column;
			&:after {
				content: '';
				width: 4px;
				height: 100%;
				border-radius: 0 5px 5px 0;
				position: absolute;
				top: 0;
				left: -14px;
				background-color: #ededed;
			}
		}

		@media (min-width: 500px) {
			flex-direction: column;
			&:after {
				content: '';
				width: inherit;
				height: 5px;
				border-radius: 5px 5px 0 0;
				position: absolute;
				bottom: -16px;
				left: 0;
				background-color: #ededed;
			}
		}
	}
`
