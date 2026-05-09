import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/siteConfig';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-outline-variant/70 bg-surface/95 shadow-low backdrop-blur-md"
    >
      <nav className="container-page flex min-h-[82px] items-center justify-between py-3">
        <Logo height={46} />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative rounded-full px-5 py-2.5 text-[0.95rem] font-medium transition-all',
                    isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:bg-primary/5 hover:text-on-surface',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={[
                        'absolute left-5 right-5 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform origin-left',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      ].join(' ')}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="btn-sheen hidden lg:inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-white text-[0.95rem] font-semibold shadow-low hover:shadow-high active:scale-95 transition-all"
        >
          Let&apos;s Talk
          <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
        </Link>

        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-outline-variant"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={[
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300',
          open ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul className="container-page flex flex-col gap-1 pb-6">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-4 py-3 text-body-md font-medium transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-on-surface-variant hover:bg-surface-container',
                  ].join(' ')
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block text-center rounded-full bg-primary px-5 py-3 text-white font-semibold"
            >
              Let&apos;s Talk
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
