export default function Marquee({ children, speed = 35, className = '', pauseOnHover = true }) {
  const items = Array.isArray(children) ? children : [children];
  return (
    <div className={['group relative overflow-hidden mask-fade-edges', className].join(' ')}>
      <div
        className={[
          'flex w-max gap-12 animate-marquee',
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '',
        ].join(' ')}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items].map((c, i) => (
          <div key={i} className="flex items-center shrink-0">
            {c}
          </div>
        ))}
      </div>
    </div>
  );
}
