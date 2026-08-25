import Hero from '../components/layout/Hero';
import HealthProtocol from '../components/sections/HealthProtocol';
import HealthPrograms from '../components/sections/HealthPrograms';
import CTASection from '../components/sections/CTASection';
import { healthCoachingHeroData, healthCoachingCtaData } from '../data/siteData';

export default function HealthCoachingPage() {
  return (
    <main>
      <Hero data={healthCoachingHeroData} />
      <HealthProtocol />
      <HealthPrograms />
      <CTASection data={healthCoachingCtaData} />
    </main>
  );
}
