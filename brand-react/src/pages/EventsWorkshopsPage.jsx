import Hero from '../components/layout/Hero';
import TransformativeModalities from '../components/sections/TransformativeModalities';
import UpcomingEvents from '../components/sections/UpcomingEvents';
import MomentsOfImpact from '../components/sections/MomentsOfImpact';
import InviteNandan from '../components/sections/InviteNandan';
import BookingInquiry from '../components/sections/BookingInquiry';
import CTASection from '../components/sections/CTASection';
import { eventsHeroData, eventsCtaData } from '../data/siteData';

export default function EventsWorkshopsPage() {
  return (
    <main>
      <Hero data={eventsHeroData} />
      <TransformativeModalities />
      <UpcomingEvents />
      <MomentsOfImpact />
      <InviteNandan />
      <BookingInquiry />
      <CTASection data={eventsCtaData} />
    </main>
  );
}
