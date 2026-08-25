import { mapSectionData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function MapSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Info Column */}
        <div className="lg:w-1/3 space-y-12">
          <ScrollReveal direction="right">
            <h2 className="text-3xl lg:text-4xl font-serif text-charcoal mb-8">
              {mapSectionData.heading}
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-4">Address</h3>
                <p className="text-lg text-text-muted leading-relaxed font-serif">
                  {mapSectionData.address.map((line, i) => (
                    <span key={i}>{line}<br/></span>
                  ))}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-gold mb-4">Working Hours</h3>
                <ul className="space-y-3">
                  {mapSectionData.workingHours.map((schedule, i) => (
                    <li key={i} className="flex justify-between items-center text-text-muted text-sm border-b border-border/50 pb-3 last:border-0">
                      <span className="font-medium">{schedule.days}</span>
                      <span>{schedule.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Map Column */}
        <div className="lg:w-2/3 w-full h-[500px] rounded-[32px] overflow-hidden border border-border shadow-md">
          <ScrollReveal direction="left" className="w-full h-full">
            {/* Embedded Google Map */}
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapSectionData.address.join(', '))}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) opacity(0.9)' }} 
              allowFullScreen="" 
              loading="lazy"
              title="Office Location"
            ></iframe>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
