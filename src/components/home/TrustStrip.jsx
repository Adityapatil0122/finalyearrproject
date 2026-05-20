import Reveal from '@/components/ui/Reveal';
import Icon from '@/components/ui/Icon';

const items = [
  { label: 'AI Solutions', icon: 'auto_awesome' },
  { label: 'Website Development', icon: 'public' },
  { label: 'App Development', icon: 'phone_iphone' },
  { label: 'Digital Marketing', icon: 'campaign' },
  { label: 'WhatsApp Business API', icon: 'chat' },
  { label: 'UI/UX + Graphics', icon: 'design_services' },
];

export default function TrustStrip() {
  return (
    <section className="bg-surface-container-low border-y border-outline-variant py-md">
      <div className="container-page">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-xl gap-y-2 text-on-surface-variant">
            {items.map((it) => (
              <li key={it.label} className="flex items-center gap-2 text-label-sm font-semibold">
                <Icon name={it.icon} size={18} className="text-primary" />
                {it.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
