"use client"

import React, { useEffect, useRef } from "react";
import {useInView} from "framer-motion"
import { useServices } from "../../../zustand/store";
import RightToLeft from "../../../shared/animations/RightToLeft";
function ArtManufacturing(props) {

  const artRef  = useRef()
  const isInView = useInView(artRef)
  const change_technologyservices = useServices(state => state.change_technologyservices)
      console.log(isInView)
  useEffect(() => {
      if(isInView){
          change_technologyservices("state-of-the-art-manufacturing")
      }
  },[isInView])


  return (
    <section className=" bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1703746001/pactron/green-bg-ts_hsdyac.jpg)] bg-center bg-cover overflow-x-hidden">
    <div className="justify-center items-stretch md:hidden bg-slate-50 flex flex-col pt-4 pb-12 px-9">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ac0014bb342fe6bf0765e9fb51968d85cba3b1eded6edcd5de3df8245be4ac99?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[0.85] object-contain object-center w-full overflow-hidden"
        alt="Manufacturing Image"
      />
      <header className="text-stone-900 text-2xl font-bold leading-7 mt-10">
        Our State of the art manufacturing
      </header>
      <div className="text-stone-900 text-base leading-6 mt-4 mb-1.5">
        Our Manufacturing services bring your designs to life with cutting-edge technology, expert craftsmanship, and uncompromising quality. <br />
        We leverage the power of software solutions that enable digitization, management, and seamless sharing of assembly instructions and related data.
      </div>
      <div className="text-stone-900 text-base leading-6 mt-4 mb-1.5">
        Pactron forte is &quot; High Complex & Low Volume mix &quot; and Proudly operates an advanced in house PCB Assembly facility located in the U.S. This facility enhances our capabilities ,allowing us to seamlessly blend design engineering, manufacturing and Assembly
      </div>
    </div>


    {/* Desktop */}
    <div className="hidden md:block flex-col justify-center items-center px-16 py-24 max-md:px-5 w-full center-section mx-auto " id = "state-of-the-art-manufacturing">
      <div className="gap-10 flex justify-between max-md:gap-0 text-white ">
        <div className="flex flex-col items-stretch w-[38%] max-md:w-full max-md:ml-0">
      
        </div>
        <div className="flex mt-14 justify-end w-6/12  ">
          <RightToLeft isInView={isInView}>
          <div className="items-stretch flex grow flex-col ml-10 pb-4 max-md:max-w-full max-md:mt-10 mx-auto">
            <h3  ref = {artRef} className=" text-3xl font-bold leading-10 max-md:max-w-full">
              Our State of the art manufacturing
            </h3>
            <div className=" text-xl font-semibold leading-9  mt-4 max-md:max-w-full">
              Enable your electronics with precision and perfection.
            </div>
            <p className=" text-base leading-7 mt-4 max-md:max-w-full">
  
        Our Manufacturing services bring your designs to life with cutting-edge technology, expert craftsmanship, and uncompromising quality. <br />
        We leverage the power of software solutions that enable digitization, management, and seamless sharing of assembly instructions and related data.
      </p>
      <p className=" text-base leading-7 mt-4 max-md:max-w-full">
        Pactron forte is &quot; High Complex & Low Volume mix &quot; and Proudly operates an advanced in house PCB Assembly facility located in the U.S. This facility enhances our capabilities ,allowing us to seamlessly blend design engineering, manufacturing and Assembly
      </p>
          </div>
          </RightToLeft>
        </div>
      </div>
    </div>

    
    </section>
  );
}

export default ArtManufacturing;