import { achievementsData } from '../../data/siteData';
import AnimatedNumber from '../ui/AnimatedNumber';
import ScrollReveal from '../ui/ScrollReveal';

export default function Achievements() {
  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto bg-forest rounded-3xl text-ivory my-24 overflow-hidden relative shadow-2xl">
      <div className="absolute inset-0 bg-sage opacity-5 bg-cover bg-center"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between items-center">
        <ScrollReveal direction="right" className="lg:w-1/3">
          <p className="text-gold font-mono text-sm uppercase tracking-widest mb-4">{achievementsData.eyebrow}</p>
          <h2 className="text-4xl font-serif leading-tight">
            {achievementsData.heading} <br />
            <span className="italic text-gold">{achievementsData.headingItalic}</span>
          </h2>
        </ScrollReveal>

        <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 w-full">
          {achievementsData.items.map((item, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <div className="text-4xl md:text-5xl font-serif text-ivory flex items-baseline gap-1 mb-2">
                {item.prefix && <span className="text-2xl">{item.prefix}</span>}
                {item.number && <AnimatedNumber value={item.number} />}
                <span className="text-gold">{item.suffix}</span>
              </div>
              <p className="text-xs uppercase tracking-widest text-ivory/70">{item.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
