import Hero from '@/components/home/Hero';
import TrustStrip from '@/components/home/TrustStrip';
import BentoExpertise from '@/components/home/BentoExpertise';
import TechStack from '@/components/home/TechStack';
import WhyUs from '@/components/home/WhyUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import PortfolioRail from '@/components/home/PortfolioRail';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import FAQ from '@/components/home/FAQ';
import SiteCta from '@/components/ui/SiteCta';
import { useSEO } from '@/hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Finlec Technologies | Website, App, AI and Marketing Services in Pune',
    description:
      'Finlec Technologies builds websites, mobile apps, AI tools, WhatsApp API systems, UI/UX designs, graphics, and digital marketing plans in Pune.',
    path: '/',
    keywords: [
      'Finlec Technologies',
      'website development Pune',
      'app development Pune',
      'AI solutions Pune',
      'digital marketing Pune',
    ],
  });

  return (
    <>
      <Hero />
      <TrustStrip />
      <BentoExpertise />
      <TechStack />
      <WhyUs />
      <ProcessTimeline />
      <PortfolioRail />
      <TestimonialsGrid />
      <FAQ />
      <SiteCta />
    </>
  );
}
