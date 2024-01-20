import React from "react"
import HeroSection from "./components/hero-section.jsx"
import ProductDevelopment from "./components/product-development.jsx"
import Navbar from "./components/navbar.jsx"
import HardwareProductTransformation from "./components/hardware-product-transformation.jsx"
import DesktopHardwareProduct from "./components/desktop-hardware-product.jsx"
import OurProcesses from "./components/our-processes.jsx"
import DomainSwiperMobile from "./components/domain-swiper-mobile.jsx"
import DesktopDomainSwiper from "./components/desktop-domain-swiper.jsx"
import ComponentSlider from "../../home/component-slider.jsx"
import CtaSection from "./components/cta-section.jsx"
import DesignCapabilitiesHighlights from "./components/design-capabilities-hightlights.jsx"
const SystemSolutionPage = () => {
return (
    <main>
        <HeroSection />
        <Navbar />
        <ProductDevelopment />
        <HardwareProductTransformation />
        {/* <DesktopHardwareProduct /> */}
        {/* <OurProcesses /> */}
         <ComponentSlider/>
         <DesignCapabilitiesHighlights/> 
         <CtaSection/>

    </main>
)
}

export default SystemSolutionPage


