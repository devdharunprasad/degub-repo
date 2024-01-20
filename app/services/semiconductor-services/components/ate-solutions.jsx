"use client";
import * as React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useServices } from "../../../zustand/store";
import RightToLeft from "../../../shared/animations/RightToLeft";
import { CheckCircle } from "@phosphor-icons/react";

const AteSolutions = (props) => {
  const change_semiconductor = useServices(
    (state) => state.change_semiconductor
  );
  const section_ate = useRef();
  const isInView = useInView(section_ate);
  if (isInView) {
    change_semiconductor("ate-solutions");
  }

  const transitionSection = useRef();
  const isInViewTransition = useInView(transitionSection, { once: true });

  return (
    <section className="bg-green_shade relative overflow-x-hidden" id="ate-solutions-section">
      <div className="justify-center items-stretch center-section flex md:hidden w-full flex-col pt-4 pb-12 px-9 max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/78ec59d938c81cabed08fa3fcfa1198ba64fba689b248c7a256e7050978cb7fa?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
          className="aspect-[1.33] object-contain object-center w-full overflow-hidden"
        />
        <div className="text-stone-900 text-2xl font-bold mt-10">
          ATE Solutions
        </div>
        <div className="text-zinc-700 text-base mt-2 mb-1.5">
          By utilizing Pactron’s ATE board development solutions, semiconductor
          manufacturers can access expertise and resources to design, develop,
          and manufacture high-quality ATE boards that meet the stringent
          requirements of semiconductor testing. <br />
          <br />
          These solutions contribute to reliable, accurate, and efficient
          testing processes, leading to improved quality control, increased
          productivity, and reduced time-to-market for semiconductor
          devices.Pactron Specializes in ATE hardware, Facilitating accurate
          testing and measurement of the Device under tests Performance &
          Functionality .
        </div>
      </div>

      {/* Desktop */}

      <div className="hidden md:block  bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1703739935/Artboard_1_1_davtpv.jpg)] bg-cover bg-center overflow-x-hidden">
        <div className="justify-center items-center flex py-16 bg-gradient-to-r from-transparent via-black/60 to-black/60 w-full flex-col max-md:max-w-full max-md:px-5">
          <div className="w-full max-w-[1107px] mt-12 mb-11 max-md:max-w-full max-md:my-10">
            <div
              className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0"
              ref={section_ate}
            >
              <div
                className={`flex flex-col items-stretch w-[46%] max-md:w-full max-md:ml-0 transition-all duration-1000 delay-300`}
                ref={transitionSection}
              ></div>
              <div className="w-7/12 h-full absolute right-0 top-0 backdrop-blur-sm bottom-0 left-[45%] "/>
              <div className="flex flex-col items-stretch w-[54%] ml-20  text-white ">
                <RightToLeft isInView={isInView}>
                <div className="items-stretch flex grow flex-col pb-4 max-md:max-w-full max-md:mt-10">
                  <div
                    className={` text-2xl font-bold max-md:max-w-full transition-all duration-1000 delay-300`}
                  >
                    ATE Solutions
                  </div>
                  <div
                    className={`text-base mt-3 max-md:max-w-full  transition-all duration-1000 delay-300`}
                  >
                    By utilizing Pactron’s ATE board development solutions,
                    semiconductor manufacturers can access expertise and
                    resources to design, develop, and manufacture high-quality
                    ATE boards that meet the stringent requirements of
                    semiconductor testing.
                    <br />
                    <br />
                    These solutions contribute to reliable, accurate, and
                    efficient testing processes, leading to improved quality
                    control, increased productivity, and reduced time-to-market
                    for semiconductor devices. Pactron Specializes in ATE
                    hardware, Facilitating accurate testing and measurement of
                    the Device under tests Performance & Functionality .
                  </div>
                </div>
                <div className="grid grid-rows-3 grid-cols-2 mt-5">
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Universal Probe Cards                </p>
              </div>
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Device Interface board</p>
              </div>
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Handler Interface boards                </p>
              </div>
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Load boards             </p>
              </div>
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Probe Interface boards                </p>
              </div>
              <div className="flex justify-start items-center mt-5 gap-3">
                <CheckCircle size={32} className="w-2/12 " />
                <p className="text-base font-semibold w-10/12">
                Characterization boards               </p>
              </div>
            </div>
                                </RightToLeft>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AteSolutions;
