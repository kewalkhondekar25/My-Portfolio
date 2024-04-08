'use client';
import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { slide1, slide2 } from './anime';
import Socials from '../Socials/Socials';
import CopyRight from '../CopyRight/Copyright';
import FramerMagnetic from '../FramerMagnetic';

const Footer = () => {

    const slider1 = useRef(null);
    const slider2 = useRef(null);

    const isInView1 = useInView(slider1);
    const isInView2 = useInView(slider2);


    return (
        <section
            id='contact'
            className='relative bg-[#1C1D20] h-screen text-white pt-[5vh]'>

            <div
                className='flex ml-[4vw]
                2xl:ml-[4vw]
                xl:ml-[4vw]
                lg:ml-[4vw]
                md:ml-[4vw]
                sm:ml-[4vw]'>
                <Image
                    alt="pic"
                    src="https://res.cloudinary.com/kewalkhondekar/image/upload/v1697625427/Portfolio/HealthyMe/img_ie1wpv.jpg"
                    width={50}
                    height={50}
                    className='rounded-[50%] object-cover object-right-top h-[16vw] w-[15vw] rotate-[15deg] ml-[1vw]
                    2xl:h-[6vw] 2xl:w-[6vw]
                    xl:h-[8vw] xl:w-[8vw]
                    lg:h-[8vw] lg:w-[8vw] 
                    md:h-[8vw] md:w-[8vw]
                    sm:h-[8vw] sm:w-[8vw]'
                />
                <div
                    className='my-auto capitalize text-[8vw] ml-[3vw]
                    2xl:text-[4vw] 
                    xl:text-[5vw]
                    lg:text-[5vw]
                    md:text-[5vw]
                    sm:text-[5vw]'>
                    <span>let&apos;s </span>
                    <span>connect</span>
                </div>
            </div>

            <div>
                <div
                    className='before:absolute before:block before:content-[" "] h-[1px] w-[90vw] mt-[8vh] bg-[#8E8E90] mx-auto '>
                </div>
                {/* <motion.button
                        className='absolute top-[15.5vh] left-[10vw] bg-[#455CE9] h-[15vh] w-[15vh] rounded-[50%] text-[3vw]
                        2xl:text-[1vw] 2xl:top-[20vh] 2xl:h-[20vh] 2xl:w-[20vh] '
                        ref={slider1}
                        variants={slide1}
                        initial="initial"
                        animate={isInView1 ? "open" : "close"}>
                        Get in touch
                    </motion.button> */}
            </div>
            <div
                className='mt-[10vh] mx-[5vw]'>
                <form>
                    <div
                        className='relative grid'>
                        <input
                            type="text" name='Name' placeholder='your name'
                            className='bg-[#1C1D20] border-[0.1vw]
                            border-white rounded-[5vw] h-[7vh] mx-[1vw] my-[1vh]
                            placeholder:text-center placeholder:capitalize
                            2xl:w-[43vw] 
                            xl:w-[43vw]
                            lg:w-[43vw]
                            md:w-[43vw]
                            sm:w-[40vw]' />
                        <input
                            type="text" name='Email' placeholder='your email'
                            className='bg-[#1C1D20]  my-[1vh] border-white rounded-[5vw] h-[7vh] 
                                mx-[1vw] border-[0.1vw] placeholder:text-center placeholder:capitalize
                                2xl:absolute 2xl:right-0 2xl:w-[43vw]
                                xl:absolute xl:right-0 xl:w-[43vw] 
                                lg:absolute lg:right-0 lg:w-[43vw]
                                md:absolute md:right-0 md:w-[43vw]
                                sm:absolute sm:right-0 sm:w-[43vw]' />
                        <input
                            type="text" name='Message' placeholder='your message'
                            className='bg-[#1C1D20] my-[1vh] border-white rounded-[5vw] h-[7vh] mx-[1vw] border-[0.1vw] 
                                placeholder:text-center placeholder:capitalize
                                2xl: ' />
                    </div>
                    <div>
                        <div
                            className='before:absolute before:block before:content-[" "] h-[1px] w-[90vw] mt-[12vh]
                            bg-[#8E8E90] mx-auto '>
                        </div>                      

                        <motion.button
                            ref={slider2}
                            variants={slide2}
                            initial="initial"
                            animate={isInView2 ? "open" : "close"}
                            className='absolute top-[63vh] right-[40vw]
                            bg-[#455CE9] h-[15vh] w-[15vh] rounded-[50%] text-[3vw] capitalize 
                            2xl:text-[1vw] 2xl:top-[56.5vh] 2xl:right-[50vh] 2xl:h-[19vh] 2xl:w-[19vh]
                            xl:text-[1vw] xl:top-[57vh] xl:right-[50vh]  xl:h-[20vh] xl:w-[20vh] 
                            lg:text-[1vw] lg:top-[56vh] lg:right-[50vh]  lg:h-[20vh] lg:w-[20vh]
                            md:text-[2vw] md:top-[50vh] md:right-[25vh]  md:h-[18vh] md:w-[18vh]
                            sm:text-[2vw] sm:top-[58vh] sm:right-[25vh]  sm:h-[16vh] sm:w-[16vh]'>
                            send it!
                        </motion.button>
                    
                    </div>
                </form>
            </div>
            <div className=' flex justify-between place-items-center'>
                <div>
                    <CopyRight/>
                </div>
                <div className='absolute overflow-y-hidden p-1
                bottom-[5vh] right-[8vh] 
                2xl:top-[88vh] 2xl:right-[5vh]
                xl:top-[89vh] xl:right-[5vh]
                lg:bottom-0 lg:right-[5vh]
                md:top-[89vh] md:right-[5vh]
                sm:bottom-0 sm:right-[5vh]'>
                    <Socials />
                </div>
            </div>
        </section>
    )
}

export default Footer