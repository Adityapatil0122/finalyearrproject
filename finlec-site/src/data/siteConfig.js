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
  },
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'AI Solutions', to: '/ai-solutions' },
  { label: 'Products', to: '/products' },
  { label: 'Clients', to: '/clients' },
  { label: 'Blogs', to: '/blogs' },
];

export const footerColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/' },
      { label: 'Clients', to: '/clients' },
      { label: 'Blogs', to: '/blogs' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Website Development', to: '/services#web' },
      { label: 'App Development', to: '/services#app' },
      { label: 'Digital Marketing', to: '/services#marketing' },
      { label: 'WhatsApp API', to: '/services#whatsapp' },
      { label: 'UI / UX', to: '/services#uiux' },
      { label: 'Graphics Design', to: '/services#graphics' },
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
