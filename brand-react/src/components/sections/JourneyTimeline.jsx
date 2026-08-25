import { journeyTimelineData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function JourneyTimeline() {
  return (
    <section id="timeline" className="py-24 px-6 lg:px-16 max-w-5xl mx-auto">
      <ScrollReveal direction="up" className="text-center mb-24">
        <SectionEyebrow text="THE EVOLUTION" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
          {journeyTimelineData.heading}
        </h2>
      </ScrollReveal>

      <div className="relative before:absolute before:inset-0 before:ml-6 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-gold/50 before:to-transparent space-y-16">
        {journeyTimelineData.items.map((item, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ivory border-2 border-gold shadow-[0_0_0_4px_rgba(250,248,244,1)] z-10 group-hover:scale-150 group-hover:bg-gold transition-all duration-500"></div>

            {/* Content Card */}
            <ScrollReveal
              direction={i % 2 === 0 ? "right" : "left"}
              className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-4rem)] bg-white p-8 lg:p-10 rounded-3xl border border-border shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <div className="text-3xl font-serif text-forest/20 mb-4">{item.year}</div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed">{item.description}</p>
              {item.image && (
                <div className="mt-6 rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full object-contain max-h-72 hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] bg-sage/10"
                  />
                </div>
              )}
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
