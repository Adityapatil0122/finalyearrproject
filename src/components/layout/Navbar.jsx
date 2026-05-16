import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/siteConfig';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-outline-variant/70 bg-surface/95 shadow-low backdrop-blur-md"
    >
      <nav className="container-page flex min-h-[70px] items-center justify-between py-2 md:min-h-[82px] md:py-3">
        <Logo height={42} />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.to} className="group relative">
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  [
                    'relative inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-all',
                    isActive
                      ? 'text-primary'
                      : 'text-on-surface-variant hover:bg-primary/5 hover:text-on-surface',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    {l.children?.length ? (
                      <ChevronDown
                        size={15}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    ) : null}
                    <span
                      className={[
                        'absolute left-5 right-5 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform origin-left',
                        isActive ? 'scale-x-100' : 'scale-x-0',
                      ].join(' ')}
                    />
                  </>
                )}
              </NavLink>
              {l.children?.length ? (
                <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 w-64 translate-y-1 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-md border border-outline-variant bg-white p-2 shadow-lg">
                    <div className="grid grid-cols-1 gap-1">
                      {l.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="block rounded-md p-3 transition-colors hover:bg-surface-container focus-visible:bg-surface-container focus-visible:outline-none"
                        >
                          <div className="font-medium text-on-surface">
                            {child.label}
                          </div>
                          {child.description ? (
                            <div className="mt-0.5 text-xs text-on-surface-variant">
                              {child.description}
                            </div>
                          ) : null}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
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
          className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-outline-variant bg-surface-container-lowest/90 transition-all active:scale-95"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        className={[
          'lg:hidden overflow-hidden border-t border-outline-variant/70 bg-surface/98 backdrop-blur-md transition-[max-height,opacity,transform] duration-300',
          open
            ? 'max-h-[calc(100svh-70px)] translate-y-0 opacity-100'
            : 'max-h-0 -translate-y-2 opacity-0',
        ].join(' ')}
      >
        <ul
          className="container-page flex max-h-[calc(100svh-70px)] flex-col gap-1 overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-2"
          data-lenis-prevent
        >
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
              {l.children?.length ? (
                <div className="ml-3 mt-1 grid gap-1 border-l border-outline-variant pl-3">
                  {l.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-body-sm font-medium text-on-surface-variant transition-colors hover:bg-surface-container hover:text-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
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
