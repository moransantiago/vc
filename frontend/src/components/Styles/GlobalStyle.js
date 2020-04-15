import { createGlobalStyle } from 'styled-components'

import Montserrat from '../../assets/fonts/Montserrat-Regular.ttf'
import BalooPaaji from '../../assets/fonts/BalooPaaji2-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
  	html, body {
		height: 100%;
        width: 100%;
        margin: 0;
        scroll-behavior: smooth;
  	}

  	h1, h2, h3, h4, h5, h6 {
		overflow: hidden;
  	}

	@font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat}) format('woff2'),
        url(${Montserrat}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    
	@font-face {
        font-family: 'BalooPaaji';
        src: local('BalooPaaji'), local('BalooPaaji'),
        url(${BalooPaaji}) format('woff2'),
        url(${BalooPaaji}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
