import { siteConfig } from './siteConfig';

export const quickChatAnswers = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer **website development, mobile app development, UI/UX design, graphic design, digital marketing, WhatsApp Business API, AI tools, and automation workflows** for growing businesses.',
  },
  {
    question: 'Which AI solutions do you build?',
    answer:
      'We build **AI chatbots, support assistants, lead capture bots, custom AI tools, API integrations, workflow automation, and data/report assistants** for business teams.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We work with **React, Vite, Next.js, Node.js, PHP, MySQL, APIs, CMS/admin panels, WhatsApp Business API, automation tools, and AI model integrations**. We choose the stack based on the project goal.',
  },
  {
    question: 'How can I contact the Pune team?',
    answer: `You can contact our Pune team through the [contact page](/contact), email us at **${siteConfig.email}**, call **${siteConfig.phone}**, or WhatsApp **${siteConfig.whatsapp}**. Office: **${siteConfig.shortAddress}**.`,
  },
];

export function getQuickChatAnswer(text) {
  const normalized = text.trim().toLowerCase();
  return quickChatAnswers.find((item) => item.question.toLowerCase() === normalized)?.answer;
}
