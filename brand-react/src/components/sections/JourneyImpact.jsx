import { journeyImpactData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedNumber from '../ui/AnimatedNumber';

export default function JourneyImpact() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto border-t border-border mt-12">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        <div className="lg:w-1/3">
          <ScrollReveal direction="right">
            <SectionEyebrow text="THE IMPACT" />
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
              {journeyImpactData.heading}
            </h2>
          </ScrollReveal>
        </div>

        <div className="lg:w-2/3 flex flex-wrap gap-12 lg:gap-20">
          {journeyImpactData.stats.map((stat, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <div className="flex flex-col">
                <div className="text-5xl lg:text-6xl font-serif text-forest flex items-baseline">
                  {stat.isText ? (
                    <span>{stat.suffix}</span>
                  ) : (
                    <>
                      <AnimatedNumber value={stat.number} />
                      <span className="text-gold ml-1">{stat.suffix}</span>
                    </>
                  )}
                </div>
                <p className="text-xs tracking-widest uppercase text-text-muted mt-4 font-medium border-t border-border pt-4">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
