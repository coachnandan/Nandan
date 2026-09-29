import JourneyHero from '../components/sections/JourneyHero'
import JourneyIntro from '../components/sections/JourneyIntro'
import JourneyPhilosophy from '../components/sections/JourneyPhilosophy'
import JourneyImpact from '../components/sections/JourneyImpact'
import JourneyPhotoGallery from '../components/sections/JourneyPhotoGallery'
import JourneyQuote from '../components/sections/JourneyQuote'
import CTASection from '../components/sections/CTASection'
import { journeyCtaData } from '../data/siteData'

export default function JourneyPage() {
  return (
    <main>
      <JourneyHero />
      <JourneyIntro />
      <JourneyPhilosophy />
      <JourneyImpact />
      <JourneyPhotoGallery />
      <JourneyQuote />
      <CTASection data={journeyCtaData} />
    </main>
  )
}
