export const textSlideUp = {
    initial:{
        y:"100%"
    },
    open: (i:any) => ({
        y:"0%",
        transition:{duration: 0.5, delay: 0.02 * i}  
    }),
    close:{
        y:"100%",
        transition:{duration: 0.5}
    }
}

export const visibleText = {
    initian:{
        opacity:0
    },
    open:{
        opacity:1,
        transition:{duration: 1}
    },
    close:{
        opacity:0,
        transition:{duration: 0.5}
    }
}