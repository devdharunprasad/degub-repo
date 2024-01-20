import React from "react";

function DesignCapabilityHighlights(props) {
    return (<section>
        <div className="justify-center md:hidden items-stretch bg-slate-50 flex flex-col px-9 py-10 mx-auto w-full">
        <header className="text-stone-900 text-center text-3xl font-bold leading-10">
            Design Capability highlights
        </header>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-6 px-8 py-4 rounded-md">
            Wide experience in Package/Substrate layout design using MLO/MLC process.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            Ability to interpret electrical characterization and requirement for power distribution networks.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            Delivered 60+ MLO/MLC error free Substrate / Package designs for various manufacturer specifications.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            Insertion and Return loss Optimization for High-Speed Signals by minimizing impedance discontinuities, reducing trace lengths etc.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            A one stop solution from design input to Gerber generation and verification.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            Proficient in analyzing customer data, identifying solutions to enhance design quality, and ensuring timely delivery of designs.
        </div>
        <div className="text-slate-50 text-center text-base font-semibold leading-6 justify-center items-stretch bg-[#55A09F] mt-4 px-8 py-4 rounded-md">
            Ability to do integrated Power Distribution Network analysis ensuring a clean Power across the PDN.
        </div>
        </div>

        {/* Desktop */}

        <div className="bg-white md:block hidden flex-col justify-center items-center px-16 py-12 max-md:px-5 center-section w-full mx-auto">
        <header className="header text-neutral-950 text-center text-2xl  font-bold leading-10 max-w-[763px] max-md:max-w-full mx-auto">
            Design Capability highlights
        </header>
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-5">
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] px-7 py-8 rounded-lg max-md:px-5">
                    Wide experience in Package/Substrate layout design using MLO/MLC process.
                </div>
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] mt-5 px-7 py-8 rounded-lg max-md:px-5">
                    Ability to interpret electrical characterization and requirement for power distribution networks.
                </div>
                </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col">
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F]  px-7 py-4 rounded-lg max-md:px-5">
                    Delivered 60+ MLO/MLC error free Substrate / Package designs for various manufacturer specifications.
                </div>
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] mt-5 px-7 py-1.5 rounded-lg max-md:px-5">
                    Insertion and Return loss Optimization for High-Speed Signals by minimizing impedance discontinuities, reducing trace lengths etc.,
                </div>
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] mt-5 px-7 py-8 rounded-lg max-md:px-5">
                    A one stop solution from design input to Gerber generation and verification.
                </div>
                </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex flex-col max-md:mt-5">
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] px-7 py-4 rounded-lg max-md:px-5">
                    Proficient in analyzing customer data, identifying solutions to enhance design quality, and ensuring timely delivery of designs.
                </div>
                <div className="text-white text-center text-lg font-semibold leading-7 justify-center items-stretch bg-[#55A09F] mt-5 px-7 py-5 rounded-lg max-md:px-5">
                    Ability to do integrated Power Distribution Network analysis ensuring a clean Power across the PDN.
                </div>
                </div>
                </div>
            </div>
        </div>
        </div>

        </section>
    );
}

export default DesignCapabilityHighlights;