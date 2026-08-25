import { journeyPhilosophyData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function JourneyPhilosophy() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto bg-forest text-ivory rounded-[40px] my-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 bg-cover bg-center pointer-events-none"></div>

      <ScrollReveal direction="up" className="text-center mb-20 relative z-10">
        <SectionEyebrow text="CORE PRINCIPLES" className="text-gold justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif mt-6 text-ivory">
          {journeyPhilosophyData.heading}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {journeyPhilosophyData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i}>
            <div className="bg-ivory/10 backdrop-blur-sm p-10 rounded-3xl border border-ivory/20 h-full hover:bg-ivory/20 transition-all duration-500 flex flex-col items-center text-center">
              <div className="w-12 h-px bg-gold mb-8"></div>
              <h3 className="text-2xl font-serif text-ivory mb-6">{item.title}</h3>
              <p className="text-ivory/70 leading-relaxed font-light">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
