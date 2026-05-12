const PROMPTS = [
  'What services do you offer?',
  'Which AI solutions do you build?',
  'What technologies do you use?',
  'How can I contact the Pune team?',
];

export default function SuggestedPrompts({ onPick }) {
  return (
    <div className="flex flex-wrap gap-2">
      {PROMPTS.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPick(p)}
          className="rounded-full border border-outline-variant bg-surface-container-lowest px-3 py-1.5 text-label-sm font-medium text-on-surface-variant hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
        >
          {p}
        </button>
      ))}
    </div>
  );
}
