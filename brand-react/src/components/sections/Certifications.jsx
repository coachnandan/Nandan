import { certificationsData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedNumber from '../ui/AnimatedNumber';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-sage/20 rounded-[40px] my-12">
      <ScrollReveal direction="up" className="text-center space-y-6 mb-20">
        <SectionEyebrow text="RECOGNITION & LEADERSHIP" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {certificationsData.heading}
        </h2>
      </ScrollReveal>

      {/* Stats row */}
      <div className="flex flex-wrap justify-center gap-12 lg:gap-24 mb-24 border-b border-border/60 pb-16">
        {certificationsData.stats.map((stat, i) => (
          <ScrollReveal direction="up" delay={i * 0.1} key={i} className="text-center">
            <div className="text-5xl font-serif text-forest mb-2 flex items-baseline justify-center">
              <AnimatedNumber value={stat.number} />
              <span className="text-gold ml-1">{stat.suffix}</span>
            </div>
            <p className="text-xs tracking-widest uppercase text-text-muted font-medium">{stat.label}</p>
          </ScrollReveal>
        ))}
      </div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certificationsData.items.map((cert, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i}>
            <div className="bg-white p-8 rounded-3xl border border-border flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow h-full">
              <div className="w-16 h-16 bg-sage text-forest rounded-full flex items-center justify-center mb-6">
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-3">{cert.title}</h3>
              <p className="text-sm text-text-muted">{cert.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
