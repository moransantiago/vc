import styled, { css } from 'styled-components'

export const DivContainer = styled.div`
	min-width: 100%;
	height: auto;
	padding: 5px 0;
	display: flex;
	flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
	&:first-child {
		margin-top: auto;
	}
`

export const SpanHour = styled.span`
	opacity: 0.7;
	font-size: 14px;
	margin-left: 18px;
`

export const DivRow = styled.div`
	display: flex;
	align-items: flex-end;
	flex-direction: row;
	position: relative;
	background-color: #ededed;
	border-radius: ${({ isMine }) => isMine ? '12px 0 12px 12px' : '0 12px 12px 12px'};
	color: #464646;
	padding: 10px;
	&:after {
		content: '';
		position: absolute;
		top: 0px;
		border-bottom: 10px solid transparent;
		width: 0;
		height: 0;
		box-shadow: ${({ isMine }) => isMine ? '-2px 0 0 0 #ededed;' : '2px 0 0 0 #ededed'};
		${({ isMine }) =>
			!isMine
				? css`
						 {
							border-right: 10px solid #ededed;
							left: -10px;
						}
				  `
				: css`
						 {
							border-left: 10px solid #ededed;
							right: -10px;
						}
				  `};
	}
`

export const DivMessage = styled.div`
	max-width: 65%;
	width: auto;
	height: auto;
	display: flex;
	flex-direction: ${({ isMine }) => (isMine ? 'row-reverse' : 'row')};
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
	-webkit-box-shadow: -6px 12px 6px -10px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: -6px 12px 6px -10px rgba(0, 0, 0, 0.75);
	box-shadow: -6px 12px 6px -10px rgba(0, 0, 0, 0.75);
`

export const SpanBody = styled.span`
	display: flex;
	flex-direction: column;
`

export const Title = styled.h1`
	color: #c86740;
	cursor: pointer;
	font-weight: bolder;
	font-size: 17px;
`

export const ParagraphBody = styled.p`
	font-size: 16px;
	font-weight: lighter;
`
