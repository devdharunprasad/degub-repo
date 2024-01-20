"use client";
import * as React from "react";
import Image from "next/image";

import HeadingSlideIn from "../shared/animations/HeadingSlideIn";
import { Tilt } from "react-tilt";
import { defaultConfig } from "next/dist/server/config-shared";
import { defaultOptions } from "../shared/options";

const company_logos = [
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item_tm0t7p.png",
    width: 241,
    height: 96,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-1_kilexl.png",
    width: 307,
    height: 96,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-2_sqfegx.png",
    width: 238,
    height: 96,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-3_vwh0lp.png",
    width: 194,
    height: 96,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-8_s8a09a.png",
    width: 265,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-9_fhjkzh.png",
    width: 300,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507427/pactron/assisted-companies/List_Item-10_oj1v3q.png",
    width: 252,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507425/pactron/assisted-companies/List_Item-11_jhzlsb.png",
    width: 198,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-4_d7wglk.png",
    width: 267,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-5_dyashk.png",
    width: 212,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507425/pactron/assisted-companies/List_Item-6_wrepj1.png",
    width: 250,
  },
  {
    url: "https://res.cloudinary.com/dosjh2min/image/upload/v1703507426/pactron/assisted-companies/List_Item-7_wvc8bh.png",
    width: 240,
  },
];

const AssistedCompanies = () => {
  return (
    <section className="bg-gray-50 overflow-hidden ">
      <div className="hidden center-div items-center md:flex w-full flex-col justify-center px-16 pb-12 max-md:max-w-full max-md:px-5">
        <div className="justify-center items-stretch flex w-full max-w-[1100px] flex-col mt-16 mb-10 px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
          <h1
            className={`text-neutral-950 text-center 
           text-3xl font-bold leading-[50px] my-10`}
          >
            Companies we{`'`}ve assisted
          </h1>
          {/* <div className="flex">
         <div  width = {company.width} height= {96} className = "h-[96px] relative " >
                     <Image layout="fill" src ={company.url} className="w-full"  />
                  </div>
         </div> */}
          <div className="flex w-11/12 mx-auto right-to-left-animation">
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item_ihcbs6.png"
              className="w-[220px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-1_fgkg7e.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-2_kapc34.png"
              className="w-[365px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-3_kbbo38.png"
              className="w-[215px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
                    <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-4_rrn2iz.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-5_zqy13x.png"
              className="w-[190px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
             <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item_ihcbs6.png"
              className="w-[220px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-1_fgkg7e.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-2_kapc34.png"
              className="w-[365px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-3_kbbo38.png"
              className="w-[215px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
                    <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-4_rrn2iz.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-5_zqy13x.png"
              className="w-[190px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
             <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item_ihcbs6.png"
              className="w-[220px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-1_fgkg7e.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-2_kapc34.png"
              className="w-[365px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-3_kbbo38.png"
              className="w-[215px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
                    <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-4_rrn2iz.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387756/pactron/List_Item-5_zqy13x.png"
              className="w-[190px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
          </div>
         

          <div className="left-to-right-animation flex w-full mt-5 ">
    

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-6_fmdb7a.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-7_kwd5lv.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-8_t0l1d2.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-9_huebhr.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-10_vboxkr.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-11_evkyxk.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-12_lftpd1.png"
              className="w-[270px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
                        <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-6_fmdb7a.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-7_kwd5lv.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-8_t0l1d2.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-9_huebhr.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-10_vboxkr.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-11_evkyxk.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-12_lftpd1.png"
              className="w-[270px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
            
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387755/pactron/List_Item-6_fmdb7a.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-7_kwd5lv.png"
              className="w-[170px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-8_t0l1d2.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387757/pactron/List_Item-9_huebhr.png"
              className="w-[240px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-10_vboxkr.png"
              className="w-[265px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-11_evkyxk.png"
              className="w-[200px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />

            <Image
              width={500}
              height={500}
              src="https://res.cloudinary.com/dosjh2min/image/upload/v1704387758/pactron/List_Item-12_lftpd1.png"
              className="w-[270px] h-[96px] grayscale hover:grayscale-0 hover:shadow-2xl transition-all duration-300"
            />
          </div>
         
        </div>
      </div>

      {/* Mobile */}
      <div className="justify-center items-stretch center-section flex md:hidden w-full flex-col px-11 py-10 max-md:px-5">
        <div className="text-neutral-950 text-center text-xl font-semibold whitespace-nowrap">
          Companies we{`'`}ve assisted
        </div>{" "}
        <div>
          <Image
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1703768929/pactron/all-companies_dc2cks.png"
            width={500}
            height={500}
            className="w-full mt-10 mx-auto"
            alt="logos"
          />
        </div>
        <div className="justify-between items-stretch hidden gap-2.5 mt-11 max-md:mt-10">
          <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
            <div className="justify-center items-center bg-slate-50 flex flex-col px-5 py-2 rounded-sm ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe564ab7969b1e2798127413c194570c9fa2c29660e11cf3d453190c1604c471?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[3] object-contain object-center w-[93px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-6 py-3.5 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a5fccc65da5a85749b66a8004df41fedecf489573e2525beecf004ab5ccd767?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[3.58] object-contain object-center w-[86px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-9 py-2.5 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5a04ed1131960d392200e06ae18b75f249438424f582d67e457895fb3aebb6d?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[2.03] object-contain object-center w-[65px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-5 py-4 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/706e5883b1bc328fd3e4b79a02a0c066c279eb263268113aee1f4d023d593a51?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[5.69] object-contain object-center w-[91px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-9 py-2 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf0519ef5db7d8fc38565c45ad6f7f3cba75149b08aeaa89b5db271682043a16?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[2.03] object-contain object-center w-[65px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-8 py-2 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f9fde86f11ce2e09ca110bfb3d3edd93166e071763aaddc799de14f71f096ab8?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[2.31] object-contain object-center w-[74px] overflow-hidden"
              />
            </div>
          </div>{" "}
          <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
            <div className="justify-center items-center bg-slate-50 flex flex-col px-9 py-2 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/daaeea31372abdecf13d90c43dd072ac472c13ad44f334bf56132d2bdcb48790?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[1.75] object-contain object-center w-14 overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-2.5 py-3.5 rounded-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/674b36b9212827421d5243565e160604797f8aa9b39cc2f6cfba8587a5422971?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[5.5] object-contain object-center w-[110px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-10 py-2 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47fec67690e1ca076f7674cc8df215917b3d77576b283bbe83c3a27efe266ccb?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[1.69] object-contain object-center w-[54px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-6 py-3 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dec81fecb4f371b03678ef76634521ffe748a5b76f00e523d719e02f71bae319?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[3.38] object-contain object-center w-[81px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-7 py-2 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e91d8e66dd05075e1929b03e08c8edd2a145f041e6724f7d9e200f8013b39e?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[2.41] object-contain object-center w-[77px] overflow-hidden"
              />
            </div>{" "}
            <div className="justify-center items-center bg-slate-50 flex flex-col mt-3 px-7 py-3 rounded-sm max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/86f93a5f66c481794098b4c664ab39d23013b10f9f06f570ea1a6706d1ad4240?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[3.21] object-contain object-center w-[77px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AssistedCompanies;
