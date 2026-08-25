import Hero from '../components/layout/Hero'
import JourneyIntro from '../components/sections/JourneyIntro'
import JourneyPhilosophy from '../components/sections/JourneyPhilosophy'
import JourneyImpact from '../components/sections/JourneyImpact'
import JourneyPhotoGallery from '../components/sections/JourneyPhotoGallery'
import JourneyQuote from '../components/sections/JourneyQuote'
import CTASection from '../components/sections/CTASection'
import { journeyHeroData, journeyCtaData } from '../data/siteData'

export default function JourneyPage() {
  return (
    <main>
      <Hero data={journeyHeroData} />
      <JourneyIntro />
      <JourneyPhilosophy />
      <JourneyImpact />
      <JourneyPhotoGallery />
      <JourneyQuote />
      <CTASection data={journeyCtaData} />
    </main>
  )
}
