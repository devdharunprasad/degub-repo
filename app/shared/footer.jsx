"use client"
import * as React from "react";
import Link from "next/link"
import Wave from "react-wavify";
import { useInView } from "framer-motion";
function Footer(props) {
  const [yValue, setYValue] = React.useState(`-translate-y-10`);
  const [color, setColor] = React.useState("text-white")
  const sectionRef = React.useRef();
  const isInView = useInView(sectionRef);

  return (
    <>
    <footer className="bg-zinc-200 relative overflow-hidden" ref  ={sectionRef}>

    <div className={`items-center center-section hidden relative text-black delay-[800ms] transition-all duration-300 z-20 md:flex w-full flex-col px-16 py-8 max-md:max-w-full max-md:px-5`}>
      <div className="item-start  flex w-full justify-between gap-5 mt-8 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5 pb-10">
        <div className="items-start flex w-[300px] flex-col ">
          <Link href = "/">
          <img
            loading="lazy"
            src="https://res.cloudinary.com/dosjh2min/image/upload/v1702810220/pactron/logo_1_kiezbp.png"
            className=" object-contain w-[150px] overflow-hidden mb-2"
          />
          </Link>
          <div className=" ml-2 text-xs uppercase self-stretch whitespace-nowrap">
            Moving from mind to market
          </div>
        
        </div>
        <div className="self-start max-md:max-w-full mt-2">
          <div className="gap-5 flex jus max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col pb-2 max-md:mt-10">
                <div className=" text-xl font-bold whitespace-nowrap">
                  Services
                </div>
                <Link href = "/services/semiconductor-services" className="footer-button text-base whitespace-nowrap mt-3">
                  Semiconductor Services
                </Link>
                <Link href = "/services/system-solutions" className="footer-button text-base mt-2">
                  Systems Solution
                </Link>
                <Link href = "/services/technology-services" className="footer-button text-base whitespace-nowrap mt-2">
                  Technology Services
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col pb-2 max-md:mt-10">
                <div className=" text-xl font-bold whitespace-nowrap">
                  Quick links
                </div>
                <Link href= "/about-us" className=" text-base mt-3 footer-button">About us</Link>
                <Link href = "/careers"className=" text-base mt-2 footer-button">Careers</Link>
                <Link href = "/contact-us" className=" text-base mt-2 footer-button">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[19%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                <div className=" text-xl font-bold whitespace-nowrap">
                  Social
                </div>
                <div className="justify-between items-stretch flex gap-3 mt-5 max-md:mr-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fe205bb4b4a1703f5116a928a9c7d7321b7873bddc4f91f256ff843978eeb93?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <a href = "mailto:info@pactroninc.com" className=" text-base grow whitespace-nowrap self-start">
                    Mail
                  </a>
                </div>
                <div className="justify-between items-stretch flex gap-3 mt-4 max-md:mr-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/80e78e527f11ffc0fb14cf7d8f21ed9674ab2ea9c979dfb068bfda076f10f10f?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <a href = "https://in.linkedin.com/company/pactron" target="_blank" rel = "noreferrer" className=" text-base grow whitespace-nowrap self-start">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[40%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:mt-10">
                <div className=" text-xl font-bold whitespace-nowrap">
                  Address
                </div>
                <div className=" text-base mt-3">
                  3000 Patrick Henry  Dr, <br />
                  Santa Clara, CA 95054
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-slate-500 flex shrink-0 h-px flex-col mt-5 max-md:max-w-full max-md:mt-10" />
      <div className=" text-xs leading-5 whitespace-nowrap mt-8 max-md:mt-10">
        <span className="">© 2023 Pactron Inc · All rights reserved · </span>
        <span className="">Privacy Policy</span>
      </div>
    </div>
    </footer>
    {/* Mobile */}
    <footer className="bg-zinc-200 ">

    <div className="justify-center center-section items-stretch bg-zinc-200 flex md:hidden w-full flex-col px-10 py-2.5 max-md:px-5">
      <div className="items-center flex flex-col px-4 py-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d4a057012c436c07403d91e559621e5ac0ad412846122a6ea2b93964c9e43b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[3.35] object-contain object-center w-[104px] overflow-hidden self-center max-w-full"
        />
        <div className=" text-center text-xs uppercase self-center whitespace-nowrap mt-3">
          Moving from mind to market
        </div>
        <div className=" text-center text-sm mt-3">
          Trusted by the world’s most Innovative high-growth companies
        </div>
        <div className=" text-center text-base font-semibold leading-5 mt-9">
          Services
        </div>
        <Link href = "/services/semiconductor-services" className=" text-center text-sm leading-4 self-center whitespace-nowrap mt-5">
          Semiconductor Services
        </Link>
        <Link href = "/services/system-solutions" className=" text-center text-sm leading-4 mt-1.5">
          Systems Solution
        </Link>
        <Link href = "/services/technology-services" className=" text-center text-sm leading-4 mt-1.5">
          Technology Services
        </Link>
        <div className=" text-base font-semibold leading-5 self-center whitespace-nowrap mt-8">
          Quick links
        </div>
        <Link href="/about-us" className=" text-center text-sm leading-4 mt-5">
          About us
        </Link>
        <Link href = "/careers" className=" text-center text-sm leading-4 mt-1.5">
          Careers
        </Link>
        <Link href = "/contact-us" className=" text-center text-sm leading-4 mt-1.5">
          Contact us
        </Link>
        <div className="items-stretch self-center flex w-[70px] max-w-full justify-between gap-5 mt-11 max-md:mt-10">
          <a href = "mailto:info@pactroninc.com" target="_blank" rel = "norefferer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae7bf17b53313f575caf6951f723a9061b202bb1d5b6d7c3db721924dc174d3c?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
          </a>
          <a href = "https://in.linkedin.com/company/pactron" target = "_blank" rel = "norefferer">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1294fc96ca5d550a298a85945291ff9039925ce1137b60365375f15378043cc1?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
          </a>
        </div>
        <div className="text-zinc-600 text-sm leading-5 self-stretch whitespace-nowrap mt-9">
          © 2023 Pactron Inc · All rights reserved
        </div>
        <div className="text-zinc-600 text-sm leading-5 self-center whitespace-nowrap mt-5">
          Privacy Policy
        </div>
      </div>
    </div>
    </footer>
    </>
  );
}

export default Footer