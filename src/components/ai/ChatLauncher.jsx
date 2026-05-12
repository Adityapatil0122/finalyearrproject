import { lazy, Suspense, useState } from 'react';
import { Sparkles } from 'lucide-react';

// Lazy-load the panel so react-markdown isn't in the initial bundle.
const ChatPanel = lazy(() => import('./ChatPanel'));

export default function ChatLauncher() {
  const [open, setOpen] = useState(false);
  const [primed, setPrimed] = useState(false);

  const launch = () => {
    setPrimed(true);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={launch}
        onMouseEnter={() => setPrimed(true)}
        onFocus={() => setPrimed(true)}
        aria-label="Open Finlec AI chat"
        className={[
          'group interactive-surface relative grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-high transition-transform hover:scale-105 active:scale-95 sm:h-14 sm:w-14',
          open ? 'opacity-0 pointer-events-none' : 'opacity-100',
        ].join(' ')}
      >
        <span
          className="absolute inset-0 rounded-full bg-primary opacity-50 animate-ping"
          aria-hidden
        />
        <Sparkles size={26} />
        <span className="absolute right-full mr-3 whitespace-nowrap rounded-full bg-on-surface text-white text-label-sm font-semibold px-3 py-1.5 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
          Ask Finlec AI
        </span>
      </button>
      {primed && (
        <Suspense fallback={null}>
          <ChatPanel open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
