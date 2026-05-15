import { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles, Loader2, RotateCcw } from 'lucide-react';
import { streamChat } from '@/lib/chatClient';
import ChatMessage from './ChatMessage';
import SuggestedPrompts from './SuggestedPrompts';

const WELCOME = {
  role: 'assistant',
  content:
    "Hi — I'm **Finlec AI**. Ask me anything about our services, products, process, or how to start a project. I'll keep it short and direct.",
};

export default function ChatPanel({ open, onClose }) {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy]);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  const send = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || busy) return;
    setInput('');
    setError('');
    const next = [...messages, { role: 'user', content: text }];
    // Append empty assistant placeholder we'll fill in via stream.
    setMessages([...next, { role: 'assistant', content: '', streaming: true }]);
    setBusy(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    // Send only user/assistant turns (drop welcome) to the API.
    const apiMessages = next
      .filter((_, i) => i !== 0 || next[0].role !== 'assistant')
      .map(({ role, content }) => ({ role, content }));

    let acc = '';
    await streamChat(apiMessages, {
      signal: ctrl.signal,
      onDelta: (delta) => {
        acc += delta;
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: 'assistant', content: acc, streaming: true };
          return copy;
        });
      },
      onDone: () => {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: 'assistant', content: acc || '…', streaming: false };
          return copy;
        });
        setBusy(false);
      },
      onError: (e) => {
        setError(e?.message || 'Something went wrong.');
        setMessages((prev) => prev.slice(0, -1)); // remove placeholder
        setBusy(false);
      },
    });
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([WELCOME]);
    setInput('');
    setError('');
    setBusy(false);
  };

  return (
    <>
      <div
        onClick={onClose}
        className={[
          'fixed inset-0 bg-on-surface/30 backdrop-blur-sm z-40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label="Finlec AI chat"
        data-lenis-prevent
        className={[
          'chat-panel fixed z-50 transition-all duration-300 ease-out',
          'bottom-0 right-0 left-0 sm:left-auto sm:bottom-6 sm:right-6',
          'h-[78svh] max-h-[calc(100svh-1rem)] sm:h-[576px] sm:max-h-[calc(100vh-3rem)] sm:w-[378px]',
          'rounded-t-3xl sm:rounded-3xl bg-surface-container-lowest border border-outline-variant shadow-high overflow-hidden flex flex-col',
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-6 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        {/* Header */}
        <header className="flex items-center justify-between gap-2 px-md py-md border-b border-outline-variant bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="flex items-center gap-2">
            <div className="relative grid h-10 w-10 place-items-center rounded-full bg-primary text-white">
              <Sparkles size={18} />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-secondary border-2 border-surface-container-lowest" />
            </div>
            <div>
              <p className="font-semibold leading-tight">Finlec AI</p>
              <p className="text-label-sm text-on-surface-variant leading-tight">
                Powered by Claude · usually replies instantly
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={reset}
              aria-label="Reset chat"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface-container transition-colors"
            >
              <RotateCcw size={16} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close chat"
              className="grid h-9 w-9 place-items-center rounded-full hover:bg-surface-container transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        {/* Messages */}
        <div ref={listRef} className="flex-1 overflow-y-auto px-md py-md space-y-3 hide-scrollbar">
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} streaming={m.streaming} />
          ))}
          {error && (
            <p className="text-label-sm text-tertiary bg-tertiary/10 rounded-xl px-3 py-2">
              {error}
            </p>
          )}
        </div>

        {/* Suggested prompts (only on first turn) */}
        {messages.length === 1 && !busy && (
          <div className="px-md pb-md">
            <SuggestedPrompts onPick={(p) => send(p)} />
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
          className="border-t border-outline-variant p-md bg-surface-container-lowest flex items-end gap-2"
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            rows={1}
            placeholder="Ask about services, pricing, process…"
            disabled={busy}
            className="flex-1 resize-none rounded-2xl border border-outline-variant bg-surface-container-low px-4 py-2.5 text-body-md focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary max-h-32 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            aria-label="Send"
            className="grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-low hover:shadow-high active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {busy ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
          </button>
        </form>
        <p className="px-md pb-2 text-[10px] text-on-surface-variant text-center">
          Finlec AI can be wrong. For binding answers, please use the{' '}
          <a href="/contact" className="underline">contact form</a>.
        </p>
      </aside>
    </>
  );
}
