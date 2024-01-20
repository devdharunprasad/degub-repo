"use client"
import React, { useEffect } from "react";
import { useServices } from "../../../zustand/store";
import ProgressBar from "../../../shared/animations/ProgressBar";
import gsap, { ScrollToPlugin } from "gsap/all";

function TechnologyNavBar(props) {

    const technologyservices = useServices((state) => state.technologyservices)
  console.log(technologyservices)
 useEffect(() => {
  gsap.registerPlugin(ScrollToPlugin)
 })
  
    return (
      <section className="bg-[#ECEFEF] sticky top-0 left-0 z-[999]">
        <div className=" hidden md:block flex-col items-center pt-6 px-16 w-full center-section max-md:px-5">
          <div className="flex w-[954px] mx-auto max-w-full flex-col items-stretch">
            <div className="justify-between items-center flex gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
              <a
                // href="#simulation-services"
                onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#simulation-services", offsetY : 60 },ease : "linear"})}
                className={`text-neutral-950 hover:text-gray-500 text-center text-base leading-5  my-auto ${
                  technologyservices === "simulation-services" && `font-bold`
                } transition-all duration-300 cursor-pointer`}
              >
               Simulation Services
              </a>
              <a
                // href="#subtrate-mlo-mlc-design"
                onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#subtrate-mlo-mlc-design", offsetY : 60 },ease : "linear"})}

                className={`text-neutral-950 hover:text-gray-500 text-center text-base leading-5  my-auto ${
                  technologyservices === "subtrate-mlo-mlc-design" &&
                  `font-bold`
                } transition-all duration-300 cursor-pointer`}
              >
                Substrate and <br /> MLO/MLC Design
              </a>
              <a
                // href="#embedded-software"
                onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#embedded-software", offsetY : 60 },ease : "linear"})}

                className={`text-neutral-950 hover:text-gray-500 text-center text-base leading-5  my-auto ${
                  technologyservices === "embedded-software" && `font-bold`
                } transition-all duration-300 cursor-pointer`}
              >
                Embedded Software <br /> Development
              </a>
              <a
                // href="#fpga"
                onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#fpga", offsetY : 140},ease : "linear"})}

                className={`text-neutral-950 hover:text-gray-500 text-center text-base leading-5  my-auto ${
                  technologyservices === "fpga" && `font-bold`
                } transition-all duration-300 cursor-pointer`}
              >
                FPGA design
              </a>
              <a
                // href="#prototyping-services"
                onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#prototyping-services", offsetY : 60 },ease : "linear"})}

                className={`text-neutral-950 hover:text-gray-500 text-center text-base leading-5  my-auto ${
                  technologyservices === "prototyping-services" &&
                  `font-bold`
                } transition-all duration-300 cursor-pointer`}
              >
Prototyping 
Services              </a>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cb8ef189836a0593ba67b89e6a6755e33aa44168f5bf209f59bc6595b11adae?apiKey=cb09127259af43f49535d3079eb90155&"
              className="aspect-[59.33] object-contain object-center w-[178px] stroke-[4px] stroke-teal-600 overflow-hidden max-w-full mt-5 self-start"
              alt="Product Development"
            />
          </div>
        </div>
        <ProgressBar />
      </section>
    );
}


export default TechnologyNavBar;