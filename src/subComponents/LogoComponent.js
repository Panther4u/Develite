import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from '../components/Themes'




const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
font-family: Poppins;
color:white;
position: fixed;
left: 2rem;
top: 1.2rem;
z-index:3;
letter-spacing: 13px;
font-weight: 400;
`

const LogoComponent = (props) => {
    return (
        <Logo color={props.theme}>
          DEVELITE
        </Logo>
    )
}

export default LogoComponent
