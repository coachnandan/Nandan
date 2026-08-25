import { journeyIntroData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function JourneyIntro() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-5xl mx-auto text-center">
      <ScrollReveal direction="up">
        <h2 className="text-5xl lg:text-7xl font-serif text-charcoal leading-tight mb-12">
          {journeyIntroData.heading}
        </h2>
      </ScrollReveal>
      
      <div className="space-y-8 max-w-3xl mx-auto">
        {journeyIntroData.paragraphs.map((p, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i}>
            <p className="text-xl lg:text-2xl text-text-muted font-light leading-relaxed">
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
