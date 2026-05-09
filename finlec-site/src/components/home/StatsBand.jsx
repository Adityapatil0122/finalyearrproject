import GlassCard from '@/components/ui/GlassCard';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import Reveal from '@/components/ui/Reveal';
import { stats } from '@/data/home';

export default function StatsBand() {
  return (
    <section className="container-page -mt-xl relative z-10">
      <Reveal>
        <GlassCard className="p-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-md">
            {stats.map((s) => (
              <div
                key={s.label}
                className="metric-tile rounded-2xl px-sm py-md text-center transition-colors duration-300 hover:bg-primary/5"
              >
                <p className="text-h1 font-bold text-on-surface">
                  <AnimatedNumber value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-label-sm uppercase tracking-widest text-on-surface-variant mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
