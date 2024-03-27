import React from 'react'
import styled, { keyframes } from 'styled-components'
import { DarkTheme } from '../components/Themes'

// Define the new animation
const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
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

  /* Apply the new animation */
  animation: ${fadeInScale} 2s ease-in-out;
`

const LogoComponent = (props) => {
  return (
    <Logo color={props.theme}>
      DEVELITE
    </Logo>
  )
}

export default LogoComponent
