import Reveal from './Reveal';

export default function VisualHero({
  eyebrow,
  title,
  description,
  media,
  children,
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0068d6] via-primary to-[#00336b] text-white">
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />

      <div className="container-page relative grid grid-cols-1 gap-xl py-xl md:py-[92px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="min-w-0 w-full max-w-[calc(100vw-2rem)] md:max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <p className="section-eyebrow section-eyebrow-on-dark">{eyebrow}</p>
            </Reveal>
          ) : null}

          <Reveal delay={0.08}>
            <h1 className="mt-md w-full max-w-[calc(100vw-2rem)] break-normal text-display text-balance md:max-w-full">
              {title}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={0.14}>
              <p className="mt-md w-full max-w-[calc(100vw-2rem)] break-normal text-body-lg text-white/82 md:max-w-2xl">
                {description}
              </p>
            </Reveal>
          ) : null}

          {children ? (
            <Reveal delay={0.2}>
              <div className="mt-lg flex w-full max-w-[calc(100vw-2rem)] flex-col gap-sm sm:flex-row sm:flex-wrap md:max-w-full">
                {children}
              </div>
            </Reveal>
          ) : null}
        </div>

        {media ? (
          <Reveal delay={0.12}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[calc(100vw-2rem)] min-w-0 overflow-hidden rounded-3xl border border-white/18 shadow-high sm:max-w-[560px]">
              <img
                src={media.src}
                alt={media.alt}
                className="h-full w-full object-cover"
                style={{ objectPosition: media.objectPosition || 'center' }}
                loading={media.loading || 'eager'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/72 via-primary/10 to-transparent" />
              {(media.eyebrow || media.title) ? (
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  {media.eyebrow ? (
                    <p className="section-eyebrow-sm !text-white/80">{media.eyebrow}</p>
                  ) : null}
                  {media.title ? (
                    <p className="mt-1 max-w-sm break-normal text-h3 text-white">
                      {media.title}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
