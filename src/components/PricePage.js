
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'
import '../../src/blog.css'
import { PriceData } from '../data/BlogData'
// import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
// import { motion } from 'framer-motion'
import { DarkTheme } from './Themes'
import ParticlesComponent from '../subComponents/ParticleComponent'

// const MainContainer = styled(motion.div)`
// background-image: url(${img});
// background-size: cover;
// background-repeat: no-repeat;
// background-attachment: fixed;
// background-position: center;
// `
const Container = styled.div`
background-color: black;
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 5rem;
`
// const VideoContainer = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
// `;

// const VideoBackground = styled.video`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `;

// const BlackOverlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0,0,0,0) /* Adjust the opacity here */
// `;


// Framer-motion config
// const container = {

//     hidden: {opacity:0},
//     show: {
//       opacity:1,
  
//       transition:{
//         staggerChildren: 0.5,
//         duration: 0.5,
//       }
//     }
  
//   }

const PricePage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    useEffect(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.playbackRate = 1; // Adjust the playback rate here
        }
    }, []);
    return(
        <>
{/* 
                <MainContainer
                    variants={container}
                    initial='hidden'
                    animate='show'
                    exit={{opacity:0, transition:{duration: 0.5}}}> */}
                <ThemeProvider theme={DarkTheme}>
                
            <Container>
                    {/* <VideoContainer>
                        <VideoBackground autoPlay loop muted preload="auto" playsInline>
                            <source src={Video} type="video/mp4" />
                        </VideoBackground>
                    </VideoContainer>
                    <BlackOverlay />
                <LogoComponent theme='light'/>
                <PowerButton />
                <SocialIcons /> */}
                <AnchorComponent number={numbers}/>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticlesComponent theme='dark' />
                <Center>
                    <section className="pricing-section">
                            <div className="container">
                                <div className="sec-title text-center">
                                    <span className="title">Get plan</span>
                                    <h2>Choose a Plan</h2>
                                </div>
                                <div className="outer-box">
                                    <div className="row">
                                        {PriceData.map(blog => (
                                            <div key={blog.id} className="pricing-block col-lg-4 col-md-6 col-xs-12 col-xl-3 col-sm-12 wow fadeInUp">
                                                <div className="inner-box">
                                                    <div className="icon-box">
                                                        <div className="icon-outer"><i className={blog.icon} aria-hidden="true"></i></div>
                                                    </div>
                                                    <div className="price-box">
                                                        <div className="title">{blog.title}</div>
                                                        <h4 className="price">{blog.price}</h4>
                                                    </div>
                                                    <ul className="features">
                                                        {blog.features.map((feature, index) => (
                                                            <li key={index} className={feature.available ? 'true' : 'false'}>{feature.text}</li>
                                                        ))}
                                                    </ul>
                                                    <div className="btn-box">
                                                        <a href={blog.link} className="theme-btn">BUY plan</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                </Center>
                <BigTitle text="PRICE" top="5rem" left="5rem" />
            </Container>                
                
                
                
                </ThemeProvider>     

        {/* </MainContainer> */}

    </> 
    )

}

export default PricePage


