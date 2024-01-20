import React from "react";

function PowerIntegrity(props) {
    return (
        <section className="bg-slate-50 md:bg-white">
        <div className="items-center bg-slate-50 flex flex-col pt-6 pb-12 px-9  md:hidden">
        <header className="text-neutral-950 text-center text-3xl font-bold self-center whitespace-nowrap">
            Power Integrity
        </header>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-2 px-6 py-8 rounded shadow-xl">
            DC Analysis – IR Drop, Voltage and current distribution analysis
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-3.5 px-6 py-8 rounded shadow-xl">
            Decoupling Scheme Recommendation
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-3 px-6 py-6 rounded shadow-xl">
            Target Z simulation to keep Die+ Package +PCB+ Capacitors impedance within limit
        </section>
        <section className="text-gray-800 text-center text-base justify-center items-stretch bg-slate-50 self-stretch mt-3 mb-1.5 px-6 py-2.5 rounded shadow-xl">
            AC Analysis – PDN Impedance analysis, Target Impedance Optimization, Transient Noise analysis
        </section>
        </div>

        {/* Desktop */}

        <div className="items-center bg-white hidden md:block flex-col justify-center px-16 py-12 max-md:px-5 w-full mx-auto center-section">
        <header className="header text-neutral-950 text-center text-2xl  font-bold max-md:max-w-full">
            Power Integrity
        </header>
        <div className="mt-6 max-md:max-w-full mx-auto center-section ">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-4">
                <div className="text-gray-800 text-center text-lg justify-center items-stretch rounded bg-slate-50 px-8 py-11 max-md:px-5 shadow-xl">
                    DC Analysis – IR Drop, Voltage and current distribution analysis
                </div>
                <div className="text-gray-800 text-center text-lg  justify-center items-stretch rounded bg-slate-50 mt-4 pt-14 pb-14 px-8 max-md:px-5 shadow-xl">
                    Decoupling Scheme Recommendation
                </div>
                </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch flex grow flex-col max-md:mt-4">
                <div className="text-gray-800 text-center text-lg justify-center items-stretch rounded bg-slate-50 px-8 py-11 max-md:px-5 shadow-xl">
                    Target Z simulation to keep Die+ Package +PCB+ Capacitors impedance within limit
                </div>
                <div className="text-gray-800 text-center text-lg justify-center items-stretch rounded bg-slate-50 mt-4 px-8 py-11 max-md:px-5 shadow-xl">
                    AC Analysis – PDN Impedance analysis, Target Impedance Optimization, Transient Noise analysis
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        </section>
    );
}

export default PowerIntegrity;