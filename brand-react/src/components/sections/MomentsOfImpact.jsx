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

      <div className="space-y-16 md:space-y-24">
        {eventGalleryData.items.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <ScrollReveal direction={isEven ? "right" : "left"} className="w-full h-full relative group">
                  <div className="overflow-hidden rounded-3xl aspect-[16/10] max-h-[380px] bg-sage/30 relative shadow-md">
                    {/* Parallax & Hover Effect */}
                    <motion.div
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0"
                    >
                      <img 
                        src={item.image} 
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                        style={{ objectPosition: item.position || 'center' }}
                      />
                    </motion.div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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
