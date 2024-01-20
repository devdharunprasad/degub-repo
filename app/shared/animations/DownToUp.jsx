"use client"
import { useInView } from 'framer-motion'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const DownToUp = ({children, isInView, classes}) => {


  return (
    <div className={`delay-300 transition-all duration-1000 ease-in-out ${isInView ? `opacity-1 translate-y-0` : `opacity-0 translate-y-1/2`}  ${classes}`}>
        {children}
    </div>
  )
}

export default DownToUp