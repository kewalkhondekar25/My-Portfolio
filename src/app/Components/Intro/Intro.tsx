"use client";
import React, { useEffect, useLayoutEffect } from 'react'
import { useRef } from 'react'
import Image from 'next/image';
import Pic from '../../../../public/assets/img2.jpg'
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Inter } from 'next/font/google';
import Gif from '../../../../public/assets/leftGIF.gif'

const inter = Inter({
  weight: '500',
  subsets: ['cyrillic'],
  display: 'swap'
})

const Intro = () => {

  const words = ["Full Stack Developer.", "Mobile App Developer.", "UI/UX Enthusiast."];

  const cursor = useRef(null);
  const wordBox = useRef(null);


  const wordTl = gsap.timeline({ repeat: -1 });

  useLayoutEffect(() => {

    //cursor
    gsap.to(cursor.current, {
      opacity: 0.8,
      ease: "power2.inOut",
      repeat: -1
    })

    //words
    gsap.registerPlugin(TextPlugin);
    words.forEach(word => {
      let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
      });
      tl.to(wordBox.current, {
        duration: 1.5,
        text: word
      })
      wordTl.add(tl)
    })


  }, [])


  return (
    <div className=' relative grid justify-start bg-[#FFF3E0] h-[95vh]
    2xl:bg-[#FFF3E0] 2xl:relative 2xl:grid 2xl:justify-start
    xl:bg-[#FFF3E0] xl:relative xl:grid xl:justify-start
    lg:bg-[#FFF3E0] lg:relative lg:grid lg:justify-start
    md:bg-[#FFF3E0] md:relative md:grid md:justify-start
    sm:bg-[#FFF3E0] sm:relative sm:grid sm:justify-start'>

      {/* <div className='mt-[-150px]'>
        <Image
          src={Pic}
          alt='pic'
          className=' rounded-[50%] object-cover object-right-top
          rotate-[20deg] h-[120px] w-[120px]  mx-auto '
        />
      </div> */}

      <div
        className='absolute top-[20vh] left-[1vw]
        2xl:absolute 2xl:top-[12vh]
        xl:absolute xl:top-[12vh]
        lg:absolute lg:top-[12vh]
        md:absolute md:top-[18vh]
        sm:absolute sm:top-[15vh]'>
        <div>
          <div>
            <p className={`${inter.className}text-[#2C2C2C] text-[7vh] uppercase font-bold h-[8vh]  
            2xl:text-[#2C2C2C] 2xl:text-[16vh] 2xl:uppercase 2xl:font-bold 2xl:h-[18vh]
            xl:text-[#2C2C2C] xl:text-[16vh] xl:uppercase xl:font-bold xl:h-[17vh]
            lg:text-[#2C2C2C] lg:text-[12vh] lg:uppercase lg:font-bold lg:h-[15vh]
            md:text-[#2C2C2C] md:text-[9vh] md:uppercase md:font-bold md:h-[10vh]
            sm:text-[#2C2C2C] sm:text-[9vh] sm:uppercase sm:font-bold sm:h-[10vh]`}> 
              kewal
            </p>
            <p className={`${inter.className}text-[#2C2C2C] text-[7vh] uppercase font-bold
            2xl:text-[#2C2C2C] 2xl:text-[16vh] 2xl:uppercase 2xl:font-bold
            xl:text-[#2C2C2C] xl:text-[16vh] xl:uppercase xl:font-bold
            lg:text-[#2C2C2C] lg:text-[12vh] lg:uppercase lg:font-bold
            md:text-[#2C2C2C] md:text-[9vh] md:uppercase md:font-bold
            sm:text-[#2C2C2C] sm:text-[9vh] sm:uppercase sm:font-bold`}>
              khondekar
            </p>
          </div>
        </div>

        <div>
          <span
            ref={wordBox}
            className='text-black text-[5vw] h-[10px] font-medium ml-[1vw] 
            2xl:text-[3vw] 2xl:text-black 
            xl:text-[3vw] xl:text-black
            lg:text-[3vw] lg:text-black lg:ml-[0.5vw]
            md:text-[3vw] md:text-black md:ml-[0.5vw]
            sm:text-[3vw] sm:text-black sm:ml-[0.5vw]'
          ></span>
          <span
            className='text-black font-extrabold text-[6vw] opacity-0
            2xl:text-black 2xl:font-extrabold 2xl:text-[3vw]
            xl:text-black xl:font-extrabold xl:text-[3vw]
            lg:text-black lg:font-extrabold lg:text-[3vw]
            md:text-black md:font-extrabold md:text-[3vw]
            sm:text-black sm:font-extrabold sm:text-[3vw]'
            ref={cursor}>|</span>
        </div>

      </div>

      <div>
        <Image
          className='absolute bottom-[30vh] -left-[5vw]
          2xl:absolute 2xl:bottom-[13vh] 2xl:-left-[1.2vw]
          xl:absolute xl:bottom-[12vh] xl:-left-[1.5vw]
          lg:absolute lg:bottom-[20vh] lg:-left-[2vw]
          md:absolute md:bottom-[35vh] md:-left-[2.5vw]
          sm:absolute sm:bottom-[25vh] sm:-left-[3vw]'
          alt="img"
          src={Gif}
          height={100}
          width={100} />

        {/* <div className='2xl:absolute 2xl:top-[47vh] 2xl:left-[5.3vw] 2xl:bg-pink-300 2xl:h-[20vh] 2xl:w-[1.3vw] 2xl:mx-auto'></div> */}

      </div>

    </div>
  )
}

export default Intro