"use client"
import React, { useEffect, useRef } from "react";
import Link from "next/link"
import Lottie from "lottie-react"
import animation from "../json/hero-section-home.json"
import { useInView } from "framer-motion";
import AchievementCount from "./achievement-count";
import Image from "next/image";

const SemiconductorComponent = (props) => {

  const lottieRef = useRef()
  const lottieRefDesk = useRef()

  const sectionRef = useRef()

  const isInView = useInView(sectionRef)
console.log({heroSection : isInView})
  useEffect(() => {
    lottieRef.current.stop()
  setTimeout(() => {
    lottieRef.current.play()
  },800)
// lottieRef.current.setSpeed(.7)

  },[])


  useEffect(() => {
    lottieRefDesk.current.stop()
    if(isInView){
      setTimeout(() => {
        lottieRefDesk.current.play()
      },800)
    // lottieRefDesk.current.setSpeed(.7)
    }

  },[isInView])




  return (
    <section className="bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1705653500/pactron/Group_1000002795_1_i9ipdb.jpg] bg-cover bg-no-repeat bg-center py-10 overflow-x-hidden">
    <div className={`relative z-20 justify-center center-section items-center hidden md:flex w-full flex-col px-16 max-md:max-w-full max-md:px-5 `}>
      <div className="justify-center w-full max-w-[1194px] mt-14 mb-8 px-3.5 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className={`justify-center flex flex-col my-auto items-start gap-3 ${isInView ? ` translate-y-0 opacity-1` : `translate-y-1/2 opacity-0`} delay-300 ease-in-out transition-all duration-700 `} ref = {sectionRef}>
              <h1 className="self-stretch text-neutral-950 text-4xl font-bold max-md:max-w-full "> Silicon to System </h1>
              <p className="text-zinc-700 text-lg self-stretch mt-3 max-md:max-w-full"> Solving complex engineering challenges across the full semiconductor spectrum leveraging best-in-class design and integrated manufacturing. </p>
              <div className="items-stretch flex gap-4 mt-6">
                <Link href="#service-section" className="text-white text-sm font-semibold whitespace-nowrap justify-center items-stretch border bg-primary grow px-6 py-3 rounded-sm border-solid border-teal-600  hover:shadow-[0_5px_10px_rgba(0,_0,_0,_0.2)] hover:-translate-y-1 transition-all duration-300"> Learn more </Link>
                <Link href="/contact-us" className="text-slate-600 text-sm font-bold whitespace-nowrap justify-center items-stretch border z-[1] grow px-6 py-3 rounded-sm border-solid border-slate-600 hover:shadow-[0_5px_10px_rgba(0,_0,_0,_0.2)]  transition-all duration-300 hover:-translate-y-1"> Contact us </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-5/12 ml-5 max-md:w-full max-md:ml-0">
         <Lottie animationData={animation} autoPlay = {false} loop = {false} lottieRef={lottieRefDesk} className = "" />
          </div>
        </div>
      </div>
    </div>

    {/* Mobile */}

    <div className=" justify-center items-center bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704945446/pactron/hero-background-image_rzokkb.jpg)] bg-cover bg-center flex md:hidden pt-20 w-full flex-col pb-11 px-9 max-md:px-5">
      <div className="min-h-[300px]">

    <Lottie animationData={animation} autoPlay = {true} loop = {false} lottieRef={lottieRef} />
      </div>
      <div className="text-stone-900 text-3xl font-bold self-stretch whitespace-nowrap mt-10">
        Silicon to System
      </div>
      <div className="text-zinc-700 text-base self-stretch mt-2">
        Solving complex engineering challenges across the full semiconductor
        spectrum leveraging best-in-class design and integrated manufacturing.
      </div>
      <div className="items-stretch  self-stretch flex justify-between gap-4 mt-4">
        <Link href="#service-section" className="text-slate-50 text-base text-center font-bold whitespace-nowrap justify-center items-stretch border border-[color:var(--b-color-b-1-prm,#2A8887)] bg-teal-600 grow px-6 py-3 rounded-sm border-solid max-md:px-5">
          Learn more
        </Link>
        <Link href = "/contact-us" className="text-neutral-600 text-base text-center font-semibold whitespace-nowrap justify-center items-stretch border border-[color:var(--bl-color-bl-4,#454951)] grow px-6 py-3 rounded-sm border-solid max-md:px-5">
          Contact us
        </Link>
      </div>
    </div>
    <AchievementCount/>
    
    </section>
  );
}

export default SemiconductorComponent;
