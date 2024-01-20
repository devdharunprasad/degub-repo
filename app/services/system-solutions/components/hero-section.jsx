"use client";
import React, { useRef } from "react";
import { Tilt } from "react-tilt";
import { defaultOptions } from "../../../shared/options";
import { CaretCircleUp, CaretRight } from "@phosphor-icons/react";
import LeftToRight from "../../../shared/animations/LeftToRight";
import { useInView } from "framer-motion";
import RightToLeft from "../../../shared/animations/RightToLeft";
import Image from "next/image";
const HeroSection = (props) => {
  const sectionRef = useRef();
  const isInView = useInView(sectionRef);

  return (
    <section className=" bg-zinc-200 overflow-x-hidden" ref={sectionRef}>
      <div className="justify-center items-stretch center-section w-full bg-zinc-200 flex md:hidden flex-col pt-24 pb-12 px-9 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0d1544a41ce25d072c7615b037491c2c6faea08752e86b72feb2b61c19a8538?apiKey=cb09127259af43f49535d3079eb90155&"
          className="aspect-[1.09] object-contain object-center w-full overflow-hidden"
        />
        <header className="text-stone-900 text-3xl font-bold leading-10 mt-10">
          Systems Solution
        </header>
        <div className="text-stone-900 text-base leading-6 mt-3 mb-5">
          Pactron collaborates closely with its clients to provide comprehensive
          coverage of the entire product development lifecycle. By merging
          cutting-edge technology, engineering excellence, structured processes,
          and extensive domain knowledge, Pactron is committed to delivering
          innovative and transformative products.ment of robust and high-quality
          products.
        </div>
      </div>

      {/* Desktop */}
      <section className="relative bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704712116/pactron/Frame_14174_jwvsfc.jpg)] bg-cover bg-center">
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
        <div className=" hidden md:block w-full flex-col center-section justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1220px] mt-20 mb-28 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
                <LeftToRight isInView={isInView}>
                  <Tilt options={defaultOptions}>
                    <img
                      loading="lazy"
                      src="https://res.cloudinary.com/dosjh2min/image/upload/v1702954203/pactron/sys-sol-img_1_ou1edb.png"
                      className="aspect-[1.09] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                      alt="Product Image"
                    />
                  </Tilt>
                </LeftToRight>
              </div>
              <div className="flex flex-col justify-center w-[55%] ml-5 max-md:w-full max-md:ml-0">
                <RightToLeft isInView={isInView}>
                  <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                    <h1 className="text-neutral-950 text-4xl font-bold max-md:max-w-full max-md:text-4xl">
                      Systems Solution
                    </h1>
                    <p className="text-zinc-700 text-base mt-3 max-md:max-w-full">
                      Pactron collaborates closely with its clients to provide
                      comprehensive coverage of the entire product development
                      lifecycle. By merging cutting-edge technology, engineering
                      excellence, structured processes, and extensive domain
                      knowledge, Pactron is committed to delivering innovative
                      and transformative products.
                    </p>
                    <a
                      href="#product-development"
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
};

export default HeroSection;
