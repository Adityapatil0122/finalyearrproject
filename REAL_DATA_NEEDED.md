# Real Data Needed to Replace Placeholders

Your live site `https://finlectechnologies.com/` is fully client-side rendered, so I couldn't scrape its actual content. Below is **every placeholder** in the rebuild that needs a real value before launch. Group A is critical (anything visitor-facing); Group B is nice-to-have polish.

---

## Group A — Must replace before going live

### 1. Contact details
File: `src/data/siteConfig.js`

| Field | Current placeholder | What to send me |
|---|---|---|
| `phone` | `+91 90000 00000` | Real Indian phone number |
| `whatsapp` | `+919000000000` | WhatsApp business number (E.164 format, no spaces) |
| `email` | `hello@finlectechnologies.com` | Confirm this is correct, or send the real one |
| `address` | `Pune, Maharashtra, India` | Confirm + add street / building if you want it on the contact page |
| `social.linkedin` | placeholder URL | Real LinkedIn company URL |
| `social.twitter` | placeholder URL | Real X/Twitter handle URL |
| `social.instagram` | placeholder URL | Real Instagram URL |
| `social.github` | placeholder URL | Real GitHub URL (or remove if you don't use it) |

### 2. Stats / track record
File: `src/data/home.js` → `stats`

Currently: `50+ projects shipped`, `20+ active clients`, `48 hrs avg reply`, `5 yrs operating since`.

Send me the real values. Even rough numbers are fine — but they should be defensible if a prospect asks for proof.

### 3. Client logos / "Trusted by" row
File: `src/data/clients.js` → `clientLogos`

Currently shows abstract sector chips ("D2C Beauty Brand", "EdTech Platform", etc.).

Send me **either**:
- A list of real client names you have permission to display + their logo files (PNG/SVG, ideally on transparent backgrounds), **or**
- Confirmation that we should keep the abstract sector chips and abandon real names

### 4. Testimonials
File: `src/data/clients.js` → `testimonials`

Currently 3 anonymised quotes ("VP Product · B2B SaaS · Bengaluru" etc.).

Send me real quotes if you have them — even one or two — with the person's name, role, company (and ideally permission to publish + a headshot URL). If you don't have any yet, I can keep the anonymised version or remove the section.

### 5. Case studies
File: `src/data/clients.js` → `caseStudies`

Currently 3 stylised summaries (fintech rebuild, D2C storefront, AI copilot). They aren't false but they're not specific to any client.

Send me details on 2–3 real launches — what the client did, what we built, the measurable outcome. I'll write them up in the same style. (If we don't have shareable case studies yet, I'll remove this section and replace with a single "Selected work in progress" placeholder.)

### 6. Portfolio rail (Home page → "Selected work")
File: `src/data/home.js` → `portfolio`

Five project cards titled "Northwind Customer Portal", "Globex AI Copilot", etc. — these are sitcom names. Replace with real project shots (or remove the rail entirely if we don't have public work to show).

### 7. Founder / team page (optional but recommended)
Not built yet — would be a new `/about` or `/team` route with founder photos + bios.

If you send me 1–4 names with: photo URL, role, one-line bio, LinkedIn URL — I'll add a polished team section.

### 8. Real images
The site is currently using Unsplash placeholders for: hero, services backgrounds, blog covers, methodology, products. Replace with your real photography / mockups when ready (drop into `public/assets/` and update the URLs in the data files).

---

## Group B — Polish (do whenever you can)

| Item | What's there now | What it should be |
|---|---|---|
| Blog posts | 3 placeholder MDX posts I drafted | Posts you actually want published. Drop new `.mdx` files in `src/content/blog/` |
| FAQ entries | 6 generic agency-style Q&As | Tweak the answers (in `src/components/home/FAQ.jsx`) to match your real positioning |
| WhyUs pillars | 4 generic value props | Confirm or rewrite in `src/components/home/WhyUs.jsx` |
| TrustStrip badges | "GDPR-ready", "WCAG-AA", "ISO-27001 mindset", "Source-code ownership", "Quarterly roadmap reviews" | Remove any that aren't true; add real certifications you do hold |
| OG image | None (missing) | Send a 1200×630 social preview image; drop at `public/og.png` |
| Favicon | Generic blue F-mark SVG | Replace `public/favicon.svg` with the real Finlec icon |

---

## Tell me what you can share and I'll wire it all in.

Reply with whichever bits you have ready. For each one I can either:
1. Plug it in directly (real names, numbers, URLs, copy)
2. Keep the abstract version (e.g. "30% of clients are pre-Series A")
3. Remove the section entirely (e.g. drop case-studies if there's nothing to show yet)

Once Group A is in, the site is launch-ready.
