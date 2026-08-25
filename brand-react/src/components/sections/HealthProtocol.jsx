import { healthCoachingProtocolData } from '../../data/siteData';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function HealthProtocol() {
  return (
    <section id="protocol" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto bg-forest text-ivory rounded-[40px] my-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 bg-cover bg-center pointer-events-none"></div>

      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <div className="flex justify-center mb-6">
           <span className="text-gold font-mono text-sm uppercase tracking-widest">{healthCoachingProtocolData.eyebrow}</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-serif mt-6 text-ivory">
          {healthCoachingProtocolData.heading} <span className="italic text-gold">{healthCoachingProtocolData.headingItalic}</span>
        </h2>
        <p className="text-lg text-ivory/70 mt-6">{healthCoachingProtocolData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 mb-16">
        {healthCoachingProtocolData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={i}>
            <div className="bg-ivory/5 backdrop-blur-sm p-8 rounded-3xl border border-ivory/10 h-full hover:bg-ivory/10 transition-all duration-500">
              <div className="w-12 h-px bg-gold mb-6"></div>
              <h3 className="text-xl font-serif text-ivory mb-4">{item.title}</h3>
              <p className="text-ivory/70 leading-relaxed font-light text-sm">{item.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      
      <ScrollReveal direction="up" className="flex justify-center relative z-10">
        <Link to={healthCoachingProtocolData.cta.href} onClick={() => window.scrollTo(0, 0)}>
          <Button variant="champagne" size="md">
            {healthCoachingProtocolData.cta.label}
          </Button>
        </Link>
      </ScrollReveal>
    </section>
  );
}
