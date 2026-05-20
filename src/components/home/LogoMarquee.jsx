import Marquee from '@/components/ui/Marquee';
import { clientLogos } from '@/data/clients';

export default function LogoMarquee() {
  return (
    <section className="py-xl border-y border-outline-variant bg-surface-container-low">
      <p className="container-page section-eyebrow-sm text-center mb-md">
        Trusted by teams at different stages of growth
      </p>
      <Marquee speed={42}>
        {clientLogos.map((c) => (
          <div
            key={c.name}
            className="grid h-[5.4rem] w-[12.6rem] place-items-center px-5 md:h-[6.3rem] md:w-[14.4rem]"
          >
            <img
              src={c.logo}
              alt={`${c.name} logo`}
              loading="lazy"
              className="max-h-[3.6rem] w-full object-contain opacity-95 saturate-[1.06] transition-opacity duration-300 hover:opacity-100 md:max-h-[4.5rem]"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
