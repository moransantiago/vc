import { useRef } from 'react'

export const useNewVideoElement = () => {
    const ref = useRef()

    const addVideoElement = video => {
        const newVideoElement = video.cloneNode(false)
        newVideoElement.style.flexGrow = 1
		newVideoElement.style.flexShrink = 1
		newVideoElement.style.flexBasis = '50%'
		newVideoElement.style.borderRadius = '4px'
		newVideoElement.style.border = '2px solid #3c3c3c'
		newVideoElement.style.margin = '10px'
        newVideoElement.muted = true

        ref.current.appendChild(newVideoElement)
    }
    
    return [ref, addVideoElement]
}
