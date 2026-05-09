export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div
      className={[
        'interactive-surface rounded-2xl bg-surface-container-lowest border border-outline-variant p-6 shadow-low transition-all duration-300',
        hover ? 'surface-lift' : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </div>
  );
}
