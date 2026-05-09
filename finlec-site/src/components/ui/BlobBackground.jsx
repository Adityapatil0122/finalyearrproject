export default function BlobBackground({ className = '' }) {
  return (
    <div className={['pointer-events-none absolute inset-0 overflow-hidden', className].join(' ')} aria-hidden>
      <div
        className="absolute inset-0 opacity-70 signal-grid"
      />
      <div
        className="absolute -left-[10%] top-16 h-56 w-[120%] -rotate-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-3xl"
      />
      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />
    </div>
  );
}
