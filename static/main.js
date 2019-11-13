'use strict';

// On this codelab, you will be streaming only video (video: true).
const constraints = {
    video: {
        width: {
            max: 1280
        },
        height: {
            max: 720
        }
    }
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;

// Handles success by adding the MediaStream to the video element.
const gotLocalMediaStream = mediaStream => {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
const handleLocalMediaStreamError = error => {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(constraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);