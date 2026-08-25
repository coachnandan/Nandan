import { bookNandanData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { CheckCircle2 } from 'lucide-react';

export default function BookNandan() {
  return (
    <section id="book" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="bg-forest rounded-[40px] p-8 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 text-ivory relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/pattern.svg')] opacity-5 bg-cover bg-center"></div>
        
        <div className="lg:w-1/2 space-y-6 relative z-10">
          <ScrollReveal direction="right">
            <SectionEyebrow text="BOOKING" className="text-gold" />
            <h2 className="text-4xl lg:text-6xl font-serif leading-tight mt-6 text-ivory">
              {bookNandanData.heading}
            </h2>
            <p className="text-lg text-ivory/70 mt-6 leading-relaxed max-w-md">
              {bookNandanData.subtext}
            </p>
          </ScrollReveal>
        </div>

        <div className="lg:w-1/2 relative z-10 space-y-8">
          {bookNandanData.features.map((feature, i) => (
            <ScrollReveal direction="left" delay={i * 0.15} key={i}>
              <div className="flex gap-6 items-start group">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-ivory/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors duration-500">
                  <CheckCircle2 size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-serif mb-2 text-ivory">{feature.title}</h3>
                  <p className="text-ivory/60 leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
