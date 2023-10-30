'use client';
import Image from 'next/image'
import React, { useRef, useLayoutEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { hm1Effects, hm2Effect, hmTitle } from './anime';
import Lottie from 'lottie-react';
import healthyMe from '../../../../public/assets/healthyMeAnime.json'
import { Amatic_SC } from 'next/font/google';
import { Caveat } from 'next/font/google';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: '500',
  subsets: ['cyrillic'],
  display: 'swap'
})

const hmFont = Amatic_SC({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

const hmFont2 = Caveat({
  weight: "600",
  subsets: ['latin'],
  display: 'swap',
})

const Projects = () => {

  const proContainer = useRef(null);
  const cursor = useRef(null);
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);

  const text = ["projects.", "projects."]

  const isInView1 = useInView(container1, { once: true });
  const isInView2 = useInView(container2, { once: true });
  const isInView3 = useInView(container3, { once: true });

  const textTl = gsap.timeline({ repeat: -1 });

  const handleToHealthyMe = () => {
    window.open("https://healthyme.kewalkhondekar.dev", '_blank')
}

  useLayoutEffect(() => {

    //cursor
    gsap.to(cursor.current, {
      opacity: 0.8,
      ease: "power2.inOut",
      repeat: -1
    })


    //words
    gsap.registerPlugin(TextPlugin);
    text.forEach(word => {
      let tl = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
      });
      tl.to(proContainer.current, {
        duration: 1.5,
        text: word
      })
      textTl.add(tl)
    })


  }, [])


  return (
    <section id='projects'>
      <div className={`${inter.className} flex bg-[#FFF3E0] uppercase p-4 text-[5vw]
        2xl:text-[3vw]
        xl:text-[3vw]
        lg:text-[2vw] `}>
        <p
          ref={proContainer}
          className='text-black'
        ></p>
        <span 
        ref={cursor}
        className='text-black font-extrabold opacity-0'>|</span>
      </div>
      <div className='flex flex-col place-items-center overflow-x-hidden bg-[#FFF3E0]
        2xl:flex 2xl:justify-center 2xl:flex-row 2xl:h-screen
        xl:flex xl:flex-row xl:justify-center xl:h-screen
        lg:flex lg:flex-row lg:justify-center lg:mx-1 lg:h-screen
        md:flex md:flex-col md:justify-center md:overflow-y-hidden md:h-screen
        sm:flex sm:flex-col sm:justify-center sm:overflow-y-hidden sm:h-screen'>
        <div 
        className=' 2xl: '>
          <Image
            alt='hm1'
            src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1697581063/Portfolio/HealthyMe/iphone1_gkyvhf.png"
            height={500}
            width={400}
            unoptimized
            className=' mt-[1vh] h-[300px] w-[200px] cursor-pointer
            2xl:h-[80vh] 2xl:w-[50vh] 2xl:mt-[8vh]
            xl:h-[80vh] xl:w-[50vh] xl:mt-[8vh]
            lg:h-[70vh] lg:w-[50vh] lg:mt-[8vh]
            md:h-[35vh] md:w-[21vh] md:-mt-[10vh]
            sm:h-[48vh] sm:w-[33vh] sm:-mt-[10vh]'
            onClick={handleToHealthyMe}
            data-scroll data-scroll-speed={0.2}
          />
        </div>

        <div className='relative flex flex-col'>
          <div className='2xl:relative'>
            <Image
              alt='hm2'
              src="https://res.cloudinary.com/ddhgokvc1/image/upload/v1698237787/Portfolio/HealthyMe/1_b0pfyo.png"
              height={850}
              width={850}
              className=' rounded-[2vw] border-2 mx-auto h-[60vw] w-[95vw] cursor-pointer
              2xl:rounded-[2vw] 2xl:border-2 2xl:my-[3vh] 2xl:h-[450px] 2xl:w-[850px]
              xl:rounded-[2vw] xl:border-2 xl:h-[450px] xl:w-[850px]
              lg:rounded-[2vw] lg:border-2 lg:h-[35vw] lg:w-[850px]
              md:rounded-[2vw] md:border-2 md:h-[40vh] md:w-[68vh]
              sm:rounded-[2vw] sm:border-2 sm:h-[30vh] sm:w-[68vh]'
              onClick={handleToHealthyMe} />
            <div className='text-white h-[10vh] w-[10vh] absolute top-[190px] left-5
              2xl:absolute 2xl:top-[425px] 2xl:left-5
              xl:absolute xl:top-[400px] xl:left-5
              lg:absolute lg:top-[30vw] lg:left-5
              md:absolute md:top-[35vh] md:left-5
              sm:absolute sm:top-[35vh] sm:left-5 '>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </div>
          </div>

          <div className='mt-[2vh] mb-[2vh] bg-white h-[20vh] w-[85vw] rounded-[3vw] border-2 mx-auto
          2xl:-mt-[2vh] 2xl:bg-white 2xl:h-[20vh] 2xl:w-[850px] 2xl:rounded-[2vw] 2xl:border-2 
          xl:mt-[2vh] xl:bg-white xl:h-[20vh] xl:w-[850px] xl:rounded-[2vw] xl:border-2
          lg:mt-[2vh] lg:bg-white lg:h-[18vh] lg:w-[69vw] lg:rounded-[2vw] lg:border-2
          md:mt-[2vh] md:bg-white md:h-[10vh] md:w-[90vw] md:rounded-[2vw] md:border-2
          sm:mt-[2vh] sm:bg-white sm:h-[10vh] sm:w-[90vw] sm:rounded-[2vw] sm:border-2 '>
            <div className='flex
            2xl:flex
            xl:flex
            lg:flex
            md:flex
            sm:flex'>
              <Lottie
                animationData={healthyMe}
                loop={true}
                autoplay={true}
                className='h-[70px] w-[70px]
                2xl:h-[70px] 2xl:w-[70px]
                xl:h-[70px] xl:w-[70px]
                lg:h-[60px] lg:w-[60px]
                md:h-[50px] md:w-[50px]
                sm:h-[50px] sm:w-[50px]'
              />
              <div
                className={`${hmFont2.className} text-[5vw] text-green-800 my-auto 2xl:text-[2vw] 2xl:text-green-800 2xl:my-auto
                xl:text-[2vw] xl:text-green-800 xl:my-auto
                lg:text-[1.8vw] lg:text-green-800 lg:my-auto
                md:text-[2.5vw] md:text-green-800 md:my-auto
                sm:text-[2.5vw] sm:text-green-800 sm:my-auto`} >
                HealthyMe</div>
            </div>
            <p className={`${hmFont2.className} text-[4vw] px-[1vw] 2xl:text-[1.5vw] 2xl:px-[1vw]
              xl:text-[1.5vw] xl:px-[1vw]
              lg:text-[1.5vw] lg:px-[1vw]
              md:text-[2vw] md:px-[1vw]
              sm:text-[2vw] sm:px-[1vw]`}>
              HealthyMe is an ecommerce app that provides vegan food sellers a unique platform to sell their
              healthy food items to their target consumers.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Projects
