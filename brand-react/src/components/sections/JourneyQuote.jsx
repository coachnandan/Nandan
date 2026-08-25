import { journeyQuoteData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';

export default function JourneyQuote() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-5xl mx-auto text-center border-t border-b border-border/50 my-16">
      <ScrollReveal direction="up">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-forest leading-tight italic mb-8">
          {journeyQuoteData.quote}
        </h2>
        <p className="text-sm font-mono uppercase tracking-widest text-gold">
          — {journeyQuoteData.author}
        </p>
      </ScrollReveal>
    </section>
  );
}
