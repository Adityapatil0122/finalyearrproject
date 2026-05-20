import BlobBackground from './BlobBackground';
import AnimatedHeading from './AnimatedHeading';
import Icon from './Icon';
import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, description, badge, children, media }) {
  const content = (
    <>
      {badge ? (
        <Reveal>
          <span className="section-eyebrow inline-flex items-center gap-2">
            {badge.icon ? <Icon name={badge.icon} size={22} /> : null}
            {badge.label}
          </span>
        </Reveal>
      ) : eyebrow ? (
        <Reveal>
          <p className="section-eyebrow mb-2">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <div className="mt-md max-w-3xl">
        <AnimatedHeading as="h1" className="text-display text-balance">
          {title}
        </AnimatedHeading>
      </div>
      {description ? (
        <Reveal delay={0.2}>
          <p className="mt-md text-body-lg text-on-surface-variant max-w-2xl">
            {description}
          </p>
        </Reveal>
      ) : null}
      {children ? <div className="mt-lg">{children}</div> : null}
    </>
  );

  return (
    <section className="page-hero relative overflow-hidden">
      <BlobBackground />
      {media ? (
        <div className="container-page relative grid items-center gap-xl pt-xl pb-xl md:pt-[108px] md:pb-[72px] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.72fr)]">
          <div className="min-w-0">{content}</div>
          <Reveal delay={0.12}>
            <div className="media-reveal page-hero-image relative mx-auto aspect-[4/3] w-full max-w-[520px] overflow-hidden rounded-3xl border border-outline-variant bg-surface-container-lowest shadow-high lg:ml-auto">
              <img
                src={media.src}
                alt={media.alt}
                loading={media.loading || 'eager'}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent" />
            </div>
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
