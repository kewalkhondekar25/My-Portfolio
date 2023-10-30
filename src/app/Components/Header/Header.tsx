'use client';
import React, { useState } from 'react';
import { useRef, useLayoutEffect } from 'react';
import Slider from '../Slider/Slider'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image';
import Pic from '../../../../public/assets/img2.jpg'
import { Inter } from 'next/font/google';
import FramerMagnetic from '../FramerMagnetic';

const inter = Inter({
    weight: '500',
    subsets: ['cyrillic'],
    display: 'swap',

})

const Header = () => {

    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const burger = useRef(null);

    const scrollTarget = (targetId: any) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }

    
    const menuClicked = () => {
        setIsSliderOpen(!isSliderOpen);
        gsap.to(burger.current, { scale: 1 })
    }

    const closeSlider = () => {
        setIsSliderOpen(!isSliderOpen);
        console.log('clicked closeSlider');
        
    }

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(burger.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight / 4,
                onLeave: () => { gsap.to(burger.current, { scale: 1, duration: 0.25, ease: 'power1.out' }) },
                onEnterBack: () => { gsap.to(burger.current, { scale: 0, duration: 0.25, ease: 'power1.out' }) }
            }
        })
    }, [])

    return (
        <div 
        id='home'   
        className='flex justify-between bg-[#FFF3E0] text-black px-5 pt-8  relative
        xl:bg-[#FFF3E0] 
        2xl:bg-[#FFF3E0]    
        lg:bg-[#FFF3E0]
        md:bg-[#FFF3E0]
        sm:bg-[#FFF3E0]'>
                <div
                    className='flex cursor-pointer'>
                    <div className={`${inter.className} absolute 
                2xl:transition-all 2xl:hover:rotate-[360deg]
                xl:transition-all xl:hover:rotate-[360deg]
                lg:transition-all lg:hover:rotate-[360deg]
                md:transition-all md:hover:rotate-[360deg]`}>
                        &copy;
                    </div>
                    <div className='flex'>
                        <p
                            className={`${inter.className} tracking-tighter ms-[4vw] 
                        2xl:tracking-tighter 2xl:ms-[1vw] 
                        xl:tracking-tighter xl:ms-[1.1vw]
                        lg:tracking-tighter lg:ms-[1.3vw]
                        md:tracking-tighter md:ms-[1.8vw]
                        sm:tracking-tighter sm:ms-[2.5vw]` }>
                            Code by Kewal
                        </p>
                    </div>

                </div>
            <div>
                <div
                    className='tracking-tighter'
                    
                    >
                    <div className={`${inter.className} 2xl:flex 2xl:justify-between 2xl:h-[9vh] 2xl:w-[20vw] 2xl:capitalize
                    xl:flex xl:justify-between xl:h-[9vh] xl:w-[20vw] xl:capitalize
                    lg:flex lg:justify-between lg:h-[9vh] lg:w-[20vw] lg:capitalize
                    md:flex md:justify-between md:h-[9vh] md:w-[30vw] md:capitalize
                    sm:flex sm:justify-between sm:h-[9vh] sm:w-[30vw] sm:capitalize`}>
                        <ul
                        onClick={() => {
                            menuClicked()
                        }}>
                            <li className='capitalize 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden'>menu</li>
                        </ul>
                        <ul
                            onClick={() => scrollTarget("projects")
                            }
                            >
                            <li
                                className='hidden
                                
                                2xl:before:content-[" "] 2xl:before:h-[1vh] 2xl:before:w-[1vh] 2xl:block
                                2xl:before:bg-black 2xl:before:hidden 2xl:before:rounded 2xl:before:absolute 
                                2xl:before:top-[8vh] 2xl:before:right-[16vw] 2xl:before:hover:block cursor-pointer
                                
                                xl:before:content-[" "] xl:before:h-[1vh] xl:before:w-[1vh] xl:block
                                xl:before:bg-black xl:before:hidden xl:before:rounded xl:before:absolute 
                                xl:before:top-[9vh] xl:before:right-[16vw] xl:before:hover:block
                                
                                lg:before:content-[" "] lg:before:h-[1vh] lg:before:w-[1vh] lg:block
                                lg:before:bg-black lg:before:hidden lg:before:rounded lg:before:absolute 
                                lg:before:top-[8vh] lg:before:right-[17vw] lg:before:hover:block
                                
                                md:block
                                
                                sm:block'>
                                projects
                            </li>
                        </ul>
                        <ul
                        onClick={() => scrollTarget("about")}>
                            <li
                                className='hidden
                            
                            2xl:before:content-[" "] 2xl:before:h-[1vh] 2xl:before:w-[1vh] 2xl:block
                            2xl:before:bg-black 2xl:before:hidden 2xl:before:rounded 2xl:before:absolute 
                            2xl:before:top-[8vh] 2xl:before:right-[9.5vw] 2xl:before:hover:block cursor-pointer
                            
                            xl:before:content-[" "] xl:before:h-[1vh] xl:before:w-[1vh] xl:block
                            xl:before:bg-black xl:before:hidden xl:before:rounded xl:before:absolute 
                            xl:before:top-[9vh] xl:before:right-[9.5vw] xl:before:hover:block
                            
                            lg:before:content-[" "] lg:before:h-[1vh] lg:before:w-[1vh] lg:block
                            lg:before:bg-black lg:before:hidden lg:before:rounded lg:before:absolute 
                            lg:before:top-[8vh] lg:before:right-[10.5vw] lg:before:hover:block
                            md:block
                            sm:block'
                            >about</li>
                        </ul>
                        <ul
                        onClick={() => scrollTarget("contact")}>
                            <li
                                className='hidden
                            
                            2xl:before:content-[" "] 2xl:before:h-[1vh] 2xl:before:w-[1vh] 2xl:block
                            2xl:before:bg-black 2xl:before:hidden 2xl:before:rounded 2xl:before:absolute 
                            2xl:before:top-[8vh] 2xl:before:right-[3vw] 2xl:before:hover:block cursor-pointer
                            
                            xl:before:content-[" "] xl:before:h-[1vh] xl:before:w-[1vh] xl:block
                            xl:before:bg-black xl:before:hidden xl:before:rounded xl:before:absolute 
                            xl:before:top-[8.5vh] xl:before:right-[3vw] xl:before:hover:block
                            
                            lg:before:content-[" "] lg:before:h-[1vh] lg:before:w-[1vh] lg:block
                            lg:before:bg-black lg:before:hidden lg:before:rounded lg:before:absolute 
                            lg:before:top-[8vh] lg:before:right-[4vw] lg:before:hover:block
                            md:block
                            sm:block'
                            >contact</li>
                        </ul>
                    </div>
                </div>
                <div className='fixed z-10'>
                    <button
                        className='absolute -top-10 -right-[45px] scale-0 h-16 w-16 
                        bg-[#455CE9] rounded-full flex justify-center align-middle z-10
                        2xl:-right-[20vw] 2xl:-top-[5vw] 2xl:h-[5vw] 2xl:w-[5vw]
                        xl:-right-[20vw] xl:-top-[5vw] xl:h-[6vw] xl:w-[6vw]
                        lg:-right-[20vw] lg:-top-[4vw] lg:h-[6vw] lg:w-[6vw]
                        md:-right-[28vw] md:-top-[12vw] md:h-[8vw] md:w-[8vw] '
                        ref={burger}
                        onClick={() => {
                            setIsSliderOpen(!isSliderOpen);
                        }}
                    >
                        <div className={`${isSliderOpen ? "my-auto before:content-[''] before:h-[1px] before:w-[25px] before:bg-white before:block before:rotate-45 before:transition-transform  after:content-['']  after:h-[1px] after:w-[25px] after:bg-white after:block after:-rotate-45 after:transition-transform " :
                            "my-auto before:content-[''] before:mb-[4px] before:h-[1px] before:w-[25px] before:bg-white before:block before:transition-transform after:content-[''] after:mt-[4px] after:h-[1px] after:w-[25px] after:bg-white after:block after:transition-transform"}`}>
                        </div>
                    </button>
                    {/* <Slider/> */}
                    <AnimatePresence mode='wait'>
                        {isSliderOpen && <Slider closeSlider={closeSlider} />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Header
