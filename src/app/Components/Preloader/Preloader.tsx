'use client';
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { opacity, slideUp } from './anime'

const Preloader = () => {

    const words = ["Hello", "नमस्ते", "Bonjour", "Olà", "Greetings", "こんにちは", "Ciao", "Hallo"]
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(index == words.length - 1){
            return;
        }
        setTimeout(() => {
            setIndex(index + 1)
        }, index == 0 ? 1000:150);
    },[index])
    return (
        <motion.div 
        variants={slideUp}
        initial="initial"
        exit="exit"
        className="fixed top-0 w-screen h-screen z-50
        bg-[#1C1D20] text-white flex justify-center place-items-center ">
        <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className='text-[8vw]
            2xl:text-[5vw]
            xl:text-[4vw]
            lg:text-[4vw]
            md:text-[8vw]
            sm:text-[8vw]'
        >
            {words[index]}</motion.p>
        </motion.div>
    )
}

export default Preloader
