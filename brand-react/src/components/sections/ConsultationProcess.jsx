import { consultationProcessData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function ConsultationProcess() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <ScrollReveal direction="up" className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal">{consultationProcessData.heading}</h2>
      </ScrollReveal>

      <div className="flex flex-col md:flex-row items-start justify-between relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -z-10"></div>
        
        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute top-0 bottom-0 left-12 w-0.5 bg-gradient-to-b from-transparent via-border to-transparent -z-10"></div>

        {consultationProcessData.steps.map((step, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i} className="flex-1 w-full md:w-auto relative mb-12 md:mb-0 last:mb-0">
            <div className="flex md:flex-col items-center md:text-center gap-6 md:gap-8 group">
              
              {/* Step Number Badge */}
              <div className="w-24 h-24 shrink-0 rounded-full bg-white border-4 border-ivory shadow-[0_0_0_1px_rgba(232,227,218,1)] flex items-center justify-center text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-white transition-all duration-500 z-10">
                <span className="font-serif text-3xl">0{i + 1}</span>
              </div>
              
              {/* Content */}
              <div className="flex-1 md:px-4">
                <h3 className="text-xl font-serif text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-[200px] md:mx-auto">{step.description}</p>
              </div>
              
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
