"use client"
import * as React from "react";
import Link from "next/link"
import { useInView } from "framer-motion";
const EmbraceSection = (props) => {
  const sectionRefLeft = React.useRef()
  const isInViewLeft = useInView(sectionRefLeft)
  console.log(isInViewLeft)
  return (
    <section className=" bg-footer_green overflow-x-hidden" >
    <div className="justify-center items-center center-section hidden md:flex w-full flex-col px-16 py-24 max-md:max-w-full max-md:px-5">
      <div className="w-full max-w-[1162px] mt-10 mb-16 max-md:max-w-full max-md:mb-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div ref={sectionRefLeft} className={`flex rounded-md bg-light_green bg-opacity-60 transition-all duration-1000  ${isInViewLeft ? `opacity-1 translate-x-0` : `opacity-0 -translate-x-1/2`}  backdrop-blur-sm shadow-[0_10px_10px_rgb(0,0,0,0.2)] flex-col items-center justify-center w-[54%] max-md:w-full max-md:ml-0`}>
            <h1 className={`text-white text-center text-3xl font-bold leading-10 w-full justify-center items-center px-16 py-11 rounded-lg max-md:max-w-full max-md:mt-10 max-md:pl-6 max-md:pr-7 `} aria-label="Embrace innovation and inclusivity">
              “Embrace innovation and inclusivity”
            </h1>
          </div>
          <div className={`flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0 ${isInViewLeft ? `opacity-1 translate-x-0` : `opacity-0 translate-x-1/2`} transition-all duration-1000`}>
            <div className="justify-center self-stretch flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
              <h2 className="text-white text-2xl font-bold self-stretch max-md:max-w-full" aria-label="Become one of us">
                Become one of us
              </h2>
              <p className="text-white text-lg self-stretch mt-2 max-md:max-w-full" aria-label="At Pactron, our team drives our success. We provide dynamic careers and an environment that nurtures creativity and growth.">
                At Pactron, our team drives our success. We provide dynamic careers and an environment that nurtures creativity and growth.
              </p>
              <Link href ="/careers" className="text-slate-200 text-base font-bold whitespace-nowrap justify-center items-stretch border border-[color:var(--b-color-b-7,#DFEDED)] mt-4 pt-3 pb-3 px-6 rounded-sm border-solid max-md:px-5  hover:shadow-[0_5px_10px_rgba(0,_0,_0,_0.2)] hover:-translate-y-1 transition-all duration-300" aria-label="Contact us">
                Join us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="justify-center center-section items-center bg-primary flex md:hidden w-full flex-col px-9 py-10 max-md:px-5">
      <div className={`text-slate-50 text-center text-2xl font-bold self-stretch justify-center items-stretch px-8 py-5 rounded max-md:px-5 $ transition-all duration-1000`}>
        “Embrace innovation and inclusivity”
      </div>
      <div className="text-slate-50 text-center text-2xl font-bold leading-8 self-stretch mt-2">
        Become one of us
      </div>
      <div className="text-slate-50 text-center text-base leading-6 self-stretch mt-2">
        At Pactron, our team drives our success. We provide dynamic careers and
        an environment that nurtures creativity and growth.
      </div>
      <Link href = "/careers" className="text-slate-50 text-base font-semibold whitespace-nowrap justify-center items-stretch border-[color:var(--g-color-g-7,#F8FDFD)] self-center mt-4 px-4 py-2 rounded-sm border-[0.592px] border-solid">
        Join us
      </Link>
    </div>
</section>
  );
}

export default EmbraceSection