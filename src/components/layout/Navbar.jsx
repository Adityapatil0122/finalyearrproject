import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { navLinks } from '@/data/siteConfig';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);

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
                <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.7rem)] z-50 w-[330px] -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="absolute -top-3 left-0 right-0 h-3" aria-hidden />
                  <div className="overflow-hidden rounded-2xl border border-outline-variant bg-white p-2 shadow-[0_22px_70px_rgba(0,21,45,0.18)] ring-1 ring-black/5">
                    <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low px-3 py-2">
                      <span className="text-label-sm font-semibold uppercase tracking-widest text-primary">
                        {l.label}
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary/10 text-primary">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                    <div className="grid gap-1 pt-2">
                      {l.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="group/item rounded-xl bg-white px-3 py-2.5 transition-colors hover:bg-primary/10 focus-visible:bg-primary/10 focus-visible:outline-none"
                        >
                          <span className="flex items-center justify-between gap-3 text-body-md font-semibold text-on-surface">
                            {child.label}
                            <ArrowRight
                              size={15}
                              className="text-primary opacity-0 transition-all group-hover/item:translate-x-1 group-hover/item:opacity-100"
                            />
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block text-label-sm text-on-surface-variant">
                              {child.description}
                            </span>
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
          'lg:hidden overflow-hidden transition-[max-height,opacity] duration-300',
          open ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <ul
          className="container-page flex max-h-[calc(100vh-70px)] flex-col gap-1 overflow-y-auto pb-6 pt-1"
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
