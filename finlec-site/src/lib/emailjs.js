import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

let initialized = false;
function ensureInit() {
  if (initialized || !PUBLIC_KEY) return;
  emailjs.init({ publicKey: PUBLIC_KEY });
  initialized = true;
}

export async function sendContactForm(payload) {
  ensureInit();
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    // Demo mode: simulate latency so the UI flow can be reviewed.
    await new Promise((r) => setTimeout(r, 900));
    return { ok: true, demo: true };
  }
  const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload);
  return { ok: result.status === 200, demo: false, result };
}
