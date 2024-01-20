"use client";

import React, { useEffect, useRef } from "react";
import { useServices } from "../../../zustand/store";
import { useInView } from "framer-motion";
import RightToLeft from "../../../shared/animations/RightToLeft";
import { CheckCircle } from "@phosphor-icons/react";

function SubstrateDesign(props) {
  const substrateRef = useRef();
  const isInView = useInView(substrateRef);
  const change_technologyservices = useServices(
    (state) => state.change_technologyservices
  );
  console.log(isInView);
  useEffect(() => {
    if (isInView) {
      change_technologyservices("subtrate-mlo-mlc-design");
    }
  }, [isInView]);

  return (
    <section className=" " id="subtrate-mlo-mlc-design">
     
      <div className="justify-center items-stretch md:hidden flex flex-col pt-5 pb-12 px-9 ">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6347b6ff04d25249414dd2ed43b5d30bf98ea568e5c155c21ef302a9aa8a5aa7?apiKey=cb09127259af43f49535d3079eb90155&"
          className="aspect-[1.41] object-contain object-center w-full overflow-hidden"
        />
        <h2 className="text-stone-900 text-2xl font-bold leading-7 mt-10">
          Substrate and MLO/MLC Design
        </h2>
        <div className="text-stone-900 text-base leading-6 mt-2 mb-2.5">
          Pactron specializes in package substrate design and optimization,
          including SI/PI analysis, for optimal system performance. We also
          offer Package-PCB fan-out study and ball map analysis to streamline
          routing, and to minimize PCB and package substrate layer count.
          <br />
          <br />
          Pactron also offers MLO/MLC design services for probe card interfaces.
          Our experienced team excels in creating compact designs with high I/O
          count, reduced BGA pitch, optimized ball assignment for high current,
          minimal propagation delay, crosstalk prevention, and meeting impedance
          and IR drop requirements.
        </div>
      </div>

      {/* Desktop */}

      <section className=" overflow-hidden py-24 bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704292762/pactron/bg-image-ts_svlvhg.jpg)] bg-center bg-cover">
        <div className="center-section"               ref={substrateRef}
>
          <RightToLeft isInView={isInView}>
          <div className="w-6/12 ml-auto">
            <h3
              className="text-neutral-950 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full"
            >
              Substrate and MLO/MLC Design
            </h3>
            <div className="text-neutral-950 text-base leading-6 mt-4 max-md:max-w-full">
              At Pactron, we excel in advanced substrate and MLO/MLC design,
              ensuring optimal system performance through specialized SI/PI
              analysis, Package-PCB fan-out optimization, and strategic ball map
              analysis. <br />
              <br />
              Our designs are not only compact with high I/O density but also
              refined for reduced BGA pitch and precise ball assignment,
              addressing high current needs while minimizing delay and
              crosstalk, all within stringent impedance and IR drop standards.
            </div>
            <div>
              <h3 className="mt-10 text-2xl font-bold leading-7 whitespace-nowrap max-md:max-w-full text-primary">
                Design Capability highlights{" "}
              </h3>
              <div className="grid grid-rows-3 grid-cols-1 mt-5">
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Interpret electrical characterization and requirement for
                    power distribution networks.{" "}
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Delivered multiple free Substrate / Package designs for
                    different manufacturer specifications.
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Insertion and Return loss Optimization for High-Speed
                    Signals.
                  </p>
                </div>
                <div className="flex justify-start items-center mt-5 gap-3">
                  <CheckCircle size={32} className=" " />
                  <p className="text-base font-semibold w-10/12">
                    Integrated Power Distribution Network analysis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          </RightToLeft>
        </div>
      </section>
    </section>
  );
}

export default SubstrateDesign;
