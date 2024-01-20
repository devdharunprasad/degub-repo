"use client"
import React, { useRef } from "react";
import RightToLeft from "../../shared/animations/RightToLeft";
import { useInView } from "framer-motion";

function CareerDevelopment(props) {

    const sectionRef= useRef()
    const isInView = useInView(sectionRef)

    return (
        <section className="overflow-hidden">
        <div className="relative  md:hidden">

        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-[0.5771065182829889] justify-center items-stretch">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/07045b8c9ebe857f6e3c5f0d76f6182baa5721d0a75489a43d1ad5f05f4e96e6?apiKey=cb09127259af43f49535d3079eb90155&"className="absolute h-full w-full   object-cover object-left " />
        <div className="relative mix-blend-overlay bg-teal-600 flex w-full shrink-0 max-w-full h-full flex-col " />
        </div>

        <div  className="bg-gradient-to-t from-teal-600 via-teal-600 flex flex-col justify-center items-stretch absolute inset-0">
        <header className="flex w-full flex-col items-stretch pl-9 pr-11 py-11">
            <h1 className="text-slate-50 text-2xl font-bold leading-10 mt-64">
            Career Development and Growth
            </h1>
            <p className="text-slate-50 text-sm leading-6 mt-3">
            At Pactron, we prioritize the continuous growth and development of our team through enriching mentorship, diverse training, and ample resources, fostering a culture of learning, improvement, and innovation. Join us to contribute to and share in our success.
            </p>
        </header>
        </div>
        </div>
        

        {/* Desktop */}
        <div className="relative hidden md:block ">
                <div className="flex-col overflow-hidden relative flex min-h-[600px] justify-center items-stretch">
        <img
            loading="lazy"
            srcSet="https://res.cloudinary.com/dosjh2min/image/upload/v1704725943/pactron/89_w4ktgl.jpg"className="absolute h-full w-full object-cover object-center inset-0"
            alt="Image"
        />
        <div className="relative mix-blend-overlay bg-primary flex w-full flex-col justify-center items-stretch max-md:max-w-full">
            <div className="flex min-h-[696px] w-full flex-col max-md:max-w-full" />
        </div>
        </div>

        <section  className=" absolute inset-0 flex flex-col justify-center items-stretch ">
        <section className=" flex w-full flex-col justify-center items-stretch max-md:max-w-full">
            <div ref = {sectionRef}  className="flex w-full flex-col justify-center px-16 py-12 items-end max-md:max-w-full max-md:px-5">
            <RightToLeft isInView={isInView}>
            <div className="flex w-[567px]  max-w-full flex-col items-stretch mr-12 mt-32 mb-32 max-md:mr-2.5 max-md:my-10">
                <h1 className="text-white text-4xl font-bold" aria-label="Company slogan">
                Career Development and Growth
                </h1>
                <p className="text-white text-xl mt-6 max-md:max-w-full" aria-label="Company description">
                At Pactron, we prioritize the continuous growth and development of our team through enriching mentorship, diverse training, and ample resources, fostering a culture of learning, improvement, and innovation. Join us to contribute to and share in our success.
                </p>
            </div>
            </RightToLeft>
            </div>
        </section>
        </section>
        </div>
        </section>
    );
}

export default CareerDevelopment;