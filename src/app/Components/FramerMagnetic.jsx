"use client";
import React, { ReactNode, useRef, useState, useLayoutEffect } from 'react'
import gsap from 'gsap';

// interface FramerMagnetic {
//     children: ReactNode;
// }

const FramerMagnetic = ({ children }) => {

    const magnetic = useRef(null);

    useLayoutEffect(()=>{
        const xTo = gsap.quickTo(magnetic.current, "x", {duration:1, ease:"elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration:1, ease:"elastic.out(1, 0.3)"})

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { width, height, top, left } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x);
            yTo(y);
        })
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref: magnetic} )
    )
}

export default FramerMagnetic