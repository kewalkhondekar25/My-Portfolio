import React from 'react'

const CopyRight = () => {
    return (
        <div className='text-gray-500 text-[3.5vw] font-medium absolute bottom-[1vh] left-[30vw]
        2xl:bottom-[8vh] 2xl:text-[1vw] 2xl:left-[10vh]
        xl:bottom-[7vh] xl:text-[1vw] xl:left-[10vh]
        lg:text-[1.2vw] lg:bottom-[6vh] lg:left-[10vh]
        md:text-[1.2vw] md:bottom-[8vh] md:left-[10vh]
        sm:text-[1.2vw] sm:bottom-[3vh] sm:left-[10vh]' >
            &copy;2023,
            <span className='capitalize'> kewal khondekar</span>
        </div>
    )
}

export default CopyRight
