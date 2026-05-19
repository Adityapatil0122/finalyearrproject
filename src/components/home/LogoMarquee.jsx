import Marquee from '@/components/ui/Marquee';
import { clientLogos } from '@/data/clients';

export default function LogoMarquee() {
  return (
    <section className="py-xl border-y border-outline-variant bg-surface-container-low">
      <p className="container-page text-center text-label-sm uppercase tracking-widest text-on-surface-variant mb-md">
        Trusted by teams at different stages of growth
      </p>
      <Marquee speed={42}>
        {clientLogos.map((c) => (
          <div
            key={c.name}
            className="grid h-20 w-40 place-items-center px-md"
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              loading="lazy"
              className="max-h-12 w-full object-contain opacity-90 saturate-[1.06] transition-opacity duration-300 hover:opacity-100"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
