"use client";

import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useServices } from "../../../zustand/store";
import { CheckCircle } from "@phosphor-icons/react";
function SignalIntegrity(props) {
  const signalIntegrityRef = useRef();
  const isInViewsignalIntegrity = useInView(signalIntegrityRef);
  const change_technologyservices = useServices(
    (state) => state.change_technologyservices
  );
  console.log(isInViewsignalIntegrity);
  useEffect(() => {
    if (isInViewsignalIntegrity) {
      change_technologyservices("simulation-services");
    }
  }, [isInViewsignalIntegrity]);

  return (
    <section className="bg-slate-50 md:bg-white" id = "simulation-services">
      <div className="justify-center items-center bg-slate-50 flex flex-col px-9 py-12 md:hidden ">
        <header className="text-neutral-950 text-center text-3xl font-bold self-center whitespace-nowrap mt-1.5">
          Signal Integrity
        </header>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-2 px-11 py-3 rounded shadow-xl">
          Pre and Post Layout Simulations
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-4 px-11 py-3 rounded shadow-xl">
          Co Design – <br /> (Die/Package/Board)
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-5 px-11 py-3 rounded shadow-xl">
          BIS/IBIS-AMI Model Simulation
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-5 px-11 py-3 rounded shadow-xl">
          Hybrid PCB Stack up with Low Dk Material
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-5 px-11 py-3 rounded shadow-xl">
          Eye Diagram and Timing Analysis
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-5 px-11 py-7 rounded shadow-xl">
          Parasitic Optimization
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-4 px-11 py-3 rounded shadow-xl">
          Impedance Optimization for BGA Vias
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-4 px-11 py-3 rounded shadow-xl">
          Cross Talk, Channel Loss, S-parameter Extraction
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-4 mb-1.5 px-11 py-3 rounded shadow-xl">
          Simulation Correlation - TDR Measurement
        </section>
      </div>

      {/* Desktop */}

      <div
        id="simulation-services text-white"
        className="hidden md:block   bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704291025/pactron/Container_whky54.jpg)] bg-center bg-cover bg-no-repeat bg-fixed  overflow-x-hidden"
      >
        <div className="justify-center items-center flex py-24 w-full flex-col max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1107px] mt-12 mb-11 max-md:max-w-full max-md:my-10">
            <div className="gap-5  max-md:gap-0">
              <div className="flex flex-col items-stretch w-[54%] mr-auto  text-white ">
                {/* <RightToLeft isInView={isInView}> */}
                <div className=" items-stretch flex grow flex-col pb-4 max-md:max-w-full max-md:mt-10">
               
                  <h2
                    className={` text-2xl font-bold max-md:max-w-full transition-all duration-1000 delay-300`}
                    ref={signalIntegrityRef}

                  >
                    Signal Integrity Simulations:
                  </h2>
                  <div
                    className={`text-base mt-3 max-md:max-w-full w-[430px]  transition-all duration-1000 delay-300`}
                  >
                    Ensures accurate and noise-free signal transmission in PCBs
                    for optimal electronic communication
                  </div>
                </div>
                <div className="grid grid-rows-5 grid-cols-1">
                  <div className="flex justify-start items-center mt-5 gap-5">
                    <CheckCircle size={32} className="" />
                    <p className="text-base font-semibold w-10/12">
                      Pre and Post Layout Simulations{" "}
                    </p>
                  </div>
                  <div className="flex justify-start items-center mt-5 gap-5">
                    <CheckCircle size={32} className=" " />
                    <p className="text-base font-semibold w-10/12">
                      Hybrid PCB Stack up with Low Dk Material
                    </p>
                  </div>
                  <div className="flex justify-start items-center mt-5 gap-5">
                    <CheckCircle size={32} className=" " />
                    <p className="text-base font-semibold w-10/12">
                      Simulation Correlation - TDR Measurement{" "}
                    </p>
                  </div>
                  <div className="flex justify-start items-center mt-5 gap-5">
                    <CheckCircle size={32} className=" " />
                    <p className="text-base font-semibold w-10/12">
                      Co Design –(Die/Package/Board)
                    </p>
                  </div>
                  <div className="flex justify-start items-center mt-5 gap-5">
                    <CheckCircle size={32} className=" " />
                    <p className="text-base font-semibold w-10/12">
                      Parasitic & Impedance Optimization for BGA Vias{" "}
                    </p>
                  </div>
                </div>
                <h2
                  className={`mt-24 text-2xl font-bold max-md:max-w-full transition-all duration-1000 delay-300`}
                >
                  Power Integrity Simulations{" "}
                </h2>
                <div
                  className={`text-base mt-3 max-md:max-w-full w-[430px]  transition-all duration-1000 delay-300`}
                >
                  Guarantees stable and efficient power distribution to all PCB
                  components, enhancing overall system reliability.
                </div>
              </div>
              <div className="grid grid-rows-5 grid-cols-1 text-white w-[500px]">
                <div className="flex justify-start items-center mt-5 gap-5">
                  <CheckCircle size={32} className="" />
                  <p className="text-base font-semibold w-10/12">
                    DC Analysis – IR Drop, Voltage and current distribution
                    analysis
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-5">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Decoupling Scheme Recommendation
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-5">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Target Z simulation to keep Die+ Package +PCB+ Capacitors
                    impedance within limit
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-5">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    AC Analysis – PDN Impedance analysis, Target Impedance
                    Optimization, Transient Noise analysis{" "}
                  </p>
                </div>

                {/* </RightToLeft> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignalIntegrity;
