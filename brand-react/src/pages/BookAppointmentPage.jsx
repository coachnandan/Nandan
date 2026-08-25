import Hero from '../components/layout/Hero'
import BookingWizard from '../components/sections/BookingWizard/BookingWizard'
import WhyBook from '../components/sections/WhyBook'
import ConsultationBenefits from '../components/sections/ConsultationBenefits'
import CTASection from '../components/sections/CTASection'
import { bookingHeroData, appointmentCtaData } from '../data/siteData'

export default function BookAppointmentPage() {
  return (
    <main>
      <Hero data={bookingHeroData} />
      <div id="booking-wizard">
        <BookingWizard />
      </div>
      <WhyBook />
      <ConsultationBenefits />
      <CTASection data={appointmentCtaData} />
    </main>
  )
}
