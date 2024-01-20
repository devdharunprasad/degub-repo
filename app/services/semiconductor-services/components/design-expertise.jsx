"use client"
import React from "react";
import {useInView} from "framer-motion"
import { useServices } from "../../../zustand/store";
import { useRef } from "react";
const DesignExpertise = (props) => {

  const change_semiconductor = useServices((state) => state.change_semiconductor)
  const section_design = useRef()
  const isInView = useInView(section_design)
  if(isInView){
    change_semiconductor("design-expertise")
  }

  return (
    <section className="bg-slate-50 py-24" id = "design-expertise" >
    <div className="justify-center items-stretch center-section flex md:hidden w-full flex-col px-9 py-10 max-md:px-5">
      <header className="text-stone-900 text-center text-2xl font-bold">
        Design Expertise
      </header>
      <div
        className="text-slate-50 text-center text-sm whitespace-nowrap justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        System board with SoCs and FPGAs
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Standard Form factor designs - PCIe, HHHL, M.2, Dual M.2
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Network interfaces such SFP, SFP+, QSFP, Ethernet
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        On board memory interfaces
        <br />
        such as DDRs, eMMC, SD Card, Flash, DIMM
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Design of power modules and Daughter Boards
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Socket Design, Back plate and Industrial Design of Enclosure
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Hybrid PCB Stack up with Low Dk Material for High-Speed layers (Astra
        MT77, Tachyon, Megtron8, EM892K, Nelco 4000-13 SI etc)
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        High speed Interfaces such as PCIe 5.0, USB3.2, MIPI, SATA, USB2.0,
        HDMI, Display Port, SGMII, M.2, NVMe
      </div>
      <div
        className="text-slate-50 text-center text-sm justify-center items-stretch rounded bg-[#55A09F] mt-4 px-8 py-4 max-md:px-5"
        role="link"
      >
        Thermal simulations and Heat sink designs.
      </div>
    </div>

    {/* Desktop */}
    <div className="justify-center items-center center-section hidden md:flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
      <header className="text-neutral-950 text-center text-3xl font-bold max-w-[763px] mt-6 max-md:max-w-full">
        Design Expertise
      </header>
      <div className="w-full max-w-[1111px] mt-7 mb-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <p className="text-slate-50 text-center text-md font-semibold whitespace-nowrap justify-center items-stretch bg-[#55A09F] py-[78px] px-7 rounded-lg max-md:px-5">
                System board with SoCs and FPGAs
              </p>
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-16 rounded-lg max-md:px-5">
                Standard Form factor designs - PCIe, HHHL, M.2, Dual M.2
              </p>
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-16 rounded-lg max-md:px-5">
                Network interfaces such SFP, SFP+, QSFP, Ethernet
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] pt-14 pb-12 px-10 rounded-lg max-md:px-5">
                On board memory interfaces <br /> such as DDRs, eMMC, SD Card, Flash, DIMM
              </p>
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-16 rounded-lg max-md:px-5">
                Design of power modules and Daughter Boards
              </p>
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-16 rounded-lg max-md:px-5">
                Socket Design, Back plate and Industrial Design of Enclosure
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] px-8 py-10 rounded-lg max-md:px-5">
                Hybrid PCB Stack up with Low Dk Material for High-Speed layers (Astra MT77, Tachyon, Megtron8, EM892K, Nelco 4000-13 SI etc)
              </p>
              <p className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-10 rounded-lg max-md:px-5">
                High speed Interfaces such as PCIe 5.0, USB3.2, MIPI, SATA, USB2.0, HDMI, Display Port, SGMII, M.2, NVMe
              </p>
              <p ref = {section_design} className="text-slate-50 text-center text-md font-semibold justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-16 rounded-lg max-md:px-5">
                Thermal simulations and Heat sink designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    </section>
  );
}

export default DesignExpertise