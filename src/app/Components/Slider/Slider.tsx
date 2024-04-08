'use client';
import React from 'react'
import { navList } from '../../../../Utils/utils'
import Nav from '../Nav/Nav'
import { motion } from 'framer-motion'
import { sliderSlide } from './anime'
import Curve from '../Curve/Curve'
import Socials from '../Socials/Socials'

const Slider = ({closeSlider}: any) => {
    return (
        <motion.div
            variants={sliderSlide}  
            initial="initial"
            animate="enter"
            exit="exit"
            className='absolute -top-[56px] -right-[60px] w-[100.55vw] h-screen 
            2xl:-top-[13.3vh] 2xl:-right-[22vw] 2xl:w-[40vw] 2xl:h-[101vh]
            xl:-top-[13.6vh] xl:-right-[22vw] xl:w-[40vw] xl:h-[101vh]
            lg:-top-[13.7vh] lg:-right-[22vw] lg:w-[40vw] lg:h-[101vh]
            md:-top-[13vh] md:-right-[33vw] md:w-[50vw] md:h-[101vh]
                bg-[#1C1D20] flex flex-col justify-around '>
                <div className="uppercase text-[10px] text-[#8E8E90] ml-[30px] mt-10
                    after:absolute after:block after:content-[''] 
                    after:h-[0.3px] after:w-5/6  after:mt-3 
                    after:bg-[#8E8E90]">
                    navigation
                </div>
                <div className='
                2xl:-mb-[5vh] 2xl:ml-[5vh]'>
                    {
                        navList.map((items, index) => {
                            return (
                                <Nav items={{ ...items, index }} key={items.title} closeSlider={closeSlider} />
                            )
                        })
                    }
                </div>
                <div className='relative'>
                    <div className='absolute text-white
                    left-[13vh]
                    2xl:left-[22vh]
                    xl:left-[22vh]
                    lg:left-[18vh]
                    md:left-[10vh]'>
                        <Socials/>
                    </div>
                </div>
                {<Curve />}
        </motion.div>
    )
}

export default Slider