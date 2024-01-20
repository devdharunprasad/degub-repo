"use client";
import { CheckCircle } from "@phosphor-icons/react";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useServices } from "../../../zustand/store";
import RightToLeft from "../../../shared/animations/RightToLeft";

const PrototypingService = () => {

  const change_technologyservices = useServices(state => state.change_technologyservices)

  const protoRef  = useRef()
  const isInView = useInView(protoRef)
      console.log(isInView)
  useEffect(() => {
      if(isInView){
          change_technologyservices("prototyping-services")
      }
  },[isInView])


  return (
    <section
      id="prototyping-services"
      className="py-24 overflow-hidden bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704725811/pactron/89_zpybfj.jpg)] bg-cover bg-center"
    >
      <div className="center-section">
        <RightToLeft isInView={isInView}>
        <div className="flex flex-col items-stretch w-6/12 ml-auto pl-20  text-white ">
          <div className="items-stretch flex grow flex-col pb-4 max-md:max-w-full max-md:mt-10">
            <h2
              className={` text-3xl font-bold max-md:max-w-full transition-all duration-1000 delay-300`}
            >
              Prototyping Services
            </h2>
            <p
              className={`text-base mt-3 max-md:max-w-full  transition-all duration-1000 delay-300`}
            >
              We leverage the power of software solutions that enable
              digitization, management, and seamless sharing of assembly
              instructions and related data.
            </p>
            <p
              className={`text-base mt-3 max-md:max-w-full  transition-all duration-1000 delay-300`}
            >
              Pactron{`’`}s forte is {`"`} High Complex & Low Volume mix {`"`}{" "}
              and Proudly operates an advanced in house PCB Assembly facility
              located in the U.S. This facility enhances our capabilities
              ,allowing us to seamlessly blend design engineering, manufacturing
              and Assembly.
            </p>
          </div>
          <h2
                ref={protoRef}

            className={` mt-5 text-3xl font-bold max-md:max-w-full transition-all duration-1000 delay-300`}
          >
            Highlights of manufacturing services{" "}
          </h2>
          <div className="grid grid-rows-3 gap-0 grid-cols-2 mt-5">
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Automated factory with paperless workflow.
              </p>
            </div>
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Dedicated customer program management.{" "}
              </p>
            </div>
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Box-build and system integration capability.{" "}
              </p>
            </div>
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Reference kit production and order fulfilment{" "}
              </p>
            </div>
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Quality control through in-process Automatic Optical Inspection
                (AOI) and 3D X-Ray inspection
              </p>
            </div>
            <div className="flex justify-start gap-2 items-start">
              <CheckCircle size={32} className=" " />
              <p className="text-base font-semibold w-10/12">
                Advanced ERP system for work-order and supply chain management.{" "}
              </p>
            </div>
          </div>
        </div>
        </RightToLeft>
      </div>
    </section>
  );
};

export default PrototypingService;
