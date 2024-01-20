"use client"
import React, { useRef } from "react";
import {motion, useInView} from "framer-motion"
function ExperienceComponent(props) {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const ref = useRef()
  const isInView = useInView(ref,{
    once: true, // Trigger the animation only once
    rootMargin: "-100px 0px", // Adjust root margin as needed
  });

  const ref2 = useRef()
  const isInView2 = useInView(ref,{
    once: true, // Trigger the animation only once
    rootMargin: "-100px 0px", // Adjust root margin as needed
  });

  const ref3 = useRef()
  const isInView3 = useInView(ref,{
    once: true, // Trigger the animation only once
    rootMargin: "-100px 0px", // Adjust root margin as needed
  });

  

  return (
    <section className="bg-green_shade ">
    <div className="justify-center center-section items-center flex md:hidden w-full flex-col px-9 py-10 max-md:px-5">
      <h3 className="text-stone-900 text-center text-2xl font-bold self-stretch">
        Experience in all major BIB platforms/Ovens
      </h3>
      <div className="text-slate-50 text-center text-sm whitespace-nowrap justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-4 px-8 py-6 max-md:px-5">
        HTOL (Criteria, Incal 160,etc.)
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-6 max-md:px-5">
        ABTS Li, P
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-6 max-md:px-5">
        MCC (LC2,HPB5)
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-3.5 max-md:px-5">
        HAST/THB (Hirayama, Despatch, etc.)
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-6 max-md:px-5">
        AEHR MAX3
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-6 max-md:px-5">
        SH2
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-6 max-md:px-5">
        HBM / LU Boards
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-3.5 max-md:px-5">
        Custom Rails/Frame designs for Burn In Boards
      </div>
      <div className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] self-center w-full max-w-[250px] mt-3.5 px-8 py-3.5 max-md:px-5">
        Socket selection and procurement
      </div>
    </div>
    {/* Desktop */}

    <div className="bg-green_shade hidden md:flex w-full center-section flex-col items-center px-20 py-12 max-md:max-w-full max-md:px-5">
      <h3 className="text-neutral-950 text-center mb-10 text-2xl font-bold max-w-[763px] mt-7 max-md:max-w-full">
        Experience in all major BIB platforms/Ovens
      </h3>
      <div className="w-full max-w-[1111px] mt-6 mb-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <motion.div variants={container}
                  ref={ref}

    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    className="items-stretch flex grow flex-col max-md:mt-5">
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-stretch bg-[#4A9A99] px-10 py-11 rounded-lg max-md:px-5">
                HTOL (Criteria, Incal 160,etc.)
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-[#4A9A99] mt-5 px-16 py-11 rounded-lg max-md:px-5">
                ABTS Li, P
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-[#4A9A99] mt-5 px-16 py-11 rounded-lg max-md:px-5">
                MCC (LC2,HPB5)
              </motion.div>
            </motion.div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <motion.div variants={container}
                  ref={ref2}

    initial="hidden"
    animate={isInView2 ? "visible" : "hidden"}
    className="items-stretch flex grow flex-col max-md:mt-5">
                 <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold justify-center items-stretch bg-[#4A9A99] px-0.5 py-8 rounded-lg">
                HAST/THB <br /> (Hirayama, Dispatch, etc.)
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-[#4A9A99] mt-5 px-16 py-11 rounded-lg max-md:px-5">
                AEHR MAX3
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-[#4A9A99] mt-5 px-16 py-11 rounded-lg max-md:px-5">
                SH2
              </motion.div>
            </motion.div>
            {/* <div className="items-stretch flex grow flex-col max-md:mt-5">
           
            </div> */}
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            
             <motion.div variants={container}
                  ref={ref3}

    initial="hidden"
    animate={isInView3 ? "visible" : "hidden"}
    className="items-stretch flex grow flex-col max-md:mt-5">
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold whitespace-nowrap justify-center items-center bg-[#4A9A99] px-16 py-11 rounded-lg max-md:px-5">
                HBM / LU Boards
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold justify-center items-stretch bg-[#4A9A99] mt-5 px-14 py-8 rounded-lg max-md:px-5">
                Custom Rails/Frame designs for Burn In Boards
              </motion.div>
              <motion.div variants={item} className="text-slate-50 text-center text-base font-semibold justify-center items-stretch bg-[#4A9A99] mt-5 px-14 py-8 rounded-lg max-md:px-5">
                Socket selection and procurement
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ExperienceComponent