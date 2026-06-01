import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Bot,
  Loader2,
  MessageSquare,
  RotateCcw,
  SendHorizontal,
  ShieldCheck,
} from 'lucide-react';
import { streamChat } from '@/lib/chatClient';

const LIVE_FALLBACK_NOTICE =
  'Using local demo knowledge while the live AI endpoint is unavailable.';

const WELCOME_MESSAGE = {
  role: 'assistant',
  content: "Hello! I'm your Finlec AI assistant. Ask me anything about AI solutions.",
};

const QUICK_PROMPTS = [
  'Which AI solution is right for my business?',
  'Can AI connect with my website or CRM?',
  'How long does implementation take?',
  'Is customer data secure?',
];

const LOCAL_REPLIES = [
  {
    match: ['price', 'cost', 'budget'],
    reply:
      'AI project pricing depends on scope, integrations, data, and support needs. Share your workflow on the Contact page and Finlec can suggest the right package.',
  },
  {
    match: ['time', 'week', 'implement', 'deploy'],
    reply:
      'A focused AI workflow can often start in 2-4 weeks. Larger tools with custom data, dashboards, and API integrations usually need 6-12 weeks.',
  },
  {
    match: ['integrat', 'crm', 'website', 'whatsapp', 'api'],
    reply:
      'Yes. Finlec can connect AI with websites, mobile apps, CRM tools, WhatsApp flows, ticketing systems, databases, and custom APIs.',
  },
  {
    match: ['secure', 'privacy', 'data', 'gdpr'],
    reply:
      'Security can be built in with controlled data access, encrypted communication, and privacy-aware workflows for sensitive business data.',
  },
  {
    match: ['chatbot', 'support', 'customer'],
    reply:
      'AI chatbots are useful for 24/7 support, lead capture, FAQs, booking flows, internal knowledge, and handoff to a human team when needed.',
  },
  {
    match: ['analytics', 'dashboard', 'insight', 'data'],
    reply:
      'Finlec can build AI dashboards for performance tracking, predictive insights, customer behavior, operational reports, and decision support.',
  },
  {
    match: ['service', 'offer', 'what do you'],
    reply:
      'Finlec AI work includes AI chatbots, custom AI tools, AI integrations, analytics dashboards, workflow automation, and API-based AI features.',
  },
  {
    match: ['start', 'contact', 'journey'],
    reply:
      'To start, share the business problem, the tools you already use, and the result you want. Finlec can map the best AI solution from there.',
  },
];

const DEFAULT_LOCAL_REPLY =
  'I can help with AI chatbots, custom AI tools, integrations, analytics, security, timelines, and getting started. Tell me what you want AI to do in your business.';

function localReply(text) {
  const question = text.toLowerCase();

  if (/\b(hi|hello|hey|namaste)\b/.test(question)) {
    return "Hello! I can help you choose the right Finlec AI solution for your business.";
  }

  return (
    LOCAL_REPLIES.find(({ match }) => match.some((keyword) => question.includes(keyword)))
      ?.reply || DEFAULT_LOCAL_REPLY
  );
}

function toApiMessages(messages) {
  return messages
    .filter((_, index) => !(index === 0 && messages[0].role === 'assistant'))
    .map(({ role, content }) => ({ role, content }));
}

function updateLastAssistant(setMessages, update) {
  setMessages((current) => {
    const next = [...current];
    next[next.length - 1] = {
      ...next[next.length - 1],
      ...update,
    };
    return next;
  });
}

