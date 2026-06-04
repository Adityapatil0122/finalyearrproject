import Icon from '@/components/ui/Icon';

/**
 * ColorIcon — a rounded square icon box with a vibrant tinted background.
 *
 * Props:
 *  name      – icon key for the Icon component (e.g. 'code', 'smart_toy')
 *  color     – one of the named palette keys below, or a raw CSS color string
 *  size      – icon size in px (default 22)
 *  boxSize   – tailwind sizing class pair, e.g. 'h-12 w-12' (default 'h-12 w-12')
 *  radius    – tailwind rounded class (default 'rounded-2xl')
 *  className – extra classes for the wrapper
 */

const palette = {
  blue:   { bg: '#dbeafe', icon: '#2563eb' },  // blue-100 / blue-600
  indigo: { bg: '#e0e7ff', icon: '#4338ca' },  // indigo-100 / indigo-700
  violet: { bg: '#ede9fe', icon: '#7c3aed' },  // violet-100 / violet-600
  purple: { bg: '#f3e8ff', icon: '#9333ea' },  // purple-100 / purple-600
  pink:   { bg: '#fce7f3', icon: '#db2777' },  // pink-100 / pink-600
  rose:   { bg: '#ffe4e6', icon: '#e11d48' },  // rose-100 / rose-600
  red:    { bg: '#fee2e2', icon: '#dc2626' },  // red-100 / red-600
  orange: { bg: '#ffedd5', icon: '#ea580c' },  // orange-100 / orange-600
  amber:  { bg: '#fef3c7', icon: '#d97706' },  // amber-100 / amber-600
  yellow: { bg: '#fef9c3', icon: '#ca8a04' },  // yellow-100 / yellow-600
  lime:   { bg: '#ecfccb', icon: '#65a30d' },  // lime-100 / lime-600
  green:  { bg: '#dcfce7', icon: '#16a34a' },  // green-100 / green-600
  emerald:{ bg: '#d1fae5', icon: '#059669' },  // emerald-100 / emerald-600
  teal:   { bg: '#ccfbf1', icon: '#0d9488' },  // teal-100 / teal-600
  cyan:   { bg: '#cffafe', icon: '#0891b2' },  // cyan-100 / cyan-600
  sky:    { bg: '#e0f2fe', icon: '#0284c7' },  // sky-100 / sky-600
  slate:  { bg: '#f1f5f9', icon: '#475569' },  // slate-100 / slate-600
};

export default function ColorIcon({
  name,
  color = 'blue',
  size = 22,
  boxSize = 'h-12 w-12',
  radius = 'rounded-2xl',
  className = '',
  strokeWidth = 1.8,
}) {
  const colors = palette[color] || { bg: color, icon: '#2563eb' };

  return (
    <span
      className={[
        'inline-grid shrink-0 place-items-center transition-transform duration-300 group-hover:scale-105',
        boxSize,
        radius,
        className,
      ].join(' ')}
      style={{ backgroundColor: colors.bg }}
      aria-hidden
    >
      <Icon
        name={name}
        size={size}
        strokeWidth={strokeWidth}
        style={{ color: colors.icon }}
      />
    </span>
  );
}

/**
 * Helper: given an accent string ('primary' | 'secondary' | 'tertiary' | named palette key)
 * cycle through a pleasing set of colors.
 */
export const accentToColor = (accent, index = 0) => {
  if (palette[accent]) return accent;
  const cycleMap = {
    primary:   ['blue', 'indigo', 'sky', 'cyan', 'violet'],
    secondary: ['emerald', 'teal', 'green', 'lime', 'amber'],
    tertiary:  ['orange', 'rose', 'pink', 'red', 'purple'],
  };
  const list = cycleMap[accent] || cycleMap.primary;
  return list[index % list.length];
};
