import { journeyData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function Journey() {
  return (
    <section id="journey" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-ivory">
      <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <ScrollReveal direction="up">
          <SectionEyebrow text={journeyData.eyebrow} className="justify-center" />
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
            {journeyData.heading} <span className="italic text-forest">{journeyData.headingItalic}</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-1/2"></div>
        
        <div className="space-y-16 lg:space-y-24">
          {journeyData.milestones.map((milestone, i) => {
            const isEven = i % 2 === 0;
            return (
              <div key={milestone.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-6 md:left-1/2 top-2 w-4 h-4 rounded-full bg-ivory border-4 border-gold md:-translate-x-1/2 shadow-sm z-10"></div>
                
                <div className="w-full md:w-1/2 flex flex-col items-start md:items-end pl-16 md:pl-0">
                  {isEven ? (
                    <div className="hidden md:block w-full"></div>
                  ) : (
                    <ScrollReveal direction="right" className="text-left md:text-right w-full md:pr-16">
                      <div className="text-gold font-mono text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-serif text-charcoal mb-4">{milestone.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{milestone.text}</p>
                    </ScrollReveal>
                  )}
                </div>
                
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  {isEven ? (
                    <ScrollReveal direction="left" className="text-left w-full">
                      <div className="text-gold font-mono text-xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-serif text-charcoal mb-4">{milestone.title}</h3>
                      <p className="text-charcoal/70 leading-relaxed">{milestone.text}</p>
                    </ScrollReveal>
                  ) : (
                    <div className="hidden md:block w-full"></div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <ScrollReveal direction="up" className="mt-24 text-center">
        <Button href={journeyData.cta.href} variant="outline" className="text-charcoal border-charcoal/30 hover:bg-forest hover:text-ivory hover:border-forest">
          {journeyData.cta.label}
        </Button>
      </ScrollReveal>
    </section>
  );
}
