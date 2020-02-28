import { css, keyframes } from 'styled-components'

export const buttonsHover = ({ time = '0.5s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${buttonsHoverKeyFrames} ${type} forwards; /* => forwards makes the animation stay as it finishes */
    `
    
export const inputFocus = ({ time = '0.8s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${inputKeyFrames} ${type} forwards;
    `
    
export const transformServer = ({ time = '0.8s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${transformServerKeyFrames} ${type} forwards;
	`

const buttonsHoverKeyFrames = keyframes`
    from {
        background-color: inherit;
		border: 1px solid inherit;
    }

    to {
		background-color: #e6e6e6;
		border: 1px solid #d9d9d9;
    }
`

const inputKeyFrames = keyframes`
    from {
        filter: blur(0.2px);
        border: 2px solid #ededed;
    }

    to {
        filter: blur(0);
        border: 2px solid rgb(140, 136, 168);
    }
`

const transformServerKeyFrames = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`
