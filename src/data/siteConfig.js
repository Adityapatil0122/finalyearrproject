export const siteConfig = {
  name: 'Finlec Technologies',
  tagline: 'Transforming ideas into digital success.',
  description:
    'Finlec Technologies provides AI implementations, website and app development, digital marketing, WhatsApp Business API, UI/UX design, and graphics design services.',
  email: 'contact@finlectechnologies.com',
  phone: '+91 9960756292',
  whatsapp: '+91 9423636421',
  address: '2nd Floor, Saikripa Building, Trimurti Chowk, Pune-46',
  shortAddress: 'Trimurti Chowk, Pune-46',
  businessHours: ['Monday - Saturday: 10:00 AM - 6:00 PM', 'Sunday: Closed'],
  logo: '/logo1.png',
  logoMark: '/logo2.png',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61557679396584&mibextid=ZbWKw',
    instagram: 'https://www.instagram.com/finlec_technologies?igsh=aG1qN2puN3ZubjI0',
    x: 'https://x.com/finlectech',
    linkedin: '#',
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  {
    label: 'Services',
    to: '/services',
    children: [
      {
        label: 'Website Development',
        description: 'Custom, eCommerce, WordPress',
        to: '/services#web',
      },
      {
        label: 'App Development',
        description: 'Custom, cross-platform, responsive',
        to: '/services#app',
      },
      {
        label: 'Digital Marketing',
        description: 'SEO, social media, campaigns',
        to: '/services#marketing',
      },
      {
        label: 'WhatsApp Business API',
        description: 'API setup, green tick, chatbots',
        to: '/services#whatsapp',
      },
      {
        label: 'UI / UX Design',
        description: 'Research, wireframing, visual design',
        to: '/services#uiux',
      },
      {
        label: 'Graphics Designing',
        description: 'Logos, social media, print',
        to: '/services#graphics',
      },
    ],
  },
  {
    label: 'AI Solutions',
    to: '/ai-solutions',
    children: [
      {
        label: 'AI-Powered Chatbots',
        description: 'Intelligent conversational agents',
        to: '/ai-solutions#chatbots',
      },
      {
        label: 'Custom AI Solutions',
        description: 'Tailored AI development',
        to: '/ai-solutions#custom',
      },
      {
        label: 'AI Integration & API',
        description: 'Seamless platform integration',
        to: '/ai-solutions#integration',
      },
      {
        label: 'Data Analytics & Insights',
        description: 'AI-driven analysis',
        to: '/ai-solutions#analytics',
      },
    ],
  },
  {
    label: 'Products',
    to: '/products',
    children: [
      {
        label: 'Study Room Management App',
        description: 'For Abhyasika and study halls',
        to: '/products#study-room',
      },
      {
        label: 'AI Assistants',
        description: 'Support, leads, internal operations',
        to: '/products#chatbots',
      },
      {
        label: 'Business Dashboards',
        description: 'Reporting and performance views',
        to: '/products#analytics',
      },
    ],
  },
  { label: 'Clients', to: '/clients' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'Contact', to: '/contact' },
];

export const footerColumns = [
  {
    title: 'Features',
    links: [
      { label: 'Study Room Management App', to: '/products#study-room' },
      { label: 'Business Dashboards', to: '/products#analytics' },
      { label: 'AI Assistants', to: '/products#chatbots' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Website Development', to: '/services#web' },
      { label: 'App Development', to: '/services#app' },
      { label: 'Digital Marketing', to: '/services#marketing' },
      { label: 'WhatsApp API', to: '/services#whatsapp' },
      { label: 'UI / UX', to: '/services#uiux' },
      { label: 'Graphics Designing', to: '/services#graphics' },
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      { label: 'AI-Powered Chatbots', to: '/ai-solutions#chatbots' },
      { label: 'Custom AI Solutions', to: '/ai-solutions#custom' },
      { label: 'AI Integration & API', to: '/ai-solutions#integration' },
      { label: 'Data Analytics & Insights', to: '/ai-solutions#analytics' },
    ],
  },
];
