import styled from 'styled-components'

export const Button = styled.button`
    background-color: #c86740;
    border: 0;
    border-radius: 3px;
    color: #ffffff;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 8px 0;
    text-align: center;
    font-size: 16px;
    font-family: BalooPaaji;
    cursor: pointer;
    &[disabled] {
        opacity: .3;
    }
`
