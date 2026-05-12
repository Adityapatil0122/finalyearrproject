# Deploying Finlec Site to Hostinger

The site is a Vite SPA + a tiny PHP proxy for the AI chatbot. Both go on Hostinger shared/Premium hosting.

## What gets uploaded

After `npm run build` you have a `dist/` directory. Its **contents** (not the folder itself) go inside Hostinger's `public_html/`. Final layout on the server:

```
public_html/
├── index.html
├── favicon.svg
├── logo1.png
├── logo2.png
├── knowledge.md          ← knowledge base (blocked from public access via .htaccess)
├── _redirects            ← can stay; ignored by Apache
├── .htaccess             ← SPA fallback + caching + blocks knowledge.md
├── api/
│   └── chat.php          ← Anthropic proxy
└── assets/
    ├── index-*.js
    ├── ChatPanel-*.js
    ├── index-*.css
    └── inter-*.{woff,woff2}
```

## One-time setup

### 1. Create the API key on Anthropic
- Go to https://console.anthropic.com/settings/keys → **Create Key**.
- Top up a small balance ($5 is plenty for a small marketing site).

### 2. Set the API key on Hostinger

Pick **one** of these — easiest first:

**A) hPanel environment variable (Premium / Business plans)**
- hPanel → Hosting → Manage → Advanced → "PHP configuration" → environment variables
- Add: `ANTHROPIC_API_KEY` = `sk-ant-...`
- Save. PHP picks it up via `getenv()`.

**B) Secrets file outside webroot (works on every plan)**
- Connect via File Manager or FTP.
- Create `/home/<your-user>/secrets.php` (one level **above** `public_html/`):
  ```php
  <?php
  $apiKey = 'sk-ant-...';
  ```
- `chat.php` already falls back to this file when `getenv()` returns nothing.

**C) `.htaccess` (works but exposes key in plaintext on the server)**
- In `public_html/.htaccess`, add:
  ```
  SetEnv ANTHROPIC_API_KEY sk-ant-...
  ```
- Less ideal — the key sits in a file inside the webroot. Use A or B if available.

### 3. Confirm PHP version + cURL
- hPanel → Advanced → PHP configuration → choose **PHP 8.1+**.
- cURL is enabled by default on every Hostinger plan.

## Build + upload

```bash
# from C:\finlectechnologies\finlec-site
npm install
npm run build
```

Then upload **the contents of `dist/`** to `public_html/`:

- **File Manager:** zip `dist/`, upload, extract into `public_html/`.
- **FTP/SFTP:** point to `/public_html/` and sync the `dist/` contents.
- **Hostinger Git deploy:** point your branch at `public_html/`, set build command `npm run build` and publish directory `dist/` (Premium plans only).

## Smoke test

After upload visit:

1. `https://finlectechnologies.com/` — site loads, navbar shows the logo, all routes work.
2. `https://finlectechnologies.com/services` — direct URL works (proves `.htaccess` SPA fallback).
3. `https://finlectechnologies.com/knowledge.md` — should return **403 Forbidden** (correct — protected).
4. Click the **sparkle FAB** bottom-right → chat panel opens.
5. Type "What services do you offer?" → bot streams back a reply listing the 6 services.

If the chat says **"Server is missing ANTHROPIC_API_KEY"** — your env var didn't take. Re-check step 2.

## Updating content later

To refresh the bot's knowledge after editing `src/data/*.js` or adding a blog post:

```bash
npm run knowledge   # regenerate src/data/knowledge.md and public/knowledge.md
npm run build       # rebuild the site
# upload dist/ contents again (or just dist/knowledge.md if that's all that changed)
```

## Cost expectations

With Claude Haiku 4.5 + prompt caching of the 7-8 KB knowledge base:
- First message in a conversation: ~$0.001
- Follow-up messages (cache hit): ~$0.0003
- ~3000 chats per dollar.

## Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| Chat replies "Server is missing ANTHROPIC_API_KEY" | Env var not loaded | See step 2; restart PHP-FPM via hPanel if needed |
| Replies arrive as one big block (no streaming) | Output buffering / gzip not disabled on PHP | Confirm PHP 8.1+; the `chat.php` already disables zlib + apache_setenv |
| `/services` 404 on direct visit | `.htaccess` not uploaded | Re-upload `.htaccess`; hPanel → File Manager → "Show hidden files" |
| Chat 405 Method Not Allowed | hosting blocks POST to .php | Switch PHP handler in hPanel → PHP Configuration |
| Blog images / logos broken | Wrong path | Confirm `logo1.png`, `logo2.png` are at `public_html/logo1.png` etc. |
