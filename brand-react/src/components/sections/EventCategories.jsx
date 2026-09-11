import { eventTypesData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function EventCategories() {
  return (
    <section className="py-16 sm:py-24 px-5 sm:px-6 lg:px-16 max-w-7xl mx-auto bg-sage/30 rounded-[28px] sm:rounded-[40px] my-8 sm:my-12">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-12 sm:mb-20">
        <SectionEyebrow text={eventTypesData.eyebrow} className="justify-center" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {eventTypesData.heading}
        </h2>
        <p className="text-base sm:text-lg text-text-muted">{eventTypesData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {eventTypesData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.1} key={i}>
            <div className="bg-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-border shadow-sm hover:shadow-lg hover:border-forest/30 transition-all duration-500 h-full flex flex-col group">
              <h3 className="text-sm font-mono tracking-widest uppercase text-gold mb-4">{item.title}</h3>
              <h4 className="text-2xl font-serif text-charcoal mb-4">{item.heading}</h4>
              <p className="text-text-muted leading-relaxed mb-8 flex-1 whitespace-pre-line">{item.description}</p>
              <Button href={item.href} variant="outline" size="sm" className="w-fit text-forest border-forest group-hover:bg-forest group-hover:text-white">
                {item.cta}
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
