"use client"
import Image from 'next/image'
import React, { useRef } from 'react'
import LeftToRight from '../../../shared/animations/LeftToRight'
import { useInView } from 'framer-motion'
import RightToLeft from '../../../shared/animations/RightToLeft'
import { useServices } from '../../../zustand/store'

const CharacterizationBoard = () => {

  const change_semiconductor = useServices(
    (state) => state.change_semiconductor
  );

  const section1 = useRef()
  const isInView = useInView(section1)
  if (isInView) {
    change_semiconductor("characterization-boards");
  }


  return (
   
    <section className="bg-green_shade bg-opacity-80 overflow-x-hidden pb-24" id = "characterization-boards">
    <div className="center-section text-black flex items-center justify-center gap-5">
      <LeftToRight isInView={isInView} classes="w-6/12">
      <figure className=" flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dosjh2min/image/upload/v1704284364/pactron/mother-board_ckbq5o.png"
          width={500}
          height={500}
          className="w-7/12"
        />
      </figure>
      </LeftToRight>
      <RightToLeft classes="w-6/12" isInView={isInView}>
      <div className=" "  ref = {section1}>
        <h2 className="text-3xl font-bold ">
        Characterization boards        </h2>
        <p className="text-base font-normal w-[550px] mt-5">
        Hardware environment for characterizing and evaluating the vital functionalities enabling the highest level of flexibility in testing custom applications.
            <br/> <br/>
            Pactron{`’`}s design and engineering experience in the areas such as High Speed, RF, and/or Mixed Signal design often plays a large hand in the successful and expeditious development of its client{`’`}s Reference Boards and Platforms. Pactron{`’`}s Reference Design solution is tightly integrated with its Contract Manufacturing/Prototyping service.
        </p>

    </div>
    </RightToLeft>
    </div>
  </section>
  )
}

export default CharacterizationBoard