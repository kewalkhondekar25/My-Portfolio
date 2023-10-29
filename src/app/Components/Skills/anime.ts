export const effects = {
    initial:{
        opacity:0,
        marginBottom:"-3vh",
    },
    
    open: (i:any, color: any) => ({
        opacity:1,
        transition:{duration: 0.8, delay: 0.02 * i},  
        marginBottom:'0.01vh',
    }),
    close: (i:any) => ({
        marginBottom:"-3vh",
        opacity:0,
        transition:{duration: 0.8, delay: 0.02 * i}, 
    })
}