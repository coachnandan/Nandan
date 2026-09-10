import { upcomingEventsPageData } from '../../data/siteData';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';

export default function UpcomingEventsList() {
  return (
    <section id="upcoming-events" className="py-24 px-6 lg:px-16 max-w-5xl mx-auto">
      <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto space-y-6 mb-20">
        <h2 className="text-4xl lg:text-5xl font-serif text-charcoal leading-tight">
          {upcomingEventsPageData.heading}
        </h2>
        <p className="text-lg text-text-muted">{upcomingEventsPageData.subtext}</p>
      </ScrollReveal>

      {upcomingEventsPageData.items && upcomingEventsPageData.items.length > 0 ? (
        <div className="space-y-6">
          {upcomingEventsPageData.items.map((event, i) => {
            const [day, month] = event.dateStr.split(' ');
            
            return (
              <ScrollReveal direction="up" delay={i * 0.1} key={i}>
                <div className="bg-white rounded-3xl p-6 lg:p-8 border border-border flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center shadow-sm hover:shadow-md transition-shadow group">
                  {/* Date Badge */}
                  <div className="w-24 h-24 shrink-0 bg-sage rounded-2xl flex flex-col items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors duration-500">
                    <span className="text-3xl font-serif leading-none">{day}</span>
                    <span className="text-xs tracking-widest uppercase font-medium mt-1">{month}</span>
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-serif text-charcoal">{event.title}</h3>
                    <p className="text-sm font-medium tracking-wide uppercase text-gold">{event.location}</p>
                    <p className="text-text-muted mt-2 max-w-xl text-sm leading-relaxed">{event.description}</p>
                  </div>
                  
                  {/* Action */}
                  <div className="flex md:flex-col items-center gap-6 md:gap-3 shrink-0 pt-4 md:pt-0 border-t border-border/50 md:border-0 w-full md:w-auto md:text-right">
                    <span className="text-lg font-serif text-charcoal flex-1 md:flex-none">{event.price}</span>
                    <Button href={event.href} size="sm">{event.cta || 'Register'}</Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      ) : (
        <ScrollReveal direction="up" className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl p-10 text-center border border-border shadow-sm">
            <h3 className="text-2xl font-serif text-charcoal mb-3">New Events Announcing Soon</h3>
            <p className="text-text-muted text-base leading-relaxed mb-6">
              Our team is scheduling upcoming events. Check back soon for fresh dates and booking links.
            </p>
            <Button href="/contact">Inquire for Private Events</Button>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
}
