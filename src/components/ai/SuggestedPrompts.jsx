import { quickChatAnswers } from '@/data/quickChatAnswers';

export default function SuggestedPrompts({ onPick }) {
  return (
    <div className="flex flex-wrap gap-2">
      {quickChatAnswers.map(({ question }) => (
        <button
          key={question}
          type="button"
          onClick={() => onPick(question)}
          className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-sm font-medium text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
        >
          {question}
        </button>
      ))}
    </div>
  );
}
