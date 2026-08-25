import { socialSectionData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import { Briefcase, Camera, Video, Globe } from 'lucide-react';

const icons = {
  Briefcase,
  Camera,
  Video,
  Globe
};

export default function SocialSection() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-5xl mx-auto text-center space-y-24">
      
      {/* Quote Block */}
      <ScrollReveal direction="up" className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-6xl font-serif text-forest leading-tight italic mb-8">
          {socialSectionData.quote}
        </h2>
        <p className="text-sm font-mono uppercase tracking-widest text-gold">— Leadership Philosophy</p>
      </ScrollReveal>

      {/* Social Links */}
      <div className="space-y-12">
        <ScrollReveal direction="up">
          <h3 className="text-2xl font-serif text-charcoal">{socialSectionData.heading}</h3>
        </ScrollReveal>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialSectionData.platforms.map((platform, i) => {
            const Icon = icons[platform.icon];
            return (
              <ScrollReveal direction="up" delay={i * 0.1} key={i}>
                <a 
                  href={platform.href}
                  className="flex items-center gap-3 px-6 py-4 rounded-full border border-border bg-white hover:border-forest/30 hover:shadow-md transition-all duration-300 group"
                >
                  <span className="text-forest group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={20} strokeWidth={1.5} />}
                  </span>
                  <span className="text-sm font-medium tracking-wide text-charcoal">{platform.label}</span>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

    </section>
  );
}
