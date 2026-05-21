import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import PageHero from '@/components/ui/PageHero';
import { useSEO } from '@/hooks/useSEO';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Finlec Technologies',
    description: 'The page you are looking for could not be found on the Finlec Technologies website.',
    robots: 'noindex, follow',
  });
  return (
    <PageHero
      eyebrow="Page not found"
      title="404"
      description="The page you are looking for may have moved or no longer exists."
    >
      <Button to="/" variant="white" magnetic iconLeft={<ArrowLeft size={18} />}>
        Take me home
      </Button>
      <Button
        to="/contact"
        variant="ghost"
        className="border border-white/28 text-white hover:bg-white/12"
      >
        Talk to us
      </Button>
    </PageHero>
  );
}
