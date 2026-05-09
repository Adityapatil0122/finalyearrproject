import ReactMarkdown from 'react-markdown';
import { Sparkles } from 'lucide-react';

export default function ChatMessage({ role, content, streaming = false }) {
  const isUser = role === 'user';
  return (
    <div className={['flex gap-2', isUser ? 'justify-end' : 'justify-start'].join(' ')}>
      {!isUser && (
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-white">
          <Sparkles size={16} />
        </div>
      )}
      <div
        className={[
          'max-w-[80%] rounded-2xl px-4 py-2.5 text-body-md leading-relaxed',
          isUser
            ? 'bg-primary text-white rounded-br-md'
            : 'bg-surface-container text-on-surface rounded-bl-md',
        ].join(' ')}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap">{content}</p>
        ) : (
          <div className="prose prose-sm max-w-none prose-p:my-1.5 prose-li:my-0.5 prose-ul:my-2 prose-ol:my-2 prose-headings:my-2 prose-a:text-primary prose-strong:text-on-surface">
            <ReactMarkdown
              components={{
                a: ({ href, children, ...rest }) => {
                  const isInternal = href?.startsWith('/');
                  return (
                    <a
                      href={href}
                      target={isInternal ? undefined : '_blank'}
                      rel={isInternal ? undefined : 'noopener noreferrer'}
                      className="font-semibold underline underline-offset-2"
                      {...rest}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {content || (streaming ? '…' : '')}
            </ReactMarkdown>
            {streaming && (
              <span
                className="inline-block w-2 h-4 ml-0.5 align-middle bg-primary animate-pulse"
                aria-hidden
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
