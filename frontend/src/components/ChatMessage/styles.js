import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
	min-width: 100%;
	height: auto;
	display: flex;
	padding: 1% 0;
	${({ isMine }) =>
		isMine &&
		css`
			 {
				flex-direction: row-reverse;
			}
		`}
`

export const DivMessage = styled.div`
	max-width: 65%;
	width: auto;
	height: auto;
	display: flex;
	${({ isMine }) =>
		isMine &&
		css`
			 {
				flex-direction: row-reverse;
			}
		`}
`

export const Img = styled.img`
	border-radius: 50%;
	overflow: hidden;
	object-fit: cover;
	min-height: 40px;
	min-width: 40px;
	max-width: 40px;
	max-height: 40px;
	margin-left: 15px;
	margin-right: 15px;
`

export const Span = styled.span`
	position: relative;
	background-color: #ededed;
	${({ isMine }) =>
		!isMine
			? css`
					 {
						border-radius: 0 4px 4px 4px;
					}
			  `
			: css`
					 {
						border-radius: 4px 0 4px 4px;
					}
			  `};
	display: flex;
	flex-direction: column;
	color: #464646;
	padding: 12px;
	&:after {
		content: '';
		background-color: #282828;
		position: absolute;
		${({ isMine }) =>
			!isMine
				? css`
						 {
							top: 0px;
							left: -10px;
							border-right: 10px solid #ededed;
							border-bottom: 10px solid transparent;
							box-shadow: 2px 0 0 0 #ededed;
						}
				  `
				: css`
						 {
							top: 0px;
							right: -10px;
							border-left: 10px solid #ededed;
							border-bottom: 10px solid transparent;
							box-shadow: -2px 0 0 0 #ededed;
						}
				  `};
		width: 0;
		height: 0;
	}
`

export const Title = styled.h1`
	color: inherit;
	font-weight: bolder;
`
