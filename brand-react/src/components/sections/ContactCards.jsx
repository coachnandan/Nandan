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
    <section className="py-8 sm:py-12 px-6 lg:px-16 max-w-6xl mx-auto relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCardsData.map((card, i) => {
          const Icon = icons[card.icon];
          return (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <div className="bg-white/90 backdrop-blur-md p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-border/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-sage/60 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-300 mb-4">
                  {Icon && <Icon size={20} strokeWidth={1.75} />}
                </div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gold mb-2">{card.title}</h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-base sm:text-lg font-serif text-charcoal hover:text-forest transition-colors font-medium leading-snug"
                  >
                    <span>{card.info}</span>
                    {card.subtext && (
                      <span className="block text-xs sm:text-sm text-text-muted mt-1 font-sans leading-relaxed">
                        {card.subtext}
                      </span>
                    )}
                  </a>
                ) : (
                  <div>
                    <p className="text-base sm:text-lg font-serif text-charcoal font-medium leading-snug">{card.info}</p>
                    {card.subtext && (
                      <p className="text-xs sm:text-sm text-text-muted mt-1 font-sans leading-relaxed">{card.subtext}</p>
                    )}
                  </div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
