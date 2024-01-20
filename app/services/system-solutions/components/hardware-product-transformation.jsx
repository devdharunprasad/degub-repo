"use client";
import React, { useEffect, useRef, useState } from "react";
import CircleChipset from "./circle-chipset";
import { useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useServices } from "../../../zustand/store";
import DownToUp from "../../../shared/animations/DownToUp";

const HardwareProductTransformation = () => {
  const [isSection1Passed, setIsSection1Passed] = useState(false);
  const [isSection2Passed, setIsSection2Passed] = useState(false);

  const section1 = useRef();
  const isInView1 = useInView(section1);

  const section2 = useRef();
  const isInView2 = useInView(section2, { amount: 0.5 });

  const section3 = useRef();
  const isInView3 = useInView(section3, { amount: 0.5 });

  const section4 = useRef();
  const isInView4 = useInView(section4, { amount: 0.5 });

  const section5 = useRef();
  const isInView5 = useInView(section5, { amount: 0.5 });

  const section6 = useRef();
  const isInView6 = useInView(section6, { amount: 0.5 });

  console.log({ isSection1Passed });

  const change_systemsolutions = useServices(
    (state) => state.change_systemsolutions
  );
  const section_end = useRef();
  const isInView = useInView(section_end);
  if (isInView) {
    change_systemsolutions("end-to-end-solution");
  }

  return (
    <section className="pb-20 relative bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1705549125/end-to-end-bg_ncumwj.jpg)] bg-cover bg-center" id="end-to-end-solution">
      <div className="center-section text-white" >
        <div className="items-stretch  flex flex-col py-12">
          <div className="items-center flex w-full flex-col justify-center mt-7 px-16 max-md:max-w-full max-md:">
            <div className="flex w-[540px] max-w-full flex-col items-center">
              <div className=" text-3xl font-bold">
                End to End Solutions
              </div>
              <div className=" text-center text-base  mt-4 max-md:max-w-full">
                Pactron, in conjunction with its clients covers the entire
                product development lifecycle from initial concept to
                production.
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 " ref = {section_end}>
          <div className={`h-1 ${isInView ? `w-full` : `w-0`} bg-primary absolute top-[30%] left-0 transition-all duration-[3s]`} />
          <span className="items-start flex w-2/12 flex-col">
            <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>
            <div className=" text-lg mt-5 font-bold self-center">
              Hardware Design
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                System Architecture and component selection
              </div>
            </span>
            <span className="items-start  flex  gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                Circuit Simulation
              </div>
            </span>
            <span className="items-center  flex justify-between gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                Technical hardware design document
              </div>
            </span>
            <span className="items-start  flex justify-start gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                Layout Engineering
              </div>
            </span>
            <span className="items-start  flex justify-start gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center grow my-auto">
                Schematic Engineering
              </div>
            </span>
          </span>
          <span className="items-start flex w-2/12 flex-col">
          <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>

            <div className=" mt-5 text-lg font-bold self-center">
              Simulation
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">Stack-up engineering</div>
            </span>
            <span className="items-start  flex justify-start mt-5 gap-3 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm  my-auto">
                Signal Integrity Analysist
              </div>
            </span>
            <span className="items-center  flex justify-between gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                Power Integrity Analysis
              </div>
            </span>
          </span>
          <span className="items-start flex w-2/12 flex-col">
          <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>

            <div className=" mt-5 text-lg font-bold self-center">
              FPGA & Embedded SW
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                FPGA RLT Design, Validation and Verification
              </div>
            </span>
            <span className="items-start  flex justify-start mt-5 gap-3 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm  my-auto">
                Firmware Design testing - Software Design, Development and
                testing
              </div>
            </span>
          </span>
          <span className="items-start flex w-2/12 flex-col">
          <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>

            <div className=" text-lg font-bold self-center mt-5">
              Mechanical & Thermal Capablities
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">Industrial Design</div>
            </span>
            <span className="items-start  flex  gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                Structural Analysis
              </div>
            </span>
            <span className="items-center  flex justify-between gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                Mechanical DesignTechnical hardware design document
              </div>
            </span>
            <span className="items-start  flex justify-start gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                Layout EngineeringThermal Simulation
              </div>
            </span>
            <span className="items-start  flex justify-start gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center grow my-auto">
                MTBF Analysis
              </div>
            </span>
          </span>
          <span className="items-start flex w-2/12 flex-col">
          <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>

            <div className=" text-lg font-bold mt-5 self-center">
              Bring up & Validation
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                Hardware Function bringing up{" "}
              </div>
            </span>
            <span className="items-start  flex  gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                Electrical Design Validation Test ( EDTV )
              </div>
            </span>
            <span className="items-center  flex justify-between gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
                Mechanical Design Validaion Test ( MDTV ){" "}
              </div>
            </span>
            <span className="items-start  flex justify-start gap-3 mt-5 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className=" text-sm self-center my-auto">
                FCC and UL Safety certifications
              </div>
            </span>
          </span>
          <span className="items-start flex w-2/12 flex-col">
          <div className="h-5 rounded-full -mt-[30px] mx-auto l w-5 bg-primary "/>

            <div className=" text-lg font-bold self-center mt-5">
            Prototyping
            </div>
            <span className="items-center  flex justify-between gap-3 mt-4 ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e947928e3f6461106eb1b80226a47f74ac2d9f4732fab5cbf317c9808ac48a3?"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
              />
              <div className=" text-sm ">
              Prototype and Production 
end - to - end 
manufacturing            </div>
            </span>
          
          </span>
        </div>
      </div>
    </section>
  );
};

export default HardwareProductTransformation;
