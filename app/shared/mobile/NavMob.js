"use client";
import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import DropDown from "./DropDown";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const links = [{
  name : "Semiconductor Services", link : "/services/semiconductor-services"}, {name : "Systems Solutions", link : "/services/system-solutions"}, {name : "Technology Services", link : "/services/technology-services"}, {name : "About", link : "/about-us"}, {name : "Careers", link : "/careers"}, {name : "Contact", link : "/contact-us"}]

const NavMob = () => {
  const [isClicked, setIsclicked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsclicked(false);
  }, [pathname]);
  return (
    <header
      
      className="block md:hidden bg-black_medium  fixed top-0 left-0 w-screen z-50 bg-[#ECEFEF]"
    >
      <nav className="flex justify-between items-center center-section h-[60px]">
        <Link href="/" className="w-fit">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b10aa54748bf8d069dae7b2f4b84c02748b4b8e3a682eb0c28cd6a7b4f9bc8a?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[3.63] object-contain object-center w-[109px] overflow-hidden shrink-0 max-w-full"
        />
        </Link>
        <Hamburger isClicked={isClicked} setIsclicked={setIsclicked} />
      </nav>
      <DropDown isClicked={isClicked} links={links} />
    </header>
  );
};

export default NavMob;
