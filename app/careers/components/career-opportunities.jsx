"use client";
import React from "react";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
function CareerOpportunities(props) {
  return (
    <div className=" bg-primary py-10">
      <div className="justify-between items-center flex gap-5 px-4 py-3 center-section">
        <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <div className="text-white text-3xl font-semibold leading-10 max-md:max-w-full">
            Career Opportunities{" "}
          </div>{" "}
          <div className="text-white text-base leading-6 mt-3 w-[530px]">
            We offer a diverse range of career opportunities across various
            departments and areas of expertise.
          </div>
        </div>{" "}
        <a
        target="_blank"
        rel = "noreferrer"
          href="https://www.linkedin.com/company/pactron/jobs/"
          className="text-black bg-white text-base mr-20 leading-6 whitespace-nowrap justify-center items-stretch border self-center my-auto px-5 py-2 border-solid border-white"
        >
          View Positions
        </a>
      </div>
    </div>
  );
}

export default CareerOpportunities;
