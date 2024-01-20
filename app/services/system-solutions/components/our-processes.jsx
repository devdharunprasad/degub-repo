"use client"
import * as React from "react";
import { useState } from "react";
import {useInView} from "framer-motion"
import HardwareSlider from "./slider-component";
import { useServices } from "../../../zustand/store";

const options = [
    "Hardware Design",
    "Simulation",
    "FPGA & Embedded SW",
    "Mechanical & Thermal Capabilities",
    "Bring up & Validation",
    "Prototyping"
]


function OurProcesses(props) {
    const [activeOption, setActiveOption] = useState("Hardware Design")
    
    const OurProcessesRef  = React.useRef()
    const isInViewOurProcesses = useInView(OurProcessesRef)
    const change_systemsolutions = useServices(state => state.change_systemsolutions)
    
    console.log(isInViewOurProcesses)
    React.useEffect(() => {
        if(isInViewOurProcesses){
            change_systemsolutions("our-processes")
        }
    },[isInViewOurProcesses])
    
    return (
        <section className="bg-[#F8FDFD] md:bg-[#ECEFEF] py-32" id = "our-process" >
            <div className="center-section lg:flex hidden" ref = {OurProcessesRef}>
                <section className="w-3/12 px-3 border-l border-3 border-gray">
                    <div className="flex flex-col gap-10" >
                        {options.map(option => (
                            <p key={option} onClick={() => setActiveOption(`${option}`)} className={`${activeOption === option ? `border-l-[5px] border-primary  text-xl font-bold` : `text-xl font-normal text-[#8D9D9D]  `} transition-all origin-center duration-300 pl-3 -ml-4 cursor-pointer`}>{option}</p>
                        ))}
                    </div>
                </section>


                {/* First Section */}
                {activeOption === "Hardware Design" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">
                        <div className="flex gap-3">
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">System Architecture and component selection</p>
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Circuit Simulation</p>
                        </div>
                        <div className="flex gap-3">
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Technical hardware design document</p>
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Layout Engineering</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="px-6 py-4 flex justify-center w-[325px] h-[100px]  items-center text-center rounded-lg font-semibold bg-darkgreen">Schematic Engineering</p>
                        </div>
                    </div>
                </section>}

                {/* Second Section */}
                {activeOption === "Simulation" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">

                        <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Stack-up engineering</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Signal Intergrity Analysis</p>
                        <p className="px-6 py-4 flex justify-center w-[325px] h-[100px]  items-center text-center rounded-lg font-semibold bg-darkgreen">Power Intergrity Analysis</p>

                    </div>
                </section>}

                {/* Third Section */}
                {activeOption === "FPGA & Embedded SW" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">

                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">FPGA RLT Design, Validation and Verificaton</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Firmware Design testing - Software Design, Development and testing </p>

                    </div>
                </section>}


                {/* Fourth section */}
                {activeOption === "Mechanical & Thermal Capabilities" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">
                        <div className="flex gap-3">
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Industrial Design</p>
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Structural Analysis</p>
                        </div>
                        <div className="flex gap-3">
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Mechanical Designdocument</p>
                            <p className="px-6 py-4 flex justify-center items-center w-[325px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Thermal Simulation</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <p className="px-6 py-4 flex justify-center w-[325px] h-[100px]  items-center text-center rounded-lg font-semibold bg-darkgreen">MTBF Analysis</p>
                        </div>
                    </div>
                </section>}


                {/* Fifth Section */}
                {activeOption === "Bring up & Validation" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">

                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Hardware Function bringing up</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Electrical Design Validation Test ( EDTV ) </p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Mechanical Design Validaion Test ( MDTV )</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">FCC and UL Safety
                            certifications</p>

                    </div>
                </section>}

                {/* Sixth section */}
                {activeOption === "Prototyping" && <section className="w-7/12 mx-auto self-center">
                    <div className=" flex text-white flex-col gap-5 justify-center items-center">

                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Prototype and Production end - to - end manufacturing</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Production test suite development and optimization </p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Production testing - Flying Probe, ICT and Functional</p>
                        <p className="px-6 py-4 flex justify-center items-center w-[425px] h-[100px] text-center rounded-lg font-semibold bg-darkgreen">Packaging and Shipment</p>

                    </div>
                </section>}
            </div>


            {/* Mobile */}
           <HardwareSlider/>
        </section>
    );
}

export default OurProcesses;
