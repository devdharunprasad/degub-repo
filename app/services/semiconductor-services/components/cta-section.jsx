"use client"
import React from "react";
import Link from "next/link"
import {CaretRight} from "@phosphor-icons/react"
function CtaSection(props) {
    return (
        
        <div className=" bg-military_green py-10">
        <div className="justify-between items-center flex gap-5 px-4 py-3 center-section">
          <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-white text-3xl font-semibold leading-10 max-md:max-w-full">
              Let{`'`}s Talk
            </div>{" "}
            <div className="text-white text-base leading-6 w-[530px]">
              We{`'`}re prepared to provide you with the help you need. We are always
              available by message, so please don{`'`}t hesitate to get in touch.
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