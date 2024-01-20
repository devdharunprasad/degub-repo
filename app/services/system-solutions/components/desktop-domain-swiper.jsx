"use client";

import React, { useEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
import { useInView } from "framer-motion";
import { useServices } from "../../../zustand/store";
import { Autoplay } from "swiper/modules";
function DesktopDomainSwiper(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const domainsSectionRef = React.useRef();
  const isInViewDomainsSection = useInView(domainsSectionRef);
  const change_systemsolutions = useServices(
    (state) => state.change_systemsolutions
  );

  // console.log(isInViewDomainsSection)
  React.useEffect(() => {
   
  }, [isInViewDomainsSection]);

  const [activeSlide, setActiveSlide] = useState(0);

  const swiperCarouselRef = useRef();
  const handleLeftSlide = () => {
    swiperCarouselRef.current?.slidePrev();
  };

  const handleRightSlide = () => {
    swiperCarouselRef.current?.slideNext();
  };
  useEffect(() => {
    swiperCarouselRef?.current?.on("slideChange", () => {
      setActiveSlide(swiperCarouselRef?.current?.activeIndex);
    });
  });

  const handlePaginationClick = (index) => {
    swiperCarouselRef?.current?.slideTo(index);
    setActiveIndex(index);
  };

  swiperCarouselRef?.current?.on("slideChange", () => {
    setActiveIndex(swiperCarouselRef?.current?.activeIndex);
  });

  return (
    <section className="bg-[#ECEFEF] py-10" id="domains-we-transform">
      <div className="  flex-col justify-center items-center px-16 py-12 max-md:px-5 hidden md:block center-section mx-auto w-full max-md:max-w-full relative">
        {/* <CaretLeft
                    size={40}
                    onClick={handleLeftSlide}
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${activeIndex === 0 ? "opacity-0" : "opacity-1"}`}
               
                />
                <CaretRight
                    size={40}
                    onClick={handleRightSlide}
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer ${activeIndex === 5 ? "opacity-0" : "opacity-1"}`}
                /> */}
        <h4 className="header text-neutral-950 text-center text-3xl font-bold self-center max-w-[661px]  center-section mx-auto mb-10">
          Domains we transform
        </h4>
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperCarouselRef.current = swiper)}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
        >
          <SwiperSlide>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-center justify-center w-8/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch w-9/12  flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <p className="header text-primary text-2xl font-bold max-md:max-w-full">
                    Semiconductor{" "}
                  </p>
                  <i className="header text-neutral-950 text-base mt-3 max-md:max-w-full">
                    Trusted Semiconductor Partner{" "}
                  </i>

                  <div className="text-neutral-950 text-base mt-3 ">
                  Pactron is your authorized ally, specializing in the development of pre and post-silicon validation hardware including , design and manufacturing of ATE boards, Probe cards, Characterization hardware, Reliability/ Burn-in boards, Evaluation boards, and beyond
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dosjh2min/image/upload/v1702671294/pactron/semiconductor_wmmvgy.png"
                  className="aspect-[1.01] object-contain object-center w-8/12 overflow-hidden grow max-md:mt-10"
                  alt="Aerospace & Defence"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-center justify-center w-8/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch w-9/12 flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <p className="header text-primary text-2xl font-bold max-md:max-w-full">
                    Consumer Electronics{" "}
                  </p>
                  <i className="header text-neutral-950 text-base mt-3 max-md:max-w-full">
                  Global Support for Swift Product Launch
                  </i>
                  <div className="text-neutral-950 text-base mt-3 w-11/12">
                   Pactron assists
                    diverse clients worldwide in accelerating their products to
                    market. Our expertise ranges from high-speed routers, NAS,
                    and data center hardware to cutting-edge consumer product
                    evaluation boards. We empower our clients to meet stringent
                    time-to-market demands with confidence.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dosjh2min/image/upload/v1702671293/pactron/consumer-electronics_tmuyuo.png"
                  className="aspect-[1.01] object-contain object-center w-8/12 overflow-hidden grow max-md:mt-10"
                  alt="Aerospace & Defence"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-center justify-center w-8/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch w-9/12 flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <p className="header text-primary text-2xl font-bold max-md:max-w-full">
                    Medical Devices
                  </p>
                  <i className="header text-neutral-950 text-base mt-3 max-md:max-w-full">
                  Precision in Medical Device Innovation
                  </i>
                  <div className="text-neutral-950 text-base mt-3 ">
                   From design
                    collaboration to rigorous manufacturing adherence, our
                    engineering and manufacturing teams unite forces to ensure
                    the seamless development of state-of-the-art medical
                    devices. We meet essential IPC standards, delivering
                    plug-and-play products for successful initial field trials.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dosjh2min/image/upload/v1702671294/pactron/medical-devices_fugdzr.png"
                  className="aspect-[1.01] object-contain object-center w-8/12 overflow-hidden grow max-md:mt-10"
                  alt="Aerospace & Defence"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-center justify-center w-8/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch w-9/12 flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <p className="header text-primary text-2xl font-bold max-md:max-w-full">
                    Industrial Electronics{" "}
                  </p>
                  <i className="header text-neutral-950 text-base mt-3 max-md:max-w-full">
                  Empowering Industrial Innovation
                  </i>
                  <div className="text-neutral-950 text-base mt-3">
                  Discover cutting-edge
                    printed circuit boards (PCBs) meticulously crafted for
                    industrial electronic products. Pactron specializes in
                    delivering high-quality, reliable PCB solutions tailored to
                    meet the demands of the most advanced industrial
                    technologies. Elevate your electronic designs with precision
                    and performance – trust us to be your partner in industrial
                    electronic evolution.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dosjh2min/image/upload/v1702671294/pactron/industrial-electronics_x17igq.png"
                  className="aspect-[1.01] object-contain object-center w-8/12 overflow-hidden grow max-md:mt-10"
                  alt="Aerospace & Defence"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-center justify-center w-8/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch w-9/12 flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <p className="header text-primary text-2xl font-bold max-md:max-w-full">
                    Automotive Electronics
                  </p>
                  <i className="header text-neutral-950 text-base mt-3 max-md:max-w-full">
                  Driving Automotive Innovation
                  </i>
                  <div className="text-neutral-950 text-base mt-3 ">
                     Explore state-of-the-art
                    printed circuit boards (PCBs) meticulously engineered for
                    automotive electronic products. Our company specializes in
                    delivering high-performance, reliable PCB solutions tailored
                    to the rigorous demands of the automotive industry. Elevate
                    your automotive electronics with precision and cutting-edge
                    technology – choose us as your trusted partner in driving
                    future innovations on the road.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
              <img
                  loading="lazy"
                  src="https://res.cloudinary.com/dosjh2min/image/upload/v1702671293/pactron/car-carousel_u04coq.png"
                  className="aspect-[1.01] object-contain object-center w-8/12 overflow-hidden grow max-md:mt-10"
                  alt="Aerospace & Defence"
                />
              </div>
            </div>
          </SwiperSlide>

      
        </Swiper>
        {/* <div className="self-center w-[878px] max-w-full center-section mx-auto mt-32 max-md:mt-10">
           
        </div> */}
        <div ref={domainsSectionRef} />
        <div className="w-6/12 mx-auto justify-between items-center self-stretch flex gap-5 mt-20 relative ">
          <div
            onClick={() => handlePaginationClick(0)}
            className={`stroke-[5px] cursor-pointer self-center bg-[#C5CDCD] flex w-[13px] shrink-0 h-[13px] flex-col my-auto rounded-[50%] transform ${
              activeSlide === 0 && `dot-round after:animation-fadeinout`
            } relative z-10 transition-all duration-300`}
          />
          <div
            onClick={() => handlePaginationClick(1)}
            className={`stroke-[5px] cursor-pointer self-center bg-[#C5CDCD] flex w-[13px] shrink-0 h-[13px] flex-col my-auto rounded-[50%] transform ${
              activeSlide === 1 && `dot-round  after:animation-fadeinout`
            } relative z-10 transition-all duration-300`}
          />
          <div
            onClick={() => handlePaginationClick(2)}
            className={`stroke-[5px] cursor-pointer self-center bg-[#C5CDCD] flex w-[13px] shrink-0 h-[13px] flex-col my-auto rounded-[50%] transform ${
              activeSlide === 2 && `dot-round  after:animation-fadeinout`
            } relative z-10 transition-all duration-300`}
          />
          <div
            onClick={() => handlePaginationClick(3)}
            className={`stroke-[5px] cursor-pointer self-center bg-[#C5CDCD] flex w-[13px] shrink-0 h-[13px] flex-col my-auto rounded-[50%] transform ${
              activeSlide === 3 && `dot-round  after:animation-fadeinout`
            } relative z-10 transition-all duration-300`}
          />
          <div
            onClick={() => handlePaginationClick(4)}
            className={`stroke-[5px] cursor-pointer self-center bg-[#C5CDCD] flex w-[13px] shrink-0 h-[13px] flex-col my-auto rounded-[50%] transform ${
              activeSlide === 4 && `dot-round  after:animation-fadeinout`
            } relative z-10 transition-all duration-300`}
          />
     

          <div className="flex absolute inset-0 items-center  mx-auto">
            <div className=" w-full border max-w-full border-[#C5CDCD]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesktopDomainSwiper;
