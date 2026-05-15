import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { scrollToTop } from '@/lib/lenis';
import ChatLauncher from '@/components/ai/ChatLauncher';

const WHATSAPP_NUMBER = (siteConfig.whatsapp || siteConfig.phone || '')
  .replace(/[^\d]/g, '');
const WHATSAPP_PREFILL = encodeURIComponent(
  "Hi Finlec — I'd like to talk about a project."
);

function WhatsAppIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.42 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.39.11-.51.12-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.55.12.16 1.73 2.65 4.2 3.71.59.25 1.04.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.18-.46-.31z"/>
    </svg>
  );
}

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_PREFILL}`
    : '#';

  return (
    <div className="floating-actions fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 print:hidden sm:bottom-6 sm:right-6 sm:gap-3">
      <button
        type="button"
        onClick={() => scrollToTop({ smooth: true })}
        aria-label="Back to top"
        className={[
          'interactive-surface grid h-11 w-11 place-items-center rounded-full bg-on-surface text-white shadow-high transition-all duration-300 hover:bg-primary active:scale-95 sm:h-12 sm:w-12',
          showTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none',
        ].join(' ')}
      >
        <ArrowUp size={20} />
      </button>

      <ChatLauncher />

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group interactive-surface relative grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-high transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden />
        <WhatsAppIcon size={28} />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-on-surface text-white text-label-sm font-semibold px-3 py-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          Chat with us
        </span>
      </a>
    </div>
  );
}
