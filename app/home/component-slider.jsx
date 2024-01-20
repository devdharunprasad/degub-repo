"use client";
import React, { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// TODO : Change into an acutal slider
import { CarProfile, CaretLeft, Circuitry, Cpu, Database, HardDrives } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react";

import { useState, useRef } from "react";
import { useServices } from "../zustand/store";
import { useInView } from "framer-motion";
const content = [
  {
    title: "ML/AI",
    description:
      "Advanced AI chipset board tailored to the unique needs of a prominent leader in the field of Edge computing.",
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1702447150/pactron/slider-5_rwybl7.png",
    width: "w-full",
    width_desk: "w-6/12",
  },
  {
    title: "Data Centre",
    description:
      "Custom PCB designed for Data  Centre products with a capacity of upto 60 M Asic gates",
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1702447150/pactron/slider-2_nhtrh1.png",
    width: "w-8/12",
    width_desk: "w-4/12",
  },
  {
    title: "Storage",
    description:
      "Enabling modern storage options spanning from top-capacity SATA and SAS hard disks to NVMe-based persistence memory applications",
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1702447152/pactron/slider-3_uz7nju.png",
    width: "w-full",
    width_desk: "w-6/12",
  },
  {
    title: "Networking",
    description:
      "Advanced PCB solutions for high-speed networking & communication devices",
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1702447150/pactron/slider-4_a45edt.png",
    width: "w-8/12",
    width_desk: "w-4/12",
  },
  {
    title: "Automotive",
    description:
      "Printed ciruit boards for all the latest technologies, including LiDAR, 5G connected cars, and collision avoidance systems",
    image:
      "https://res.cloudinary.com/dosjh2min/image/upload/v1702446410/pactron/ai-chip_wurvmj.png",
    width: "W-full",
    width_desk: "w-6/12",
  },
];

const ComponentSlider = (props) => {
  const [activePaginationDesktop, setActivePaginationDesktop] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef();
  const swiperRefMob = useRef();
  const [imageUrl, setImageUrl] = useState({
    link: "https://res.cloudinary.com/dosjh2min/image/upload/v1702447150/pactron/slider-5_rwybl7.png",
    left: 24,
    width: "[600px]",
  });

  const handlePaginationClicks = (index) => {
    swiperRef?.current?.slideTo(index);
    setActiveIndex(index);
  };

  useEffect(() => {
    swiperRef?.current?.on("slideChange", () => {
      console.log(swiperRef.current.activeIndex);
      setActiveIndex(swiperRef?.current?.activeIndex);
    });
  }, []);

  console.log(activeIndex);

  const handleLeftSlide = () => {
    swiperRef.current?.slidePrev();
    setActiveIndex(swiperRef.current?.activeIndex);
  };

  const handleRightSlide = () => {
    swiperRef.current?.slideNext();
    setActiveIndex(swiperRef.current?.activeIndex);
  };

  const handleLeftSlideMobile = () => {
    swiperRefMob.current?.slidePrev();
    setActiveIndex(swiperRefMob.current?.activeIndex);
  };

  const handleRightSlideMobile = () => {
    swiperRefMob.current?.slideNext();
    setActiveIndex(swiperRefMob.current?.activeIndex);
  };


  const ourProcessSectionRef = useRef();
  const isInViewOurProcess = useInView(ourProcessSectionRef);
  const change_systemsolutions = useServices(
    (state) => state.change_systemsolutions
  );

  console.log({isInViewOurProcess});
  useEffect(() => {
    if (isInViewOurProcess) {
      change_systemsolutions("advanced-engineering-prowess");
    }
  }, [isInViewOurProcess]);

  return (
    <div className="bg-grayish flex w-full flex-col items-stretch px-20 py-24  max-md:px-5" >
      <div id = "advanced-engineering-prowess" />
        <h3 className="text-black text-center text-3xl font-bold max-w-[413px] mx-auto self-center">
          Our Advanced <br   /> Engineering Prowess
        </h3>
      <div className="relative my-16 md:w-10/12 w-full mx-auto center-section"ref = {ourProcessSectionRef}  >
        {/* For Desktop View */}
        <div className="relative hidden  items-center xl:flex">
          {/* <img src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702446410/pactron/ai-chip_wurvmj.png" loading="lazy" className="absolute left-32 top-1/2 transform -translate-y-1/2 w-[600px] z-[1]" /> */}

          {/* <img src = {imageUrl.link} loading="lazy" className={`absolute left-32 top-1/2 transform -translate-y-1/2 w-${imageUrl.width} z-[1]`} /> */}
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="swiper-container py-10"
            modules={[Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
                pauseOnMouseEnter : true
            }}
          >
            <div className="swiper-wrapper "  >
              {content.map((cont) => (
                <SwiperSlide key={cont.title} className="swiper-slide ">
                  <div className="flex w-9/12 mx-auto justify-center items-center -mb-20 ">
                    <Image
                      src={cont.image}
                      width={500}
                      height={500}
                      className={`${cont.width_desk} mb-10 -mr-5`}
                    />

                    <div className="w-6/12 flex flex-col gap-3 backdrop-blur-lg border-[0.8px] bg-white/30 shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-8 py-8 rounded-lg">
                      <h3 className="text-xl font-bold">{cont.title}</h3>
                      <p className="text-base font-normal">{cont.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          {/* <div className="cursor-pointer absolute left-12 md:left-0 bottom-0 md:bottom-1/2 transform translate-y-1/2 z-10 -translate-x-[105%] bg-transparent p-2">
            <CaretLeft
              size={45}
              onClick={handleLeftSlide}
              className={activeIndex === 0 ? "opacity-0" : "opacity-1"}
            />
          </div>
          <div className="cursor-pointer absolute right-12 md:right-0 bottom-0 md:bottom-1/2 transform translate-y-1/2 translate-x-[105%] z-10 bg-transparent p-2">
            <CaretRight
              size={45}
              onClick={handleRightSlide}
              className={activeIndex === content.length - 1 ? "opacity-0" : "opacity-1"}
            />
          </div> */}
        </div>
        {/* For mobile */}
        <div className=" center-section block xl:hidden">
          <Swiper
            spaceBetween={1}
            autoplay={true}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRefMob.current = swiper)}
            className="py-10"
          >
            <div className="">
              {content.map((cont) => (
                <SwiperSlide key={cont.title} className=" flex flex-col">
                  <img
                    src={cont.image}
                    className={`${cont.width} mx-auto -mb-3`}
                  />
                  <div className="w-full flex flex-col gap-3 backdrop-blur-sm bg-white/10 shadow-md px-6 py-8 rounded-lg">
                    <h3 className="text-xl font-bold">{cont.title}</h3>
                    <p className="text-md font-normal">{cont.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="cursor-pointer absolute left-12 md:left-0 bottom-0 md:bottom-1/2 transform translate-y-1/2 z-10 -translate-x-[105%] bg-transparent p-2">
            <CaretLeft
              size={24}
              onClick={handleLeftSlideMobile}
              color={activeIndex === 0 ? "opacity-0" : "opacity-1"}
            />
          </div>
          <div className="cursor-pointer absolute right-12 md:right-0 bottom-0 md:bottom-1/2 transform translate-y-1/2 translate-x-[105%] z-10 bg-transparent p-2">
            <CaretRight
              size={24}
              onClick={handleRightSlideMobile}
              color={
                activeIndex === content.length - 1 ? "opacity-0" : "opacity-1"
              }
            />
          </div>
        </div>
      </div>
      <div className=" hidden xl:flex w-[600px] h-[2px] bg-gray-500 my-12 mx-auto justify-between items-center">
        {/* Active index */}
       <figure className={`w-16 h-16 flex  justify-center items-center bg-primary rounded-full transition-all cursor-pointer ${activeIndex === 0 ? `scale-1` : `scale-50`}`} onClick={() => handlePaginationClicks(0)}>
        <Cpu size = {35} className={`transition-opacity ${activeIndex === 0 ? `opacity-1` : `opacity-0`}`} color="#fff"/>
       </figure>

        {/* svg 2 */}
        <figure className={`w-16 h-16 flex justify-center items-center bg-primary rounded-full transition-all cursor-pointer ${activeIndex === 1 ? `scale-1` : `scale-50`}`} onClick={() => handlePaginationClicks(1)}>
        <Database size = {35} className={`transition-opacity ${activeIndex === 1 ? `opacity-1` : `opacity-0`}`} color="#fff"/>
       </figure>

       <figure className={`w-16 h-16 flex justify-center items-center bg-primary rounded-full transition-all cursor-pointer ${activeIndex === 2 ? `scale-1` : `scale-50`}`} onClick={() => handlePaginationClicks(2)}>
        <HardDrives size = {35} className={`transition-opacity ${activeIndex === 2 ? `opacity-1` : `opacity-0`}`} color="#fff"/>
       </figure>
       
       <figure className={`w-16 h-16 flex justify-center items-center bg-primary rounded-full transition-all cursor-pointer ${activeIndex === 3 ? `scale-1` : `scale-50`}`} onClick={() => handlePaginationClicks(3)}>
        <Circuitry size = {35} className={`transition-opacity ${activeIndex === 3 ? `opacity-1` : `opacity-0`}`} color="#fff"/>
       </figure>
       <figure className={`w-16 h-16 flex justify-center items-center bg-primary rounded-full transition-all cursor-pointer ${activeIndex === 4 ? `scale-1` : `scale-50`}`} onClick={() => handlePaginationClicks(4)}>
        <CarProfile size = {35} className={`transition-opacity ${activeIndex === 4 ? `opacity-1` : `opacity-0`}`} color="#fff"/>
       </figure>
      </div>

      {/* <div className=" w-6/12 h-[2px] bg-gray-500 flex lg:hidden mx-auto justify-between items-center">
        <img className={`w-10 h-10 md:w-20 md:h-20 ${swiperRefMob?.current?.activeIndex === 0 ? `scale-1` : `scale-50`} transition-transform duration-300`} src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702462030/pactron/nav-1_uqmkxj.png"/>
        <img className={`w-10 h-10 md:w-20 md:h-20 ${swiperRefMob?.current?.activeIndex === 1 ? `scale-1` : `scale-50`} transition-transform duration-300`} src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702462030/pactron/nav-2_mryeak.png"/>
        <img className={`w-10 h-10 md:w-20 md:h-20 ${swiperRefMob?.current?.activeIndex === 2 ? `scale-1` : `scale-50`} transition-transform duration-300`} src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702462030/pactron/nav-3_qmnaac.png"/>
        <img className={`w-10 h-10 md:w-20 md:h-20 ${swiperRefMob?.current?.activeIndex === 3 ? `scale-1` : `scale-50`} transition-transform duration-300`} src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702462030/pactron/nav-4_w3k5se.png"/>
        <img className={`w-10 h-10 md:w-20 md:h-20 ${swiperRefMob?.current?.activeIndex === 4 ? `scale-1` : `scale-50`} transition-transform duration-300`} src = "https://res.cloudinary.com/dosjh2min/image/upload/v1702462030/pactron/nav-5_npk9qp.png"/>
      </div> */}
    </div>
  );
};

export default ComponentSlider;
