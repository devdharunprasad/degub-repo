import React from "react"
import TechnologyHeroSection from "./components/hero-section"
import TechnologyNavBar from "./components/navbar"
import SignalIntegrity from "./components/signal-integrity"
import PowerIntegrity from "./components/power-integrity" 
import SubstrateDesign from "./components/substrate-design"
import DesignCapabilityHighlights from "./components/design-capablities-highlights"
import EmbeddedSoftwareDevelopment from "./components/embedded-software-development"
import FPGAComponent from "./components/fpga"
import ArtManufacturing from "./components/art-manufacturing"
import ManufacturingServices from "./components/manufacturing-services"
import CtaSection from "./components/ctaSection"
import PrototypingService from "./components/prototyping-service"

const TechnologyServicesPage = () => {
return (
    <main>
        <TechnologyHeroSection />
        <TechnologyNavBar />
        <SignalIntegrity />
        <SubstrateDesign />
        <EmbeddedSoftwareDevelopment />
        {/* <DesignCapabilityHighlights /> */}
    <PrototypingService/> 
        {/* <FPGAComponent /> */}
        {/* <ArtManufacturing />
        <ManufacturingServices /> */}
        <CtaSection/>
    </main>
)
}

export default TechnologyServicesPage