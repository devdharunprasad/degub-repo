"use client"
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

const HeadingSlideIn = ({children}) => {
    const headingRef = useRef()
    const isInView = useInView(headingRef)
  return (
    <div ref = {headingRef} className={`${isInView ? `translate-y-0 opacity-1` : `translate-y-full opacity-0`}   transition-all duration-1000`}>{children}</div>
  )
}

export default HeadingSlideIn