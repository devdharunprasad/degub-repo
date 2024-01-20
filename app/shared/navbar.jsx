"use client";
import * as React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
const Navbar = (props) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [yValue, setYValue] = useState(`-translate-y-full`);
  const [yInnerValue, setYInnerValue] = useState("-translate-y-full");
  const handleServiceClick = () => {
    setIsDropOpen((prev) => !prev);
  };
  const pathname = usePathname();
console.log(isDropOpen)
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (!e.target.classList.contains("dropdown")) {
        setIsDropOpen(false);
      }
    });
    setIsDropOpen(false);

    document.body.addEventListener("wheel", () => {
      setIsDropOpen(false);
    });
    setYValue(`translate-y-0`);

    setTimeout(() => {
      setYInnerValue(`translate-y-0`);
    }, 1000);
  }, [pathname]);

  console.log(pathname);

  return (
    <nav
      className={`fixed w-screen left-0 right-0 h-fit bg-[#F7F8F9] z-[99] ${yValue} transition-transform duration-700 ease-in-out`}
    >
      <div
        className={`hidden md:flex justify-between items-center center-section w-full gap-5 px-16 py-3.5  max-md:max-w-full max-md:flex-wrap max-md:px-5  transition-all duration-700 ease-in-out ${yInnerValue}`}
      >
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/779c60ad1e6958b866d7be5844e2ea53b308697830932aa14c6579e403ecd2b1?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-[3.61] object-contain object-center w-[159px] overflow-hidden shrink-0 max-w-full"
          />
        </Link>
        <div className="justify-between  items-center gap-2 flex max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div
            className="justify-center  relative items-center self-center flex my-auto cursor-pointer px-4  py-2 gap-3"
            onClick={handleServiceClick}
          >
            <div className="flex gap-2 items-center navlink-animation">
          <p
              
              className={`text-neutral-950 text-sm whitespace-nowrap  relative rounded-sm z-20
               hover:border-b-2 border-b-2 border-transparent`}
            >
              Services
            </p>
            <CaretDown
              size={16}
              className={`${
                isDropOpen ? `rotate-180` : `rotate-0`
              } transition-transform duration-300`}
            />
            </div>
              <div className={`w-[250px] ${isDropOpen ?  `h-34` : `h-0 `} transition-all duration-300 overflow-hidden dropdown z-[100]  bg-white  flex flex-col items-start justify-between absolute right-0 top-[50px] text-sm`}>
                <Link
                  href="/services/semiconductor-services"
                    className={`border-b border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300 hover:delay-0 hover:duration-75 text-black hover:text-white hover:bg-primary`}
                >
                  Semiconductor Services
                </Link>
                <Link
                  href="/services/system-solutions"
                  className={`border-b border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300  hover:delay-0 hover:duration-75 text-black hover:text-white hover:bg-primary`}
                >
                  Systems Solution
                </Link>
                <Link
                  href="/services/technology-services"
                  className={`border-b border-transparent w-full px-6 py-3 ${isDropOpen ? `translate-y-0 opacity-1` : `-translate-y-full opacity-0`} transition-all duration-300  hover:delay-0 hover:duration-75 text-black hover:text-white hover:bg-primary`}
                >
                  Technology Services
                </Link>
              </div>
          </div>
          <Link
              href="/about-us"
              className={`text-neutral-950 text-sm whitespace-nowrap px-4 py- relative py-2 rounded-sm navlink-animation  hover:border-b-2 border-b-2 border-transparent `}
            >
              About
            </Link>
            <Link
              href="/careers"
              className={`text-neutral-950 text-sm whitespace-nowrap px-4 py- relative py-2 rounded-sm navlink-animation navlink-careers z-20 hover:border-b-2 border-b-2 border-transparent `}
            >
              Careers
            </Link>
          
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4330bdec31ea88489816ffeac14750c7ab7b70f9a2063bc2ad38401cf027079?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            width={500}
            height={500}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto mx-5"
          />
          <Link
            href="/contact-us"
            className="text-white text-sm font-semibold whitespace-nowrap justify-center items-stretch border bg-teal-600 self-stretch grow px-6 py-3 rounded-sm border-solid border-teal-600 max-md:px-5"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* Mobile */}
      {/* <div className="justify-center items-stretch bg-gray-100 flex md:hidden w-full flex-col px-4 py-3.5">
      <div className="flex justify-between gap-5 items-start">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b10aa54748bf8d069dae7b2f4b84c02748b4b8e3a682eb0c28cd6a7b4f9bc8a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[3.63] object-contain object-center w-[109px] overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3dd7a85ffcacb1015b42f7f51c426a726432eaa9493998aaa6625c87f18fac?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-square object-contain object-center w-8 overflow-hidden self-stretch shrink-0 max-w-full"
        />
      </div>
    </div> */}
    </nav>
  );
};

export default Navbar;
