import Image from "next/image";
import React from "react";

function ContactHeroSection(props) {
    return (
        <section className="relative overflow-hidden bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1703531904/pactron/contact-sectionn-bg_1_atsw8d.jpg)] bg-cover bg-center">
        <section className="bg-grayish lg:hidden">
        <div className=" flex flex-col items-stretch pt-24">
        <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/611cc2017437b07f2dac58b5a51301c0674fa8229155210f5792c3f8ac84e47d?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[0.76] object-contain object-center w-full overflow-hidden"
        />
        </div>
        </section>

        {/* Desktop */}

        <div className=" py-32 hidden lg:flex items-end h-screen">
      <div className="relative flex mb-24 w-full items-end justify-start px-20 max-md:max-w-full max-md:px-5">
       <div className="z-20 text-white center-section">
        <h1 className="relative text-6xl font-bold whitespace-nowrap mt-24 max-md:max-w-full max-md:text-3xl">
          Connect with Pactron
        </h1>
        <p className="relative text-lg max-w-[554px] mt-5 max-md:max-w-full max-md:mb-10">
          Offering world-class semiconductor solutions globally. Your worldwide
          partner in quality and innovation
        </p>
        </div>
        {/* <Image
          width={500}
          height={500}
          
          src = "https://res.cloudinary.com/dosjh2min/image/upload/v1703531904/pactron/contact-sectionn-bg_1_atsw8d.jpg"
          className=" object-cover  w-full absolute top-0 left-0"
        /> */}
      </div>
    </div>
    </section>
    );
}

export default ContactHeroSection;