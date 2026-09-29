import ScrollReveal from '../ui/ScrollReveal';

export default function JourneyHero() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto overflow-hidden" data-purpose="journey-page-hero">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-amber-200/15 to-teal-400/10 filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="text-center max-w-4xl mx-auto mb-16">
        
        {/* Eyebrow Badge */}
        <ScrollReveal direction="down">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-amber-300/40 shadow-sm backdrop-blur-md mb-6 group hover:border-amber-400/60 transition-colors">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-forest">The 15+ Year Leadership Story</span>
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-charcoal leading-[1.15] mb-6">
            From ₹15,000 / Month to <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-forest">Executive President's Team</span>
          </h1>
        </ScrollReveal>

        {/* Narrative Description */}
        <ScrollReveal direction="up" delay={0.2}>
          <p className="text-base sm:text-xl text-text-muted font-light leading-relaxed max-w-3xl mx-auto mb-10">
            A 15-year journey sparked by his mother’s health transformation under Himanshu Sir, qualifying as Supervisor after Delhi Academy Training, launching his Nutrition Center, and progressing through Global Expansion Team, President's Team, to Executive President's Team.
          </p>
        </ScrollReveal>

        {/* Action CTAs */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#timeline" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-forest text-white font-medium text-sm sm:text-base tracking-wide shadow-xl shadow-forest/15 hover:bg-forest/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ring-1 ring-gold/30"
            >
              Explore Timeline Milestones
              <svg className="w-4 h-4 ml-2.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a 
              href="/book-appointment" 
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-charcoal font-medium text-sm sm:text-base border border-slate-200/90 shadow-sm hover:shadow-md hover:bg-white transition-all duration-300"
            >
              Book Appointment ↗
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* 4 Interactive Key Milestone Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all duration-300 h-full">
            <div className="text-amber-600 font-serif text-3xl font-medium mb-2">2008</div>
            <h3 className="text-sm font-semibold text-charcoal mb-2">The Turning Point</h3>
            <p className="text-xs text-text-muted leading-relaxed">Started at ₹15k/month. Mother's health restored under Coach Himanshu Sir's nutrition guidance.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300/50 transition-all duration-300 h-full">
            <div className="text-forest font-serif text-3xl font-medium mb-2">2009</div>
            <h3 className="text-sm font-semibold text-charcoal mb-2">Supervisor &amp; Center</h3>
            <p className="text-xs text-text-muted leading-relaxed">Completed Delhi Academy Training, qualified Supervisor, and launched his first Nutrition Center.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300/50 transition-all duration-300 h-full">
            <div className="text-forest font-serif text-3xl font-medium mb-2">GET &amp; Pres.</div>
            <h3 className="text-sm font-semibold text-charcoal mb-2">Leadership Progression</h3>
            <p className="text-xs text-text-muted leading-relaxed">Scaled through Global Expansion Team to President's Team, building a thriving coach network.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300/50 transition-all duration-300 h-full">
            <div className="text-amber-600 font-serif text-3xl font-medium mb-2">2026</div>
            <h3 className="text-sm font-semibold text-charcoal mb-2">Exec. President's Team</h3>
            <p className="text-xs text-text-muted leading-relaxed">Achieved Executive President's Team tier, impacting 500+ families and leading 100+ events.</p>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
}
