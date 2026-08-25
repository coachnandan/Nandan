import Hero from '../components/layout/Hero';
import BusinessCoachingServices from '../components/sections/BusinessCoachingServices';
import HighPerformanceFramework from '../components/sections/HighPerformanceFramework';
import ProvenResults from '../components/sections/ProvenResults';
import ComplianceSection from '../components/sections/ComplianceSection';
import FaqSection from '../components/sections/FaqSection';
import CTASection from '../components/sections/CTASection';
import { businessCoachingHeroData, businessCoachingCtaData } from '../data/siteData';

export default function BusinessCoachingPage() {
  return (
    <main>
      <Hero data={businessCoachingHeroData} />
      <BusinessCoachingServices />
      <HighPerformanceFramework />
      <ProvenResults />
      <ComplianceSection />
      <FaqSection />
      <CTASection data={businessCoachingCtaData} />
    </main>
  );
}
