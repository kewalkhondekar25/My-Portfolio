'use client';
import Image from 'next/image'
import React, { useRef } from 'react'
import Lottie from 'lottie-react';
import sleepy1 from '../../../../public/assets/wallPpr.webp'
import shootingStar from '../../../../public/assets/shootingstars.json'
import sleepy2 from '../../../../public/assets/LandingPage2.png'
import sleepy3 from '../../../../public/assets/meditation.png'
import { Gloria_Hallelujah } from 'next/font/google';
import { motion, useInView } from 'framer-motion'
import { effect1, effect2, effect3 } from './anime';
import FramerMagnetic from '../FramerMagnetic';

const sleepyFont = Gloria_Hallelujah({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
})

const Sleepy = () => {

    const container1 = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);

    const isInView1 = useInView(container1);
    const isInView2 = useInView(container2);
    const isInView3 = useInView(container2);

    const handleMoreProjects = () => {
        window.open("https://github.com/kewalkhondekar25?tab=repositories", '_blank')
    }

    const handleTryNow = () => {
        window.open("https://github.com/kewalkhondekar25/Sleepy-Mobile-App", '_blank')
    }

    return (
        <section className=''>
            <div className='relative bg-[#0A003C] text-white h-screen 
                2xl:bg-[#0A003C] 2xl:text-white 2xl:h-screen
                xl:bg-[#0A003C] xl:text-white xl:h-screen
                lg:bg-[#0A003C] lg:text-white lg:h-screen
                md:bg-[#0A003C] md:text-white md:h-screen'>
                <p className={`${sleepyFont.className} absolute text-[5vw] p-[2vw]
                2xl:text-[2vw] 2xl:p-[2vw]
                xl:text-[2vw] xl:p-[2vw]
                lg:text-[2vw] lg:p-[2vw]
                md:text-[5vw] md:p-[2vw] `}>
                    Sleepy
                </p>

                <div className='absolute 
                2xl:right-[30vw] 2xl:top-[5vh] 2xl:h-[10vh] 
                xl:right-[30vw] xl:top-[5vh] xl:h-[10vh] 
                lg:right-[30vw] lg:top-[5vh] lg:h-[10vh] 
                md:right-[30vw] md:top-[40vh] md:h-[10vh] '>
                    <Lottie
                        animationData={shootingStar}
                        loop={true}
                        autoplay={true}
                    />
                </div>

                <div>
                    <Image
                        alt='sp1'
                        src={sleepy1}
                        height={100}
                        width={100}
                        className='absolute bottom-[0vh] h-[100px] w-[100%] z-[1]
                        2xl:absolute 2xl:bottom-[0vh] 2xl:w-[100%] 2xl:z-[1]
                        xl:absolute xl:bottom-[0vh] xl:w-[100%] xl:z-[1]
                        lg:absolute lg:bottom-[0vh] lg:w-[100%] lg:z-[1]
                        md:absolute md:bottom-[0vh] md:h-[200px] md:w-screen md:z-[1]  ' />
                </div>

                <div className='absolute top-[10vh] left-[10vw] flex flex-col justify-between h-[35vh]
                2xl:top-[20vh] 2xl:left-[10vw] 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:h-[35vh]
                xl:top-[20vh] xl:left-[10vw] xl:flex xl:flex-col xl:justify-between xl:h-[35vh]
                lg:top-[20vh] lg:left-[10vw] lg:flex lg:flex-col lg:justify-between lg:h-[35vh]
                md:top-[20vh] md:left-[10vw] md:flex md:flex-col md:justify-between md:h-[35vh] '>
                    <motion.div
                        ref={container1}
                        variants={effect1}
                        initial="initial"
                        animate={isInView1 ? "open" : "close"}
                        className='text-[4vw] font-bold w-[80vw]
                    2xl:text-[2vw] 2xl:font-bold 2xl:w-[30vw]
                    xl:text-[2vw] xl:font-bold xl:w-[30vw]
                    lg:text-[2vw] lg:font-bold lg:w-[30vw]
                    md:text-[3vw] md:font-bold md:w-[35vw]'>
                        We're here to help you sleep better tonight!
                    </motion.div>
                    <motion.div
                        ref={container2}
                        variants={effect2}
                        initial="initial"
                        animate={isInView2 ? "open" : "close"}
                        className='text-gray-300 w-[80vw]
                    2xl:text-gray-300 2xl:w-[35vw]
                    xl:text-gray-300 xl:w-[35vw]
                    lg:text-gray-300 lg:w-[35vw]
                    md:text-gray-300 md:w-[35vw]  '>
                        Sleepy is a React Native Mobile Application both for
                        IOS & Android. It helps you to get the restful night of sleep you deserve,
                        with Sleepy’s bedtime sleep sounds, meditations and sleep podcasts.
                    </motion.div>
                    <motion.div
                        variants={effect3}
                        initial="initial"
                        animate={isInView3 ? "open" : "close"}>
                        <button
                            className='bg-white text-black capitalize h-[5vh] w-[21vw] rounded-[3vw] font-bold mb-1
                            2xl:h-[5vh] 2xl:w-[8vw] 2xl:rounded-[1vw] 2xl:font-bold
                            xl:h-[5vh] xl:w-[8vw] xl:rounded-[1vw] xl:font-bold
                            lg:h-[5vh] lg:w-[8vw] lg:rounded-[1vw] lg:font-bold
                            md:h-[5vh] md:w-[12vw] md:rounded-[1vw] md:font-bold '
                            onClick={handleTryNow}>
                            try now
                        </button>
                    </motion.div>
                </div>

                <div className='relative'>
                    <div className='absolute top-[46vh] right-[30vw]
                    2xl:top-[23vh] 2xl:right-[18vw]
                    xl:top-[40vh] xl:right-[15vw]
                    lg:top-[20vh] lg:right-[15vw]
                    md:top-[50vh] md:right-[15vw]'
                        data-scroll data-scroll-speed={0.2}
                    >
                        <Image
                            alt='sleepy2'
                            src={sleepy3}
                            height={325}
                            width={325}
                            className='h-[412px] w-[280px]
                            2xl:h-[500px] 2xl:w-[310px]
                            xl:h-[450px] xl:w-[280px]
                            lg:h-[450px] lg:w-[280px]
                            md:h-[450px] md:w-[280px]'/>
                        <Image
                            alt='sleepy3'
                            src={sleepy2}
                            height={325}
                            width={325}
                            className='absolute top-0 left-[30vw] h-[412px] w-[280px]
                            2xl:top-0 2xl:left-[10vw] 2xl:h-[500px] 2xl:w-[310px]
                            xl:top-0 xl:left-[10vw] xl:h-[450px] xl:w-[280px]
                            lg:top-0 lg:left-[14vw] lg:h-[450px] lg:w-[280px]
                            md:top-0 md:left-[15vw] md:h-[450px] md:w-[280px]'/>
                    </div>
                </div>

            </div>
            <FramerMagnetic>
            <div 
            className='bg-[#455CE9] h-[5vh] w-[15vh] rounded-[2vw] text-[2vh] mx-auto cursor-pointer mt-[2vh]
            flex justify-center place-items-center text-white capitalize
            2xl:h-[10vh] 2xl:w-[20vh]
            xl:h-[10vh] xl:w-[20vh]
            lg:h-[10vh] lg:w-[20vh]
            md:h-[10vh] md:w-[20vh]
            sm:h-[10vh] sm:w-[20vh] '
            onClick={handleMoreProjects}>
                more projects
            </div>
            </FramerMagnetic>
        </section>
    )
}

export default Sleepy