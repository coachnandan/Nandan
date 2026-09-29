import AnimatedNumber from '../ui/AnimatedNumber';

export default function Hero({ data }) {
  if (!data) return null;

  return (
    <section id="home" className="w-full relative z-10 pt-28 sm:pt-32 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto flex items-center min-h-[85vh]" data-purpose="hero-main-content">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
        
        {/* LEFT COLUMN: Editorial Headline & Pitch Content */}
        <div className="lg:col-span-7 flex flex-col justify-center max-w-2xl" data-purpose="hero-pitch-column">
          {/* Status / Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-amber-300/40 shadow-sm backdrop-blur-md w-fit mb-7 group hover:border-amber-400/60 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest">{data.eyebrow || "Executive President's Team Leader"}</span>
          </div>

          {/* Refined Editorial Headline: Elegant Font Weight Mix ("Not Only Bold") */}
          <h1 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-light tracking-[-0.02em] text-charcoal leading-[1.15] mb-7">
            A Journey of <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-forest text-[1.1em]">Wellness</span>,{' '}
            <span className="font-serif italic font-normal text-amber-700 text-[1.1em]">Purpose</span> &amp;{' '}
            <span className="font-serif italic font-normal text-forest text-[1.1em]">Leadership</span> <br className="hidden sm:block" />
            for Over <span className="font-serif italic font-normal text-forest underline decoration-gold/80 underline-offset-8 decoration-1">15 Years</span>.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-text-muted font-light leading-relaxed max-w-xl mb-10">
            {data.description}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-12" data-purpose="hero-call-to-actions">
            <a 
              className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-forest text-white font-medium text-sm sm:text-base tracking-wide shadow-xl shadow-forest/15 hover:bg-forest/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ring-1 ring-gold/30" 
              href={data.primaryCTA.href}
            >
              {data.primaryCTA.label}
              <svg className="w-4 h-4 ml-2.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" x2="19" y1="12" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            {data.secondaryCTA && (
              <a 
                className="group inline-flex items-center justify-center px-7 py-4 rounded-full bg-white/80 backdrop-blur-md text-charcoal font-medium text-sm sm:text-base border border-slate-200/90 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300" 
                href={data.secondaryCTA.href}
              >
                {data.secondaryCTA.label}
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sage/40 group-hover:bg-sage text-forest ml-2.5 text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </a>
            )}
          </div>

          {/* Metric Badges Row */}
          {data.stats && data.stats.length > 0 && (
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-border max-w-lg" data-purpose="social-proof-metrics">
              {data.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-serif font-normal text-forest flex items-baseline gap-0.5">
                    <AnimatedNumber value={stat.number} />
                    <span className="text-gold font-sans font-light">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] font-medium text-text-muted mt-1 uppercase tracking-[0.16em]">{stat.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Luxury Circular Orbital Showcase */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative py-6" data-purpose="hero-portrait-showcase">
          <div className="relative w-[320px] sm:w-[420px] md:w-[460px] lg:w-[480px] aspect-square flex items-center justify-center">
            
            {/* Atmospheric Ambient Glow */}
            <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-emerald-400/20 via-amber-200/25 to-sage/30 filter blur-3xl -z-10 animate-pulse"></div>
            
            {/* Outer Orbital Ring 1: Champagne Gold Halo */}
            <div className="absolute inset-0 rounded-full border border-amber-400/40 pointer-events-none w-[114%] h-[114%] -top-[7%] -left-[7%] animate-[spin_60s_linear_infinite_reverse]"></div>

            {/* Outer Orbital Ring 2: Emerald Dashed Accent */}
            <div className="absolute inset-0 rounded-full border border-dashed border-forest/30 pointer-events-none w-[106%] h-[106%] -top-[3%] -left-[3%] animate-[spin_40s_linear_infinite]"></div>

            {/* Primary Circular Image Frame */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] border-white shadow-2xl bg-slate-100 group ring-1 ring-gold/20">
              <img 
                src={data.image || '/images/nandan_hero_blue.png'} 
                alt={data.imageAlt || 'Coach Nandan Kumar Singh'} 
                className="w-full h-full object-cover object-top scale-110 origin-top group-hover:scale-115 transition-transform duration-700 ease-out"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent opacity-40 pointer-events-none"></div>
            </div>

            {/* REVOLVING ORBITAL CONTAINER FOR THE 3 TITLE CARDS */}
            <div className="absolute inset-0 pointer-events-none z-20 animate-[spin_35s_linear_infinite]">
              
              {/* ORBIT CARD 1: Top / Recognition */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-auto">
                <div className="animate-[spin_35s_linear_infinite_reverse] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                  <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-white shadow-md">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
                    </svg>
                  </div>
                  <div className="pr-1 text-left whitespace-nowrap">
                    <span className="block text-[8px] font-medium uppercase tracking-wider text-amber-800">Recognition</span>
                    <span className="block text-xs font-semibold text-charcoal leading-tight">Executive President's Team</span>
                  </div>
                </div>
              </div>

              {/* ORBIT CARD 2: Bottom-Left / Mentorship */}
              <div className="absolute bottom-4 -left-6 pointer-events-auto">
                <div className="animate-[spin_35s_linear_infinite_reverse] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                  <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-white shadow-md">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <rect height="14" rx="2" width="20" x="2" y="7"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <div className="pr-1 text-left whitespace-nowrap">
                    <span className="block text-[8px] font-medium uppercase tracking-wider text-forest">Mentorship</span>
                    <span className="block text-xs font-semibold text-charcoal leading-tight">15+ Years Leadership</span>
                  </div>
                </div>
              </div>

              {/* ORBIT CARD 3: Bottom-Right / Impact */}
              <div className="absolute bottom-4 -right-6 pointer-events-auto">
                <div className="animate-[spin_35s_linear_infinite_reverse] bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/80 flex items-center gap-3 hover:scale-105 transition-transform cursor-default">
                  <div className="w-8 h-8 rounded-xl bg-forest flex items-center justify-center text-white shadow-md">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div className="pr-1 text-left whitespace-nowrap">
                    <span className="block text-[8px] font-medium uppercase tracking-wider text-forest">Impact</span>
                    <span className="block text-xs font-semibold text-charcoal leading-tight">500+ Lives Transformed</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


