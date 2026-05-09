import { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';

export default function Logo({ variant = 'light', height = 40 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const src = variant === 'dark' ? siteConfig.logoMark : siteConfig.logo;

  return (
    <Link
      to="/"
      className="flex items-center gap-2 group shrink-0"
      aria-label={siteConfig.name}
    >
      {!imgFailed && src ? (
        <img
          src={src}
          alt={siteConfig.name}
          height={height}
          style={{ height: `${height}px`, width: 'auto' }}
          className="select-none transition-transform duration-300 group-hover:scale-[1.03]"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <span className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white font-bold shadow-low transition-transform group-hover:rotate-6">
            F
          </span>
          <span
            className={[
              'text-h3 font-semibold tracking-tight',
              variant === 'dark' ? 'text-white' : 'text-on-surface',
            ].join(' ')}
          >
            {siteConfig.name.split(' ')[0]}
            <span className={variant === 'dark' ? 'text-primary-300' : 'text-primary'}>.</span>
          </span>
        </span>
      )}
    </Link>
  );
}
