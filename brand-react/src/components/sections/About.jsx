import { aboutData } from '../../data/siteData';
import Button from '../ui/Button';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-ivory">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <ScrollReveal direction="right" className="flex-1 w-full max-w-lg mx-auto relative">
          <div className="aspect-[3/4] relative rounded-3xl overflow-hidden shadow-2xl bg-border flex items-center justify-center">
             <img 
               src={aboutData.image} 
               alt={aboutData.imageAlt} 
               className="w-full h-full object-cover"
               onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<span class="text-charcoal/40 text-lg">Image Placeholder</span>'; }}
             />
          </div>
        </ScrollReveal>
        
        <div className="flex-1 space-y-8">
          <ScrollReveal direction="up" delay={0.1}>
            <SectionEyebrow text={aboutData.eyebrow} />
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
              {aboutData.headingLine1} <br />
              <span className="italic text-forest">{aboutData.headingLine2}</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2} className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
            <p className="font-medium text-charcoal">{aboutData.description}</p>
            {aboutData.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.3}>
            <div className="pt-6 pb-8 border-b border-border/60 mb-8">
              <ul className="space-y-3">
                {aboutData.credentials.map((cred, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm tracking-wide font-medium uppercase text-charcoal/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    {cred}
                  </li>
                ))}
              </ul>
            </div>
            <Button href={aboutData.cta.href}>{aboutData.cta.label}</Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
