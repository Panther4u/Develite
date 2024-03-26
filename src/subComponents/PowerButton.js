// Home button

import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'
import { motion } from 'framer-motion'

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
            <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    <NavLink to="/">
                <PowerBtn width={25} height={25} fill='white' />
                </NavLink>
                </motion.h2>
        </Power> 
    )
}

export default PowerButton



