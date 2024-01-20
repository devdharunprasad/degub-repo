"use client"

import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const HardwareSlider = ({ testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperHardwareRef = useRef();

    const handleLeftSlide = () => {
        swiperHardwareRef.current?.slidePrev();
        setActiveIndex(swiperHardwareRef.current?.activeIndex);
    };

    const handleRightSlide = () => {
        swiperHardwareRef.current?.slideNext();
        setActiveIndex(swiperHardwareRef.current?.activeIndex);
    };

    return (
        <div className="relative my-16 md:w-10/12 mx-auto block md:hidden ">
            <h3 className="text-black text-center text-3xl font-bold whitespace-nowrap">
                Our Processes
            </h3>

            <div className="center-section">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperHardwareRef.current = swiper)}
                    loop={true}
                    className="swiper-container py-10"
                >
                    <div className="swiper-wrapper">
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
                        <SwiperSlide className="swiper-slide ">
                            <div className="flex flex-col justify-center">



                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        Hardware Design
                                    </span>

                                </p>

                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-16 px-10 py-5 rounded-md">
                                    System Architecture and component selection
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-8 rounded-md">
                                    Circuit Simulation
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Technical hardware design document
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-11 py-8 rounded-md">
                                    Layout Engineering
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-12 py-8 rounded-md">
                                    Schematic Engineering
                                </p>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="flex flex-col justify-center">
                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        Simulation
                                    </span>

                                </p>

                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-16 px-10 py-5 rounded-md">
                                    Stack-up engineering
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Signal Intergrity Analysis
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Power Intergrity Analysis
                                </p>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="flex flex-col justify-center">
                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        FPGA &
                                        Embedded SW
                                    </span>

                                </p>

                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-16 px-10 py-5 rounded-md">
                                    FPGA RLT Design, Validation and Verificaton
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Firmware Design testing - Software Design, Development and testing
                                </p>


                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="flex flex-col justify-center">
                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        Mechanical &
                                        Thermal Capablities
                                    </span>

                                </p>


                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-16 px-10 py-5 rounded-md">
                                    Industrial Design
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Structural Analysis
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Mechanical Design
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-11 py-5 rounded-md">
                                    Thermal Simulation
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-12 py-5 rounded-md">
                                    MTBF Analysis
                                </p>

                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="flex flex-col justify-center">
                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        Bring up &
                                        Validation
                                    </span>

                                </p>


                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-10 px-8 py-5 rounded-md">
                                    Hardware Function bringing up
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-8 py-5 rounded-md">
                                    Electrical Design Validation Test  ( EDTV )
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-8 py-5 rounded-md">
                                    Mechanical Design Validaion Test ( MDTV )
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-8 py-5 rounded-md">
                                    FCC and UL Safety
                                    certifications
                                </p>


                            </div>

                        </SwiperSlide>

                        <SwiperSlide className="swiper-slide">
                            <div className="flex flex-col justify-center">
                                <p className="text-center mt-10 text-2xl font-bold flex justify-center items-center">

                                    <span>
                                        Prototyping
                                    </span>

                                </p>


                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-16 px-10 py-5 rounded-md">
                                    Prototype and Production end - to - end manufacturing
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Production test suite development and optimization
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-5 rounded-md">
                                    Production testing - Flying Probe, ICT and Functional
                                </p>
                                <p className="text-white text-center text-base font-semibold leading-6 justify-center items-center bg-darkgreen w-full mt-4 px-10 py-8 rounded-md">
                                    Packaging and Shipment
                                </p>


                            </div>

                        </SwiperSlide>

                    </div>
                </Swiper>
                <div className="cursor-pointer absolute left-12 md:left-0 top-5 md:bottom-1/2 transform translate-y-1/2 z-10 -translate-x-[105%] bg-transparent p-2">

                </div>
                <div className="cursor-pointer absolute right-12 md:right-0 top-5 md:bottom-1/2 transform translate-y-1/2 translate-x-[105%] z-10 bg-transparent p-2">

                </div>
            </div>
        </div>
    );
};

export default HardwareSlider;
