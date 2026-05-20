import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  BookOpen,
  ChevronDown,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  Menu,
  MessageCircle,
  Palette,
  PenTool,
  Plug,
  Printer,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
} from 'lucide-react';
import { navLinks } from '@/data/siteConfig';
import Logo from './Logo';

const dropdownIcons = [
  Sparkles,
  Smartphone,
  Megaphone,
  MessageCircle,
  PenTool,
  Palette,
  Bot,
  Wrench,
  Plug,
  BarChart3,
  GraduationCap,
  LayoutDashboard,
  ShieldCheck,
  Printer,
  BookOpen,
];

const dropdownIconColors = [
  'text-primary',
  'text-secondary',
  'text-emerald-600',
  'text-sky-600',
  'text-violet-600',
  'text-rose-600',
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeMobileMenu = () => {
    setMobileGroup(null);
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileGroup(null);
        setOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileGroup(null);
        setOpen(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  useEffect(() => {
    const closeDropdownOnScroll = () => {
      setOpenDropdown(null);

      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    };

    window.addEventListener('scroll', closeDropdownOnScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', closeDropdownOnScroll);
    };
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 overflow-visible border-b border-outline-variant/70 bg-surface/95 shadow-low backdrop-blur-md"
      >
        <nav className="container-page flex min-h-[70px] items-center justify-between py-2 md:min-h-[82px] md:py-3">
        <Logo height={42} />

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <li
              key={l.to}
              className="group relative"
              onMouseEnter={() => {
                if (l.children?.length) setOpenDropdown(l.to);
              }}
              onMouseOver={() => {
                if (l.children?.length) setOpenDropdown(l.to);
              }}
              onMouseLeave={() => {
                if (l.children?.length) setOpenDropdown(null);
              }}
              onFocus={() => {
                if (l.children?.length) setOpenDropdown(l.to);
              }}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenDropdown(null);
                }
              }}
            >
              <NavLink
                to={l.to}
                end={l.to === '/'}
                onClick={() => {
                  setOpenDropdown(l.children?.length ? l.to : null);
                }}
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
                        className={[
                          'transition-transform duration-300',
                          openDropdown === l.to ? 'rotate-180' : '',
                        ].join(' ')}
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
                <div
                  className={[
                    'nav-dropdown-panel absolute left-0 top-full z-50 w-[20rem] pt-2',
                    openDropdown === l.to
                      ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                      : 'pointer-events-none translate-y-2 scale-[0.98] opacity-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden rounded-xl border border-outline-variant/90 bg-white/95 p-2 shadow-lg backdrop-blur-md">
                    <div className="grid grid-cols-1">
                      {l.children.map((child, childIndex) => {
                        const ChildIcon = dropdownIcons[childIndex % dropdownIcons.length];
                        const iconColor = dropdownIconColors[childIndex % dropdownIconColors.length];

                        return (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setOpenDropdown(null)}
                          className="nav-child-link flex items-start gap-3 border-t border-outline-variant/50 px-3 py-3 first:border-t-0 hover:bg-surface-container/80 focus-visible:bg-surface-container focus-visible:outline-none"
                        >
                          <ChildIcon
                            size={18}
                            strokeWidth={2.1}
                            className={['mt-0.5 shrink-0', iconColor].join(' ')}
                          />
                          <span className="min-w-0">
                            <span className="block font-semibold leading-snug text-on-surface">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-1 block text-xs leading-relaxed text-on-surface-variant">
                                {child.description}
                              </span>
                            ) : null}
                          </span>
                        </Link>
                        );
                      })}
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
          Let&apos;s talk
          <ArrowRight size={20} />
        </Link>

        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-lg border border-outline-variant bg-surface-container-lowest/90 transition-all active:scale-95"
          onClick={() => (open ? closeMobileMenu() : setOpen(true))}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        </nav>
      </header>

      <div
        className={[
          'mobile-nav-overlay fixed inset-0 z-[90] lg:hidden',
          open ? 'mobile-nav-open opacity-100 visible' : 'pointer-events-none invisible opacity-0',
        ].join(' ')}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 h-full w-full bg-on-surface/35 backdrop-blur-[2px]"
          onClick={closeMobileMenu}
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
        />

        <aside
          id="mobile-nav-panel"
          className={[
            'mobile-nav-panel absolute right-0 top-0 flex h-[100svh] max-w-full flex-col border-l border-outline-variant bg-surface-container-lowest shadow-2xl',
            open ? 'translate-x-0' : 'translate-x-full',
          ].join(' ')}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex min-h-[70px] shrink-0 items-center justify-between gap-3 border-b border-outline-variant/70 px-4 py-3">
            <Logo height={38} />
            <button
              type="button"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-outline-variant bg-white text-on-surface transition-all hover:bg-surface-container active:scale-95"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav
            className="min-h-0 flex-1 overflow-y-auto px-4 py-4"
            data-lenis-prevent
          >
            <ul className="grid gap-2">
              {navLinks.map((l, index) => {
                const hasChildren = Boolean(l.children?.length);
                const isGroupOpen = mobileGroup === l.to;

                return (
                  <li
                    key={l.to}
                    className="mobile-nav-item"
                    style={{ '--nav-item-index': index }}
                  >
                    <div className="flex items-stretch gap-2">
                      <NavLink
                        to={l.to}
                        end={l.to === '/'}
                        onClick={closeMobileMenu}
                        className={({ isActive }) =>
                          [
                            'mobile-nav-link flex min-h-12 flex-1 items-center rounded-xl px-4 text-body-md font-semibold',
                            isActive
                              ? 'bg-primary/10 text-primary'
                              : 'text-on-surface hover:bg-surface-container',
                          ].join(' ')
                        }
                      >
                        {l.label}
                      </NavLink>
                      {hasChildren ? (
                        <button
                          type="button"
                          className="mobile-nav-link grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-surface-container text-on-surface-variant hover:bg-primary/10 hover:text-primary"
                          onClick={() =>
                            setMobileGroup((current) =>
                              current === l.to ? null : l.to
                            )
                          }
                          aria-expanded={isGroupOpen}
                          aria-label={`Toggle ${l.label} links`}
                        >
                          <ChevronDown
                            size={18}
                            className={[
                              'transition-transform duration-300',
                              isGroupOpen ? 'rotate-180' : '',
                            ].join(' ')}
                          />
                        </button>
                      ) : null}
                    </div>

                    {hasChildren ? (
                      <div
                        className={[
                          'mobile-subnav grid overflow-hidden',
                          isGroupOpen
                            ? 'mt-2 grid-rows-[1fr] opacity-100'
                            : 'mt-0 grid-rows-[0fr] opacity-0',
                        ].join(' ')}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="ml-2 grid gap-1 border-l border-outline-variant pl-3 py-1">
                            {l.children.map((child) => (
                              <Link
                                key={child.to}
                                to={child.to}
                                onClick={closeMobileMenu}
                                className="mobile-nav-child rounded-lg px-3 py-2 text-body-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-outline-variant/70 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="btn-sheen inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-5 py-3 text-white font-semibold shadow-low active:scale-95"
            >
              Let&apos;s talk
              <ArrowRight size={19} />
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
