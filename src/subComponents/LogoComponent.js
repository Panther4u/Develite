import React from 'react'
import styled, { keyframes } from 'styled-components'
import { DarkTheme } from '../components/Themes'

// Define the animation
const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Logo = styled.h1`
  display: inline-block;
  color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: Poppins;
  color: white;
  position: fixed;
  left: 2rem;
  top: 1.2rem;
  z-index: 3;
  letter-spacing: 13px;
  font-weight: 400;

  /* Apply animation */
  animation: ${slideInFromLeft} 2s ease-in-out;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      DEVELITE
    </Logo>
  )
}

export default LogoComponent
