// JourneyPhotoGallery — Premium editorial scroll story
// Alternating image/content layout with parallax + staggered Framer Motion
import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { journeyTimelineData } from '../../data/siteData';

// Each image has custom objectPosition so the face is always centered nicely
const MILESTONE_IMAGES = [
  { src: '/images/nandan_milestone1.jpg', pos: 'center 15%'  }, // 2015 – white shirt, The Beginning
  { src: '/images/nandan_milestone2.jpg', pos: 'center top'  }, // 2016 – First Community, online session
  { src: '/images/nandan_milestone3.jpg', pos: 'center 20%'  }, // 2017 – Coaching Certification, formal seated
  { src: '/images/nandan_milestone4.jpg', pos: 'center top'  }, // 2018 – The Wellness Shift, navy suit
  { src: '/images/nandan_milestone5.jpg', pos: 'center top'  }, // 2019 – Growing Network, ADR Jaipur
  { src: '/images/nandan_milestone6.jpg', pos: 'center 15%'  }, // 2020 – Digital Coaching, writing at event
  { src: '/images/nandan_milestone7.jpg', pos: 'center top'  }, // 2021 – Expanding Impact, large hall seminar
  { src: '/images/nandan_milestone8.jpg', pos: 'center top'  }, // 2022 – Milestone Recognition, sequined tuxedo
  { src: '/images/nandan_milestone9.jpg', pos: 'center 30%'  }, // 2026 – Global Reach, Vietnam
];

// Parallax image block
function ParallaxImage({ src, alt, year, imageLeft, objectPosition = 'center top' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.97]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className={`relative w-full lg:w-1/2 h-[460px] lg:h-[620px] rounded-[32px] overflow-hidden flex-shrink-0 shadow-2xl
        ${imageLeft ? 'order-first' : 'order-last lg:order-last'}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[115%] -top-[7.5%]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = 'var(--color-sage)';
            e.target.parentElement.innerHTML += `<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;"><span style="font-family:var(--font-serif);font-size:1.2rem;color:rgba(24,53,47,0.35);font-style:italic;">${alt}</span></div>`;
          }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Year badge */}
      <div className="absolute top-6 left-6 bg-ivory/90 backdrop-blur-md rounded-full px-4 py-2 shadow-sm">
        <span className="font-serif text-sm text-forest font-medium tracking-wide">{year}</span>
      </div>
    </motion.div>
  );
}

// Single milestone block
function MilestoneBlock({ milestone, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-15% 0px -15% 0px' });
  const imageLeft = index % 2 === 0;

  const contentVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 min-h-[70vh] py-20 px-6 lg:px-0
        ${imageLeft ? '' : 'lg:flex-row-reverse'}`}
    >
      {/* Image */}
      <ParallaxImage
        src={MILESTONE_IMAGES[index % MILESTONE_IMAGES.length].src}
        alt={milestone.title}
        year={milestone.year}
        imageLeft={imageLeft}
        objectPosition={MILESTONE_IMAGES[index % MILESTONE_IMAGES.length].pos}
      />

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className={`w-full lg:w-1/2 flex-shrink-0 space-y-6 ${imageLeft ? '' : ''}`}
      >
        {/* Year + line */}
        <motion.div variants={childVariants} className="flex items-center gap-4">
          <span className="block w-12 h-px bg-gold flex-shrink-0" />
          <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">{milestone.year}</span>
        </motion.div>

        {/* Title */}
        <motion.h3
          variants={childVariants}
          className="text-4xl lg:text-5xl xl:text-6xl font-serif text-charcoal leading-[1.1] tracking-tight"
        >
          {milestone.title}
        </motion.h3>

        {/* Divider */}
        <motion.div variants={childVariants} className="w-16 h-px bg-border" />

        {/* Story */}
        <motion.p
          variants={childVariants}
          className="text-text-muted text-lg leading-relaxed max-w-md"
        >
          {milestone.description}
        </motion.p>

        {/* Index pill */}
        <motion.div variants={childVariants}>
          <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-forest/60 font-medium">
            <span className="font-serif text-2xl text-border">{String(index + 1).padStart(2, '0')}</span>
            / {String(journeyTimelineData.items.length).padStart(2, '0')}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function JourneyPhotoGallery() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Fade out on section exit
  const sectionOpacity = useTransform(scrollYProgress, [0.85, 1], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: sectionOpacity }}
      className="relative bg-ivory"
    >
      {/* ── Heading ── */}
      <div className="py-28 lg:py-36 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-6"
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4">
            <span className="block w-12 h-px bg-gold" />
            <span className="text-xs tracking-[0.22em] uppercase text-gold font-medium">The Journey</span>
            <span className="block w-12 h-px bg-gold" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl lg:text-7xl xl:text-8xl font-serif text-charcoal leading-[1.05] tracking-tight">
            Milestones That <br />
            <span className="italic text-forest">Shaped The Mission</span>
          </h2>

          {/* Sub text */}
          <p className="text-text-muted text-lg max-w-xl mx-auto leading-relaxed">
            A story told through pivotal chapters — each one a stepping stone toward a life of purposeful impact.
          </p>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 pt-4 opacity-50">
            <div className="w-px h-10 bg-charcoal/30 overflow-hidden">
              <motion.div
                className="w-full bg-charcoal/60"
                animate={{ height: ['0%', '100%', '0%'], y: ['0%', '0%', '100%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <span className="text-[9px] tracking-[0.25em] uppercase text-text-muted">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* ── Milestones ── */}
      <div className="max-w-6xl mx-auto divide-y divide-border/40">
        {journeyTimelineData.items.map((milestone, i) => (
          <MilestoneBlock key={milestone.year} milestone={milestone} index={i} />
        ))}
      </div>

      {/* ── Ending fade transition ── */}
      <div className="h-32 bg-gradient-to-b from-transparent to-ivory pointer-events-none" />
    </motion.section>
  );
}
