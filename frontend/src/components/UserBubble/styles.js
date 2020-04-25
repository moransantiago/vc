import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
    display: flex;
    padding: 4px;
    border-radius: 50%;
    border: 2px solid #3c3c3c;
    margin-bottom: 8px;
`

export const Img = styled.img`
	border-radius: 50%;
	height: auto;
	overflow: hidden;
	object-fit: cover;
	height: ${({ height }) => height};
	width: ${({ width }) => width};
	min-height: ${({ height }) => height};
	min-width: ${({ width }) => width};
`