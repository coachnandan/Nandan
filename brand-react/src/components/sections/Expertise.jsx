import { expertiseData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { Activity, Dumbbell, Heart, Zap, Sparkles, BookOpen, Briefcase, ShieldCheck, Compass } from 'lucide-react';

const icons = { Activity, Dumbbell, Heart, Zap, Sparkles, BookOpen, Briefcase, ShieldCheck };

export default function Expertise() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20">
        <SectionEyebrow text={expertiseData.eyebrow} className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {expertiseData.heading} <span className="italic text-forest">{expertiseData.headingItalic}</span>
        </h2>
        <p className="text-lg text-text-muted">{expertiseData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {expertiseData.items.map((item, i) => {
          const IconComponent = icons[item.icon] || Compass;
          return (
            <ScrollReveal direction="up" delay={i * 0.1} key={item.id}>
              <div className="group relative bg-sage/30 hover:bg-sage/80 transition-colors duration-500 rounded-3xl p-8 h-full border border-border hover:border-forest/20 flex flex-col items-center text-center">
                <div className="text-forest mb-6 bg-ivory w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-charcoal">{item.title}</h3>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
