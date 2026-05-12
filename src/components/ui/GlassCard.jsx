export default function GlassCard({ children, className = '', dark = false, ...rest }) {
  return (
    <div
      className={[
        dark ? 'glass-card-dark' : 'glass-card',
        'interactive-surface rounded-2xl shadow-med',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
