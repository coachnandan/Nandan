import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection({ data }) {
  if (!data) return null;

  return (
    <section id="contact" className="py-20 sm:py-32 px-5 sm:px-6 lg:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-sage rounded-full opacity-30 blur-[100px] -z-10"></div>
      
      <ScrollReveal direction="up" className="max-w-3xl mx-auto">
        <p className="text-gold font-mono text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">{data.eyebrow}</p>
        <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif text-charcoal leading-[1.15] sm:leading-[1.1] mb-6 sm:mb-8">
          {data.headingLine1} <br />
          <span className="italic text-forest">{data.headingLine2}</span>
        </h2>
        <p className="text-base sm:text-xl text-charcoal/70 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
          {data.subtext}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <Button size="lg" href={data.cta.href} className="w-full sm:w-auto text-center justify-center">{data.cta.label}</Button>
          {data.secondaryCta && (
            <Button variant="ghost" size="lg" href={data.secondaryCta.href} className="w-full sm:w-auto text-center justify-center">{data.secondaryCta.label}</Button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
