"use client";
import * as React from "react";
import { defaultOptions } from "../../../shared/options";
import { Tilt } from "react-tilt";
import { CaretCircleUp, CaretRight } from "@phosphor-icons/react";
import { useInView } from "framer-motion";
import LeftToRight from "../../../shared/animations/LeftToRight";
import RightToLeft from "../../../shared/animations/RightToLeft";
import Image from "next/image";
const HeroSection = (props) => {
  const sectionRef = React.useRef()
  const isInView = useInView(sectionRef, {once : true})
  return (
    <section className=" bg-grayish" ref = {sectionRef}>
      <div className="items-center flex md:hidden  center-section w-full flex-col px-6 py-12 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4986258bc2cbad9142d6adc232112150106b9148228f25f88489e9fc76c7b4c0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className={`aspect-[0.96] block mx-auto object-contain object-center w-full overflow-hidden max-w-[277px] mt-6  transition-all duration-1000`}
        />
        <div className="text-stone-900 text-3xl font-bold self-stretch mt-5">
          Semiconductor Services
        </div>
        <div className="self-stretch text-zinc-700 text-lg mt-2 mb-7">
          By leveraging our semiconductor services, companies can access
          specialized expertise, state-of-the-art manufacturing capabilities,
          and comprehensive support to accelerate product development, improve
          quality, reduce costs, and bring innovative semiconductor solutions to
          market more efficiently.
        </div>
      </div>

      {/* Desktop */}
      <div className="bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704712116/pactron/Frame_14174_jwvsfc.jpg)] bg-cover bg-center hidden md:flex w-full flex-col justify-center items-center px-16 py-32 max-md:max-w-full max-md:px-5 relative">
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
        <div className="w-full max-w-[1178px] mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-10 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
              <div className={`items-stretch self-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10 ${isInView ? `opacity-1 translate-x-0` : `opacity-0 -translate-x-1/2`} transition-all duration-1000`}>
                <h1 className="text-neutral-950 text-4xl font-bold max-md:max-w-full max-md:text-4xl">
                  Semiconductor Services
                </h1>
                <p className="text-gray-800 text-base mt-3 max-md:max-w-full">
                  By leveraging our semiconductor services, companies can access
                  specialized expertise, state-of-the-art manufacturing
                  capabilities, and comprehensive support to accelerate product
                  development, improve quality, reduce costs, and bring
                  innovative semiconductor solutions to market more efficiently.{" "}
                </p>
                <a
                  href="#ate-solutions-section"
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
            </div>
            <div className={`flex flex-col transition-all duration-1000 ${isInView ? `opacity-1 translate-x-0` : `opacity-0 translate-x-1/2`} items-stretch w-4/12 ml-5 max-md:w-full max-md:ml-0`}>
              <Tilt options={defaultOptions}>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b41d516f7c7b64c4a2e4e85f092b9bf49ef0cf72f323b777b6a62a02eb44378?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                  className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
                />
              </Tilt>
            </div>
          </div>
        </div>
      </div>
      <a href = "#scroll-to-top" className="w-12 h-12 bg-white rounded-sm p-2 z-[99999] fixed bottom-10 right-10 flex justify-center items-center">

<CaretCircleUp size = {42} color = "black" className="" />
</a>
    </section>
  );
};

export default HeroSection;
