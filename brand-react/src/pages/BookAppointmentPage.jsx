import BookingWizard from '../components/sections/BookingWizard/BookingWizard'
import WhyBook from '../components/sections/WhyBook'
import ConsultationBenefits from '../components/sections/ConsultationBenefits'
import CTASection from '../components/sections/CTASection'
import { appointmentCtaData } from '../data/siteData'

export default function BookAppointmentPage() {
  return (
    <main>
      {/* Clean Static Page Header */}
      <section className="pt-28 sm:pt-36 pb-10 px-6 sm:px-10 lg:px-16 max-w-5xl mx-auto text-center" data-purpose="book-appointment-header">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-[11px] font-medium tracking-[0.2em] uppercase text-forest mb-4">
          Executive Consultation
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight leading-tight mb-4">
          Book Your <span className="font-serif italic font-normal text-forest">Session</span>
        </h1>
        <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-2xl mx-auto">
          Elevate your performance through strategic coaching tailored for modern leadership, wellness, and business growth.
        </p>
      </section>

      <div id="booking-wizard">
        <BookingWizard />
      </div>
      <WhyBook />
      <ConsultationBenefits />
      <CTASection data={appointmentCtaData} />
    </main>
  )
}
