"use client"
import React, { useEffect, useRef } from "react";
import {useInView} from "framer-motion"
import { useServices } from "../../../zustand/store";
import LeftToRight from "../../../shared/animations/LeftToRight";
function ProductDevelopment(props) {

    const productSectionRef  = useRef()
    const isInViewProduct = useInView(productSectionRef)
    const change_systemsolutions = useServices(state => state.change_systemsolutions)
    
    useEffect(() => {
        if(isInViewProduct){
            change_systemsolutions("product-development")
        }
    },[isInViewProduct])

    return (
        <section className=" " id = "product-development">
        
        <div className="justify-center items-stretch center-section w-full md:hidden bg-white flex flex-col px-8 max-md:px-5">
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c77276c58f2df520b18b7b35989f5033a76179cea8f9f098f591dd5f6a60da47?apiKey=cb09127259af43f49535d3079eb90155&"
            className="aspect-[0.97] object-contain object-center w-full overflow-hidden"
            alt="Product Development"
        />
        <h2 className="text-stone-900 text-2xl font-bold leading-7 mt-10">
            Product Development
        </h2>
        <div className="text-stone-900 text-base leading-6 mt-3 mb-5">
            Pactron, in conjunction with its clients covers the entire product
            development lifecycle. Pactron combines state of the art technology with
            engineering expertise, structured processes, and deep domain experience
            to deliver innovative products. Our technical insight comes from years
            of market and customer understanding. Our integrated approach keeps
            critical disciplines in full communication, minimizing cost and valuable
            time, while moving through the product lifecycle
        </div>
        </div>

        {/* Desktop */}
        <section className="py-32 bg-[url(https://res.cloudinary.com/dosjh2min/image/upload/v1704287762/pactron/tech-bg_gvwvzv.jpg)] bg-cover bg-no-repeat bg-center ">
        <div className="center-section">
        <article className="w-6/12">
        <h2 className="text-3xl font-bold text-white" ref = {productSectionRef}>Product Development</h2>
        
        <LeftToRight isInView={isInViewProduct} classes="w-10/12">
        <div className="text-white">
          <p className="text-base font-normal  mt-5">
            Pactron, in conjunction with its clients covers the entire product
            development lifecycle from initial concept to production.
          </p>
          <p className="text-base font-normal  mt-5">
            Pactron combines state of the art technology with engineering
            expertise, structured processes, and deep domain experience to
            deliver innovative products.
          </p>
          <p className="text-base font-normal  mt-5">
            Our technical insight comes from years of market and customer
            understanding. Our integrated approach keeps critical disciplines in
            full communication, minimizing cost and valuable time, while moving
            through the product lifecycle
          </p>
        </div>
        </LeftToRight>
        </article>
        </div>
      </section>

    </section>
    );
}

export default ProductDevelopment;


