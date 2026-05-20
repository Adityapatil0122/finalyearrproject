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
            <p className="section-eyebrow mb-2">
              Selected work
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">Recent work across web, AI, design, apps, and marketing.</h2>
          </Reveal>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="scroll-nav-btn interactive-surface grid h-12 w-12 place-items-center rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="scroll-nav-btn interactive-surface grid h-12 w-12 place-items-center rounded-full border border-outline-variant bg-surface-container-lowest hover:bg-primary hover:text-white hover:border-primary transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="flex gap-lg overflow-x-auto pb-md hide-scrollbar snap-x snap-mandatory"
        data-lenis-prevent-touch
      >
        {portfolio.map((p) => (
          <div
            key={p.title}
            className="group flex-shrink-0 w-[85vw] sm:w-[378px] snap-center"
          >
            <div className="portfolio-work-card interactive-surface media-reveal relative aspect-[4/5] rounded-3xl border border-transparent shadow-low group-hover:shadow-high transition-all duration-500">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="portfolio-card-img absolute inset-0 h-full w-full object-cover"
              />
              <div className="portfolio-card-overlay absolute inset-0" />
              <div className="absolute inset-0 flex flex-col justify-end p-md text-white sm:p-lg">
                <div className="portfolio-card-copy">
                  <p className="section-eyebrow-sm section-eyebrow-on-dark mb-2">
                    {p.tag}
                  </p>
                  <p className="text-h3 font-semibold leading-tight">
                    {p.title}
                  </p>
                  <p className="portfolio-card-description mt-md text-body-md font-medium leading-relaxed text-white/90">
                    {p.desc}
                  </p>
                  <div className="portfolio-card-details mt-md flex flex-wrap gap-2">
                    {p.details?.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.72rem] font-semibold text-white/90"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
