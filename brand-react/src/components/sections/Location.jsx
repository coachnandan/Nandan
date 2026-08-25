import { locationData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function Location() {
  return (
    <section id="location" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-ivory">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1 space-y-8 w-full">
          <ScrollReveal direction="right">
            <SectionEyebrow text={locationData.eyebrow} />
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
              {locationData.heading} <span className="italic text-forest">{locationData.headingItalic}</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.1} className="text-lg text-text-muted leading-relaxed">
            <p>{locationData.description}</p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2} className="bg-sage/40 p-8 rounded-3xl border border-border mt-8">
            <h3 className="text-sm font-medium uppercase tracking-widest text-gold mb-4">Address</h3>
            <div className="space-y-1 mb-8 text-charcoal leading-relaxed">
              {locationData.address.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
            <h3 className="text-sm font-medium uppercase tracking-widest text-gold mb-4">Phone</h3>
            <a href={`tel:${locationData.phone.replace(/\s+/g, '')}`} className="text-charcoal text-xl font-serif hover:text-gold transition-colors inline-block">{locationData.phone}</a>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="left" className="flex-1 w-full max-w-lg mx-auto relative">
          <div className="aspect-square relative rounded-[40px] overflow-hidden shadow-xl border border-border bg-sage/20 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-[32px] overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=anandam%20wellness%20center&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.9)' }} 
                allowFullScreen="" 
                loading="lazy"
                title="Anandam Wellness Center Location"
              ></iframe>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
