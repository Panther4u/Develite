// import React from 'react'
// import styled, { keyframes } from 'styled-components'
// import { DarkTheme } from '../components/Themes'

// // Define the new animation
// const fadeInScale = keyframes`
//   from {
//     opacity: 0;
//     transform: scale(0.5);
//   }
//   to {
//     opacity: 1;
//     transform: scale(1);
//   }
// `;

// const Logo = styled.h1`
//   display: inline-block;
//   color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
//   font-family: Poppins;
//   color: white;
//   position: fixed;
//   left: 2rem;
//   top: 1.2rem;
//   z-index: 3;
//   letter-spacing: 13px;
//   font-weight: 400;

//   /* Apply the new animation */
//   animation: ${fadeInScale} 2s ease-in-out;
// `

// const LogoComponent = (props) => {
//   return (
//     <Logo color={props.theme}>
//       DEVELITE
//     </Logo>
//   )
// }

// export default LogoComponent


import React from 'react';
import styled, { keyframes } from 'styled-components';
import { DarkTheme } from '../components/Themes';
import logo from '../assets/logo/Logo.png'; // Adjust the path according to your project structure

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

// Define the styled Logo component
const Logo = styled.div`
  display: inline-block;
  color: ${props => props.theme === 'dark' ? DarkTheme.text : DarkTheme.body};
  font-family: 'Poppins', sans-serif;
  position: fixed;
  left: 2rem;
  top: 1.2rem;
  z-index: 3;
  letter-spacing: 13px;
  font-weight: 400;
  animation: ${fadeInScale} 2s ease-in-out;

  img {
    width: 65px; /* Adjust the size as needed */
    height: auto;
  }
`;

// Define the LogoComponent
const LogoComponent = (props) => {
  return (
    <Logo theme={props.theme}>
      <img src={logo} alt="DEVELITE Logo" />
    </Logo>
  );
}

export default LogoComponent;
