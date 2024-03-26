// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 1.3rem;
right:0.5rem;
transform: translate(-50%, 0);
border: none;
background-color: transparent;
padding: 0.3rem;
border-radius: 50%;
width: 2.2rem;
height: 2.2rem;

display: flex;
justify-content: center;
align-items:center;
z-index:3;

cursor: pointer;

&:hover{
    background-color: black;
    
    border: none;
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const PowerButton = () => {
    return (
        <Power>
        <NavLink to="/">
        <PowerBtn width={25} height={25} fill='white' />
        </NavLink>
        </Power>
    )
}

export default PowerButton



