import { testimonialsData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-sage/30 rounded-3xl my-12">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <SectionEyebrow text={testimonialsData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {testimonialsData.heading} <span className="italic text-forest">{testimonialsData.headingItalic}</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={item.id}>
            <div className="bg-ivory p-10 rounded-3xl h-full flex flex-col shadow-sm border border-border/30 relative">
              <Quote className="text-gold/20 absolute top-8 left-8" size={64} />
              
              <div className="relative z-10 flex-1">
                <p className="text-charcoal/80 leading-relaxed italic mb-8 mt-4 text-lg">"{item.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-forest text-ivory flex items-center justify-center font-serif text-xl">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-medium text-charcoal">{item.name}</h4>
                  <p className="text-xs text-charcoal/60 mt-0.5">{item.role}, {item.location}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
