import { timelineData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function Timeline() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
      <ScrollReveal direction="up" className="text-center space-y-6 mb-24">
        <SectionEyebrow text="TIMELINE" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {timelineData.heading}
        </h2>
      </ScrollReveal>

      <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {timelineData.items.map((item, i) => (
          <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-ivory bg-sage text-forest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_1px_rgba(232,227,218,1)] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-forest group-hover:text-ivory">
              <span className="w-2 h-2 rounded-full bg-current"></span>
            </div>
            
            {/* Card */}
            <ScrollReveal 
              direction={i % 2 === 0 ? "right" : "left"} 
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-3xl shadow-sm border border-border group-hover:shadow-md transition-shadow"
            >
              <div className="text-gold font-mono text-sm mb-2 uppercase tracking-widest">{item.year}</div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{item.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{item.description}</p>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </section>
  );
}
