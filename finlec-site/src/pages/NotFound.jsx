import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import BlobBackground from '@/components/ui/BlobBackground';
import { useSEO } from '@/hooks/useSEO';

export default function NotFound() {
  useSEO({ title: '404 — Finlec Technologies' });
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <BlobBackground />
      <div className="container-page relative text-center">
        <p className="text-label-sm uppercase tracking-widest text-primary font-semibold">
          Lost in the void
        </p>
        <h1 className="mt-2 text-display font-bold">404</h1>
        <p className="mt-md text-body-lg text-on-surface-variant max-w-lg mx-auto">
          The page you&apos;re looking for doesn&apos;t exist — or has moved to a better timeline.
        </p>
        <div className="mt-lg flex justify-center gap-3">
          <Button to="/" magnetic iconLeft={<ArrowLeft size={18} />}>
            Take me home
          </Button>
          <Button to="/contact" variant="outline">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  );
}
