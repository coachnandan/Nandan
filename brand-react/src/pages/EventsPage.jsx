import EventCategories from '../components/sections/EventCategories'
import UpcomingEventsList from '../components/sections/UpcomingEventsList'
import EventGallery from '../components/sections/EventGallery'
import BookNandan from '../components/sections/BookNandan'
import BookingForm from '../components/sections/BookingForm'
import CTASection from '../components/sections/CTASection'
import { ctaData } from '../data/siteData'

export default function EventsPage() {
  return (
    <main>
      {/* Clean Static Page Header */}
      <section className="pt-28 sm:pt-36 pb-10 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center" data-purpose="events-page-header">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium tracking-[0.2em] uppercase text-forest mb-4">
          Live Experiences &amp; Keynotes
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight leading-tight mb-4">
          Events That <span className="font-serif italic font-normal text-forest">Inspire Growth</span>
        </h1>
        <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
          Bridging the gap between corporate excellence and holistic wellness through transformative live experiences, workshops, and keynote seminars.
        </p>
      </section>

      <EventCategories />
      <UpcomingEventsList />
      <EventGallery />
      <BookNandan />
      <BookingForm />
      <CTASection data={ctaData} />
    </main>
  )
}
