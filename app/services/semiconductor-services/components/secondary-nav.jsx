"use client";

import React, { useEffect } from "react";
import { useServices } from "../../../zustand/store";
import ProgressBar from "../../../shared/animations/ProgressBar";
import gsap, {ScrollToPlugin} from "gsap/all";

const SecondaryNav = () => {
  const semiconductor = useServices((state) => state.semiconductor);
  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin)
  },[])

  
  return (
    <section className="bg-[#ECEFEF] sticky top-0 left-0 z-[999]">
      <div className=" hidden md:block flex-col items-center pt-6 px-16 w-full center-section max-md:px-5">
        <div className="flex w-[954px] mx-auto max-w-full flex-col items-stretch">
          <div className="justify-between items-center flex gap-10 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <a
              // href="#ate-solutions-section"
              onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#ate-solutions-section", offsetY : 60 },ease : "linear"})}
              className={`text-neutral-950 text-base whitespace-nowrap my-auto text-center ${
                semiconductor === "ate-solutions" && `font-bold`
              } hover:text-gray-500 transition-all duration-300 cursor-pointer`}
            >
              ATE Solutions
            </a>
            <a
              onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#reliability-and-burn", offsetY : 60 },ease : "linear"})}
              className={`text-neutral-950 text-base whitespace-nowrap my-auto text-center ${
                semiconductor === "reliability" && `font-bold`
              } hover:text-gray-500 transition-all duration-300 cursor-pointer`}
            >
              Reliability and Burn-in Engineering
            </a>
            <a
              // href="#characterization-boards"
              onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#characterization-boards", offsetY : 300 },ease : "linear"})}
              className={`text-neutral-950 text-base whitespace-nowrap my-auto text-center ${
                semiconductor === "characterization-boards" && `font-bold`
              } hover:text-gray-500 transition-all duration-300 cursor-pointer`}
            >
              Characterization boards{" "}
            </a>
            <a
              // href="#characterization-boards"
              onClick={() => gsap.to(window, {duration : .1, scrollTo : {y :"#reference-design-and-development", offsetY : 60 },ease : "linear"})}
              className={`text-neutral-950 text-base whitespace-nowrap my-auto text-center ${
                semiconductor === "reference-design-and-development" && `font-bold`
              } hover:text-gray-500 transition-all duration-300 cursor-pointer`}
            >
              Reference Design and Development

            </a>
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
};

export default SecondaryNav;
