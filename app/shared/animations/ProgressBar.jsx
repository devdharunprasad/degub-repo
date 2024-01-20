import React from 'react'
import { useScroll, motion } from "framer-motion";

const ProgressBar = () => {
    const { scrollYProgress } = useScroll()
    
  return (
    <div className="w-full h-[7px] bg-[#DFEDED]">
    <motion.div className="z-20 h-[7px] bg-primary origin-left" style={{ scaleX: scrollYProgress }} />
    </div>
  )
}

export default ProgressBar