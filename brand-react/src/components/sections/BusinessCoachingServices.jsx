import { businessCoachingServicesData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function BusinessCoachingServices() {
  return (
    <section id="services" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-ivory text-charcoal my-12 relative overflow-hidden">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-20 relative z-10">
        <div className="flex justify-center mb-6">
           <span className="text-forest font-mono text-sm uppercase tracking-widest">{businessCoachingServicesData.eyebrow}</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {businessCoachingServicesData.heading} <span className="italic text-forest">{businessCoachingServicesData.headingItalic}</span>
        </h2>
        <p className="text-lg text-charcoal/70">{businessCoachingServicesData.subtext}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {businessCoachingServicesData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.15} key={item.id}>
            <div className="bg-white border border-border hover:border-forest/30 hover:shadow-xl transition-all duration-500 rounded-3xl p-10 h-full flex flex-col">
              <h3 className="text-2xl font-serif text-charcoal mb-6">{item.title}</h3>
              <p className="text-charcoal/70 leading-relaxed flex-1 mb-8">{item.description}</p>
              <a href={item.href}>
                <Button variant="outline" className="w-fit text-forest border-forest hover:bg-forest hover:text-ivory">
                  {item.cta}
                </Button>
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
