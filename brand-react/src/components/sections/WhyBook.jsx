import { whyBookData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function WhyBook() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Header */}
        <div className="lg:w-1/3 space-y-6">
          <ScrollReveal direction="right">
            <SectionEyebrow text="THE VALUE" />
            <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
              {whyBookData.heading}
            </h2>
            <p className="text-lg text-text-muted mt-6 leading-relaxed max-w-sm">
              {whyBookData.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Right Side: Cards */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyBookData.items.map((item, i) => (
            <ScrollReveal direction="up" delay={i * 0.1} key={i}>
              <div className="bg-sage/10 p-10 rounded-[32px] border border-border h-full hover:bg-sage/20 hover:border-forest/20 transition-all duration-500">
                <span className="text-4xl font-serif text-forest/20 mb-6 block">0{i + 1}</span>
                <h3 className="text-xl font-serif text-charcoal mb-4">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
