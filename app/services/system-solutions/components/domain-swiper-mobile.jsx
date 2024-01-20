"use client"
import React, { useRef } from "react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import {CaretLeft, CaretRight} from "@phosphor-icons/react"
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

function DomainSwiperMobile(props) {


    const swiperMobCarouselRef = useRef()
    const handleLeftSlide = () => {
        swiperHardwareRef.current?.slidePrev();
        setActiveIndex(swiperHardwareRef.current?.activeIndex);
    };

    const handleRightSlide = () => {
        swiperHardwareRef.current?.slideNext();
        setActiveIndex(swiperHardwareRef.current?.activeIndex);
    };

    return (

        <section className="w-full mx-auto md:hidden center-section">
            {/* slide 1 */}
            <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11 whitespace-nowrap w-full mx-auto  center-section">
                Domains we transform
            </header>
            <Swiper
                spaceBetween={15}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperMobCarouselRef.current = swiper)}
                loop={true}>
                      <div className="w-[100px] flex justify-between items-center absolute top-12">
                            <CaretLeft
                                size={24}
                                onClick={handleLeftSlide}
                            // color={activeIndex === 0 ? "gray" : "black"}
                            />
                            <CaretRight
                                size={24}
                                onClick={handleRightSlide}
                            // color={activeIndex === testimonials.length - 1 ? "gray" : "black"}
                            />
                        </div>
                <SwiperSlide>
                    <div className="bg-white flex flex-col pt-8 pb-12 px-9 ">

                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4ec0df0c7ee906dd20edb88ec9af005e75d68831a4f40c29241ef2535e6a1ed?apiKey=cb09127259af43f49535d3079eb90155&"
                            className="aspect-[1.01] object-contain object-center w-[218px] overflow-hidden self-center max-w-full mt-14"
                            alt="Domain Image"
                        />
                        <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11">
                            Aerospace & Defence
                        </header>
                        <div className="text-neutral-950 text-center text-base self-stretch mt-3 mb-20">
                            The semiconductor industry is pivotal in advancing aerospace and defense. It provides
                            innovative, efficient, and reliable technologies essential for modern systems, enhancing
                            performance, safety, and capabilities.{" "}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* slide 2 */}
                    <div className="items-center bg-white flex flex-col px-9 py-12">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f584bb2cbcad160daf685eeb50634ea2f6ae1f04d3dcb294ca25681731c0a592?apiKey=cb09127259af43f49535d3079eb90155&"
                            className="aspect-[0.86] object-contain object-center w-[218px] overflow-hidden max-w-full mt-3"
                            alt="Medical Device"
                        />
                        <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11">
                            Medical Devices
                        </header>
                        <div className="text-neutral-950 text-center text-base self-stretch mt-3 mb-14">
                            Our company plays a critical role in the medical device industry by supplying advanced
                            semiconductor technologies. These components are essential in developing sophisticated
                            medical equipment, enhancing diagnostic accuracy.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    {/* slide 3 */}
                    <div className="justify-end items-center bg-white flex flex-col px-9 py-12">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2930c8321b9d752917f9c69ab3204e329450116ad943646e0ba5d5fdcb58ba20?apiKey=cb09127259af43f49535d3079eb90155&"
                            className="aspect-[1.42] object-contain object-center w-[218px] overflow-hidden max-w-full mt-28"
                            alt="Semiconductor Image"
                        />
                        <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11">
                            Semiconductor
                        </header>
                        <div className="text-neutral-950 text-center text-base self-stretch mt-3 mb-10">
                            Our company plays a vital role in bolstering the semiconductor industry. By offering advanced materials, precision engineering solutions, and cutting-edge manufacturing technologies, we enable semiconductor firms to enhance chip performance, reduce production costs, and accelerate innovation.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* slide 4 */}
                    <div className="justify-end items-center bg-white flex flex-col px-9 py-12">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64638f046da1e439f7fffc3a3ad41d5fd229387e20f46c081504dc0af3343b3a?apiKey=cb09127259af43f49535d3079eb90155&"
                            className="aspect-[1.1] object-contain object-center w-[218px] overflow-hidden max-w-full mt-20"
                            alt="Consumer Electronics"
                        />
                        <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11">
                            Consumer Electronics
                        </header>
                        <div className="text-neutral-950 text-center text-base self-stretch mt-3 mb-9">
                            Our company significantly contributes to the consumer electronics sector by providing
                            cutting-edge semiconductor technologies and components. These advancements enable
                            manufacturers to develop smaller, more powerful, and energy-efficient devices, meeting the
                            growing consumer demand for high-performance electronics.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* slide 5 */}
                    <div className="justify-end items-center bg-white flex flex-col px-9 py-12">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/531435e6e64d41df1ba7a6554c25c2b1f5114eea22f90bb5495330d383a3145b?apiKey=cb09127259af43f49535d3079eb90155&"
                            className="aspect-[0.97] object-contain object-center w-[218px] overflow-hidden max-w-full mt-11"
                            alt="Industrial Electronics"
                        />
                        <header className="text-neutral-950 text-center text-2xl font-bold self-stretch mt-11">
                            Industrial Electronics
                        </header>
                        <div className="text-neutral-950 text-center text-base self-stretch mt-3 mb-16">
                            Our company is instrumental in propelling the semiconductor industry forward. We provide
                            specialized expertise in advanced materials, state-of-the-art engineering solutions, and
                            innovative manufacturing processes.
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* slide 6 */}
                    <div className="justify-end items-stretch bg-white flex flex-col pt-12 pb-7 px-9">
                        <header className="justify-center items-stretch flex flex-col mt-28 pb-12 px-1.5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2128504e998c71259badca48a34cb855263fd60b7a94ea9606c9c4efb7962d0e?apiKey=cb09127259af43f49535d3079eb90155&"
                                className="aspect-[1.26] object-contain object-center w-[219px] justify-end items-center overflow-hidden self-center max-w-full"
                                alt="Automotive Image"
                            />
                            <h1 className="text-neutral-950 text-center text-2xl font-bold self-center max-w-[305px] mt-10">
                                Automotive
                            </h1>
                            <p className="text-neutral-950 text-center text-base mt-9 mb-1">
                                Our company is a key enabler in the automotive industry, providing
                                specialized semiconductor technologies that drive innovation in
                                vehicle design and functionality. These advanced components are
                                integral to developing smarter, safer, and more efficient vehicles,
                                including electric and autonomous cars.
                            </p>
                        </header>
                    </div>
                </SwiperSlide>
            </Swiper>





        </section>
    );
}

export default DomainSwiperMobile;