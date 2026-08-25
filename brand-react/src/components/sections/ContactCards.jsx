import { contactCardsData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import { Mail, Phone, MapPin } from 'lucide-react';

const icons = {
  Mail,
  Phone,
  MapPin
};

export default function ContactCards() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto -mt-32 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactCardsData.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <ScrollReveal direction="up" delay={i * 0.15} key={i}>
              <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[32px] border border-border shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-sage flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-500 mb-6">
                  {Icon && <Icon size={24} strokeWidth={1.5} />}
                </div>
                <h3 className="text-sm font-mono tracking-widest uppercase text-gold mb-4">{card.title}</h3>
                {card.href ? (
                  <a href={card.href} className="text-lg text-charcoal font-serif leading-relaxed whitespace-pre-line hover:text-gold transition-colors">{card.info}</a>
                ) : (
                  <p className="text-lg text-charcoal font-serif leading-relaxed whitespace-pre-line">{card.info}</p>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
