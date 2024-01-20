"use client"
import { useEffect, useRef, useState } from "react";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react"

const gloabImages = [
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/1_okug8l.png",
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/2_s1nk17.png",
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/3_pcuiam.png",
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/4_oojbxn.png",
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/5_j9fx3z.png",
    "https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/6_nq8pop.png",
]

function ContactInfo(props) {
    const swiperGloab = useRef()

    const [activeIndex, setActiveIndex] = useState(0)
    const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/dosjh2min/image/upload/v1702797970/pactron/1_okug8l.png")

    const handleLeftSlide = () => {
        swiperGloab.current?.slidePrev();

    };

    const handleRightSlide = () => {
        swiperGloab.current?.slideNext();

    };

    useEffect(() => {
        swiperGloab?.current?.on("slideChange", () => {
            setActiveIndex(swiperGloab?.current?.activeIndex)
            if (activeIndex === 0) {
                setImageUrl(gloabImages[0])
            }

            if (activeIndex === 1) {
                setImageUrl(gloabImages[1])
            }

            if (activeIndex === 2) {
                setImageUrl(gloabImages[2])
            }

            if (activeIndex === 3) {
                setImageUrl(gloabImages[3])

            }
            if (activeIndex === 4) {
                setImageUrl(gloabImages[4])

            }
            if (activeIndex === 5) {
                setImageUrl(gloabImages[5])
            }
        })


    })



    return (
        <section className="bg-[#DADFDF] py-32 ">

            <div>
                <img src={imageUrl} className="w-full md:w-4/12 mx-auto" />
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12  mx-auto relative">
                <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperGloab.current = swiper)}
                    className="swiper-container py-10"
                >
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                U.S - HQ
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  3000 Patrick Henry Dr. Santa Clara, CA 95054</span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Phone number :</span>
                                <span className=""> 001-408-329-5500</span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base mt-1.5">
                                <span className="font-bold">E-mail : </span>
                                <span className="">info@pactroninc.com</span>
                            </div>
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                    href=" https://maps.app.goo.gl/aSo9CNoS7TjM8AWt9"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                Pactron India
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  12/ 1 1st Floor, Bashyam Basheer Ahmed
                                    Street, Alwarpet , Chennai -600028. </span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Phone number :</span>
                                <span className="">  044-42082926 </span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base mt-1.5">
                                <span className="font-bold">E-mail : </span>
                                <span className="">info@pactroninc.com</span>
                            </div>
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                    href=" https://g.co/kgs/DDeSXM"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                Pactron India Desing Centre
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  No 40, AKS Nagar, Thadagam Road,
                                    Coimbatore</span>
                            </div>
                           
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                    href="https://maps.app.goo.gl/8cDYA712RXejTA7e8"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                Pactron Japan
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  3000 Patrick Henry Dr. Santa Clara, CA 95054 </span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Phone number :</span>
                                <span className=""> +81-80 37537338</span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base mt-1.5">
                                <span className="font-bold">E-mail : </span>
                                <span className="">info@pactroninc.com</span>
                            </div>
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                      href=" https://maps.app.goo.gl/aSo9CNoS7TjM8AWt9"
                                      target="_blank"
                                      rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                Pactron Phillippines
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  3000 Patrick Henry Dr. Santa Clara, CA 95054 </span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Phone number :</span>
                                <span className=""> 0063-917-6563750</span>
                            </div>
                            <div className="text-neutral-950 text-xs md:text-base mt-1.5">
                                <span className="font-bold">E-mail : </span>
                                <span className="">raymund_villanueva@pactroninc.com </span>
                            </div>
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                      href=" https://maps.app.goo.gl/aSo9CNoS7TjM8AWt9"
                                      target="_blank"
                                      rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex grow basis-[0%] h-[220px] backdrop-blur-sm bg-white/40 flex-col  px-8 py-4 rounded-md ">
                            <div className="text-neutral-950 text-sm md:text-2xl font-bold leading-5">
                                Pactron Malaysia
                            </div>
                            {/* <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Office :</span>
                                <span className="">  3000 Patrick Henry Dr. Santa Clara, CA 95054 </span>
                            </div> */}
                            {/* <div className="text-neutral-950 text-xs md:text-base leading-5 mt-1.5">
                                <span className="font-bold">Phone number :</span>
                                <span className=""> 408-329-5500</span>
                            </div> */}
                            <div className="text-neutral-950 text-xs md:text-base mt-1.5">
                                <span className="font-bold">E-mail : </span>
                                <span className="">info@pactroninc.com</span>
                            </div>
                            <div className="items-center flex justify-start gap-1 mt-auto pr-20">
                                <a
                                      href=" https://maps.app.goo.gl/aSo9CNoS7TjM8AWt9"
                                      target="_blank"
                                      rel="noreferrer"
                                    className="text-primary flex justify-start gap-1 items-center text-xs md:text-base font-semibold leading-5"
                                    aria-label="Get Directions"
                                    role="button"
                                >
                                    <span>
                                        Get Directions
                                    </span>

                                    <CaretRight size={16} />
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="cursor-pointer absolute left-12 md:left-0 -bottom-5 md:bottom-1/2 transform translate-y-1/2 z-10 -translate-x-[105%] bg-transparent p-2">
                    <CaretLeft
                        size={45}
                        onClick={handleLeftSlide}
                        className={activeIndex === 0 ? "opacity-0" : "opacity-1"}
                    />
                </div>
                <div className="cursor-pointer absolute right-12 md:right-0 -bottom-5 md:bottom-1/2 transform translate-y-1/2 translate-x-[105%] z-10 bg-transparent p-2">
                    <CaretRight
                        size={45}
                        onClick={handleRightSlide}
                        className={activeIndex === 5 ? "opacity-0" : "opacity-1"}
                    />
                </div>
            </div>

        </section>
    );
}

export default ContactInfo;
