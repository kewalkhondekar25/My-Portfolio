'use client';
import Image from 'next/image'
import React from 'react'
import { useRef, useLayoutEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { techList } from '../../../../Utils/utils'
import { Inter } from 'next/font/google';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

const inter = Inter({
  weight: '500',
  subsets: ['latin'],
  display: 'swap'
})

const Skills = () => {

  const container = useRef(null);
  const proContainer = useRef(null);
  const cursor = useRef(null);
  const isInView = useInView(container);

  const text = ["technical skills.", "`${technical skills}`;"]
  const textTl = gsap.timeline({ repeat: -1 });

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

  const handelMouseEnter = (e: any, color: any) => {
    if (window.innerWidth <= 850) {
      gsap.to(e.target, { backgroundColor: color, top: "-2vh", duration: 0.3 });
    } else {
      gsap.to(e.target, { backgroundColor: color, top: "-5vh", duration: 0.3 });
    }
  }

  const handelMouseLeave = (e: any, color: any) => {
    gsap.to(e.target, { background: "white", top: "0vw", duration: 0.3, delay: 0.2 });
  }

  useLayoutEffect(() => {
    //gsap.registerPlugin(ScrollTrigger);
    // gsap.to(container.current, {opacity:1, duration: 0.3})
  }, [])

  return (
    <section>
      <div className={`${inter.className} flex uppercase p-4 mt-5 text-[5vw] 
      2xl:text-[3vw]
      xl:text-[3vw]
      lg:text-[2vw] `}>
        <p
          ref={proContainer}
          className={`${inter.className}'text-black'`}
        ></p>
        <span 
        ref={cursor}
        className='text-black font-extrabold opacity-0 '>|</span>
      </div>
      <div
        className=' relative uppercase flex my-[5vh]
      2xl:flex 2xl:my-[10vh]
      xl:flex xl:my-[10vh]
      lg:flex lg:my-[10vh]
      md:flex md:my-[10vh]
      sm:flex sm:my-[10vh]'>
        <div className='flex flex-col w-[100vw] 
      2xl:flex 2xl:flex-col 2xl:w-[100vw]
      xl:flex xl:flex-col xl:w-[100vw]
      lg:flex lg:flex-col lg:w-[100vw] 
      md:flex md:flex-col md:w-[100vw]
      sm:flex sm:flex-col sm:w-[100vw]'>
          {/* <label className='my-[10vh]
        2xl:my-[10vh]
        xl:my-[10vh]'>
            technical skills
          </label> */}
          {
            techList.map((items, index) => {
              const { title, color, src } = items;
              return (
                <div
                  key={index}
                  className='relative border-t border-0 border-black cursor-pointer
                flex justify-between  -mb-[2.5vh] bg-white
                2xl:flex 2xl:justify-between  2xl:-mb-[6vh] 2xl:bg-white
                xl:flex xl:justify-between  xl:-mb-[6vh] xl:bg-white 
                lg:flex lg:justify-between  lg:-mb-[5vh] lg:bg-white
                md:flex md:justify-between  md:-mb-[2vh] md:bg-white
                sm:flex sm:justify-between  sm:-mb-[2.5vh] sm:bg-white'
                  onMouseEnter={(e) => { handelMouseEnter(e, color) }} onMouseLeave={(e) => { handelMouseLeave(e, color) }}>
                  <p
                    className={`${inter.className}2xl:text-[6vw] 2xl:pointer-events-none
                  text-[10vw] pointer-events-none
                  xl:text-[6vw] xl:pointer-events-none
                  lg:text-[6vw] lg:pointer-events-none
                  md:text-[6vw] md:pointer-events-none
                  sm:text-[6vw] sm:pointer-events-none`}
                  >{title}</p>
                  <Image
                    alt='img'
                    src={`${src}`}
                    height={150}
                    width={150}
                    className='absolute right-[5vh] -my-[1vw] pointer-events-none h-[11vh] w-[11vh]
                  2xl:absolute 2xl:right-[50vh] 2xl:my-auto 2xl:pointer-events-none 2xl:h-[20vh] 2xl:w-[20vh]
                  xl:absolute xl:right-[50vh] xl:my-auto xl:pointer-events-none xl:h-[18vh] xl:w-[18vh]
                  lg:absolute lg:right-[50vh] lg:-my-[1vw] lg:pointer-events-none lg:h-[15vh] lg:w-[15vh]
                  md:absolute md:right-[30vh] md:-my-[1vw] md:pointer-events-none md:h-[12vh] md:w-[12vh]
                  sm:absolute sm:right-[30vh] sm:-my-[1vw] sm:pointer-events-none sm:h-[12vh] sm:w-[12vh]' />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Skills
