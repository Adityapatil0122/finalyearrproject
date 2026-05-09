import { ArrowRight, Code2, Layers3, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const signals = [
  { value: '150+', label: 'Projects' },
  { value: '96%', label: 'Satisfaction' },
  { value: '100+', label: 'Clients' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-on-secondary-fixed text-white">
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1800&q=80&auto=format&fit=crop"
        alt=""
        loading="eager"
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-on-secondary-fixed/95 via-on-secondary-fixed/78 to-primary-900/62" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-surface to-transparent" />

      <div className="container-page relative grid min-h-[calc(100vh-82px)] lg:grid-cols-12 gap-2xl items-center pt-[42px] pb-[94px] md:pt-[50px] md:pb-[112px]">
        <div className="lg:col-span-7 space-y-lg">
          <Badge className="bg-white/10 text-white ring-1 ring-white/15 backdrop-blur-md">
            <Sparkles size={17} /> AI | Technology | Innovation
          </Badge>
          <AnimatedHeading as="h1" className="text-display text-balance">
            Transforming Ideas into Digital Success.
          </AnimatedHeading>
          <AnimatedHeading
            as="p"
            delay={0.2}
            className="text-body-lg text-white/80 max-w-2xl"
          >
            We help businesses grow with website and app development, strategic
            digital marketing, AI solutions, WhatsApp Business API, and creative design.
          </AnimatedHeading>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="lg" magnetic to="/contact" variant="white" iconRight={<ArrowRight size={21} />}>
              Start a project
            </Button>
            <Button
              size="lg"
              variant="ghost"
              to="/services"
              className="text-white ring-1 ring-white/20 hover:bg-white/10"
            >
              Our services
            </Button>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-md pt-xl">
            {signals.map((signal) => (
              <div
                key={signal.label}
                className="interactive-surface metric-tile rounded-2xl border border-white/15 bg-white/10 p-lg backdrop-blur-md"
              >
                <p className="text-h3 leading-none">{signal.value}</p>
                <p className="mt-1 text-label-sm text-white/70">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative ml-auto h-[540px] max-w-[520px]">
            <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-high backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1100&q=85&auto=format&fit=crop"
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-secondary-fixed/62 via-on-secondary-fixed/12 to-transparent" />
            </div>

            <div className="absolute -left-8 top-12 w-56 rounded-2xl border border-white/15 bg-white/12 p-lg shadow-high backdrop-blur-xl">
              <div className="mb-md grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
                <Code2 size={24} />
              </div>
              <p className="text-label-sm uppercase tracking-widest text-white/65">Build</p>
              <p className="mt-1 text-h3 leading-tight">Websites, apps, AI</p>
            </div>

            <div className="absolute -right-4 bottom-16 w-64 rounded-2xl border border-white/15 bg-white/12 p-lg shadow-high backdrop-blur-xl">
              <div className="mb-md grid h-12 w-12 place-items-center rounded-xl bg-secondary text-white">
                <Layers3 size={24} />
              </div>
              <p className="text-label-sm uppercase tracking-widest text-white/65">Growth</p>
              <p className="mt-1 text-h3 leading-tight">Design, marketing, launch support</p>
            </div>

            <div className="absolute right-10 top-8 grid h-16 w-16 place-items-center rounded-full bg-white text-primary shadow-high soft-float">
              <Sparkles size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
