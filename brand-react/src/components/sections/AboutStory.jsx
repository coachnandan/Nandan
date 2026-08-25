import { aboutStoryData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function AboutStory() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <ScrollReveal direction="right" className="lg:w-1/3 sticky top-32">
          <SectionEyebrow text="THE JOURNEY" />
          <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
            {aboutStoryData.heading}
          </h2>
        </ScrollReveal>
        
        <div className="lg:w-2/3 space-y-8 text-lg text-text-muted leading-relaxed font-light">
          {aboutStoryData.paragraphs.map((p, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <p>{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
