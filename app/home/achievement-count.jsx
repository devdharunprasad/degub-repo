"use client";

import { Plus } from "@phosphor-icons/react";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import Wave from "react-wavify";

const percentage = 66;

const AchievementCount = (props) => {
  const [percentage, setpercentage] = useState(0);
  const [years, setYears] = useState(0);
  const [experts, setTeamExperts] = useState(0);
  const [design, setDesign] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setpercentage((prev) => {
        if (prev <= 100) {
          return prev + 5;
        }
      });

      setYears((prev) => {
        if (prev < 20) {
          return prev + 1;
        }
        if (prev === 20) {
          return (prev = 20);
        }
      });

      setTeamExperts((prev) => {
        if (prev < 300) {
          return prev + 20;
        }
        if (prev === 300) {
          return (prev = 300);
        }
      });

      setDesign((prev) => {
        if (prev < 1500) {
          return prev + 60;
        }
        if (prev === 1500) {
          return (prev = 1500);
        }
      });

      setProduct((prev) => {
        if (prev < 1000) {
          return prev + 40;
        }
        if (prev === 1000) {
          return (prev = 1000);
        }
      });
    }, 100);
  }, []);

  console.log(years);

  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { amount: "all" });
  useEffect(() => {
    if (isInView) {
    }
    if (!isInView) {
    }
  }, []);
  return (
    <section className=" py-10 -m-10">
      <div
        ref={sectionRef}
        className="  flex justify-center items-centern w-8/12 mx-auto"
      >
        <div className="w-3/12 mx-auto z-20 flex flex-col justify-center items-center ">
          <div className="w-6/12  relative">
            <CircularProgressbar
              styles={{
                stokeLinecap: "butt",
                path: {
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
              }}
              value={percentage}
              text={years}
            />
            <div className=" p-2 absolute bg-[#fbfdfc] -right-4 top-[28%]  flex justify-center items-center ">
              <Plus size={32} color="#48A686" className="" weight="bold" />
            </div>
          </div>
          <p
            className={`text-center text-base w-10/12  mt-3 mx-auto text-black`}
          >
            years in the semiconductor business
          </p>
        </div>

        <div className="w-3/12 mx-auto z-20 flex flex-col justify-center items-center ">
          <div className="w-6/12  relative">
            <CircularProgressbar
              styles={{
                stokeLinecap: "butt",
                path: {
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
              }}
              value={percentage}
              text={experts}
            />
            <div className=" p-2 absolute bg-[#f3f8f9] -right-4 top-[28%]  flex justify-center items-center ">
              <Plus size={32} color="#48A686" className="" weight="bold" />
            </div>
          </div>
          <p
            className={`text-center text-base w-7/12  mt-3 mx-auto text-black`}
          >
            Growing team of Industry Experts
          </p>
        </div>

        <div className="w-3/12 mx-auto z-20 flex flex-col justify-center items-center ">
          <div className="w-6/12  relative">
            <CircularProgressbar
              styles={{
                stokeLinecap: "butt",
                path: {
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
              }}
              value={percentage}
              text={design}
            />
            <div className=" p-2 absolute bg-[#f3f8f7] -right-4 top-[28%]  flex justify-center items-center ">
              <Plus size={32} color="#48A686" className="" weight="bold" />
            </div>
          </div>
          <p
            className={`text-center text-base w-6/12  mt-3 mx-auto text-black`}
          >
            Designs created every year
          </p>
        </div>

        <div className="w-3/12 mx-auto z-20 flex flex-col justify-center items-center ">
          <div className="w-6/12  relative">
            <CircularProgressbar
              styles={{
                stokeLinecap: "butt",
                path: {
                  transform: "rotate(0.25turn)",
                  transformOrigin: "center center",
                },
              }}
              value={percentage}
              text={product}
            />
            <div className=" p-2 absolute bg-[#f9fbfa] -right-4 top-[28%]  flex justify-center items-center ">
              <Plus size={32} color="#48A686" className="" weight="bold" />
            </div>
          </div>
          <p
            className={`text-center text-base w-6/12  mt-3 mx-auto text-black`}
          >
            New Products Introduced
          </p>
        </div>
      </div>
    </section>
  );
};
export default AchievementCount;
