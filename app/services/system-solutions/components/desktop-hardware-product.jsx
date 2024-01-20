"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useServices } from "../../../zustand/store";
import Image from "next/image";
function DesktopHardwareProduct(props) {
  const hardwareSectionRef = useRef();
  const isInViewHardwareProduct = useInView(hardwareSectionRef);
  const change_systemsolutions = useServices(
    (state) => state.change_systemsolutions
  );

  console.log(isInViewHardwareProduct);
  useEffect(() => {
    if (isInViewHardwareProduct) {
      change_systemsolutions("our-process");
    }
  }, [isInViewHardwareProduct]);
  return (
    <div
      className="bg-white mx-auto w-full center-section max-w-full  hidden md:block pt-10"
      id="our-process"
    >
      <div className="bg-white flex flex-col justify-center items-center px-16 py-12 max-md:px-5">
        <div className="flex w-full  flex-col items-center mt-9 mb-16 max-md:max-w-full max-md:mb-10">
          <h2
            className="text-neutral-950 text-4xl py-24 font-bold "
            ref={hardwareSectionRef}
          >
            Hardware Product Transformation
          </h2>
          <div className="justify-between items-center self-stretch flex gap-5 mt-6 px-5 max-md:px-5 relative ">
            <div className="flex w-[22px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />
            <div className="flex w-[23px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />
            <div className="flex w-[23px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />
            <div className="flex w-[22px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />
            <div className="flex w-[22px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />
            <div className="flex w-[22px] shrink-0 h-[23px] bg-[#CAE1E1] flex-col rounded-[50%]" />

            <div className="flex absolute inset-0 items-center  mx-auto">
              <div className=" w-full border max-w-full border-[#CAE1E1] "></div>
            </div>
          </div>

          <div className="self-stretch flex justify-start gap-[5%] mt-5 items-start  w-full">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">
                Hardware Design
              </p>
              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">
                  System Architecture and component selection
                </li>
                <li className="text-gray-800 text-sm">Circuit Simulation</li>
                <li className="text-gray-800 text-sm">
                  Technical hardware design document{" "}
                </li>
                <li className="text-gray-800 text-sm">Layout Engineering </li>
                <li className="text-gray-800 text-sm">
                  Schematic Engineering{" "}
                </li>
              </ul>
            </div>

            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">Simulation</p>
              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">
                  Stack-up engineering{" "}
                </li>
                <li className="text-gray-800 text-sm">
                  Signal Integrity Analysist
                </li>
                <li className="text-gray-800 text-sm">
                  Power Integrity Analysis{" "}
                </li>
              </ul>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">
                FPGA & Embedded SW
              </p>

              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">
                  FPGA RLT Design, Validation and Verification
                </li>
                <li className="text-gray-800 text-sm">
                  Firmware Design testing - Software Design, Development and
                  testing
                </li>
              </ul>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">
                Mechanical & Thermal Capablities{" "}
              </p>

              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">Industrial Design </li>
                <li className="text-gray-800 text-sm">Structural Analysis</li>
                <li className="text-gray-800 text-sm">Mechanical Design</li>
                <li className="text-gray-800 text-sm">Thermal Simulation</li>
                <li className="text-gray-800 text-sm">MTBF Analysis</li>
              </ul>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">
                Bring up & Validation
              </p>

              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">
                  Hardware Function bringing up{" "}
                </li>
                <li className="text-gray-800 text-sm">
                  Electrical Design Validation Test ( EDTV )
                </li>
                <li className="text-gray-800 text-sm">
                  Mechanical Design Validaion Test ( MDTV )
                </li>
                <li className="text-gray-800 text-sm">
                  FCC and UL Safety certifications
                </li>
              </ul>
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <p className="text-neutral-950 text-base font-bold">
                Prototyping{" "}
              </p>

              <ul className="flex flex-col gap-5 mt-5 w-[165px]">
                <li className="text-gray-800 text-sm ">
                  Prototype and Production end - to - end manufacturing
                </li>
                <li className="text-gray-800 text-sm">
                  Production test suite development and optimization
                </li>
                <li className="text-gray-800 text-sm">
                  Production testing - Flying Probe, ICT and Functional
                </li>
                <li className="text-gray-800 text-sm">
                  Packaging and Shipment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DesktopHardwareProduct;
