import { motion } from 'framer-motion';
import { eventGalleryData } from '../../data/siteData';
import SectionEyebrow from '../ui/SectionEyebrow';
import ScrollReveal from '../ui/ScrollReveal';

export default function MomentsOfImpact() {
  return (
    <section className="py-32 px-6 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto space-y-6 mb-24">
        <SectionEyebrow text="GALLERY" className="justify-center" />
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {eventGalleryData.heading}
        </h2>
      </ScrollReveal>

      <div className="space-y-16 md:space-y-20 max-w-6xl mx-auto">
        {eventGalleryData.items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 lg:gap-14 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image Section - Compact and well-proportioned */}
              <div className="w-full md:w-5/12 lg:w-5/12 max-w-lg mx-auto md:mx-0">
                <ScrollReveal direction={isEven ? "right" : "left"} className="w-full relative group">
                  <div className="overflow-hidden rounded-[24px] aspect-[4/3] max-h-[340px] bg-sage/20 border border-border/80 shadow-md group-hover:shadow-xl transition-all duration-500 relative">
                    {/* Parallax & Hover Effect */}
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        style={{ objectPosition: item.position || 'center top' }}
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<div class="w-full h-full bg-sage/30 flex items-center justify-center text-forest/40 font-serif italic text-base px-4 text-center">' + item.title + '</div>';
                        }}
                      />
                    </motion.div>
                    {/* Subtle Overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Caption Section */}
              <div className="w-full md:w-7/12 lg:w-7/12">
                <ScrollReveal direction="up" delay={0.15} className="relative max-w-xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    <span className="text-[11px] font-mono tracking-widest text-gold uppercase">
                      {String(index + 1).padStart(2, '0')} / Event Archive
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-serif text-charcoal leading-snug">
                    {item.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-forest mt-4 mb-4"></div>
                  <p className="text-text-muted text-base font-light leading-relaxed">
                    A transformative moment capturing the essence of elite performance and community connection.
                  </p>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
