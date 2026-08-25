import { consultationBenefitsData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import { UserCircle, Map, Activity, FileText, Star, MessageCircle } from 'lucide-react';

const icons = {
  UserCircle,
  Map,
  Activity,
  FileText,
  Star,
  MessageCircle
};

export default function ConsultationBenefits() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto bg-forest text-ivory rounded-[40px] my-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 bg-cover bg-center pointer-events-none"></div>

      <ScrollReveal direction="up" className="text-center mb-16 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-serif text-ivory">{consultationBenefitsData.heading}</h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
        {consultationBenefitsData.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-ivory/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-colors duration-500 mb-6">
                  {Icon && <Icon size={28} strokeWidth={1.5} />}
                </div>
                <h3 className="text-sm font-medium tracking-wide text-ivory/90">{item.label}</h3>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
