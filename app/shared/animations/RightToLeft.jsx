"use client"
import { useInView } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const RightToLeft = ({isInView,children, classes}) => {

  return (
    <div className={` transition-all duration-1000 ease-in-out ${isInView ? `opacity-1 translate-x-0` : `opacity-0 translate-x-1/2`} delay-300  ${classes}`}>
        {children}
    </div>
  )
}

export default RightToLeft