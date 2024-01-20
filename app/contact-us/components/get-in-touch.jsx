import React from "react";

function GetInTouch(props) {
    return (
        
        <div className="justify-center items-stretch bg-teal-600 flex flex-col px-4 md:px-16 py-9 md:py-28 md:w-full md:mx-auto md:center-section ">
        <header className="text-slate-50 text-center text-4xl md:text-5xl   font-bold self-center ">
            Get in touch with us
        </header>
        <div className="text-slate-50 text-center text-base md:text-xl leading-6 mt-2 md:mt-4 md:w-[550px] md:mx-auto md:center-section">
            We are here to assist you with any inquiries or concerns you may have.
        </div>
        <a href = "#form" className="text-white text-base md:text-lg leading-6 whitespace-nowrap justify-center items-stretch border self-center mt-4 md:mt-8 px-6 py-3 rounded-sm border-solid border-white">
            Contact us
        </a>
        </div>

    );
}

export default GetInTouch;