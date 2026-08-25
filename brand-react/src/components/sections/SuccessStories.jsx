import { successStoriesData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function SuccessStories() {
  return (
    <section id="success-stories" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <ScrollReveal direction="right" className="max-w-2xl space-y-6">
          <SectionEyebrow text={successStoriesData.eyebrow} />
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
            {successStoriesData.heading} <span className="italic text-forest">{successStoriesData.headingItalic}</span>
          </h2>
          <p className="text-lg text-text-muted">{successStoriesData.subtext}</p>
        </ScrollReveal>
        
        <ScrollReveal direction="left">
          <Button href={successStoriesData.cta.href} variant="outline" className="text-charcoal border-border hover:bg-forest hover:text-ivory hover:border-forest">
            {successStoriesData.cta.label}
          </Button>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {successStoriesData.items.map((story, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={story.id}>
            <div className="group relative aspect-[3/4] bg-sage rounded-[32px] overflow-hidden flex flex-col justify-end p-8 shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer">
              {/* Optional Placeholder for a background image */}
              <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/40 transition-colors duration-500 mix-blend-multiply"></div>
              
              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-10 bg-ivory rounded-full flex items-center justify-center mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-forest"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
                <h3 className="text-2xl font-serif text-ivory mb-2 leading-tight">{story.title}</h3>
                <p className="text-gold font-medium text-sm tracking-wide">{story.role}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
