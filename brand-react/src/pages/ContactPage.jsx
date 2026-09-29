import ContactCards from '../components/sections/ContactCards'
import SocialSection from '../components/sections/SocialSection'
import ContactForm from '../components/sections/ContactForm'
import MapSection from '../components/sections/MapSection'
import CTASection from '../components/sections/CTASection'
import { contactCtaData } from '../data/siteData'

export default function ContactPage() {
  return (
    <main>
      {/* Clean Static Page Header */}
      <section className="pt-28 sm:pt-36 pb-10 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center" data-purpose="contact-page-header">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium tracking-[0.2em] uppercase text-forest mb-4">
          Get In Touch
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight leading-tight mb-4">
          Let's <span className="font-serif italic font-normal text-forest">Connect</span>
        </h1>
        <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
          Whether you're looking to redefine your leadership style, optimize your team's performance, or start your wellness transformation.
        </p>
      </section>

      <ContactCards />
      <SocialSection />
      <ContactForm />
      <MapSection />
      <CTASection data={contactCtaData} />
    </main>
  )
}
