import { Link } from 'react-router-dom';
import { siteConfig, footerColumns } from '@/data/siteConfig';
import Logo from './Logo';

function Icon({ d }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d={d} />
    </svg>
  );
}

const ICONS = {
  facebook:
    'M22 12.06C22 6.49 17.52 2 11.98 2S2 6.49 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.46h-1.25c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.91h-2.32V22C18.34 21.24 22 17.08 22 12.06z',
  instagram:
    'M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.2-.1 1.6-.1 4.8-.1zm0 5.5a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6zm0 7.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm5.4-7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z',
  x:
    'M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.13-6.73L5.2 22H1.94l7.61-8.7L1.5 2h6.7l4.64 6.12L18.244 2zm-1.145 18h1.804L6.48 3.892H4.544L17.099 20z',
  linkedin:
    'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z',
};

const socialLinks = [
  { key: 'facebook', label: 'Facebook' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'x', label: 'X' },
  { key: 'linkedin', label: 'LinkedIn' },
].filter(({ key }) => siteConfig.social[key]);

export default function Footer() {
  return (
    <footer className="mt-2xl bg-on-secondary-fixed text-white">
      <div className="container-page py-2xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-xl">
          <div>
            <Logo variant="dark" height={44} />
            <p className="mt-md text-body-md text-white/70 max-w-xs">
              {siteConfig.description}
            </p>
            <div className="mt-md flex items-center gap-3">
              {socialLinks.map(({ key, label }) => (
                <a
                  key={key}
                  href={siteConfig.social[key]}
                  aria-label={label}
                  target={siteConfig.social[key] === '#' ? undefined : '_blank'}
                  rel={siteConfig.social[key] === '#' ? undefined : 'noopener noreferrer'}
                  onClick={
                    siteConfig.social[key] === '#'
                      ? (e) => e.preventDefault()
                      : undefined
                  }
                  className={[
                    'grid h-10 w-10 place-items-center rounded-full bg-white/5 transition-colors',
                    siteConfig.social[key] === '#'
                      ? 'cursor-default hover:bg-white/10'
                      : 'hover:bg-primary',
                  ].join(' ')}
                >
                  <Icon d={ICONS[key]} />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-label-sm uppercase tracking-widest text-white/50 mb-md">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="text-body-md text-white/80 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-2xl border-t border-white/10 pt-md flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-body-md text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-label-sm text-white/40">
            Crafted with precision in {siteConfig.shortAddress || siteConfig.address}.
          </p>
        </div>
      </div>
    </footer>
  );
}
