import { complianceSectionData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { AlertCircle } from 'lucide-react';

export default function ComplianceSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-sage/20 my-12 rounded-[32px]">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-16">
        <SectionEyebrow text={complianceSectionData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {complianceSectionData.heading} <span className="italic text-forest">{complianceSectionData.headingItalic}</span>
        </h2>
        <p className="text-lg text-charcoal/70">{complianceSectionData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {complianceSectionData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={item.id}>
            <div className="bg-white border border-border/50 shadow-sm rounded-3xl p-8 lg:p-10 h-full flex items-start gap-6">
              <div className="text-forest mt-1 shrink-0">
                <AlertCircle size={28} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-charcoal mb-4">{item.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm lg:text-base">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
