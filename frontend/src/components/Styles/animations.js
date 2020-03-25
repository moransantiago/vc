import { css, keyframes } from 'styled-components'

export const buttonsHover = ({ time = '0.5s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${buttonsHoverKeyFrames} ${type} forwards; /* => forwards makes the animation stay as it finishes */
    `
    
export const inputFocus = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${inputKeyFrames} ${type} forwards;
    `
    
export const zoomServer = ({ time = '0.8s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${zoomServerKeyFrames} ${type} forwards;
    `
    
export const selectServer = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${currentServerKeyFrames} ${type} forwards;
	`

const buttonsHoverKeyFrames = keyframes`
    from {
        background-color: inherit;
		border: 1px solid inherit;
    }

    to {
		background-color: #3b3b3b;
		border: 1px solid #9b5134;
    }
`

const inputKeyFrames = keyframes`
    from {
        filter: blur(0.2px);
        border: 1px solid #ededed;
    }

    to {
        filter: blur(0);
        border: 1px solid rgb(140, 136, 168);
    }
`

const zoomServerKeyFrames = keyframes`
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
`

const currentServerKeyFrames = keyframes`
    from {
        width: 0%;
        left: 50%;
    }
    to {
        width: 70%;
        left: 15%;
    }
`
