"use client";
import { useInView } from "framer-motion";
import * as React from "react";

const TypesHardware = (props) => {

  const sectionRef = React.useRef()
  const isInView = useInView(sectionRef, {once : true})
  return (
    <section className="bg-green_shade py-10">
      <div className="justify-center center-section items-center flex md:hidden w-full flex-col px-9 py-10 max-md:px-5">
        <div className="text-stone-900 text-center text-2xl font-bold self-stretch whitespace-nowrap">
          Types of ATE hardware
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-3 px-4 py-2.5 rounded-sm">
          Universal Probe Cards
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm">
          Handler Interface boards
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm">
          Probe Interface boards
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm">
          Device Interface board
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm">
          Characterization boards
        </div>
        <div className="text-zinc-700 text-center shadow-md text-base items-stretch bg-slate-50 self-center w-full max-w-[250px] justify-center mt-2 px-4 py-2.5 rounded-sm">
          Load boards
        </div>
      </div>
      {/* Desktop */}
      <div className="bg-green_shade hidden md:block">
        <div className="justify-center items-center  flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
          <header className={` ${isInView ? `text-primary` :`text-neutral-950` } transition-all duration-1000 delay-300 text-center text-2xl font-bold max-w-[798px] mt-14 max-md:max-w-full max-md:mt-10`}>
            Types of ATE hardware
          </header>
          <div className=" w-[798px] max-w-full mt-6 mb-11 max-md:mb-10 transition-all duration-1000 delay-300" >
            <div className={`flex max-md:flex-col max-md:items-stretch ${isInView ? `gap-5` : `gap-0`} transition-all duration-1000 delay-300`}>
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className={`items-stretch flex grow flex-col ${isInView ? `gap-3` : `gap-0`} transition-all duration-1000 delay-300`}>
                  <div
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base whitespace-nowrap justify-center items-center rounded bg-slate-50 px-16 py-3.5 max-md:px-5`}
                    aria-label="Universal Probe Cards"
                    role="button"
                  >
                    Universal Probe Cards
                  </div>
                  <div
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base justify-center items-stretch rounded bg-slate-50 px-11 py-3.5 max-md:px-5`}
                    aria-label="Handler Interface boards"
                    role="button"
                  >
                    Handler Interface boards
                  </div>
                  <div
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base justify-center items-stretch rounded bg-slate-50 px-11 py-3.5 max-md:px-5`}
                    aria-label="Probe Interface boards"
                    role="button"
                  >
                    Probe Interface boards
                  </div>
                </div>
              </div>
              <div className={`flex flex-col items-stretch w-6/12 ${isInView ? `gap-3` : `gap-0`} max-md:w-full max-md:ml-0`}>
                <div className={`items-stretch flex grow flex-col ${isInView ? `gap-3` : `gap-0`} transition-all duration-1000 delay-300`}>
                  <div
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base justify-center items-stretch rounded bg-slate-50 px-11 py-3.5 max-md:px-5 `}
                    aria-label="Device Interface board"
                    role="button"
                  >
                    Device Interface board
                  </div>
                  <div
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base justify-center items-stretch rounded bg-slate-50 px-8 py-3.5 max-md:px-5"
                    aria-label="Load boards`}
                    role="button"
                  >
                    Load boards
                  </div>
                  <div
                  ref={sectionRef}
                    className={` text-center ${isInView ? `shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-zinc-700` : `text-slate-50`} transition-all duration-1000 delay-300 text-base whitespace-nowrap justify-center items-center rounded bg-slate-50 px-16 py-3.5 max-md:px-5`}
                    aria-label="Characterization boards"
                    role="button"
                  >
                    Characterization boards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesHardware;
