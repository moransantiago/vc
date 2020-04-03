import { useRef } from 'react'

export const useNewVideoElement = () => {
    const ref = useRef()

    const addVideoElement = () => {
        const newVideoElement = document.createElement('video')
		newVideoElement.style.flexGrow = 1
		newVideoElement.style.flexShrink = 1
		newVideoElement.style.flexBasis = '50%'
		newVideoElement.muted = true // => If the video is remote, we do not mute it
		newVideoElement.playsInline = true
		newVideoElement.autoPlay = true
        ref.current.appendChild(newVideoElement)
    }
    
    return [ref, addVideoElement]
}
