"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"

const LoadingAnimation = ({isVisible}) => {
  return (
    <>
   { isVisible &&  <motion.section   className='w-full h-screen bg-primary flex justify-center items-center'>
        <img src = "https://res.cloudinary.com/dosjh2min/image/upload/v1703776585/pactron/PActron-Loading_b4lhgu.gif" width={500} height={500}  className='w-full h-auto'/>
    </motion.section>}
    </>
  )
}

export default LoadingAnimation