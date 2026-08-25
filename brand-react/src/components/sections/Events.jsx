import { eventsData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function Events() {
  return (
    <section id="events" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <SectionEyebrow text={eventsData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {eventsData.heading} <span className="italic text-forest">{eventsData.headingItalic}</span>
        </h2>
        <p className="text-lg text-charcoal/70">{eventsData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventsData.items.map((event, i) => (
          <ScrollReveal direction="up" delay={i * 0.1} key={event.id} className="group flex flex-col">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden mb-6 bg-charcoal/10">
              <div className="absolute top-4 left-4 z-10 bg-ivory/90 backdrop-blur-md px-3 py-2 rounded-xl text-center shadow-sm">
                <div className="text-xs font-medium uppercase tracking-widest text-forest">{event.month}</div>
                <div className="text-xl font-serif text-charcoal leading-none mt-1">{event.day}</div>
              </div>
              {event.image ? (
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => { 
                    e.target.style.display = 'none'; 
                    e.target.nextSibling.style.display = 'flex'; 
                  }}
                />
              ) : null}
              <div 
                className="absolute inset-0 w-full h-full bg-charcoal/5 flex items-center justify-center -z-10"
                style={{ display: event.image ? 'none' : 'flex' }}
              >
                <span className="text-charcoal/40 text-sm font-medium tracking-widest uppercase">Event</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <div className="text-xs uppercase tracking-widest text-gold font-medium mb-3">{event.type}</div>
              <h3 className="text-xl font-serif text-charcoal mb-3 leading-snug">{event.title}</h3>
              <p className="text-sm text-charcoal/70 mb-4">{event.location}</p>
              
              <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/60">
                <span className="text-xs font-medium text-forest">{event.spots}</span>
                <a href="#contact" className="text-xs uppercase tracking-widest font-medium text-charcoal hover:text-gold transition-colors">
                  {event.cta} &rarr;
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
