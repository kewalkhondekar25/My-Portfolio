'use client';
import React from 'react'
import {motion} from 'framer-motion'
import { navSlider } from './anime';


const Nav = ( {items, closeSlider} : any) => {

    const scrollTarget = (targetId: any) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }
    const { title, href, index } = items;
    return (
        <motion.article
            variants={navSlider}
            custom={index}
            initial="initial"
            animate="enter"
            exit="exit"
            >
            <div 
            className='capitalize text-5xl my-5 ml-6 text-white cursor-pointer hover:text-gray-500
            2xl:mt-[4vh]'
            onClick={() => {scrollTarget(`${title}`), closeSlider()}
            }>
                {title}
            </div>
        </motion.article>
    )
}

export default Nav
