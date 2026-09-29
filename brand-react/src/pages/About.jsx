import AboutStory from '../components/sections/AboutStory'
import Timeline from '../components/sections/Timeline'
import MissionVisionValues from '../components/sections/MissionVisionValues'
import Certifications from '../components/sections/Certifications'
import CTASection from '../components/sections/CTASection'
import { aboutCtaData } from '../data/siteData'

export default function About() {
  return (
    <main>
      {/* Clean Static Page Header */}
      <section className="pt-28 sm:pt-36 pb-10 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center" data-purpose="about-page-header">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium tracking-[0.2em] uppercase text-forest mb-4">
          About Coach Nandan
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight leading-tight mb-4">
          A Journey of <span className="font-serif italic font-normal text-forest">Nandan Kumar Singh</span>
        </h1>
        <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
          From starting in 2008 with ₹15,000/month to qualifying as Executive President's Team Leader — dedicated to empowering health, vitality, and sustainable leadership.
        </p>
      </section>

      <AboutStory />
      <Timeline />
      <MissionVisionValues />
      <Certifications />
      <CTASection data={aboutCtaData} />
    </main>
  )
}
