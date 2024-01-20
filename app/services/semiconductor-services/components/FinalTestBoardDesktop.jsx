"use client";
import { ArrowCircleRight } from "@phosphor-icons/react";
import React, { useRef } from "react";
import DownToUp from "../../../shared/animations/DownToUp";
import { useInView, motion } from "framer-motion";

const CONTENTS = [
  "Experience in all major ATE platforms – Teradyne, Advantest, Nextest, Chroma, NI & other platforms.",
  "Simulation Correlation - TDR Measurement on board to verify back drill stub effect.",
  "Decoupling Scheme Recommendation to meet transient current requirement.",
  "Power Integrity – IR Drop Optimization, Site to Site correlation.",
  "Step Drilling for Test Pogo vias, via modelling for high frequency, optimized pogo footprint.",
];

const CONTENTS2 = [
  "Blind Vias for >20GHz to eliminate stub effect",
  "Impedance optimization for BGA Vias, BGA Breakout region, Differential Via Modelling, Die pad optimizations.",
  "Hybrid PCB Stack up with Low Dk Material for High-Speed layers (Megtron7, Megtron6, Rogers 4003C, Rogers 4350B etc.,",
  "Max Layer Count – 82 Layers/ PCB Size/Diameter – Up to 520 mm",
];


const FinalTestBoardDesktop = () => {

  
  const container2 = {
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
  
  const item2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const section1 = useRef()
  const isInView = useInView(section1)

  const section2 = useRef()
  const isInView2 = useInView(section2)
  return (
    <section className="bg-green_shade ]">
      <section className="pt-24 bg-center bg-contain bg-no-repeat bg-fixed bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704273634/pactron/services-background_m5roql.jpg)]">
        <article className="flex justify-center gap-10 items-start center-section">
          <div className="w-4/12 flex flex-col" ref={section1}>
            <h2 className="text-3xl font-bold text-primary">
              Final Test Board
            </h2>
            <p className="text-base font-normal w-[400px] mt-5">
              Pactron provides customized solutions designed to meet specific IC
              testing requirements, ensuring accurate and reliable interfacing
              between the device under test and automated test equipment.
            </p>
          </div>
          <motion.div variants = {container2} className="overflow-hidden w-5/12 text-primary  bg-service_green rounded-sm py-10 pl-8 pr-10">
          <DownToUp isInView = {isInView} classes="flex flex-col gap-5">
            {CONTENTS.map((content) => (
              <motion.div variants = {item2}
                className="flex justify-center items-center gap-5"
                key={content}
              >
                <ArrowCircleRight size={40} className="" color="#297174" />
                <p className="text-base font-normal w-11/12" >{content} </p>
              </motion.div>
            ))}
          </DownToUp>
          </motion.div>
        </article>
        <article ref={section2} className="flex justify-center gap-10 items-start center-section mt-[200px] bg-transparent">
          <div className="w-4/12 flex flex-col">
            <h2 className="text-3xl font-bold text-primary">
            Probe Cards            </h2>
            <p className="text-base font-normal w-[400px] mt-5">
            Pactron offers advanced technology and design services to create precise and durable cards suitable for wafer-level testing, ensuring high-quality and efficient testing for semiconductor wafers before they are packaged.
            </p>
          </div>
          <div className=" w-5/12 text-primary overflow-hidden  bg-service_green rounded-sm py-10 pl-8 pr-10">
            <DownToUp isInView={isInView2} classes="flex flex-col gap-5">
            {CONTENTS2.map((content) => (
              <div
                className="flex justify-center items-center gap-5"
                key={content}
              >
                <ArrowCircleRight size={40} className="" color="#297174" />
                <p className="text-base font-normal w-11/12" >{content} </p>
              </div>
            ))}
            </DownToUp>
          </div>
        </article>
      </section>
    </section>
  );
};

export default FinalTestBoardDesktop;
