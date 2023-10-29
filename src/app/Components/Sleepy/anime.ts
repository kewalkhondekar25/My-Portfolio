export const effect1 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 0.5}
    },
    close:{
        opacity:0
    }
}

export const effect2 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 0.8}
    },
    close:{
        opacity:0
    }
}

export const effect3 = {
    initial:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1, delay: 1, ease:[0.25, 1, 0.5, 1]}
    },
    close:{
        opacity:0
    }
}