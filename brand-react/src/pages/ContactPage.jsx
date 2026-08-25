import Hero from '../components/layout/Hero'
import ContactCards from '../components/sections/ContactCards'
import SocialSection from '../components/sections/SocialSection'
import ContactForm from '../components/sections/ContactForm'
import MapSection from '../components/sections/MapSection'
import CTASection from '../components/sections/CTASection'
import { contactHeroData, contactCtaData } from '../data/siteData'

export default function ContactPage() {
  return (
    <main>
      <Hero data={contactHeroData} />
      <ContactCards />
      <SocialSection />
      <ContactForm />
      <MapSection />
      <CTASection data={contactCtaData} />
    </main>
  )
}
