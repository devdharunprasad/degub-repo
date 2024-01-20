"use client";
import React, { useRef } from "react";
import Image from "next/image";
import LeftToRight from "../../shared/animations/LeftToRight";
import { useInView } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";

const JoinPactron = (props) => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);
  return (
    <section className="bg-grayish relative overflow-hidden py-10">
      <div className="justify-center center-section items-center hidden md:flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5 ">
        <div className="justify-center w-full max-w-[1194px] mt-14 mb-8 px-3.5 max-md:max-w-full max-md:mt-10">
          <div
            className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
            ref={sectionRef}
          >
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <LeftToRight isInView={isInView}>
                <div className="justify-center flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                  <h1 className="relative text-stone-900 text-3xl font-bold w-[539px] max-w-full mt-28 max-md:text-4xl max-md:mt-10 mb-5">
                    Join Pactron to Shape the future
                  </h1>
                  <p className="relative text-zinc-700 text-lg mt-3 max-md:max-w-full max-md:mb-10 w-[530px]">
                    Be a part of the leading provider of advanced board-level
                    solutions in the semiconductor industry. At Pactron, we
                    bring ideas from the mind to the market, driving innovation
                    and excellence for over 20 years.
                  </p>
                  <a
                      href="#careers"
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
            <Image
              width={500}
              height={500}
              alt="atom "
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703523543/pactron/atoms_jwov7k.png"
              className="absolute -bottom-[45%] -right-[25%] w-8/12 rotate-[20deg]"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="justify-center items-center bg-zinc-200 flex md:hidden pt-20 w-full flex-col pb-32 px-9 max-md:px-5">
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1702464213/pactron/TS_Backlog_-_Levking_-_1377658_-_Molecule_2_k7zfnu.png"
            className="absolute top-1/2 left-1/2"
          />
        </div>
        <h1 className="text-stone-900 text-3xl font-bold self-stretch  mt-10">
          Join Pactron to Shape the future
        </h1>
        <p className="text-zinc-700 text-base self-stretch mt-2">
          Be a part of the leading provider of advanced board-level solutions in
          the semiconductor industry. At Pactron, we bring ideas from the mind
          to the market, driving innovation and excellence for over 20 years.
        </p>
      </div>
    </section>
  );
};

export default JoinPactron;
