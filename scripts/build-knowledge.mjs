#!/usr/bin/env node
// Compiles site data into a markdown knowledge base for the AI chatbot.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../src');
const OUT = path.join(SRC, 'data', 'knowledge.md');

async function readJsModule(rel) {
  const url = pathToFileURL(path.join(SRC, rel)).href;
  return import(url);
}

async function main() {
  const { siteConfig } = await readJsModule('data/siteConfig.js');
  const { services } = await readJsModule('data/services.js');
  const { aiIndustries, aiSolutions } = await readJsModule('data/aiSolutions.js');
  const { products } = await readJsModule('data/products.js');
  const { caseStudies, clientImpact, clientLogos, clientSignals } = await readJsModule('data/clients.js');
  const { expertise, methodology, stats, techStack } = await readJsModule('data/home.js');

  const blogDir = path.join(SRC, 'content', 'blog');
  const blogFiles = await fs.readdir(blogDir);
  const posts = [];
  for (const f of blogFiles.filter((x) => x.endsWith('.mdx'))) {
    const raw = await fs.readFile(path.join(blogDir, f), 'utf8');
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!fmMatch) continue;
    const fm = Object.fromEntries(
      fmMatch[1].split('\n').map((line) => {
        const [k, ...rest] = line.split(':');
        return [k.trim(), rest.join(':').trim().replace(/^["']|["']$/g, '')];
      })
    );
    posts.push({
      slug: fm.slug || f.replace(/\.mdx$/, ''),
      title: fm.title,
      excerpt: fm.excerpt,
    });
  }

  const out = [];
  out.push('# Finlec Technologies - Knowledge Base for Finlec AI\n');
  out.push(
    "This is the site knowledge base. If a question is not covered here, say so and offer to connect the visitor with the team via the contact page or WhatsApp.\n"
  );

  out.push('## Company');
  out.push(`- **Name:** ${siteConfig.name}`);
  out.push(`- **Tagline:** ${siteConfig.tagline}`);
  out.push(`- **About:** ${siteConfig.description}`);
  out.push(`- **Address:** ${siteConfig.address}`);
  out.push(`- **Email:** ${siteConfig.email}`);
  out.push(`- **Phone:** ${siteConfig.phone}`);
  out.push(`- **WhatsApp:** ${siteConfig.whatsapp || siteConfig.phone}`);
  for (const line of siteConfig.businessHours) out.push(`- **Business hours:** ${line}`);
  out.push('');

  out.push('## Public service areas');
  for (const e of expertise) out.push(`- **${e.title}:** ${e.desc}`);
  out.push('');

  out.push('## Stats / track record');
  for (const s of stats) out.push(`- ${s.value}${s.suffix} ${s.label}`);
  out.push('');

  out.push('## Services');
  for (const s of services) {
    out.push(`### ${s.title}`);
    out.push(s.summary);
    out.push("What's included:");
    for (const f of s.features) out.push(`- ${f}`);
    out.push(`Typical tech/tools: ${s.tech.join(', ')}`);
    out.push('');
  }

  out.push('## AI Solutions');
  for (const s of aiSolutions) {
    out.push(`### ${s.title}`);
    out.push(s.summary);
    for (const f of s.features) out.push(`- ${f}`);
    out.push('');
  }
  out.push(`Industries served by AI pages: ${aiIndustries.map((industry) => industry.label).join(', ')}`);
  out.push('');

  out.push('## Tech stack');
  out.push(techStack.join(', '));
  out.push('');

  out.push('## Product capabilities');
  out.push(`### ${products.featured.name}`);
  out.push(products.featured.tagline);
  out.push(products.featured.description);
  out.push('Highlights:');
  for (const b of products.featured.bullets) out.push(`- ${b}`);
  if (products.focusOverview) {
    out.push('Product-first startup focus:');
    out.push(products.focusOverview);
  }
  if (products.focusPoints?.length) {
    out.push('Product focus points:');
    for (const f of products.focusPoints) out.push(`- ${f.title}: ${f.desc}`);
  }
  out.push('Product tracks:');
  for (const r of products.roadmap) out.push(`- ${r.title}: ${r.desc}`);
  if (products.live?.length) {
    out.push('Live products:');
    for (const p of products.live) {
      out.push(`- ${p.title} (${p.category}): ${p.desc} Live URL: ${p.url}`);
    }
  }
  out.push('');

  out.push('## How we work');
  for (const m of methodology) out.push(`${m.step}. **${m.title}:** ${m.desc}`);
  out.push('');

  out.push('## Trusted clients');
  out.push(clientLogos.map((c) => c.name).join(', '));
  out.push('');

  out.push('## Client impact');
  for (const item of clientImpact) out.push(`- ${item.value}${item.suffix} ${item.label}`);
  out.push('');

  out.push('## Client support areas');
  for (const signal of clientSignals) out.push(`- **${signal.title}:** ${signal.desc}`);
  out.push('');

  out.push('## Service coverage examples');
  for (const c of caseStudies) out.push(`- **${c.title}** (${c.tag}): ${c.summary}`);
  out.push('');

  out.push('## FAQ');
  out.push(`**Which services does Finlec offer?** ${services.map((s) => s.title).join(', ')}.`);
  out.push(`**What AI work is available?** ${aiSolutions.map((s) => s.title).join(', ')}.`);
  out.push(`**Where is the team located?** ${siteConfig.address}.`);
  out.push(`**What are business hours?** ${siteConfig.businessHours.join(' | ')}.`);
  out.push(`**How can I contact Finlec?** Call ${siteConfig.phone}, email ${siteConfig.email}, or use /contact.`);
  out.push('');

  out.push('## Blog posts');
  for (const p of posts) {
    out.push(`### ${p.title}`);
    if (p.excerpt) out.push(p.excerpt);
    out.push(`Full post URL: /blogs/${p.slug}`);
    out.push('');
  }

  out.push('## Contact paths to recommend');
  out.push('- Project brief form: /contact');
  out.push('- WhatsApp chat: floating button on every page');
  out.push(`- Email: ${siteConfig.email}`);
  out.push(`- Phone: ${siteConfig.phone}`);
  out.push('');

  const content = out.join('\n');
  await fs.writeFile(OUT, content, 'utf8');
  const publicCopy = path.resolve(__dirname, '../public/knowledge.md');
  await fs.writeFile(publicCopy, content, 'utf8');
  console.log(`Wrote ${path.relative(process.cwd(), OUT)} (${content.length} chars)`);
  console.log(`Copied to ${path.relative(process.cwd(), publicCopy)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
