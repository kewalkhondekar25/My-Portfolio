import { delay } from "framer-motion/dom"

export const navSlider = {
    initial:{
        x:"100%"
    },
    enter:(i: any) => ({
        x:"0%",
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05 * i}
    }),
    // enter:{
    //     x:"0%",
    //     transition:{duration:0.8, ease:[0.76, 0, 0.24, 1]}
    // },
    exit:(i: any) => ({
        x:"100%",
        transition:{duration:0.8, ease:[0.76, 0, 0.24, 1], delay: 0.05 * i}
    })
}