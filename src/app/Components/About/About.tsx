'use client';
import React, {useRef} from 'react'
import {motion, useInView} from 'framer-motion'
import { textSlideUp, visibleText } from './anime';
import FramerMagnetic from '../FramerMagnetic';

const About = () => {

  const container1 = useRef(null);
  const container2 = useRef(null);

  const isInView = useInView(container1);
  const isInView2 = useInView(container2);

  const phrase1 = `I am a passionate and enthusiastic programmer, always seeking new challenges to enhance my technical skills. I build large, scalable, production-grade web applications and hybrid mobile applications with ease, ensuring intuitive user experiences.`;
  const phrase2 = `The combination of my passion for design, code & interaction positions me in a unique place in the web development world.`
  return (
    <div
    id='about'
      className='bg-[#FFC330] relative grid justify-center place-content-evenly h-screen font-normal   
      2xl:bg-[#FFC330] 2xl:relative 2xl:flex 2xl:justify-center 2xl:place-content-center
      xl:bg-[#FFC330] xl:relative xl:flex xl:justify-center xl:place-content-center
      lg:bg-[#FFC330] lg:relative lg:flex lg:justify-center lg:place-content-center
      md:bg-[#FFC330] md:relative md:flex md:justify-center md:place-content-center
      sm:bg-[#FFC330] sm:relative sm:flex sm:justify-center sm:place-content-center'>

      <div
        className='text-[6vw] text-justify tracking-tighter w-[80vw]mt-[25vh] mx-[10vw]
        2xl:text-[2vw] 2xl:text-justify 2xl:tracking-tighter 2xl:w-[51vw] 2xl:mt-[25vh] 2xl:ml-[15vw]
        xl:text-[2vw] xl:text-justify xl:tracking-tighter xl:w-[45vw] xl:mt-[25vh] xl:ml-[15vw]
        lg:text-[2vw] lg:text-justify lg:tracking-tighter lg:w-[45vw] lg:mt-[25vh] lg:ml-[15vw]
        md:text-[3vw] md:text-justify md:tracking-tighter md:w-[45vw] md:mt-[26vh] md:ml-[15vw]
        sm:text-[3vw] sm:text-justify sm:tracking-tighter sm:w-[45vw] sm:mt-[26vh] sm:ml-[15vw]'
        ref={container1}
        >
        {
        phrase1.split(" ").map((items, index) => {
          return(
            <div 
              className='inline-flex overflow-hidden mx-[3px] text-justify'
              key={index}
              >
              <motion.span
                variants={textSlideUp}
                initial="initial"
                animate={isInView? "open":"close"}
                custom={index}
              >
                {items}
              </motion.span>
            </div>
          )
        })
        }
      </div>
  
      <motion.div
        className='text-left w-[40vw] mx-[10vw]
        2xl:text-left 2xl:w-[25vw] 2xl:mt-[27vh] 2xl:mr-[12vw] 2xl:text-[1.2vw]
        xl:text-left xl:w-[18vw] xl:mt-[27vh] xl:mr-[15vw] xl:text-[1.2vw]
        lg:text-left lg:w-[18vw] lg:mt-[27vh] lg:mr-[15vw] lg:text-[1.2vw]
        md:text-left md:w-[18vw] md:mt-[27vh] md:mr-[15vw] md:text-[2vw]
        sm:text-left sm:w-[18vw] sm:mt-[27vh] sm:mr-[15vw] sm:text-[2vw]'
        ref={container2}
        variants={visibleText}
        initial="initial"
        animate={isInView2?"open":"close"}

      >
        {phrase2}
      </motion.div>

      <FramerMagnetic>
      <div 
        className='absolute h-[150px] w-[150px] bg-black text-white flex justify-center place-content-center 
        rounded-[50%] mx-auto cursor-pointer top-[64vh] right-[5vw]
        2xl:absolute 2xl:top-[50vh] 2xl:right-[15vw] 2xl:h-[180px] 2xl:w-[180px]
        xl:absolute xl:top-[50vh] xl:right-[18vw] xl:h-[180px] xl:w-[180px]
        lg:absolute lg:top-[50vh] lg:right-[18vw] lg:h-[140px] lg:w-[140px]
        md:absolute md:top-[55vh] md:right-[15vw] md:h-[140px] md:w-[140px]
        sm:absolute sm:top-[70vh] sm:right-[12vw] sm:h-[140px] sm:w-[140px]'  
        //data-scroll data-scroll-speed={0.2}
        >
        <span
          className='my-auto'
          >About me</span>
      </div>
          </FramerMagnetic>    

    </div>
  )
}

export default About