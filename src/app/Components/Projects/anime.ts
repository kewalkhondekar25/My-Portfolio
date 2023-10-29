export const hm1Effects = {
    initial:{
        y:"100%",
        opacity:0
    },
    open:{
        y:"0%",
        opacity:1,
        transition:{duration: 1, ease:[0.5, 1, 0.89, 1]}
    },
    close:{
        y:"100%",
        opacity:0
    }
}

export const hmTitle = {
    initial: {
        x:"100%",
        opacity:0
    },
    open:{
        x:"0%",
        opacity:1,
        transition:{duration: 0.85, ease:[0.5, 1, 0.89, 1], delay:0.5 }
    },
}

export const hm2Effect = {
    initial: {
        x:"-100%",
        opacity:0
    },
    open:{
        x:"0%",
        opacity:1,
        transition:{duration:0.85, ease:[0.5, 1, 0.89, 1], delay:0.85 }
    },
}