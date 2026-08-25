import Hero from '../components/layout/Hero'
import Expertise from '../components/sections/Expertise'
import CorePillars from '../components/sections/CorePillars'
import SuccessStories from '../components/sections/SuccessStories'
import Testimonials from '../components/sections/Testimonials'
import Events from '../components/sections/Events'
import Location from '../components/sections/Location'
import CTASection from '../components/sections/CTASection'
import { heroData, ctaData } from '../data/siteData'

export default function Home() {
  return (
    <main>
      <Hero data={heroData} />
      <Expertise />
      <CorePillars />
      <SuccessStories />
      <Testimonials />
      <Events />
      <Location />
      <CTASection data={ctaData} />
    </main>
  )
}
