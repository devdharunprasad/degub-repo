"use client";

import {
  ChartLineUp,
  Crosshair,
  LightbulbFilament,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

function OurValues(props) {
  return (
    <section className="bg-gray-50" id="careers">
      <div className="justify-center items-stretch bg-slate-50 flex md:hidden flex-col px-9 py-12">
        <header className="text-stone-900 text-center text-2xl font-bold leading-10 mt-2.5">
          Impact
        </header>
        <p className="text-stone-900 text-center text-base leading-6 mt-2">
          Pactron promotes an environment where employees can discover meaning
          and create a meaningful impact through their contributions.{" "}
        </p>
        <div className="items-center shadow-lg backdrop-blur-[5.333333492279053px] bg-gray-50 flex flex-col mt-9 px-8 py-5 rounded-lg">
          <Image
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1704774175/pactron/system-regular-31-check_1_wsv87o.gif"
            width={50}
            height={50}
          />
          <div className="self-stretch text-black text-center text-xl font-bold mt-6">
            Innovate
          </div>
          <p className="text-black text-center text-base self-stretch mt-2">
            Our employees drive innovation internally through their own
            innovation modules and create new business opportunities from
            emerging technologies .{" "}
          </p>
        </div>
        <div className="items-center shadow-lg backdrop-blur-[5.333333492279053px] bg-gray-50 flex flex-col mt-8 px-8 py-5 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/112ee5ead144f03cbefba6ebc20e0a010be128d54e4fd5decf2868cb98df0cfa?apiKey=cb09127259af43f49535d3079eb90155&"
            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
            alt="Process Oriented"
          />
          <div className="self-stretch text-black text-center text-xl font-bold mt-6">
            Excel{" "}
          </div>
          <p className="text-black text-center text-sm self-stretch mt-2">
            The value of pursuing excellence sets the bar high and Pactron
            encourages all it’s employees to strive for excellence in all they
            do.{" "}
          </p>
        </div>
        <div className="items-center shadow-lg backdrop-blur-[5.333333492279053px] bg-gray-50 flex flex-col mt-8 mb-2.5 px-2.5 py-5 rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a64e44d7aee4f31461bf112e507e14bd99def824b877b1b3d06eb96a2df501a?apiKey=cb09127259af43f49535d3079eb90155&"
            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full"
            alt="People Focused"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/81209473e7321c69067d441a8f017886619cd96c5abc534a705be20e4268d2ca?apiKey=cb09127259af43f49535d3079eb90155&"
            className="aspect-square object-contain object-center w-9 overflow-hidden max-w-full mt-6"
            alt="People Focused"
          />
          <div className="self-stretch text-neutral-950 text-center text-xl font-bold leading-7 mt-5">
            People Focused
          </div>
          <p className="text-neutral-950 text-center text-sm leading-5 self-stretch mt-3">
            At Pactron, we are committed to providing our customers with the
            best service and support
          </p>
        </div>
      </div>

      {/* Desktop */}

      <div className="items-stretch bg-gray-50 hidden md:block flex-col px-20 py-12 max-md:px-5 mx-auto center-section w-full">
        <header className="header text-neutral-950 text-center text-3xl font-bold self-center max-w-[468px] mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10 mx-auto">
          Our Values
        </header>
        <div className=" mt-20 mb-10 mx-5 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-center hover:shadow-2xl transition-shadow duration-300 shadow-lg backdrop-blur-[5.333333492279053px] bg-gray-50 flex grow flex-col w-full px-10 py-7 rounded-lg max-md:mt-10 max-md:px-5">
              <Image
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635262/pactron/system-regular-10-analytics_1_xzvku8.gif"
            width={50}
            height={50}
          />                <div className="self-stretch text-black text-center text-2xl font-bold mt-6">
                  Impact{" "}
                </div>
                <div className="text-black text-center text-sm self-stretch mt-3">
                  Pactron promotes an environment where employees can discover
                  meaning and create a meaningful impact through their
                  contributions.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch hover:shadow-2xl shadow-lg transition-shadow duration-300 backdrop-blur-[5.333333492279053px] bg-gray-50 flex grow flex-col w-full px-3 py-7 rounded-lg max-md:mt-10">
              <Image
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635262/pactron/system-regular-33-speed_1_ivml7x.gif"
            className="mx-auto"
            width={50}
            height={50}
          />         
                <div className="text-black text-center text-2xl font-bold mt-6">
                  Innovate{" "}
                </div>
                <div className="text-black text-center text-sm self-center max-w-[309px] mt-3">
                  Our employees drive innovation internally through their own
                  innovation modules and create new business opportunities from
                  emerging technologies .{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-center hover:shadow-2xl shadow-lg transition-shadow duration-300 backdrop-blur-[5.333333492279053px] bg-gray-50 flex grow flex-col w-full pt-6 pb-12 px-10 rounded-lg max-md:mt-10 max-md:px-5">
              <Image
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635262/pactron/system-regular-160-trending-up_1_n0u2l4.gif"
            width={50}
            height={50}
          />                    <div className="self-stretch text-black text-center text-2xl font-bold mt-6">
                  Excel
                </div>
                <div className="text-black text-center text-sm self-stretch mt-3 mb-1.5">
                  The value of pursuing excellence sets the bar high and Pactron
                  encourages all it’s employees to strive for excellence in all
                  they do.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurValues;
