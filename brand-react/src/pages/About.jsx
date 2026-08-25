import Hero from '../components/layout/Hero'
import AboutStory from '../components/sections/AboutStory'
import Timeline from '../components/sections/Timeline'
import MissionVisionValues from '../components/sections/MissionVisionValues'
import Certifications from '../components/sections/Certifications'
import CTASection from '../components/sections/CTASection'
import { aboutHeroData, aboutCtaData } from '../data/siteData'

export default function About() {
  return (
    <main>
      <Hero data={aboutHeroData} />
      <AboutStory />
      <Timeline />
      <MissionVisionValues />
      <Certifications />
      <CTASection data={aboutCtaData} />
    </main>
  )
}
