export const siteConfig = {
  name: 'Finlec Technologies',
  siteUrl: 'https://finlectechnologies.com',
  tagline: 'Digital services for growing businesses.',
  description:
    'Finlec Technologies builds websites, mobile apps, AI tools, WhatsApp API systems, digital marketing plans, UI/UX designs, and brand graphics for growing businesses.',
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
    label: 'Web Services',
    to: '/services',
    children: [
      {
        label: 'Website Development',
        description: 'Custom sites, eCommerce, WordPress',
        to: '/services#web',
      },
      {
        label: 'App Development',
        description: 'Mobile apps for Android and iOS',
        to: '/services#app',
      },
      {
        label: 'Digital Marketing',
        description: 'SEO, social media, paid campaigns',
        to: '/services#marketing',
      },
      {
        label: 'WhatsApp Business API',
        description: 'API setup, chatbots, broadcasts',
        to: '/services#whatsapp',
      },
      {
        label: 'UI/UX Design',
        description: 'Research, wireframes, screen design',
        to: '/services#uiux',
      },
      {
        label: 'Graphics Designing',
        description: 'Logos, social media, print assets',
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
        description: 'Support and lead chatbots',
        to: '/ai-solutions#chatbots',
      },
      {
        label: 'Custom AI Solutions',
        description: 'AI tools for your workflow',
        to: '/ai-solutions#custom',
      },
      {
        label: 'AI Integration & API',
        description: 'Connect AI with your systems',
        to: '/ai-solutions#integration',
      },
      {
        label: 'Data Analytics & Insights',
        description: 'Dashboards and clear reports',
        to: '/ai-solutions#analytics',
      },
    ],
  },
  {
    label: 'Products',
    to: '/products',
    children: [
      {
        label: 'ITROOTS LMS System',
        description: 'Courses, classes, tests, progress',
        to: '/products#itroots-lms',
      },
      {
        label: 'ITROOTS Website + CMS',
        description: 'Training institute website and CMS',
        to: '/products#itroots-cms',
      },
      {
        label: 'WhatsApp Business Suite',
        description: 'Chat, campaigns, templates, flows',
        to: '/products#whatsapp-business-suite',
      },
      {
        label: 'Insurance Majha',
        description: 'Marathi insurance information website',
        to: '/products#insurance-majha',
      },
      {
        label: 'Quick Print Technology',
        description: 'Custom printing e-commerce website',
        to: '/products#quick-print',
      },
      {
        label: 'Study Room Management App',
        description: 'For Abhyasika and study halls (Coming Soon)',
        to: '/products#study-room',
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
      { label: 'ITROOTS LMS System', to: '/products#itroots-lms' },
      { label: 'WhatsApp Business Suite', to: '/products#whatsapp-business-suite' },
      { label: 'Quick Print Technology', to: '/products#quick-print' },
      { label: 'Study Room Management App', to: '/products#study-room' },
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
