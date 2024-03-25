// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'


const Power = styled.button`
position: fixed;
top: 1.2rem;
left:3rem;
transform: translate(-50%, 0);
border: none;
background-color: #FCF6F4;
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
    background-color: white;
    box-shadow: 0 0 3px 3px white;
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
        <PowerBtn width={25} height={25} fill='currentColor' />
        </NavLink>
        </Power>
    )
}

export default PowerButton