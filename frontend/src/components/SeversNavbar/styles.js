import styled from 'styled-components'

import { Link as LinkRouter } from '@reach/router'

export const List = styled.ul`
    display: flex;
    background-color: #2d2d2d;
    border-radius: 6px;
    box-shadow: 0px 8px 40px -19px rgba(0,0,0,0.75);
    padding: 14px 0;
    max-width: 500px;
    max-height: 1500px;
`

export const ListItem = styled.li`
    display: flex;
    color: #ededed;
    font-family: BalooPaaji;
    font-size: 24px;
    margin: 0 8px;
    white-space: nowrap;
    border-radius: 10px;
    padding: 2px 6px;
    transition: 0.2s;
    &:hover {
        background-color: #373737;
    }
`

export const Link = styled(LinkRouter)`
    cursor: pointer;
    position: relative;
    width: 100%;
    color: #ededed;
    transition: 0.2s;
    &:hover {
        color: #ededed;
    }
    &[aria-current] {    
        &:after { 
            content: '';
            width: inherit;
            height: 5px;
            border-radius: 4px 4px 0 0;
            position: absolute;
            bottom: -16px;
            left: 0;
            background-color: #ededed;
        }
    }
`
