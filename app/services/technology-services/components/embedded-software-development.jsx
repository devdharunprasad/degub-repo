"use client"

import React, { useEffect, useRef } from "react";
import { useServices } from "../../../zustand/store";
import {useInView} from "framer-motion"
import { ArrowCircleRight, CheckCircle } from "@phosphor-icons/react";
import DownToUp from "../../../shared/animations/DownToUp";

const CONTENTS = [
  "Application Software and UI Development  ",
  "Board Bring-up and HW Diagnostics  ",
  "Driver Development and Porting",
  "Board Bring-up and HW Diagnostics  ",
  "Embedded Application",
];

const CONTENTS2 = [
  "Architecture/ Microarchitecture development",
  "IP Development in industry standard HDL languages",
  "Test bench and Scripts, Functional Verification - simulation of Silicon RTL ",
  "Test bench and Scripts, Functional Verification - simulation of Silicon RTL",
];



function EmbeddedSoftwareDevelopment(props) {
  const change_technologyservices = useServices(state => state.change_technologyservices)

  const embeddedRef  = useRef()
  const isInView = useInView(embeddedRef)
      console.log(isInView)
  useEffect(() => {
      if(isInView){
          change_technologyservices("embedded-software")
      }
  },[isInView])

  const fpgaRef  = useRef()
  const isInView2 = useInView(fpgaRef)
  useEffect(() => {
      if(isInView2){
          change_technologyservices("fpga")
      }
  },[isInView2])


  return (
    <section>
    <div className="justify-center items-center md:hidden bg-slate-50 flex flex-col px-9 py-12">
      <header className="text-stone-900 text-2xl font-bold leading-7 self-stretch mt-2.5">
        Embedded Software Development
      </header>
      <div className="text-stone-900 text-base leading-6 self-stretch mt-2">
        Harnessing the synergy of low-level abstraction, real-time systems, and intricate hardware
        interplay, our embedded software development delves into the core fabric of technology,
        crafting optimized and scalable solutions that unlock the full potential of
        hardware-software integration.
      </div>
      <button
        className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-7 px-4 py-2.5 rounded-sm shadow-lg"
        role="button"
      >
        Application Software and UI Development
      </button>
      <button
        className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg"
        role="button"
      >
        Handler Interface boards
      </button>
      <button
        className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg"
        role="button"
      >
        Driver Development and Porting
      </button>
      <button
        className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg"
        role="button"
      >
        Board Bring-up and HW Diagnostics
      </button>
      <button
        className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 mb-6 px-4 py-2.5 rounded-sm shadow-lg"
        role="button"
      >
        Embedded Application
      </button>
    </div>

    {/* Desktop */}
    
    <section className="bg-green_shade ]" id = "embedded-software">
      <section className="py-24 bg-center bg-contain bg-no-repeat bg-fixed bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704273634/pactron/services-background_m5roql.jpg)]">
        <article className="flex justify-center gap-10 items-start center-section">
          <div className="w-6/12 flex flex-col">
            <h2 className="text-2xl font-bold text-primary" ref = {embeddedRef}>
            Embedded Software Development            </h2>
            <p className="text-base font-normal w-[500px] mt-5">
            Harnessing the synergy of low-level abstraction, real-time systems, and intricate hardware interplay, our embedded software development delves into the core fabric of technology, crafting optimized and scalable solutions that unlock the full potential of hardware-software integration.
            </p>
          </div>
          <div  className=" w-6/12 text-primary overflow-hidden  bg-service_green rounded-sm py-10 px-4">
           <DownToUp classes="flex flex-col gap-5" isInView={isInView}>
            {CONTENTS.map((content) => (
              <div 
                className="flex justify-center items-center gap-5"
                key={content}
              >
                <ArrowCircleRight size={32} className="" color="#297174" />
                <p className="text-base font-normal w-10/12" >{content} </p>
              </div>
            ))}
            </DownToUp>
          </div>
        </article>
        <article id = "fpga"  className="flex justify-center gap-10 items-start center-section mt-[200px] bg-transparent">
        <div className=" w-6/12 text-primary overflow-hidden bg-service_green rounded-sm py-10 px-4">
        <DownToUp classes="flex flex-col gap-5" isInView={isInView2}>

            {CONTENTS2.map((content) => (
              <div
                className="flex justify-center items-center gap-5"
                key={content}
              >
                <ArrowCircleRight size={32} className="" color="#297174" />
                <p className="text-base font-normal w-10/12" >{content} </p>
              </div>
            ))}
                        </DownToUp>

          </div>
          <div className="w-6/12 flex flex-col">
            <h2 className="text-2xl font-bold text-primary" ref = {fpgaRef}>
            FPGA Design & Prototyping     
                   </h2>
            <p className="text-base font-normal w-[500px] mt-5">
            With unparalleled flexibility, capacity, and speed, we empower designers to quickly test and iterate their designs. Our Specialized standalone FPGA based hardware design services, which include a multitude of interfaces and technologies.
            </p>
            <div className="grid grid-rows-3 grid-cols-1 mt-5">
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                  FPGA to FPGA
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                  ASIC to FPGA
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                  Complete SoC porting on FPGA  
                  </p>
                </div>
              </div>
          </div>
       
        </article>
      </section>
    </section>
    </section>
  );
}

export default EmbeddedSoftwareDevelopment;