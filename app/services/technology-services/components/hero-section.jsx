"use client";

import React, { useRef } from "react";
import { defaultOptions } from "../../../shared/options";
import { Tilt } from "react-tilt";
import { CaretCircleUp, CaretRight } from "@phosphor-icons/react";
import LeftToRight from "../../../shared/animations/LeftToRight";
import { useInView } from "framer-motion";
import RightToLeft from "../../../shared/animations/RightToLeft";
import Image from "next/image";
function TechnologyHeroSection(props) {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);

  return (
    <section className=" bg-zinc-200 overflow-x-hidden" ref={sectionRef}>
      <div className="justify-center md:hidden items-stretch bg-zinc-200 flex flex-col pt-24 pb-12 px-5 w-full center-section mx-auto ">
        <img
          loading="lazy"
          src="https://res.cloudinary.com/dosjh2min/image/upload/v1702673633/pactron/technology-services_wynzz1.png"
          className="aspect-[1.1] object-contain object-center w-full overflow-hidden"
          alt="Technology Services"
        />
        <header className="text-stone-900 text-3xl font-bold leading-10 whitespace-nowrap mt-10 self-start">
          Technology Services
        </header>
        <div className="text-stone-900 text-base leading-6 mt-2 mb-5">
          Pactron’s technology services are tightly integrated with its
          prototyping validation services. Through its integrated environment,
          Pactron’s customers will be able to realize a one-stop solution for
          their engineering & manufacturing requirements.
        </div>
      </div>

      {/* Desktop */}
      <section className="bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704712116/pactron/Frame_14174_jwvsfc.jpg)] bg-cover bg-center relative">
        <RightToLeft
          isInView={isInView}
          classes={`w-[250px] h-[150px] border absolute right-0 top-[40%]`}
        >
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1704714976/pactron/Group_1000002781_gk4aud.png"
            className="w-full h-full"
          />
        </RightToLeft>

        <LeftToRight
          isInView={isInView}
          classes={`w-[250px] h-[150px] border absolute left-0 bottom-[15%]`}
        >
          <Image
            width={500}
            height={500}
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1704714977/pactron/Group_1000002779_mbcsxa.png"
            className="w-full h-full"
          />
        </LeftToRight>
        <div className="justify-center hidden md:block  items-center flex-col px-16 py-32 max-md:px-5  w-full center-section mx-auto">
          <div className="w-[1108px] max-w-full mt-16 mb-10 max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col justify-center  w-[59%] max-md:w-full max-md:ml-0">
                <LeftToRight isInView={isInView}>
                  <div className="items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h1 className="text-neutral-950 text-4xl font-bold max-md:max-w-full max-md:text-4xl">
                      Technology Services
                    </h1>
                    <p className="text-zinc-700 text-base mt-3 max-md:max-w-full">
                      Pactron’s technology services are tightly integrated with
                      its prototyping validation services. Through its
                      integrated environment, Pactron’s customers will be able
                      to realize a one-stop solution for their engineering &
                      manufacturing requirements.
                    </p>
                    <a
                      href="#simulation-services"
                      className="text-primary flex justify-start gap-1 mt-5 items-center text-xs md:text-base font-semibold leading-5"
                      aria-label="Get Directions"
                      role="button"
                    >
                      <span className="underline underline-offset-2">
                        Learn more
                      </span>

                      <CaretRight size={16} />
                    </a>
                  </div>
                </LeftToRight>
              </div>
              <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
                <RightToLeft isInView={isInView}>
                  <Tilt
                    options={{
                      reverse: true, // reverse the tilt direction
                      max: 6, // max tilt rotation (degrees)
                      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
                      scale: 1, // 2 = 200%, 1.5 = 150%, etc..
                      speed: 1000, // Speed of the enter/exit transition
                      transition: true, // Set a transition on enter/exit.
                      axis: null, // What axis should be disabled. Can be X or Y.
                      reset: false, // If the tilt effect has to be reset on exit.
                      easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
                    }}
                  >
                    <img
                      loading="lazy"
                      src="https://res.cloudinary.com/dosjh2min/image/upload/v1702673633/pactron/technology-services_wynzz1.png"
                      className="aspect-[1.1] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                      alt="Technology Services Image"
                    />
                  </Tilt>
                </RightToLeft>
              </div>
            </div>
          </div>
        </div>
        <a
          href="#scroll-to-top"
          className="w-12 h-12 bg-white rounded-sm p-2 z-[99999] fixed bottom-10 right-10 flex justify-center items-center"
        >
          <CaretCircleUp size={42} color="black" className="" />
        </a>
      </section>
    </section>
  );
}

export default TechnologyHeroSection;
