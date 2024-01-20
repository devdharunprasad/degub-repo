"use client"
import { useInView } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CaretRight } from '@phosphor-icons/react'
const ServicesVideoSection = () => {
  // useInView
  const headingRef = useRef();
  const isInView = useInView(headingRef, { once: true });

  const [currentTime, setCurrentTime] = useState(1);
  const videoRef = useRef();

  useEffect(() => {
    videoRef?.current?.play()
  },[isInView])
console.log({currentTime})
  useEffect(() => {
    videoRef?.current?.pause()
      videoRef?.current?.addEventListener("timeupdate", (e) => {
        const videoPlaybackTime = videoRef?.current?.currentTime;
        if (videoPlaybackTime > 0 && videoPlaybackTime < 5) {
          setCurrentTime(1)
        }

        if(videoPlaybackTime > 5 && videoPlaybackTime < 10){
          setCurrentTime(2)
        }
        if(videoPlaybackTime > 10){
          setCurrentTime(3)
        }
      });

   
  }, []);
  return (
    <section className="hidden md:block  bg-[#dcdfe2] ">
  
      <div className="hidden md:flex  center-section   w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5 ">
     
        <h1
          className={`text-neutral-950 text-center ${
            isInView ? `opacity-1 translate-y-0` : `opacity-0 translate-y-20`
          } transition-all duration-1000 text-3xl font-bold leading-[40px] max-w-[642px] max-md:max-w-full mt-24 -mb-32 relative z-20 mr-20`}
          ref={headingRef}
        >
          Turning intellectual brilliance into real world products
        </h1>

        <section className="flex ml-32 bg-grayish py-32 w-full items-center rounded-lg mt-10 px-20 relative  min-h-[600px]">
     
          <div className="w-full  ">
            <div className=" flex  justify-between items-center gap-8">
              <div className="w-6/12 relative">
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    currentTime === 1
                      ? `opacity-1 z-20`
                      : `opacity-0 z-10`
                  }  transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Semiconductor Services
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    By leveraging our semiconductor services, companies can
                    access specialized expertise, state-of-the-art manufacturing
                    capabilities, and comprehensive support to accelerate
                    product development, improve quality, reduce costs, and
                    bring innovative semiconductor solutions to market more
                    efficiently.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/semiconductor-services"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    currentTime === 2
                      ? `opacity-1 z-20`
                      : `opacity-0 z-10`
                  }  transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Systems Solution
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    Pactron collaborates closely with its clients to provide
                    comprehensive coverage of the entire product development
                    lifecycle. By merging cutting-edge technology, engineering
                    excellence, structured processes, and extensive domain
                    knowledge, Pactron is committed to delivering innovative and
                    transformative products.{" "}
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/system-solutions"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    currentTime === 3 ? `opacity-1 z-20` : `opacity-0 z-10`
                  }   transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Technology Services{" "}
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    Pactron’s technology services are tightly integrated with
                    its prototyping validation services. Through its integrated
                    environment, Pactron’s customers will be able to realize a
                    one-stop solution for their engineering & manufacturing
                    requirements.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/technology-services"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
              </div>
              <div className="w-7/12">
             
                <video
                  className="border-none outline-none border "
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  ref={videoRef}
                >
                  <source
                    src="https://res.cloudinary.com/dosjh2min/video/upload/v1704915037/pactron/SS_Animation_Croped_x72hrr.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ServicesVideoSection


/* 

"use client";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "next/link";
import { CaretRight } from "@phosphor-icons/react";

const ServicesVideoSection = () => {
  // useInView
  const headingRef = useRef();
  const isInView = useInView(headingRef, { once: true });

  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef();
  useEffect(() => {
    setInterval(() => {
      videoRef?.current?.addEventListener("timeupdate", (e) => {
        const videoPlaybackTime = videoRef?.current?.currentTime;
        if (videoPlaybackTime === 1.42383) {
          videoRef?.current?.pause();
        }
      });
    });
  }, [videoRef?.current?.currentTime]);

  return (
    <section className="hidden md:block bg-[#dcdfe2]">
      <div className="hidden md:flex  center-section  w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <h1
          className={`text-neutral-950 text-center ${
            isInView ? `opacity-1 translate-y-0` : `opacity-0 translate-y-20`
          } transition-all duration-1000 text-4xl font-bold leading-[50px] max-w-[642px] max-md:max-w-full mt-24`}
          ref={headingRef}
        >
          Turning intellectual brilliance into real world products
        </h1>

        <section className="flex bg-grayish py-32 w-full items-center rounded-lg mt-10 px-20 relative image-sequence-container min-h-[600px] mb-[2000px]">
          <div className="w-full border-black ">
            <div className=" flex  justify-between items-center gap-8">
              <div className="w-6/12 relative">
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    null >= 0 && null < 32
                      ? `opacity-1 z-20`
                      : `opacity-0 z-10`
                  }  transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Semiconductor Services
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    By leveraging our semiconductor services, companies can
                    access specialized expertise, state-of-the-art manufacturing
                    capabilities, and comprehensive support to accelerate
                    product development, improve quality, reduce costs, and
                    bring innovative semiconductor solutions to market more
                    efficiently.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/semiconductor-services"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    null > 32 && null < 85
                      ? `opacity-1 z-20`
                      : `opacity-0 z-10`
                  }  transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Systems Solution
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    Pactron collaborates closely with its clients to provide
                    comprehensive coverage of the entire product development
                    lifecycle. By merging cutting-edge technology, engineering
                    excellence, structured processes, and extensive domain
                    knowledge, Pactron is committed to delivering innovative and
                    transformative products.{" "}
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/system-solutions"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    null > 85 ? `opacity-1 z-20` : `opacity-0 z-10`
                  }   transition-opacity duration-1000`}
                >
                  <h2 className="text-neutral-700 text-2xl font-bold leading-10 self-stretch">
                    Technology Services{" "}
                  </h2>
                  <p className="text-zinc-700 text-sm self-stretch mt-3">
                    Pactron’s technology services are tightly integrated with
                    its prototyping validation services. Through its integrated
                    environment, Pactron’s customers will be able to realize a
                    one-stop solution for their engineering & manufacturing
                    requirements.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/technology-services"
                      className=" text-sm font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
              </div>
              <div className="center-section flex flex-col justify-center items-center">
                <h1
                  className={`text-neutral-950 text-center ${
                    isInView
                      ? `opacity-1 translate-y-0`
                      : `opacity-0 translate-y-20`
                  } transition-all duration-1000 text-4xl font-bold leading-[50px] max-w-[642px] max-md:max-w-full mt-24`}
                  ref={headingRef}
                >
                  Turning intellectual brilliance into real world products
                </h1>
                <video
                  className="border-none outline-none border-transparent"
                  controls
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  ref={videoRef}
                >
                  <source
                    src="https://res.cloudinary.com/dosjh2min/video/upload/v1703152804/pactron/service_section_animation_with_bg_hen7by.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ServicesVideoSection;


*/