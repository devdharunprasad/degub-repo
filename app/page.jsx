
import Image from 'next/image'
import SemiconductorComponent from './home/hero-section'
import AchievementCount from './home/achievement-count'
import SemiconductorServices from './home/semicondory-services'
import AssistedCompanies from './home/assisted-componies'
import ComponentSlider from './home/component-slider'
import EmbraceSection from './home/embrace-section'
import ServicesVideoSection from "./home/services-video-section"
import DesktopDomainSwiper from './services/system-solutions/components/desktop-domain-swiper'
import DomainSwiperMobile from './services/system-solutions/components/domain-swiper-mobile'

export const metadata = {
  title : "Pactron",
  description : "Silicon to Systems"
}

export default function Home() {
  return (
    <main className="">

        <SemiconductorComponent/>
        {/* <AchievementCount/> */}
        {/* <ServicesVideoSection/> */}
        <SemiconductorServices/>
        {/* <ComponentSlider/> */}
        <DomainSwiperMobile />
        <DesktopDomainSwiper/>
        <AssistedCompanies/>
        <EmbraceSection/>
    </main>
  )
}
