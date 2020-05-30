import { css, keyframes } from 'styled-components'

export const inputFocus = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${inputKeyFrames} ${type} forwards;
	`

export const selectServer = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${currentServerKeyFrames} ${type} forwards;
	`

export const newMessage = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${unreadMessageKeyFrames} ${type} forwards;
	`

export const zoomDisconnectButton = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${zoomDisconnectButtonKeyFrames} ${type} forwards;
	`

export const fadeInDisconnectButton = ({ time = '0.2s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${fadeInDisconnectButtonKeyFrames} ${type} forwards;
    `

export const fadeInNewMessages = ({ time = '0.5s', type = 'ease' } = {}) =>
	css`
		animation: ${time} ${fadeInNewMessagesKeyFrames} ${type} forwards;
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

const unreadMessageKeyFrames = keyframes`
    from {
        right: -38px;
    }
    to {
        right: 10px;
    }
`

const zoomDisconnectButtonKeyFrames = keyframes`
    from {
        background-color: inherit;
		box-shadow: 0 0 0 0 #0000;
        color: #b7b7b7
    }
    to {
        background-color: #eb3434;
		box-shadow: 1px 1px 2px 1px #0000;
        color: #ededed
    }
`

const fadeInDisconnectButtonKeyFrames = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const fadeInNewMessagesKeyFrames = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
