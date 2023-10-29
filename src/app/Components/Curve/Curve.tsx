'use client';
import React from 'react'
import { motion } from 'framer-motion'

const Curve = () => {

    const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`

    const pathAnimation = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <svg className='absolute top-0 left-[-99px] h-screen fill-[#1C1D20] w-[100px]'>
            <motion.path
                variants={pathAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
            >
            </motion.path>
        </svg>
    )
}

export default Curve
