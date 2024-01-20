"use client"
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import RightToLeft from "../../shared/animations/RightToLeft";
import LeftToRight from "../../shared/animations/LeftToRight";

function YearExcellence(props) {
  const sectionRef = useRef()
  const isInView = useInView(sectionRef)

  return (
<section className="py-24 bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704726031/pactron/89_hvcmrg.jpg)] bg-cover bg-center overflow-hidden">
      <div className="center-section">
    <div className="flex w-full flex-col  relative z-20 justify-center pl-16 py-12 items-start max-md:max-w-full max-md:px-5 " ref = {sectionRef}>
          <LeftToRight isInView={isInView}>
          <div className="flex   mr-auto w-[500px] flex-col items-stretch  mt-32 mb-32  max-md:my-10">
            <h1 className="text-white text-4xl font-bold max-md:max-w-full max-md:text-4xl leading-normal" aria-label="Company slogan">
              20+ years of excellence in the industry
            </h1>
            <p className="text-white w-[550px] text-lg mt-6 max-md:max-w-full" aria-label="Company description">
              Pactron offers comprehensive board-level solutions for the semiconductor industry, including hardware design, product development, embedded software, and turnkey manufacturing, trusted by leading global semiconductor companies.
            </p>
          </div>
          </LeftToRight>
        </div>
      </div>
    </section>
  );
}

export default YearExcellence;




