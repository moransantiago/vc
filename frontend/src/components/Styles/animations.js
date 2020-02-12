import { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${fadeInKeyFrames} ${type};
	`
export const inputFocus = ({ time = '0.8s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${inputKeyFrames} ${type} forwards;
	`

const fadeInKeyFrames = keyframes`
    from {
        opacity: 0.4;
        filter: blur(1px);
    }

    to {
        opacity: 1;
        filter: blur(0);
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
