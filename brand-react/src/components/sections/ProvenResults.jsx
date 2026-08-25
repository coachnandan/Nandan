import { provenResultsData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function ProvenResults() {
  return (
    <section id="success-stories" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <ScrollReveal direction="right" className="max-w-2xl space-y-6">
          <SectionEyebrow text={provenResultsData.eyebrow} />
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
            {provenResultsData.heading} <span className="italic text-forest">{provenResultsData.headingItalic}</span>
          </h2>
          <p className="text-lg text-text-muted">{provenResultsData.subtext}</p>
        </ScrollReveal>
        
        <ScrollReveal direction="left">
          <Button href={provenResultsData.cta.href} variant="outline" className="text-charcoal border-border hover:bg-forest hover:text-ivory hover:border-forest">
            {provenResultsData.cta.label}
          </Button>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {provenResultsData.items.map((story, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={story.id}>
            <div className="bg-white border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-500 rounded-3xl p-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-8">
                <div className="text-gold font-mono text-sm uppercase tracking-widest">{story.role}</div>
                {story.stat && (
                  <div className="text-right">
                    <div className="text-3xl font-serif text-forest leading-none mb-1">{story.stat}</div>
                    <div className="text-xs text-text-muted uppercase tracking-widest">{story.label}</div>
                  </div>
                )}
              </div>
              <h3 className="text-3xl font-serif text-charcoal mb-6">{story.title}</h3>
              <p className="text-charcoal/70 leading-relaxed flex-1 mb-8">{story.description}</p>
              <Button href="#success-stories" variant="outline" className="w-fit text-forest border-forest hover:bg-forest hover:text-ivory">
                {story.button}
              </Button>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
