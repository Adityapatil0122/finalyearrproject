import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { clientReviews } from '@/data/clients';

/* ─── Google-style star renderer ─────────────────────────────────────────── */
// Renders proper full / half / empty stars using SVG clipPath — just like
// Google Maps & Google Reviews. Stars are amber (#FBBC04).

let _starId = 0;

function StarRating({ rating }) {
  const uid = `sr-${++_starId}`;
  const label = `${rating} out of 5 stars`;

  return (
    <div
      className="review-stars-wrap"
      aria-label={label}
      title={label}
      role="img"
    >
      {/* Numeric score — small, muted, like Google */}
      <span className="review-stars-score">{rating.toFixed(1)}</span>

      {/* 5 star slots */}
      <div className="review-stars" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => {
          const fill =
            rating >= i + 1
              ? 'full'
              : rating >= i + 0.5
              ? 'half'
              : 'empty';
          const clipId = `${uid}-${i}`;

          return (
            <svg
              key={i}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
              className="review-star"
              data-fill={fill}
            >
              <defs>
                {fill === 'half' && (
                  <clipPath id={clipId}>
                    {/* clip left half only */}
                    <rect x="0" y="0" width="9" height="18" />
                  </clipPath>
                )}
              </defs>

              {/* Background (empty) star */}
              <polygon
                points="9,1.5 11.18,6.4 16.5,7.18 12.75,10.82 13.64,16.12 9,13.62 4.36,16.12 5.25,10.82 1.5,7.18 6.82,6.4"
                fill="#E8EAED"
                stroke="#DADCE0"
                strokeWidth="0.5"
              />

              {/* Filled star — full or half via clipPath */}
              {fill !== 'empty' && (
                <polygon
                  points="9,1.5 11.18,6.4 16.5,7.18 12.75,10.82 13.64,16.12 9,13.62 4.36,16.12 5.25,10.82 1.5,7.18 6.82,6.4"
                  fill="#FBBC04"
                  stroke="#F9A825"
                  strokeWidth="0.3"
                  clipPath={fill === 'half' ? `url(#${clipId})` : undefined}
                />
              )}
            </svg>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────────────────────────── */
export default function TestimonialsGrid() {
  return (
    <Section id="client-reviews" className="bg-surface">
      <div className="mb-2xl">
        <div className="max-w-3xl">
          <Reveal>
            <p className="section-eyebrow mb-2">
              Client reviews
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-h1 text-balance">What our clients say about us.</h2>
          </Reveal>
        </div>
      </div>

      <div className="client-review-shell">
        <div className="client-review-marquee" aria-label="Client reviews carousel">
          {[0, 1].map((loopIndex) => (
            <div
              key={loopIndex}
              className="client-review-group"
              aria-hidden={loopIndex === 1 ? 'true' : undefined}
            >
              {clientReviews.map((review) => (
                <article
                  key={`${loopIndex}-${review.name}-${review.company}`}
                  {...(loopIndex === 0 ? { 'data-review-card': true } : {})}
                  className="client-review-card interactive-surface w-[min(88vw,27rem)] flex-none rounded-2xl border border-outline-variant bg-surface-container-lowest p-lg shadow-low sm:w-[27rem]"
                >
                  <div className="mb-md flex items-start justify-between gap-md">
                    <div className="flex items-center gap-md">
                      <img
                        src={review.avatar}
                        alt={`${review.name}, ${review.company}`}
                        loading="lazy"
                        className="client-review-avatar h-14 w-14 rounded-full border border-white object-cover shadow-low"
                      />
                      <div className="min-w-0">
                        <h3 className="text-[1.05rem] font-bold leading-tight text-on-surface">
                          {review.name}
                        </h3>
                        <p className="mt-1 text-label-sm text-on-surface-variant">
                          {review.role}, {review.company}
                        </p>
                      </div>
                    </div>

                    {/* Google-style star rating */}
                    <StarRating rating={review.rating ?? 5} />
                  </div>

                  <p className="client-review-quote text-body-md leading-relaxed text-on-surface-variant">
                    "{review.review}"
                  </p>

                  <div className="mt-lg inline-flex rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-label-sm font-semibold text-primary">
                    {review.company}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
