"use client";
import Image from "next/image";
import React, { useState } from "react";

const MapSection = () => {
  const [countryName, setCountryName] = useState("us");
  console.log(countryName);
  return (
    <section className="py-24 bg-[#F8FDFD]">
      <div className="center-section relative">
        <h1 className="text-2xl text-center font-bold ">
          Our Offices around the world{" "}
        </h1>
        <div className="relative w-full h-[600px]  ml-10">
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "us" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute left-[23%] top-5 z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[321px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  U.S - HQ
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  3000 Patrick Henry Dr. Santa Clara, CA 95054
                </div>
                <span className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b9ba445a20149a6e4faaf11d7abc7163d350754dd439afcd668db876ef75?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base self-center grow whitespace-nowrap my-auto">
                    001-408-329-5500
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-2 mt-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                    info@pactroninc.com{" "}
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961000/pactron/Contact_lb7ffg.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>

          {/* Second MAP */}
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "ind1" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute top-14 right-[11%] z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[321px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  Pactron India
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  12/ 1 1st Floor, Bashyam Basheer Ahmed Street, Alwarpet ,
                  Chennai -600028.
                </div>
                <span className="items-stretch flex justify-between gap-2 mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b9ba445a20149a6e4faaf11d7abc7163d350754dd439afcd668db876ef75?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base self-center grow whitespace-nowrap my-auto">
                    044-42082926
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-2 mt-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                    info@pactroninc.com{" "}
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961001/pactron/Contact-1_a9mush.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>
          {/* Third Map */}
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "ind2" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute top-36 right-[10%] z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[350px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  Pactron India Design Centre
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  No 40, AKS Nagar, Thadagam Road, Coimbatore.
                </div>

                <span className="items-stretch flex justify-between gap-2 mt-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                    info@pactroninc.com{" "}
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961000/pactron/Contact-2_aforlu.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>
          {/* Fourth MAP */}
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "japan" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute top-5 right-[23%] z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[350px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  Pactron Japan
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  2-7-14 #803, Minato, Chuo, Fukuoka 810-0075 Japan
                </div>

                <span className="items-stretch flex justify-between gap-2 mt-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />

                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                    steve_hayashi@pactroninc.com
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-2 mt-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b9ba445a20149a6e4faaf11d7abc7163d350754dd439afcd668db876ef75?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base self-center grow whitespace-nowrap my-auto">
                    +81-90-7730-7038
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961000/pactron/Contact-3_rlwiav.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>
          {/* Fift MAP */}
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "phil" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute top-24 right-[27%] z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[350px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  Pactron Phillippines
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  Block 2, Lot 5 Phase 4 Villarosa, San Pedro, Laguna 4023
                </div>

                <span className="items-stretch flex justify-between gap-2 mt-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />

                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                    jhune_sisno@pactroninc.com
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-2 mt-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b9ba445a20149a6e4faaf11d7abc7163d350754dd439afcd668db876ef75?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base self-center grow whitespace-nowrap my-auto">
                    + 63-956578 8899
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961002/pactron/Contact-4_nj7lam.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>
          <div
            className={`w-full h-auto absolute top-0 left-0  ${
              countryName === "malaysia" ? `opacity-1 z-20` : `opacity-0 z-10`
            } `}
          >
            <div className="absolute top-32 right-[31%] z-50">
              <span className="items-stretch bg-white/80 shadow-md flex max-w-[350px] flex-col px-10 py-7 rounded-lg">
                <div className="text-neutral-950 text-xl font-bold whitespace-nowrap">
                  Pactron Malaysia
                </div>
                <div className="text-neutral-950 text-base mt-1">
                  No 29, Jalan Raja Nong Taman Sri Klang, Selangor
                </div>

                <span className="items-stretch flex justify-between gap-2 mt-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db0b0e05501cc94ccb66ab11ba65eb06f3743bb7e17d4e28c833d50b6f24522?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />

                  <div className="text-neutral-950 text-base grow whitespace-nowrap self-start">
                  info@pactroninc.com
                  </div>
                </span>
                <span className="items-stretch flex justify-between gap-2 mt-2">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3026b9ba445a20149a6e4faaf11d7abc7163d350754dd439afcd668db876ef75?"
                    className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full"
                  />
                  <div className="text-neutral-950 text-base self-center grow whitespace-nowrap my-auto">
                    + 63-956578 8899
                  </div>
                </span>
                <span className="items-baseline flex justify-start gap-1 mt-5 pr-4">
                  <div className="text-teal-600 text-base underline">
                    Get Directions
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/730ae78b7e66cc7e0afb84fb8aea1948e5d68d9ddd54506242de340ed888946c?"
                    className="aspect-square object-contain object-center w-[18px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                  />
                </span>
              </span>
            </div>
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704961000/pactron/Contact-5_ycxtdg.jpg"
              alt="map"
              className="w-10/12 mx-auto"
            />
          </div>
        </div>

        <div className="flex -mt-24 gap-10 items-center w-6/12 justify-around rounded-xl mx-auto py-5 px-6 bg-[#AACFCF66]/40 relative z-50">
          <button
            className={`${
              countryName === "us" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("us")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833491/pactron/1_2_wlolz4.png"
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${
              countryName === "ind1" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("ind1")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833492/pactron/Group_1000002669_mohdrv.png"
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${
              countryName === "ind2" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("ind2")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833492/pactron/Group_1000002669_mohdrv.png"
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${
              countryName === "japan" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("japan")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833492/pactron/Group_1000002670_om7upm.png"
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${
              countryName === "phil" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("phil")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833492/pactron/Group_1000002671_vwxhy3.png"
              width={40}
              height={40}
            />
          </button>
          <button
            className={`${
              countryName === "malaysia" ? `scale-125` : `scale-100`
            } `}
            onClick={() => setCountryName("malaysia")}
          >
            <Image
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1703833491/pactron/Group_1000002666_wsiboj.png"
              width={40}
              height={40}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
