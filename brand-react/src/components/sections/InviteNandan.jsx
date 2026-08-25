import { bookNandanData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';
import { Mic, Users, Award } from 'lucide-react';

export default function InviteNandan() {
  const icons = [Mic, Users, Award];

  return (
    <section id="book" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="bg-charcoal text-ivory rounded-[40px] p-10 lg:p-20 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          
          <ScrollReveal direction="right" className="lg:w-1/3 space-y-6">
            <SectionEyebrow text="KEYNOTE & SPEAKING" className="text-gold/80" />
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
              {bookNandanData.heading}
            </h2>
            <p className="text-lg text-ivory/70 max-w-md">
              {bookNandanData.subtext}
            </p>
          </ScrollReveal>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {bookNandanData.features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <ScrollReveal direction="up" delay={index * 0.15} key={index}>
                  <div className="bg-ivory/5 border border-ivory/10 hover:border-gold/30 hover:bg-ivory/10 transition-all duration-300 rounded-3xl p-8 h-full">
                    <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center text-gold mb-6">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif mb-4">{feature.title}</h3>
                    <p className="text-sm text-ivory/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
