import React from "react";

function ManufacturingServices(props) {
  return (
    <section className="bg-slate-50 py-32">
    <div className="justify-center items-stretch md:hidden bg-slate-50 flex flex-col px-9 py-10">
      <header className="text-stone-900 text-center text-2xl font-bold leading-8">
        Highlights of Pactron manufacturing services
      </header>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-6 px-10 py-4 rounded-md">
        Automated factory with paperless workflow
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-9 py-4 rounded-md">
        ISO 9001 certified process controls State of the art assembly & rework capability
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
        Flying probe testing
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-12 py-4 rounded-md">
        Dedicated customer program management
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
        Multiple SMT lines for fine pitch board assembly
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-14 py-4 rounded-md">
        Box-build and system integration capability
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
        Advanced ERP system for work-order and supply chain management
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
        Quality control through in-process Automatic Optical Inspection (AOI) 3D X-Ray inspection for BGA device placement
      </section>
      <section className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-11 py-4 rounded-md">
        Reference kit production and order fulfilment
      </section>
    </div>

    {/* Desktop */}

    <div className="center-section mx-auto w-full bg-slate-50 hidden md:block flex-col justify-center items-center px-16 py-12 max-md:px-5">
      <header className="text-neutral-950 text-center text-3xl font-bold leading-10 max-w-[763px] max-md:max-w-full mx-auto center-section">
        Highlights of Pactron manufacturing services
      </header>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-11 rounded-lg max-md:px-5"
                aria-label="Automated factory with paperless workflow"
              >
                Automated factory with paperless workflow
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-8 rounded-lg max-md:px-5 mt-5"
                aria-label="ISO 9001 certified process controls State of the art assembly & rework capability"
              >
                ISO 9001 certified process controls State of the art assembly & rework capability
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-14 rounded-lg max-md:px-5 mt-5"
                aria-label="Flying probe testing"
              >
                Flying probe testing
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-14 py-11 rounded-lg max-md:px-5"
                aria-label="Dedicated customer program management"
              >
                Dedicated customer program management
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-5 px-10 py-11 rounded-lg max-md:px-5"
                aria-label="Multiple SMT lines for fine pitch board assembly"
              >
                Multiple SMT lines for fine pitch board assembly
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-5 px-16 py-11 rounded-lg max-md:pl-7 max-md:pr-6"
                aria-label="Box-build and system integration capability"
              >
                Box-build and system integration capability
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-5">
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-8 rounded-lg max-md:px-5 "
                aria-label="Advanced ERP system for work-order and supply chain management"
              >
                Advanced ERP system for work-order and supply chain management
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-2 rounded-lg max-md:px-5 mt-5"
                aria-label="Quality control through in-process Automatic Optical Inspection (AOI) 3D X-Ray inspection for BGA device placement"
              >
                Quality control through in-process Automatic Optical Inspection (AOI) 3D X-Ray inspection for BGA device placement
              </button>
              <button
                className="text-white text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] px-12 py-11 rounded-lg max-md:px-5 mt-5"
                aria-label="Reference kit production and order fulfilment"
              >
                Reference kit production and order fulfilment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ManufacturingServices;