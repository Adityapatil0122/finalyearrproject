import { Star } from 'lucide-react';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { clientReviews } from '@/data/clients';

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
                    <div className="flex shrink-0 gap-0.5 text-primary" aria-label="5 star review">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={16} fill="currentColor" strokeWidth={1.8} />
                      ))}
                    </div>
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
