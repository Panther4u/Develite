// // src/pages/RestaurantPage.js
// import React, { useEffect, useRef } from "react";
// import styled, { ThemeProvider } from "styled-components";
// import { DarkTheme } from "../components/Themes";
// import { motion } from "framer-motion";
// import LogoComponent from "../subComponents/LogoComponent";
// import SocialIcons from "../subComponents/SocialIcons";
// import PowerButton from "../subComponents/PowerButton";
// import { YinYang } from "../components/AllSvgs";
// import ParticlesComponent from "../subComponents/ParticleComponent";
// import WebsiteComponent from "../components/WebsiteComponent";
// import { Restaurant } from "../data/WebsiteTemplateData";


// const Box = styled.div`
//   background-color: ${(props) => props.theme.body};
//   padding-left: 20px;
//   padding-right: 20px;
//   position: relative;
//   display: flex;
//   align-items: center;
//   height: 100vh; /* Set height to fill the entire screen */
// `;


// const Main = styled(motion.ul)`
//   position: fixed;
//   top: 12rem;
//   left: calc(10rem + 15vw);
//   height: 40vh;
//   display: flex;
//   color: white;
// `;
// const Rotate = styled.span`
//   display: block;
//   position: fixed;
//   right: 1rem;
//   bottom: 1rem;
//   width: 80px;
//   height: 80px;
//   z-index: 1;
// `;
// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding-top: 10rem;
//   width: 100%;
//   hight: 100%;
// `;

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

// const RestaurantPage = () => {
//   const ref = useRef(null);
//   const yinyang = useRef(null);

//   useEffect(() => {
//     let element = ref.current;

//     const rotate = () => {
//       element.style.transform = `translateX(${-window.pageYOffset}px)`;

//       return (yinyang.current.style.transform =
//         "rotate(" + -window.pageYOffset + "deg)");
//     };

//     window.addEventListener("scroll", rotate);
//     return () => {
//       window.removeEventListener("scroll", rotate);
//     };
//   }, []);

//   return (
//     <ThemeProvider theme={DarkTheme}>
//         <Box>
//           <LogoComponent theme="dark" />
//           <SocialIcons theme="dark" />
//           <PowerButton />
//           <ParticlesComponent theme="dark" />
//           <Center>
//             <div className="row justify-content-center ">
//               {Restaurant.map((website) => (
//                 <div
//                   className="col-lg-4 col-md-6 col-sm-12 mb-4 col-xl-3"
//                   key={website.id}
//                 >
//                   <WebsiteComponent website={website} />
//                 </div>
//               ))}
//             </div>
//           </Center>
//           <Rotate ref={yinyang}>
//             <YinYang width={80} height={80} fill={DarkTheme.text} />
//           </Rotate>
//         </Box>
//     </ThemeProvider>
//   );
// };

// export default RestaurantPage;



import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "../components/Themes";


import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { YinYang } from "../components/AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import ParticlesComponent from "../subComponents/ParticleComponent";
import { Restaurant } from "../data/WebsiteTemplateData";
import WebsiteComponent from "../components/WebsiteComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  padding-left: 20px;
  padding-right: 20px;
  position: relative;
  min-height: 100vh; /* Set min-height to cover at least the entire viewport */
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

const RestaurantPage = () => {
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
          <div className="row justify-content-center">
            {
              Restaurant.map(website => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4 col-xl-3" key={website.id}>
                  <WebsiteComponent website={website} />
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

export default RestaurantPage;