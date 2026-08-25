import { eventGalleryData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function EventGallery() {
  return (
    <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
      <ScrollReveal direction="up" className="text-center mb-16">
        <SectionEyebrow text="GALLERY" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight mt-6">
          {eventGalleryData.heading}
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {eventGalleryData.items.map((item, i) => (
          <ScrollReveal direction="up" delay={i * 0.05} key={i}>
            <div className="group relative rounded-2xl overflow-hidden bg-sage/20 border border-border">
              <div className="h-[280px] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  style={{ objectPosition: item.position || 'center top' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-forest/30 font-serif italic text-lg px-6 text-center">' + item.title + '</span>';
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <h3 className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
