import Hero from '@/components/home/Hero';
import LogoMarquee from '@/components/home/LogoMarquee';
import StatsBand from '@/components/home/StatsBand';
import TrustStrip from '@/components/home/TrustStrip';
import BentoExpertise from '@/components/home/BentoExpertise';
import TechStack from '@/components/home/TechStack';
import WhyUs from '@/components/home/WhyUs';
import ProcessTimeline from '@/components/home/ProcessTimeline';
import PortfolioRail from '@/components/home/PortfolioRail';
import TestimonialsGrid from '@/components/home/TestimonialsGrid';
import FAQ from '@/components/home/FAQ';
import BusinessSnapshot from '@/components/home/BusinessSnapshot';
import CtaForm from '@/components/home/CtaForm';
import { useSEO } from '@/hooks/useSEO';

export default function Home() {
  useSEO({
    title: 'Finlec Technologies - Website & App Development, Digital Marketing',
    description:
      'AI implementations, website and app development, digital marketing, WhatsApp Business API, UI/UX design, and graphics design services.',
  });

  return (
    <>
      <Hero />
      <StatsBand />
      <LogoMarquee />
      <TrustStrip />
      <BentoExpertise />
      <TechStack />
      <WhyUs />
      <ProcessTimeline />
      <PortfolioRail />
      <TestimonialsGrid />
      <FAQ />
      <BusinessSnapshot />
      <CtaForm />
    </>
  );
}
