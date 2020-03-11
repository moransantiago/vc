import styled from 'styled-components'

export const Button = styled.button`
    background: #8d00ff;
    border: 0;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    margin: 8px 0;
    text-align: center;
    font-family: Montserrat;
    &[disabled] {
        opacity: .3;
    }
`
