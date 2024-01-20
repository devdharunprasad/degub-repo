import React from "react";

function ContactForm(props) {
    return (
        <section className=" bg-slate-50 " id = "form">
        <div className="justify-center items-center bg-slate-50 flex flex-col px-5 py-10 md:hidden">
        <header className="text-stone-900 text-center text-3xl font-bold leading-10 self-center w-[291px] max-w-[291px]">
            Get in Touch
        </header>
        <p className="text-gray-800 text-center text-xs self-center w-[252px] max-w-[252px] mt-3">
            Talk to a member of our Sales team around the world, We will help you in addressing business needs.
        </p>
        <div className="items-stretch self-center flex ml-0 justify-between gap-5">
            <div className="items-center flex grow basis-[0%] flex-col pt-2.5 pb-1 px-2.5 ">
            <img
                loading="lazy"
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635803/pactron/system-regular-59-email_fe44fz.gif"
                className="aspect-square object-contain object-center w-[30px] mx-auto overflow-hidden max-w-full"
                alt="Email Icon"
            />
            <a
                href="mailto:info@pactron.com"
                className="text-teal-600 text-xs leading-5 underline self-stretch whitespace-nowrap mt-3"
            >
                info@pactron.com
            </a>
            </div>
            <div className="items-center mx-auto bg-slate-50 flex grow basis-[0%] flex-col px-2.5 py-2">
            <img
                loading="lazy"
                src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635803/pactron/system-regular-58-call-phone_sifpdt.gif"
                className="aspect-square object-contain object-center w-[30px] overflow-hidden max-w-full"
                alt="Phone Icon"
            />
            <a
                href="tel:001-408-329-5500"
                className="text-teal-600 text-xs self-stretch whitespace-nowrap mt-3"
            >
                001-408-329-5500
            </a>
            </div>
        </div>
        <label htmlFor="full-name" className="self-stretch text-black text-base leading-6 mt-6">
            Full Name
        </label>
        <input
            type="text"
            id="full-name"
            className="text-neutral-600 text-base leading-6 items-stretch bg-gray-100 self-stretch justify-center mt-2 px-3.5 py-3 rounded outline-none"
            placeholder="Enter your Name"
        />
        <label htmlFor="email" className="self-stretch text-black text-base leading-6 mt-6">
            Email Address
        </label>
        <input
            type="email"
            id="email"
            className="text-neutral-600 text-base leading-6 items-stretch bg-gray-100 self-stretch justify-center mt-2 px-3.5 py-3 rounded outline-none"
            placeholder="Enter your Email"
        />
        <label htmlFor="message" className="self-stretch text-black text-base leading-6 mt-6">
            Message
        </label>
        
            <textarea
            id="message"
            className="w-full h-full resize-none outline-none text-neutral-600 text-base leading-6 items-stretch bg-gray-100 self-stretch mt-2 pt-3 pb-28 px-3.5 rounded"
            placeholder="Type your message..."
            
            ></textarea>
        
        <button
            className="text-slate-200 text-base leading-6 whitespace-nowrap justify-center items-center self-stretch bg-teal-600 mt-6 px-16 py-3 rounded-sm border-[0.948px] border-solid border-teal-600"
            type="submit"
        >
            Button
        </button>
        </div>

        {/* Desktop */}  

            <form className="justify-center items-center bg-slate-50 hidden md:block flex-col px-16 py-12 max-md:px-5 center-section mx-auto w-full">
    <div className="w-full max-w-[1162px] my-5 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
            <header className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Get in Touch
            </header>
            <p className="text-black text-lg leading-6 mt-4 max-md:max-w-full">
                Talk to a member of our Sales team around the world, <br /> We will help you in addressing business needs.
            </p>
            <div className="items-stretch flex justify-between gap-5 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="flex grow basis-[0%] flex-col pl-5 pt-3 pb-1 items-start">
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635803/pactron/system-regular-59-email_fe44fz.gif"
                    className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
                    alt="Email Icon"
                />
                <a href="mailto:info@pactron.com" className="text-teal-600 text-base leading-6 underline whitespace-nowrap mt-4">
                    info@pactron.com
                </a>
                </div>
                <div className="bg-slate-50 flex grow basis-[0%] flex-col pl-5 pt-3 pb-1.5 items-start">
                <img
                    loading="lazy"
                    src="https://res.cloudinary.com/dosjh2min/image/upload/v1705635803/pactron/system-regular-58-call-phone_sifpdt.gif"
                    className="aspect-square object-contain object-center w-10 overflow-hidden max-w-full"
                    alt="Phone Icon"
                />
                <a href="tel:001-408-329-5500" className="text-teal-600 text-base whitespace-nowrap mt-4">
                    001-408-329-5500
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
            <label htmlFor="name" className="text-black text-base leading-6 max-md:max-w-full">
                Name
            </label>
            <input
                type="text"
                id="name"
                className=" text-base leading-6 items-stretch outline-none bg-gray-100 justify-center mt-2 p-3 rounded max-md:max-w-full"
                placeholder="Enter your Name"
                aria-label="Name"
            />
            <label htmlFor="email" className="text-black text-base leading-6 mt-6 max-md:max-w-full">
                Email
            </label>
            <input
                type="email"
                id="email"
                className=" text-base leading-6 items-stretch outline-none bg-gray-100 justify-center mt-2 p-3 rounded max-md:max-w-full"
                placeholder="Enter your Email"
                aria-label="Email"
            />
            <label htmlFor="message" className="text-black text-base leading-6 mt-6 max-md:max-w-full">
                Message
            </label>
            <div className="text-base leading-6 items-stretch bg-gray-100 mt-2 pt-3 px-3 rounded max-md:max-w-full max-md:pb-10">
                <textarea
                id="message"
                className="w-full outline-none resize-none bg-transparent border-none h-[200px]"
                placeholder="Type your message..."
                aria-label="Message"
                ></textarea>
            </div>
            <button
                type="submit"
                className="text-white text-base leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--b-color-b-1-prm,#2A8887)] bg-teal-600 mt-9 px-16 py-3 rounded-sm border-solid max-md:max-w-full max-md:px-5"
            >
                Submit
            </button>
            </div>
        </div>
        </div>
    </div>
    </form>
    </section>
    );
}

export default ContactForm;