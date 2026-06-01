import AnimatedHeading from './AnimatedHeading';
import Icon from './Icon';
import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, description, badge, children, media }) {
  const customMedia = media?.node;

  const content = (
    <>
      {badge ? (
        <Reveal>
          <span className="section-eyebrow section-eyebrow-on-dark inline-flex items-center gap-2">
            {badge.icon ? <Icon name={badge.icon} size={22} /> : null}
            {badge.label}
          </span>
        </Reveal>
      ) : eyebrow ? (
        <Reveal>
          <p className="section-eyebrow section-eyebrow-on-dark mb-2">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <div className="mt-md max-w-3xl">
        <AnimatedHeading as="h1" className="text-display text-balance text-white">
          {title}
        </AnimatedHeading>
      </div>
      {description ? (
        <Reveal delay={0.2}>
          <p className="mt-md max-w-2xl text-body-lg text-white/82">
            {description}
          </p>
        </Reveal>
      ) : null}
      {children ? <div className="mt-lg">{children}</div> : null}
    </>
  );

  return (
    <section className="page-hero relative overflow-hidden bg-gradient-to-br from-[#0068d6] via-primary to-[#00336b] text-white">
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />
      {media ? (
        <div className="container-page relative grid items-center gap-xl pt-xl pb-xl md:pt-[108px] md:pb-[72px] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)]">
          <div className="min-w-0">{content}</div>
          <Reveal delay={0.12}>
            {customMedia ? (
              <div className="page-hero-custom-media relative mx-auto w-full max-w-[520px] lg:ml-auto">
                {customMedia}
              </div>
            ) : (
              <div className="page-hero-image relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-white/18 bg-white/10 shadow-high lg:ml-auto">
                <img
                  src={media.src}
                  alt={media.alt}
                  loading={media.loading || 'eager'}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/72 via-primary/10 to-transparent" />
              </div>
            )}
          </Reveal>
        </div>
      ) : (
        <div className="container-page relative pt-xl pb-xl md:pt-[108px] md:pb-[72px]">
          {content}
        </div>
      )}
    </section>
  );
}
