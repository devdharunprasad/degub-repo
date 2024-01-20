"use client"

import React, { useEffect } from "react";
import {useServices} from "../../../zustand/store"
import ProgressBar from "../../../shared/animations/ProgressBar"
import gsap, { ScrollToPlugin } from "gsap/all";

function Navbar(props) {

    const systemsolutions = useServices((state) => state.systemsolutions)
    console.log(systemsolutions)

    useEffect(() => {
      gsap.registerPlugin(ScrollToPlugin)
    },[])
  return (  
    <section className="bg-[#ECEFEF] sticky top-0 left-0 z-[999]">
        <div className=" hidden md:block flex-col items-center pt-6 px-16 w-full center-section max-md:px-5">
        <div className="flex w-[954px] mx-auto max-w-full flex-col items-stretch">
            <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <a
            //  href = "#product-development" 
            onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#product-development", offsetY : 60 },ease : "linear"})}
             className={`text-neutral-950 hover:text-gray-500 text-lg ${systemsolutions === "product-development" && `font-bold`} transition-all duration-300 leading-5 whitespace-nowrap my-auto cursor-pointer`}>
                Product Development
            </a>
          
            <a 
            // href = "#end-to-end-solution"
             onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#end-to-end-solution", offsetY : 60 },ease : "linear"})}
            className={`text-neutral-950 hover:text-gray-500 ${systemsolutions === "end-to-end-solution" && `font-bold`} transition-all duration-300 text-base leading-5 my-auto cursor-pointer`}>
            End to End Solutions
            </a>
            <a 
            // href = "#advanced-engineering-prowess"
            onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#advanced-engineering-prowess", offsetY : 100 },ease : "linear"})} 
            className={`text-neutral-950 hover:text-gray-500 text-center text-base  ${systemsolutions === "advanced-engineering-prowess" && `font-bold`} transition-all duration-300 leading-5 cursor-pointer`}>
            Advanced Engineering Prowess            </a>


            <a 
            // href = "#design-capabilities"
            onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#design-capabilities", offsetY : 60 },ease : "linear"})}
             className={`text-neutral-950 hover:text-gray-500 text-center text-base  ${systemsolutions === "design-capabilities" && `font-bold`} transition-all duration-300 leading-5 cursor-pointer`}>
            Design Capabilities </a>
            </div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb8ef189836a0593ba67b89e6a6755e33aa44168f5bf209f59bc6595b11adae?apiKey=cb09127259af43f49535d3079eb90155&"
            className="aspect-[59.33] object-contain object-center w-[178px] stroke-[4px] stroke-teal-600 overflow-hidden max-w-full mt-5 self-start"
            alt="Product Development"
            />
        </div>
        </div>
<ProgressBar/>
    </section>
  );
}

export default Navbar;