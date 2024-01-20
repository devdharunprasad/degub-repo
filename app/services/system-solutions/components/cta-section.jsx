"use client";
import React from "react";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
function CtaSection(props) {
  return (
    <div className=" bg-primary py-10">
    <div className="justify-between items-center flex gap-5 px-4 py-3 center-section">
      <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
        <div className="text-white text-3xl font-semibold leading-10 max-md:max-w-full">
        Reach Out to Us
        </div>{" "}
        <div className="text-white text-base leading-6 ">
        Our team is ready to support you with any questions or needs you may have.
        </div>
      </div>{" "}
      <Link href = "/contact-us" className="text-white text-base mr-20 leading-6 whitespace-nowrap justify-center items-stretch border self-center my-auto px-5 py-2 border-solid border-white">
        Contact us
      </Link>
    </div>
  </div>
  );
}

export default CtaSection;
