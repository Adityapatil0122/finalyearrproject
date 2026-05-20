import { ArrowRight } from 'lucide-react';
import { clientLogos } from '@/data/clients';
import Section from './Section';
import Reveal from './Reveal';
import Button from './Button';

const ctaLogoPlacements = [
  { x: '12%', y: '24%', w: '150px', o: 0.3, r: '-2deg' },
  { x: '87%', y: '25%', w: '150px', o: 0.24, r: '2deg' },
  { x: '13%', y: '49%', w: '142px', o: 0.2, r: '1deg' },
  { x: '88%', y: '49%', w: '150px', o: 0.2, r: '-1deg' },
  { x: '14%', y: '75%', w: '160px', o: 0.22, r: '-1deg' },
  { x: '87%', y: '75%', w: '150px', o: 0.2, r: '1deg' },
  { x: '27%', y: '17%', w: '132px', o: 0.18, r: '2deg' },
  { x: '73%', y: '17%', w: '132px', o: 0.18, r: '-2deg' },
  { x: '27%', y: '88%', w: '142px', o: 0.16, r: '1deg' },
  { x: '73%', y: '88%', w: '142px', o: 0.16, r: '-1deg' },
  { x: '38%', y: '12%', w: '118px', o: 0.13, r: '-2deg' },
  { x: '62%', y: '12%', w: '118px', o: 0.13, r: '2deg' },
  { x: '39%', y: '91%', w: '120px', o: 0.13, r: '1deg' },
  { x: '61%', y: '91%', w: '120px', o: 0.13, r: '-1deg' },
  { x: '50%', y: '8%', w: '104px', o: 0.1, r: '0deg' },
];

export default function SiteCta({
  title = 'Ready to start your project?',
  description = 'Share your goals and we will suggest the right website, app, AI, design, or growth plan.',
  buttonLabel = 'Start a project',
}) {
  return (
    <Section className="bg-surface !pt-0 !pb-lg md:!pb-xl">
      <Reveal>
        <div className="client-cta relative mx-[-0.35rem] overflow-hidden border border-outline-variant bg-primary px-[2.875rem] py-[2.625rem] text-center text-white shadow-high sm:mx-[-0.55rem] md:mx-[-0.85rem] md:px-[4.6rem] md:py-[4.2rem] lg:mx-[-1rem]">
          <div className="client-cta-logos" aria-hidden>
            {clientLogos.map((logo, index) => {
              const placement = ctaLogoPlacements[index % ctaLogoPlacements.length];
              return (
                <img
                  key={logo.logo}
                  src={logo.logo}
                  alt=""
                  className="client-cta-logo"
                  style={{
                    '--cta-delay': `${index * -0.45}s`,
                    '--cta-x': placement.x,
                    '--cta-y': placement.y,
                    '--cta-w': placement.w,
                    '--cta-o': placement.o,
                    '--cta-r': placement.r,
                  }}
                />
              );
            })}
          </div>
          <div className="relative z-10">
            <h2 className="mx-auto max-w-3xl text-h1 text-balance">{title}</h2>
            <p className="mx-auto mt-md max-w-xl text-body-lg text-white/85">
              {description}
            </p>
            <div className="mt-lg flex justify-center">
              <Button
                to="/contact"
                variant="white"
                size="lg"
                magnetic
                iconRight={<ArrowRight size={18} />}
              >
                {buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
