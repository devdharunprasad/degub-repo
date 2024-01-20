"use client"

import React, { useRef } from "react";

import LeftToRight from "../../shared/animations/LeftToRight"
import RightToLeft from "../../shared/animations/RightToLeft"

import {Tilt} from "react-tilt"
import { useInView } from "framer-motion";
 const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            15,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          false,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function AboutHeroSection(props) {

    const sectionRef = useRef()
    const isInView = useInView(sectionRef)

    return (
        <section className="bg-zinc-200 bg-fixed overflow-hidden">
        <div className="justify-center items-stretch mx-auto w-full md:hidden bg-zinc-200 flex flex-col pt-20 pb-12 px-5">
        <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f77ea1f0a18b6098bd30392f6b130371f93e027c49f6a6957fe6d31130313613?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.4] object-contain object-center w-full overflow-hidden" />
        <header className="text-stone-900 text-3xl cener-section font-bold leading-10 mt-10 mb-5 mx-auto">Bringing your ideas from mind to market</header>
        </div>
        {/* Desktop */}
        <div  ref = {sectionRef} className="justify-center items-center hidden md:block bg-zinc-200  flex-col px-16 py-32 max-md:px-5 w-full mx-auto center-section">
        <div className="w-full max-w-[1114px] my-10 max-md:max-w-full max-md:my-10">
            <div className="gap-5 flex justify-center ">
            <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                <h1 className="text-neutral-950 text-4xl font-bold leading-[125%] my-auto w-[460px] ">
                <LeftToRight isInView={isInView}>
                Bringing your ideas from mind to market
                </LeftToRight>
                </h1>
            </div>
            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
               <Tilt options = {defaultOptions}>
                <RightToLeft isInView={isInView}>
               <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c12f890f76f408f964fe90d11db6a3d69ee0f52f6fbe2a662b49e61af831e5cf?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.4] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-3.5"
                alt="Image description"
                />
                </RightToLeft>
               </Tilt>
             
            </div>
            </div>
        </div>
        </div>
        </section>
    );
}

export default AboutHeroSection;