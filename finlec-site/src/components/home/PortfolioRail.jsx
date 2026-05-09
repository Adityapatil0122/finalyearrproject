import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { portfolio } from '@/data/home';

export default function PortfolioRail() {
  const railRef = useRef(null);

  const scroll = (dir) => {
    if (!railRef.current) return;
    railRef.current.scrollBy({ left: dir * 440, behavior: 'smooth' });
  };

  return (
    <Section id="work" className="bg-surface-container-low">
      <div className="flex flex-wrap items-end justify-between gap-md mb-xl">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-label-sm uppercase tracking-widest text-primary font-semibold mb-2">
              Selected work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">Recent launches we are quietly proud of.</h2>
          </Reveal>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="interactive-surface grid h-12 w-12 place-items-center rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="interactive-surface grid h-12 w-12 place-items-center rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-lg overflow-x-auto pb-md hide-scrollbar snap-x snap-mandatory"
      >
        {portfolio.map((p) => (
          <div
            key={p.title}
            className="group flex-shrink-0 w-[85vw] sm:w-[378px] snap-center"
          >
            <div className="interactive-surface media-reveal relative aspect-[4/5] rounded-3xl border border-transparent shadow-low group-hover:shadow-high transition-all duration-500">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/85 via-on-secondary-fixed/10 to-transparent" />
              <div className="absolute inset-0 p-lg flex flex-col justify-end text-white">
                <p className="text-label-sm uppercase tracking-widest opacity-80 mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {p.tag}
                </p>
                <p className="text-h2 font-semibold leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {p.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
