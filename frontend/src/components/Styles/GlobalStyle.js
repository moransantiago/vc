import { createGlobalStyle } from 'styled-components'

import Montserrat from '../../assets/fonts/Montserrat-Regular.ttf'

export const GlobalStyle = createGlobalStyle`
  	html, body {
		height: 100%;
  	}

	@font-face {
        font-family: 'Montserrat';
        src: local('Montserrat'), local('Montserrat'),
        url(${Montserrat}) format('woff2'),
        url(${Montserrat}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`
