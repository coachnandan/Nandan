import Hero from '../components/layout/Hero'
import EventCategories from '../components/sections/EventCategories'
import UpcomingEventsList from '../components/sections/UpcomingEventsList'
import EventGallery from '../components/sections/EventGallery'
import BookNandan from '../components/sections/BookNandan'
import BookingForm from '../components/sections/BookingForm'
import CTASection from '../components/sections/CTASection'
import { eventsHeroData, ctaData } from '../data/siteData'

export default function EventsPage() {
  return (
    <main>
      <Hero data={eventsHeroData} />
      <EventCategories />
      <UpcomingEventsList />
      <EventGallery />
      <BookNandan />
      <BookingForm />
      <CTASection data={ctaData} />
    </main>
  )
}
