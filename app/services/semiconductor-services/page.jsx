import React from 'react'
import HeroSection from './components/hero-section'
import AteSolutions from './components/ate-solutions'
import TypesHardware from './components/types-hardware'
import ReliabilityComponent from './components/realiability-component'
import ExperienceComponent from './components/experience-component'
import ReferenceComponent from './components/reference-component'
import DesignExpertise from './components/design-expertise'
import FinalTestBoardMobile from './components/final-test-board'
import FinalTestBoardDesktop from './components/FinalTestBoardDesktop'
import SecondaryNav from "./components/secondary-nav"
import CtaSection from "./components/cta-section"
import CharacterizationBoard from "./components/CharacterizationBoard"

const SemiconductorServicesPage = () => {
  return (
    <main>
        <HeroSection/>
        <section className='relative'>
        <SecondaryNav/>
        <AteSolutions/>
        {/* <TypesHardware/> */}
        <FinalTestBoardDesktop/>
        <FinalTestBoardMobile/>
        <ReliabilityComponent/>
        <CharacterizationBoard/>
        {/* <ExperienceComponent/> */}
        <ReferenceComponent/>
        {/* <DesignExpertise/> */}
        <CtaSection/>
        </section>
    </main>
  )
}

export default SemiconductorServicesPage