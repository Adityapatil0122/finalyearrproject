import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

const variants = {
  primary:
    'bg-primary text-white shadow-low hover:shadow-high hover:bg-primary-600',
  outline:
    'border border-outline-variant text-on-surface hover:bg-surface-container',
  ghost: 'text-primary hover:bg-primary/5',
  white:
    'bg-white text-primary shadow-low hover:shadow-high hover:bg-surface-container-low',
};

const sizes = {
  md: 'px-6 py-3 text-[0.95rem]',
  lg: 'px-8 py-4 text-[1.05rem]',
};

export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className = '',
  children,
  iconRight,
  iconLeft,
  ...rest
}) {
  const ref = useRef(null);

  const handleMove = (e) => {
    if (!magnetic || prefersReducedMotion || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    gsap.to(ref.current, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: 'power3.out' });
  };
  const handleLeave = () => {
    if (!magnetic || prefersReducedMotion || !ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
  };

  const cls = [
    'btn-sheen inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/20',
    variants[variant],
    sizes[size],
    className,
  ].join(' ');

  const inner = (
    <>
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </>
  );

  const props = {
    ref,
    className: cls,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    ...rest,
  };

  if (to) {
    return (
      <Link to={to} {...props}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} {...props}>
        {inner}
      </a>
    );
  }
  const Tag = as || 'button';
  return <Tag {...props}>{inner}</Tag>;
}
