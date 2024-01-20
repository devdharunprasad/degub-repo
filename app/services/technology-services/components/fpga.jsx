"use client"

import React, { useEffect, useRef } from "react";
import {useInView} from "framer-motion"
import { useServices } from "../../../zustand/store";
function FPGAComponent(props) {

  const fpgaRef  = useRef()
  const isInView = useInView(fpgaRef)
  const change_technologyservices = useServices(state => state.change_technologyservices)
      console.log(isInView)
  useEffect(() => {
      if(isInView){
          change_technologyservices("fpga")
      }
  },[isInView])

  return (
    <section>
    <div className="justify-center items-stretch md:hidden bg-slate-50 flex flex-col px-9 py-12">
      <header className="text-stone-900 text-2xl font-bold leading-7 mt-2.5">
        FPGA Design &amp; Prototyping
      </header>
      <p className="text-stone-900 text-base leading-6 mt-2">
        Pactron specializes in delivering FPGA solutions that enable the creation of customized hardware designed to meet precise specifications, resulting in enhanced performance and minimized power usage. With a remarkable expertise in testing and debugging, we excel in crafting top-notch FPGA designs that perfectly align with the unique demands of various applications.
      </p>
      <button className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-4 px-4 py-2.5 rounded-sm shadow-lg" aria-label="Architecture/ Microarchitecture development">
        Architecture/ Microarchitecture development
      </button>
      <button className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg" aria-label="IP Development in industry standard HDL languages">
        IP Development in industry standard HDL languages
      </button>
      <button className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg" aria-label="Test bench and Scripts, Functional Verification - simulation of Silicon RTL">
        Test bench and Scripts, Functional Verification - simulation of Silicon RTL
      </button>
      <button className="text-gray-800 text-center text-base leading-6 items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm shadow-lg" aria-label="Test bench and Scripts, Functional Verification - simulation of Silicon RTL ">
        Test bench and Scripts, Functional Verification - simulation of Silicon RTL
      </button>
      <p className="text-stone-900 text-base leading-6 mt-4 mb-2.5">
        Our FPGA-based prototypes offer exceptional performance and precision, enabling real-time dataflow and extended RTL testing and debugging capabilities. With unparalleled flexibility, capacity, and speed, we empower designers to quickly test and iterate their designs. Our Specialized standalone FPGA based hardware design services, which include a multitude of interfaces and technologies.
        <br />
        <ul className="list-inside list-disc ml-10 mt-5 whitespace-nowrap">
          <li>FPGA to FPGA</li>
          <li>ASIC to FPGA</li>
          <li>Complete SoC porting on FPGA</li>
        </ul>
      </p>
    </div>

    {/* Desktop */}

    <div className="bg-white hidden md:block flex-col justify-center items-center px-16 py-24 max-md:px-5 w-full center-section mx-auto"  >
    <div className="w-full max-w-[1102px] mt-6 mb-2 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[57%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex grow flex-col pt-6 pb-10 max-md:max-w-full max-md:mt-10">
            <h3 className="text-neutral-950 text-3xl font-bold leading-10 max-md:max-w-full" id = "fpga">
              FPGA Design & Prototyping
            </h3>
            <p className="text-zinc-700 text-lg leading-7 mt-3 max-md:max-w-full">
              Pactron specializes in delivering FPGA solutions that enable the creation of customized hardware designed to meet precise specifications, resulting in enhanced performance and minimized power usage. With a remarkable expertise in testing and debugging, we excel in crafting top-notch FPGA designs that perfectly align with the unique demands of various applications. </p>
            <p className="text-zinc-700 text-lg leading-7 mt-5 max-md:max-w-full">
              Our FPGA-based prototypes offer exceptional performance and precision, enabling real-time dataflow and extended RTL testing and debugging capabilities. With unparalleled flexibility, capacity, and speed, we empower designers to quickly test and iterate their designs. Our Specialized standalone FPGA based hardware design services, which include a multitude of interfaces and technologies. </p>
              <ul className="list-inside list-disc ml-10 mt-5 whitespace-nowrap" ref = {fpgaRef}>
                <li>FPGA to FPGA</li>
                <li>ASIC to FPGA</li>
                <li>Complete SoC porting on FPGA</li>
              </ul>
            
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[43%] ml-10 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch  flex flex-col my-auto pr-2 max-md:max-w-full max-md:mt-10">
            <div className="text-zinc-700 text-lg font-medium leading-7 items-stretch rounded bg-white justify-center pl-6 pr-14 py-3 max-md:max-w-full max-md:px-5 shadow-lg">
              Architecture/ Microarchitecture development
            </div>
            <div className="text-zinc-700 text-lg font-medium leading-7 rounded bg-white justify-center mt-3.5 pl-6 pr-16 py-3 items-start max-md:max-w-full max-md:px-5 shadow-lg">
              IP Development in industry standard HDL languages
            </div>
            <div className="text-zinc-700 text-lg font-medium leading-7 rounded bg-white justify-center mt-3.5 pl-6 pr-16 py-3 items-start max-md:max-w-full max-md:px-5 shadow-lg">
              Test bench and Scripts, Functional Verification - simulation of Silicon RTL
            </div>
            <div className="text-zinc-700 text-lg font-medium leading-7 rounded bg-white justify-center mt-3.5 pl-6 pr-16 py-3 items-start max-md:max-w-full max-md:px-5 shadow-lg">
              Test bench and Scripts, Functional Verification - simulation of Silicon RTL
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default FPGAComponent;