function useAssistantChat() {
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState('');
  const abortRef = useRef(null);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, busy]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const focusInput = () => {
    requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  };

  const reset = () => {
    abortRef.current?.abort();
    setMessages([WELCOME_MESSAGE]);
    setInput('');
    setBusy(false);
    setNotice('');
    focusInput();
  };

  const send = async (textOverride) => {
    const text = (textOverride ?? input).trim();
    if (!text || busy) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setInput('');
    setNotice('');
    setBusy(true);

    const conversation = [...messages, { role: 'user', content: text }];
    setMessages([...conversation, { role: 'assistant', content: '', streaming: true }]);

    let streamedReply = '';
    let usedFallback = false;

    await streamChat(toApiMessages(conversation), {
      signal: controller.signal,
      onDelta: (delta) => {
        streamedReply += delta;
        updateLastAssistant(setMessages, {
          content: streamedReply,
          streaming: true,
        });
      },
      onError: () => {
        usedFallback = true;
      },
    });

    if (controller.signal.aborted) return;

    const reply = streamedReply.trim() || localReply(text);
    usedFallback = usedFallback || !streamedReply.trim();

    updateLastAssistant(setMessages, {
      content: reply,
      streaming: false,
    });

    setNotice(usedFallback ? LIVE_FALLBACK_NOTICE : '');
    setBusy(false);
    focusInput();
  };

  return {
    busy,
    input,
    inputRef,
    listRef,
    messages,
    notice,
    reset,
    send,
    setInput,
  };
}

function MarkdownLink({ href, children, ...props }) {
  const isInternal = href?.startsWith('/');

  return (
    <a
      href={href}
      target={isInternal ? undefined : '_blank'}
      rel={isInternal ? undefined : 'noopener noreferrer'}
      {...props}
    >
      {children}
    </a>
  );
}

function ChatMessage({ message }) {
  const isUser = message.role === 'user';

  return (
    <div className={['ai-hero-assistant-message', isUser ? 'is-user' : 'is-assistant'].join(' ')}>
      {!isUser ? (
        <span className="ai-hero-assistant-mini" aria-hidden>
          <Bot size={14} />
        </span>
      ) : null}
      <div className="ai-hero-assistant-bubble">
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="ai-hero-assistant-markdown">
            <ReactMarkdown components={{ a: MarkdownLink }}>
              {message.content || (message.streaming ? '...' : '')}
            </ReactMarkdown>
            {message.streaming ? <span className="ai-hero-assistant-cursor" aria-hidden /> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default function AiHeroAssistant() {
  const {
    busy,
    input,
    inputRef,
    listRef,
    messages,
    notice,
    reset,
    send,
    setInput,
  } = useAssistantChat();

  return (
    <article className="ai-hero-assistant-card" aria-label="Finlec AI assistant demo">
      <header className="ai-hero-assistant-header">
        <div className="flex min-w-0 items-center gap-3">
          <div className="ai-hero-assistant-avatar">
            <MessageSquare size={21} />
          </div>
          <div className="min-w-0">
            <h2>Finlec AI Assistant</h2>
            <p>Ask about chatbots, tools, integrations, or analytics</p>
          </div>
        </div>
        <div className="ai-hero-assistant-online">
          <span aria-hidden />
          Online
        </div>
      </header>

      <div className="ai-hero-assistant-window">
        <div ref={listRef} className="ai-hero-assistant-messages" data-lenis-prevent>
          {messages.map((message, index) => (
            <ChatMessage key={`${message.role}-${index}`} message={message} />
          ))}
        </div>

        <form
          className="ai-hero-assistant-input"
          onSubmit={(event) => {
            event.preventDefault();
            send();
          }}
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            disabled={busy}
            placeholder="Ask anything..."
            aria-label="Ask Finlec AI Assistant"
          />
          <button type="submit" disabled={busy || !input.trim()} aria-label="Send message">
            {busy ? <Loader2 size={18} className="animate-spin" /> : <SendHorizontal size={18} />}
          </button>
        </form>
      </div>

      <footer className="ai-hero-assistant-footer">
        <div className="ai-hero-assistant-prompts" aria-label="Suggested questions">
          {QUICK_PROMPTS.map((prompt, index) => (
            <button
              key={prompt}
              type="button"
              onClick={() => send(prompt)}
              disabled={busy}
              title={prompt}
              aria-label={prompt}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="ai-hero-assistant-actions">
          <span>
            <ShieldCheck size={15} />
            Secure
          </span>
          <button type="button" onClick={reset}>
            <RotateCcw size={14} />
            Reset
          </button>
        </div>
      </footer>

      <p className="ai-hero-assistant-notice" aria-live="polite">
        {notice}
      </p>
    </article>
  );
}
