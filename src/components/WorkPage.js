import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";


import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

// import { Work } from "../data/WorkData";
// import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import ParticlesComponent from "../subComponents/ParticleComponent";
import { TemplateData } from '../data/BlogData';
import BlogComponent from './BlogComponent';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  padding-left:20px;
  padding-right:20px;
  position: relative;
  display: flex;
  align-items: center;
`;

// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;
//   color: white;
// `;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

// Framer-motion Configuration
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,

//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     },
//   },
// };

const WorkPage = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticlesComponent theme='dark' />
        <Center>
          <div className="row justify-content-start">
            {
              TemplateData.map(blog => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 col-xl-3" key={blog.id}>
                  <BlogComponent blog={blog} />
                </div>
              ))
            }
          </div>
        </Center>
        {/* <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main> */}
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
// import LogoComponent from '../subComponents/LogoComponent';
// import SocialIcons from '../subComponents/SocialIcons';
// import PowerButton from '../subComponents/PowerButton';
// import { Blogs, TemplateData } from '../data/BlogData';
// import BlogComponent from './BlogComponent';
// import AnchorComponent from '../subComponents/Anchor';
// import BigTitle from "../subComponents/BigTitlte";
// import { motion } from 'framer-motion';

// const MainContainer = styled(motion.div)`
//   background-image: url(${img});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-attachment: fixed;
//   background-position: center;
  
// `;

// const Container = styled.div`
//   background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
//   width: 100%;
//   height: auto;
//   position: relative;
//   padding-bottom: 5rem;
//   padding: 10px;
// `;

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 10rem;
// `;

// // Framer-motion config
// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//       duration: 0.5,
//     }
//   }
// };

// const WorkPage = () => {
//   const [numbers, setNumbers] = useState(0);

//   useEffect(() => {
//     let num = (window.innerHeight - 70) / 30;
//     setNumbers(parseInt(num));
//   }, []);

//   return (
//     <MainContainer
//       variants={container}
//       initial='hidden'
//       animate='show'
//       exit={{
//         opacity: 0,
//         transition: { duration: 0.5 }
//       }}
//     >
//       <Container>
//         <LogoComponent />
//         <PowerButton />
//         <SocialIcons />
//         <AnchorComponent number={numbers} />
//         <BigTitle text="WORK" top="5rem" left="5rem" />
//         <Center>
//           <div className="row justify-content-center">
//             {
//               TemplateData.map(blog => (
//                 <div className="col-lg-4 col-md-6 col-sm-12 mb-4 col-xl-3" key={blog.id}>
//                   <BlogComponent blog={blog} />
//                 </div>
//               ))
//             }
//           </div>
//         </Center>
//       </Container>
//     </MainContainer>
//   );
// }

// export default WorkPage;

