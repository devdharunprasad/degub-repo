
import React from 'react'
import ContactHeroSection from './components/hero-section'
import ContactForm from "./components/contact-form"
import GetInTouch from "./components/get-in-touch"
import ContactInfo from "./components/contact-info"
import MapSection from "./components/map-section"

const SemiconductorServicesPage = () => {
    return (
        <main>
            <ContactHeroSection />
            <ContactForm />
            {/* <ContactInfo /> */}
            {/* <GetInTouch /> */}
        <MapSection/>
        </main>
    )
}

export default SemiconductorServicesPage

