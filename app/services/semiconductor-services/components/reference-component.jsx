"use client"
import React, { useRef } from "react";
import { useServices } from "../../../zustand/store";
import {useInView} from "framer-motion"
import LeftToRight from "../../../shared/animations/LeftToRight"
import RightToLeft from "../../../shared/animations/RightToLeft"
import DownToUp from "../../../shared/animations/DownToUp";

const ReferenceComponent = (props) => {
  const change_semiconductor = useServices((state) => state.change_semiconductor)
  const section_reference = useRef()
  const isInView = useInView(section_reference)
  console.log(isInView)
  if(isInView){
    change_semiconductor("reference-design-and-development")
  }
  return (
    <section className="bg-green_shade py-12 bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704947881/pactron/Frame_1000002736_ofqkb3.jpg)] bg-cover bg-center overflow-hidden" id = "reference-design-and-development"  >
     <div className="relative center-section max-w-full my-12 max-md:my-10">
        <div className="gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <span className="items-stretch relative flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-slate-200 text-3xl font-bold max-md:max-w-full" ref = {section_reference}>
                Reference design & development
              </div>
              <div className="text-white text-lg mt-3 max-md:max-w-full">
                Working in conjunction with Applications Engineering and Product
                Marketing groups at its semiconductor clients, Pactron develops
                Customer Reference Boards, Evaluation Boards and Reference
                Design packages for its clients. Pactron’s design and
                engineering experience in the areas such as High Speed, RF,
                and/or Mixed Signal design often plays a large hand in the
                successful and expeditious development of its client’s Reference
                Boards and Platforms. <br />
                <br />
                Pactron’s Reference Design solution is tightly integrated with
                its Contract Manufacturing/Prototyping service. Through this
                integrated environment, Pactron’s customers are able to realize
                a one stop solution for the engineering and manufacture of a
                Reference Platform.
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 ">
            <span className="items-stretch bg-[#1B2626] relative flex grow flex-col w-full px-6 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
              <div className="text-white text-2xl font-bold max-md:max-w-full" >
                Semiconductor Device <br />
                Validation Platforms
              </div>
              <DownToUp isInView={isInView}>
              <div className="flex flex-col ">
              <span className="items-stretch flex justify-between gap-5 mt-8 pr-6 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d491865849910475b49be3e42a06d7fb310e41614436cf6bb105e013651f0c?"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base self-center grow whitespace-nowrap my-auto">
                  High Speed Serial designs up to 40 Ghz
                </div>
              </span>
              <span className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d491865849910475b49be3e42a06d7fb310e41614436cf6bb105e013651f0c?"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base self-stretch grow shrink basis-auto">
                  Fine pitch Devices (Schematic Engineering, board Design,
                  Layout, SI and DFM/DFT Implementation)
                </div>
              </span>
              <span className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d491865849910475b49be3e42a06d7fb310e41614436cf6bb105e013651f0c?"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-white text-base self-stretch grow shrink basis-auto">
                  Turnkey Board Assembly, Board Bring-up and Functional Testing
                </div>
              </span>
              <span className="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d491865849910475b49be3e42a06d7fb310e41614436cf6bb105e013651f0c?"
                  className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                />
                <div ref = {section_reference} className="text-white text-base self-center grow whitespace-nowrap my-auto">
                  Complete Fulfillment
                </div>
              </span>
              </div>
              </DownToUp>
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}

export default ReferenceComponent;