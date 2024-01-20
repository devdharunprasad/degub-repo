"use client";
import React, { useEffect, useState } from "react";
import { CaretRight } from "@phosphor-icons/react";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, useInView } from "framer-motion";

const SemiconductorServices = (props) => {
  const [frames, setFrames] = useState();
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const [imageCache, setImageCache] = useState([]);
  const imageRef = useRef(null);

  const totalImages = 139;


  // /images/service_section_gv001_0045070${index.toString().padStart(3,"0")}.png`;
  // https://res.cloudinary.com/dosjh2min/image/upload/pactron/seq/image-40.png
  // const imagePath = (index) => `/images/service_section_gv001_0045070${index.toString().padStart(3, "0")}.png`;
  const imagePath = (index) =>
    `/images/service_section_gv001_0045070${index
      .toString()
      .padStart(3, "0")}.png`;

        // Preloading function
  const preloadImages = () => {
    let loadedImages = []
    let imagesLoaded = 0;
    for (let i = 1; i <= totalImages; i++) {
      const img = new Image();
      img.src = imagePath(i);
      img.onload = () => {
        imagesLoaded++;
        loadedImages.push(img)
        if (loadedImages.length === totalImages) {
          setImageCache(loadedImages);
          setImagesPreloaded(true);
        }
      };
    }
  };


  useEffect(() => {
    preloadImages();

    gsap.registerPlugin(ScrollTrigger);
    
    const animation = gsap.to({}, {
      scrollTrigger: {
        trigger: ".image-sequence-container",
        // ... rest of your ScrollTrigger settings
        start: "50% 50%",
        end: "+=5000",
        scrub: 1,
        pin: ".image-sequence-container",
        // markers : true,
        anticipatePin: true,
        onUpdate: (self) => {
          if (imagesPreloaded && imageRef.current) {
            const currentImage = Math.min(
              totalImages,
              Math.ceil(self.progress * totalImages)
            );
            setFrames(currentImage);
            imageRef.current.src = imagePath(currentImage);
          }
        },
      },
    });

    return () => {
      if (animation) {
        animation.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [imagesPreloaded]); 

    // useInView
    const headingRef = useRef()
    const isInView = useInView(headingRef, {once : true})
  
    if(!imagesPreloaded){
      <div>Loading...</div>
    }

  return (
    <section className="image-sequence-container" id = "service-section">
      <div className="hidden md:block center-section  w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <h1
          className={`text-neutral-950 text-center transition-all duration-500 text-4xl font-bold leading-[50px] max-w-[642px] max-md:max-w-full mt-24 mx-auto`}
          ref ={headingRef}
        >
          Turning intellectual brilliance into real world products
        </h1>

        <section className="flex w-full items-center rounded-lg mt-10 px-20 relative  ">
          <div className="w-full border-black ">
            <div className=" flex ml-24  justify-between items-center gap-8">
              <div className="w-6/12 relative">
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    frames >= 0 && frames < 60 ? `opacity-1 z-200ranslate-x-1/2` : `opacity-0 -translate-x-full z-10`
                  }  transition-all duration-500`}
                >
                  <h2 className="text-neutral-700 text-3xl font-bold leading-10 self-stretch">
                    Semiconductor Services
                  </h2>
                  <p className="text-zinc-700 text-base self-stretch mt-3">
                    By leveraging our semiconductor services, companies can
                    access specialized expertise, state-of-the-art manufacturing
                    capabilities, and comprehensive support to accelerate
                    product development, improve quality, reduce costs, and
                    bring innovative semiconductor solutions to market more
                    efficiently.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/semiconductor-services"
                      className=" text-base font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    frames >= 60 && frames < 110 ? `opacity-1 z-200ranslate-x-1/2` : `opacity-0 -translate-x-full z-10`
                  }  transition-all duration-500`}
                >
                  <h2 className="text-neutral-700 text-3xl font-bold leading-10 self-stretch">
                    Systems Solution
                  </h2>
                  <p className="text-zinc-700 text-base self-stretch mt-3">
                    Pactron collaborates closely with its clients to provide
                    comprehensive coverage of the entire product development
                    lifecycle. By merging cutting-edge technology, engineering
                    excellence, structured processes, and extensive domain
                    knowledge, Pactron is committed to delivering innovative and
                    transformative products.{" "}
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/system-solutions"
                      className=" text-base font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
                <div
                  className={`flex flex-col items-start absolute left-0 top-1/2 transform -translate-y-1/2 ${
                    frames >= 110 ? `opacity-1 z-20 -translate-x-0` : `opacity-0 -translate-x-full z-10`
                  }  transition-all duration-500`}
                >
                  <h2 className="text-neutral-700 text-3xl font-bold leading-10 self-stretch">
                    Technology Services{" "}
                  </h2>
                  <p className="text-zinc-700 text-base self-stretch mt-3">
                    Pactron{`’`}s technology services are tightly integrated with
                    its prototyping validation services. Through its integrated
                    environment, Pactron{`’`}s customers will be able to realize a
                    one-stop solution for their engineering & manufacturing
                    requirements.
                  </p>
                  <div className="items-center flex gap-1.5 mt-4 text-primary">
                    <Link
                      href="/services/technology-services"
                      className=" text-base font-semibold leading-5 tracking-tight underline"
                    >
                      Learn more
                    </Link>
                    <CaretRight size={12} />
                  </div>
                </div>
              </div>
              <img
                ref={imageRef}
                src={imagePath(1)}
                fetchPriority="hight"
                width={500}
                height={500}
                alt="Sequence"
                className="w-7/12 object-contain border-black"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Mobile */}
      <div className="bg-zinc-200 block md:hidden">
        <div className=" center-section flex md:hidden w-full flex-col pl-9 pr-5 pt-9 pb-5 items-start max-md:pl-5">
          <div className="text-stone-900 text-2xl font-bold w-[291px] ml-3.5 max-md:ml-2.5">
            Turning intellectual brilliance into real world products
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e3b402e5271e0542dbca3b69e32b21043e55084b92d541bcf62d5983f5c62b0?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-[1.06] object-contain object-center w-full overflow-hidden self-stretch mt-16 max-md:mt-10"
          />
          <div className="items-stretch border shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-lg self-stretch flex w-full flex-col px-5 py-5 rounded-lg border-solid border-grayish max-md:pr-5">
            <div className="text-neutral-950 text-xl font-semibold whitespace-nowrap">
              Semiconductor services
            </div>
            <div className="text-zinc-700 text-base mt-2">
              Pactron{`’`}s Semiconductor services are designed to assist
              semiconductor manufacturers, designers, and developers throughout
              the various stages of semiconductor product development,
              production, and testing.
            </div>
            <div className="items-center flex justify-start gap-1 mt-2 pr-6 max-md:pr-5">
              <Link
                href="/services/semiconductor-services"
                className="text-primary text-sm font-semibold leading-5 underline"
              >
                Learn more
              </Link>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db5fd194387e991679b28cdd3deb974f3f388a0c449007a00ee3249911193239?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[1.1] object-contain object-center w-[11px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
        <div className="justify-end items-stretch bg-zinc-200 flex w-full flex-col pl-9 pr-11 py-10 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1cfb6212e37b6555401cc029f6c2aa22256e4ff8fa895a254b51ab3a20c2e374?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-[0.98] object-contain object-center w-full overflow-hidden"
          />
          <div className="items-stretch border shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-[5.333333492279053px] flex w-full flex-col p-5 rounded-lg  border-solid border-grayish">
            <div className="text-neutral-950 text-xl font-semibold">
              Systems Solution
            </div>
            <div className="text-zinc-700 text-base mt-2">
              Pactron collaborates closely with its clients to provide
              comprehensive coverage of the entire product development
              lifecycle. <br />
              <br />
              By merging cutting edge technology, engineering excellence,
              structured processes, and extensive domain knowledge, Pactron is
              committed to delivering innovative and transformative products..
            </div>
            <div className="items-center flex justify-start gap-1 mt-2 pr-5">
              <Link
                href="/services/system-solutions"
                className="text-primary text-sm font-semibold leading-5 underline"
              >
                Learn more
              </Link>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5488c86cb163f0348518e09349f4141d7f397682180729043729001bb67016b?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-[1.1] object-contain object-center w-[11px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
        <div className="items-stretch bg-zinc-200 flex w-full flex-col pl-8 pr-10 py-8 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aec674953b78d6ebda2139afb2a2b1e90366ad7ba3b0ef24ddf63dc9cbc90710?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
            className="aspect-[0.99] object-contain object-center w-full overflow-hidden"
          />
          <div className="items-stretch border shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-[5.333333492279053px] z-[1] flex mt-0 w-full flex-col p-5 rounded-lg  border-solid border-grayish">
            <div className="text-neutral-950 text-xl font-semibold whitespace-nowrap">
              Technology Services
            </div>
            <div className="text-zinc-700 text-base mt-4">
              Pactron collaborates closely with its clients to provide
              comprehensive coverage of the entire product development
              lifecycle. <br />
              <br />
              By merging cutting edge technology, engineering excellence,
              structured processes, and extensive domain knowledge, Pactron is
              committed to delivering innovative and transformative products..
            </div>
            <div className="items-center flex justify-start gap-1 mt-4 pr-5">
              <Link
                href="/services/technology-services"
                className="text-primary text-sm font-semibold leading-5 underline"
              >
                Learn more
              </Link>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/010a50f02f7aa5d2a85e82a2d5762e9796dc57127304b803ca860b9c191a99dd?apiKey=b5e5f0f3194e4a2bbb3631aa331ddab2&"
                className="aspect-square object-contain object-center w-[11px] overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SemiconductorServices;
