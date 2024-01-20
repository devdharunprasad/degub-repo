"use client"
import { ArrowCircleRight } from '@phosphor-icons/react';
import React, { useEffect, useRef } from 'react'
import DownToUp from '../../../shared/animations/DownToUp';
import { useInView } from 'framer-motion';
import { useServices } from '../../../zustand/store';

const CONTENTS = [
    "System board with Soc & FPGA",
    "Standard form factor design including PCIe, HHHL. M.2 & Dual M.2",
    "Network Interfaces like SFP , SFP+, QSFP, Ethernet , etc…..",
    "Design of power modules, socket design & Industrial of enclosures .",
    "High speed Interfaces PCIe 5.2, USB 3.2,MIPI, SATA, USB 2.0.",
  ];
  

const DesignCapabilitiesHighlights = () => {

  const section = useRef();
  const isInDesignProduct = useInView(section);
  const change_systemsolutions = useServices(
    (state) => state.change_systemsolutions
  );

  useEffect(() => {
    if (isInDesignProduct) {
      change_systemsolutions("design-capabilities");
    }
  }, [isInDesignProduct]);

  return (

    <section r id = "design-capabilities" className='py-32  bg-center bg-contain bg-no-repeat bg-fixed bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704273634/pactron/services-background_m5roql.jpg)]'>
        <div className='center-section' >
        <article className="flex justify-center gap-10 items-start center-section">
          <div className="w-5/12 flex flex-col">
            <h2 className="text-3xl font-bold text-primary">
            Design Capability highlights</h2>
            <p className="text-base font-normal w-[400px] mt-5">
            Our design expertise involves a meticulous understanding of user requirements, industry standards, and emerging trends, ensuring the development of solutions that not only meet immediate needs but also possess scalability and adaptability for the future.  
            </p>
          </div>
          <div ref={section} className=" w-5/12 text-primary overflow-hidden  bg-service_green rounded-sm py-8 pl-8 pr-10">
            <DownToUp isInView={isInDesignProduct} classes="flex flex-col gap-5">
            {CONTENTS.map((content) => (
              <div 
                className="flex justify-center items-center gap-5"
                key={content}
              >
                <ArrowCircleRight size={32} className="" color="#297174" />
                <p className="text-base font-normal w-10/12" >{content} </p>
              </div>
            ))}
            </DownToUp>
          </div>
        </article>
        </div>
    </section>

  )
}

export default DesignCapabilitiesHighlights