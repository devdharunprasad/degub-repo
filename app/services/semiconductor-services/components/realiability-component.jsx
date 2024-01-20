"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { useServices } from "../../../zustand/store";
import { CheckCircle } from "@phosphor-icons/react";
import Image from "next/image";
import DownToUp from "../../../shared/animations/DownToUp";

function ReliabilityComponent(props) {
  const change_semiconductor = useServices(
    (state) => state.change_semiconductor
  );
  const section_reliability = useRef();
  const isInView = useInView(section_reliability);
  if (isInView) {
    change_semiconductor("reliability");
  }

  const sectionRef = useRef();
  const isInViewTrans = useInView(sectionRef, { once: false });
  return (
    <section className="bg-green_shade py-24" id="reliability-and-burn">
      <div className="justify-center items-stretch  center-section  flex md:hidden w-full flex-col pt-8 pb-12 px-9 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f60956fb8715aaa487c385cb2bf8ce452e186cffe79c10e3966af0e574cd18b4?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.29] object-contain object-center w-full overflow-hidden"
          alt="Reliability Image"
        />
        <h3 className="text-stone-900 text-2xl font-bold mt-10">
          Reliability and Burn-in Engineering
        </h3>
        <div className="text-zinc-700 text-base mt-4 mb-5">
          Pactron is a leading provider of specialized design and manufacturing
          services for a wide range of Reliability PCBs specifically tailored to
          meet the stringent requirements of semiconductor companies.
        </div>
      </div>

      {/* Desktop */}

      <section className="bg-military_green bg-opacity-80 py-24">
        <div className="center-section text-white flex items-center justify-center gap-5">
          <figure className="w-6/12">
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704282557/pactron/burnin-component_aldfnh.png"
              width={500}
              height={500}
              className="w-8/12 ml-20"
            />
          </figure>
          <div className="w-6/12">
            <h2 className="text-3xl font-bold " ref={section_reliability}>
              Reliability and Burn-in Engineering{" "}
            </h2>
            <p className="text-base font-normal w-[550px] mt-5">
              Pactron is a leading provider of specialized design and
              manufacturing services for a wide range of Reliability PCBs
              specifically tailored to meet the stringent requirements of
              semiconductor companies.
            </p>
            <DownToUp isInView={isInView} classes="w-10/12">
            <div className="grid grid-rows-5 grid-cols-2 mt-5 ">
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                  HTOL (Criteria, Incal 160,etc.)
                </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                  HAST/THB (Hirayama, Dispatch){" "}
                </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                  HBM / LU Boards{" "}
                </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                MCC (LC2,HPB5)
                </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                  MCC (LC2,HPB5){" "}
                </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">SH2 boards </p>
              </div>
              <div className="flex justify-start items-center mt-2 gap-3">
                <CheckCircle size={32} className=" " />
                <p className="text-base font-semibold w-11/12">
                  Socket selection and procurement
                </p>
              </div>
            </div>
            </DownToUp>
          </div>
        </div>
      </section>
    </section>
  );
}

export default ReliabilityComponent;
