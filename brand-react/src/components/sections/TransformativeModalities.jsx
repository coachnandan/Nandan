import { eventTypesData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function TransformativeModalities() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <SectionEyebrow text={eventTypesData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {eventTypesData.heading}
        </h2>
        <p className="text-lg text-text-muted">{eventTypesData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {eventTypesData.items.map((item, index) => (
          <ScrollReveal direction="up" delay={index * 0.15} key={index}>
            <div className="group bg-white border border-border rounded-[32px] p-10 h-full flex flex-col hover:border-forest/30 hover:shadow-xl transition-all duration-500">
              <div className="text-gold font-mono text-sm uppercase tracking-widest mb-6">{item.title}</div>
              <h3 className="text-2xl lg:text-3xl font-serif text-charcoal mb-4 group-hover:text-forest transition-colors duration-300">{item.heading}</h3>
              <p className="text-text-muted leading-relaxed flex-1 mb-10 whitespace-pre-line">{item.description}</p>
              
              <Button href={item.href} variant="outline" className="w-fit text-forest border-forest hover:bg-forest hover:text-ivory">
                {item.cta}
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
