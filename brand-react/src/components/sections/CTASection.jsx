import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function CTASection({ data }) {
  if (!data) return null;

  return (
    <section id="contact" className="py-32 px-6 lg:px-16 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-sage rounded-full opacity-30 blur-[100px] -z-10"></div>
      
      <ScrollReveal direction="up" className="max-w-3xl mx-auto">
        <p className="text-gold font-mono text-sm uppercase tracking-widest mb-6">{data.eyebrow}</p>
        <h2 className="text-5xl lg:text-7xl font-serif text-charcoal leading-[1.1] mb-8">
          {data.headingLine1} <br />
          <span className="italic text-forest">{data.headingLine2}</span>
        </h2>
        <p className="text-xl text-charcoal/70 mb-12 max-w-xl mx-auto">
          {data.subtext}
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" href={data.cta.href}>{data.cta.label}</Button>
          {data.secondaryCta && (
            <Button variant="ghost" size="lg" href={data.secondaryCta.href}>{data.secondaryCta.label}</Button>
          )}
        </div>
      </ScrollReveal>
    </section>
  );
}
