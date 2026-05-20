import Icon from './Icon';

export default function Badge({ children, icon, variant = 'primary', className = '' }) {
  const variants = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    tertiary: 'bg-tertiary/10 text-tertiary',
    surface: 'bg-surface-container text-on-surface-variant',
  };
  return (
    <span
      className={[
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.95rem] font-semibold',
        variants[variant],
        className,
      ].join(' ')}
    >
      {icon ? <Icon name={icon} size={19} /> : null}
      {children}
    </span>
  );
}
