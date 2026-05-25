const servicePath = (slug) => `/services/${slug}`;

export const serviceDetailPages = [
  {
    slug: 'website-development',
    serviceId: 'web',
    path: servicePath('website-development'),
    navLabel: 'Website Development',
    eyebrow: 'Website Development',
    title: 'Transform Your Digital Presence with Custom Web Solutions',
    description:
      'Create stunning, high-performance websites that drive engagement, conversions, and growth for your business. Our expert team delivers tailored web experiences that represent your brand perfectly.',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Developer workspace showing code and website development tools',
    highlights: [
      { title: 'Modern Design', description: 'Stunning visuals that captivate users' },
      { title: 'Clean Code', description: 'Optimized performance and maintainability' },
      { title: 'Robust Backend', description: 'Powerful server-side solutions' },
      { title: 'Global Reach', description: 'SEO-optimized for maximum visibility' },
    ],
    heroVisual: {
      type: 'website',
      sceneTitle: 'site-build.tsx',
      background:
        'radial-gradient(circle at 12% 18%, rgba(56,189,248,0.55), transparent 34%), radial-gradient(circle at 82% 16%, rgba(34,211,238,0.34), transparent 30%), linear-gradient(135deg, #07162f 0%, #0753b6 48%, #00a8d8 100%)',
      accent: '#67e8f9',
      accent2: '#f8fafc',
      chips: ['React build', 'SEO schema', 'Deploy OK'],
      metrics: [
        { value: '0.8s', label: 'load time' },
        { value: '99', label: 'perf score' },
        { value: '24/7', label: 'uptime watch' },
      ],
    },
    seo: {
      title: 'Website Development Services | Finlec Technologies',
      description:
        'Custom website development, eCommerce solutions, WordPress development, responsive design, SEO-friendly websites, and maintenance from Finlec Technologies.',
      keywords: ['website development', 'custom website', 'eCommerce development', 'WordPress development'],
    },
    offerSection: {
      eyebrow: 'Our Services',
      title: 'What We Offer',
      description:
        'Our website development services create custom solutions that drive results. From responsive designs to complex web applications, we build websites that stand out.',
    },
    offerings: [
      {
        icon: 'code',
        title: 'Custom Website Development',
        description:
          'Tailor-made websites designed specifically for your business needs. We create unique, high-performance websites that align with your brand and business objectives.',
        features: [
          'Custom UI/UX Design',
          'Scalable Architecture',
          'Performance Optimization',
          'Brand Integration',
          'Custom Functionality',
        ],
      },
      {
        icon: 'shopping_bag',
        title: 'eCommerce Solutions',
        description:
          'Comprehensive online store development with secure payment gateways, inventory management, and user-friendly interfaces to maximize your sales potential.',
        features: [
          'Secure Payment Integration',
          'Inventory Management',
          'Order Processing',
          'Customer Accounts',
          'Analytics Integration',
        ],
      },
      {
        icon: 'public',
        title: 'WordPress Development',
        description:
          'Expert WordPress website creation with custom themes, plugins, and optimizations. We build flexible, scalable WordPress solutions that are easy to manage.',
        features: [
          'Custom Theme Development',
          'Plugin Integration',
          'Performance Tuning',
          'Security Hardening',
          'Content Management',
        ],
      },
      {
        icon: 'phone_iphone',
        title: 'Responsive Design',
        description:
          'Mobile-first websites that provide seamless experiences across all devices. Our responsive designs ensure your site looks and functions perfectly on any screen size.',
        features: [
          'Mobile-First Design',
          'Cross-Device Testing',
          'Performance Optimization',
          'Touch-Friendly Interface',
          'Flexible Layouts',
        ],
      },
      {
        icon: 'query_stats',
        title: 'SEO-Friendly Websites',
        description:
          'Websites built with search engine optimization in mind, including proper structure, fast loading speeds, and clean code to help improve your search rankings.',
        features: [
          'SEO Best Practices',
          'Fast Loading Speed',
          'Schema Markup',
          'Clean Code Structure',
          'Performance Metrics',
        ],
      },
      {
        icon: 'shield',
        title: 'Website Maintenance',
        description:
          'Ongoing support and maintenance services to keep your website secure, updated, and performing at its best through regular monitoring and updates.',
        features: [
          'Regular Updates',
          'Security Monitoring',
          'Performance Optimization',
          'Backup Management',
          'Technical Support',
        ],
      },
    ],
    showcase: {
      eyebrow: 'Technology Stack',
      title: 'Cutting-Edge Technologies We Master',
      description:
        'We leverage the most powerful, modern web technologies to build robust, scalable solutions that deliver exceptional user experiences.',
      items: [
        {
          title: 'React',
          description: "Build dynamic user interfaces with the industry's most popular JavaScript library.",
        },
        {
          title: 'Next.js',
          description: 'Server-side rendering for improved performance and SEO.',
        },
        {
          title: 'Tailwind CSS',
          description: 'Create beautiful, responsive designs with modern utility-first CSS.',
        },
        {
          title: 'TypeScript',
          description: 'Write safer, more maintainable code with static type checking.',
        },
        {
          title: 'Node.js',
          description: 'Power your applications with JavaScript on the server side.',
        },
        {
          title: 'MongoDB',
          description: 'Store and retrieve data with a flexible, document-based database.',
        },
        {
          title: 'GraphQL',
          description: 'Fetch precisely the data you need with a powerful query language.',
        },
        {
          title: 'AWS',
          description: 'Deploy scalable, reliable applications on industry-leading cloud infrastructure.',
        },
      ],
    },
    processSection: {
      eyebrow: 'Our Process',
      title: 'A Proven Development Methodology',
      description:
        'We follow a structured, collaborative approach to ensure your website is delivered on time, within budget, and exceeds expectations.',
    },
    process: [
      {
        title: 'Discovery & Strategy',
        description:
          'We begin by understanding your business goals, target audience, and competitive landscape. This phase includes detailed discussions, research, and planning to establish project requirements, scope, and timelines.',
        steps: [
          'Business goals analysis',
          'Target audience research',
          'Competitive analysis',
          'Content strategy development',
          'Technical requirements gathering',
        ],
      },
      {
        title: 'UX/UI Design',
        description:
          'Our designers create intuitive, engaging interfaces that align with your brand and meet user needs. We develop wireframes, mockups, and interactive prototypes to visualize the solution before development begins.',
        steps: [
          'Information architecture',
          'Wireframing and layout design',
          'Visual design and branding',
          'Interactive prototyping',
          'Usability testing',
        ],
      },
      {
        title: 'Development',
        description:
          'Our engineers bring designs to life using modern frameworks and best practices. We build responsive, accessible websites optimized for performance across all devices and browsers.',
        steps: [
          'Frontend development',
          'Backend integration',
          'Content management implementation',
          'API development',
          'Performance optimization',
        ],
      },
      {
        title: 'Quality Assurance',
        description:
          'Rigorous testing ensures your website functions flawlessly under all conditions. We test across devices, browsers, and network conditions to identify and resolve any issues before launch.',
        steps: [
          'Functional testing',
          'Responsive design testing',
          'Cross-browser compatibility',
          'Performance benchmarking',
          'Security testing',
        ],
      },
      {
        title: 'Deployment & Launch',
        description:
          'We carefully deploy your website to production environments, ensuring a smooth transition. Our launch process includes final checks, SEO verification, analytics setup, and monitoring systems.',
        steps: [
          'Server configuration',
          'Domain and DNS setup',
          'SSL implementation',
          'Analytics and tracking setup',
          'Backup and recovery systems',
        ],
      },
      {
        title: 'Ongoing Support',
        description:
          'Our partnership continues after launch with comprehensive maintenance and support services. We monitor performance, implement updates, and continually optimize your website to ensure long-term success.',
        steps: [
          'Performance monitoring',
          'Security updates and patches',
          'Content updates',
          'Feature enhancements',
          'Analytics and reporting',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long does it take to develop a website?',
        answer:
          "The timeline for website development varies depending on the complexity and scope of the project. A simple informational website might take 4-6 weeks, while a complex e-commerce platform or web application could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
      },
      {
        question: "What's included in your website development services?",
        answer:
          'Our comprehensive website development services include discovery and planning, UX/UI design, frontend and backend development, content integration, responsive design implementation, SEO optimization, testing and quality assurance, deployment, and post-launch support. We can also provide ongoing maintenance and updates as needed.',
      },
      {
        question: 'Will my website be mobile-responsive?',
        answer:
          'Absolutely. All websites we develop are fully responsive and optimized for smartphones, tablets, laptops, and desktop computers. We follow a mobile-first approach to ensure excellent user experience across all screen sizes.',
      },
      {
        question: 'Do you provide content management systems?',
        answer:
          'Yes, we implement content management systems that allow you to update website content without technical knowledge. Depending on your needs, we can use established CMS platforms like WordPress or develop a custom CMS tailored to your requirements.',
      },
      {
        question: 'How do you handle website security?',
        answer:
          'Security is a top priority in every website project. We implement secure coding, SSL certificates, regular updates and patches, robust authentication, data encryption, and protection against common vulnerabilities.',
      },
      {
        question: 'Can you help with SEO for my website?',
        answer:
          'Yes, we integrate SEO best practices throughout the development process, including proper HTML structure, fast loading speeds, mobile optimization, schema markup, and SEO-friendly URLs.',
      },
    ],
    cta: {
      title: 'Ready to Build Your Dream Website?',
      description:
        "Partner with our expert team to create a website that drives results for your business. Let's start your digital transformation journey today.",
      buttonLabel: 'Start Your Project',
    },
  },
  {
    slug: 'app-development',
    serviceId: 'app',
    path: servicePath('app-development'),
    navLabel: 'App Development',
    eyebrow: 'Mobile App Development',
    title: 'Transform Your Vision Into Powerful Digital Experiences',
    description:
      'We craft innovative mobile and web applications that solve real business challenges, delight users, and drive measurable results across platforms.',
    image: 'https://finlectechnologies.com/lovable-uploads/451bbfcd-0fca-4d12-968b-c1e60f94901b.png',
    imageAlt: 'Mobile app interface screens from the Finlec reference app development page',
    highlights: [
      { title: 'iOS App Development', description: 'Native and cross-platform solutions for Apple devices' },
      { title: 'Android App Development', description: 'Custom Android applications with material design' },
      { title: 'Custom Web Applications', description: 'Responsive web apps optimized for all devices' },
      { title: 'Performance Optimized', description: 'Fast, efficient apps with optimized performance' },
    ],
    heroVisual: {
      type: 'app',
      sceneTitle: 'New app build ready',
      background:
        'radial-gradient(circle at 18% 20%, rgba(45,212,191,0.5), transparent 32%), radial-gradient(circle at 85% 78%, rgba(16,185,129,0.38), transparent 34%), linear-gradient(135deg, #042f2e 0%, #0f766e 48%, #111827 100%)',
      accent: '#5eead4',
      accent2: '#bbf7d0',
      chips: ['Flutter', 'React Native', 'Store ready'],
      metrics: [
        { value: '2x', label: 'platforms' },
        { value: '60fps', label: 'motion' },
        { value: 'API', label: 'connected' },
      ],
    },
    seo: {
      title: 'App Development Services | Finlec Technologies',
      description:
        'Native iOS, native Android, Flutter, cross-platform app development, optimization, and maintenance services from Finlec Technologies.',
      keywords: ['app development', 'mobile app development', 'iOS development', 'Android development', 'Flutter development'],
    },
    offerSection: {
      eyebrow: 'Our App Development Services',
      title: 'What We Offer',
      description:
        'Our comprehensive mobile application development services create custom solutions that drive engagement and deliver exceptional user experiences across all platforms.',
    },
    offerings: [
      {
        icon: 'phone_iphone',
        title: 'Native iOS Development',
        description:
          'Powerful, high-performance iOS applications built with Swift and Objective-C that leverage the full capabilities of Apple devices.',
        features: [
          'Swift & Objective-C',
          'Apple Design Guidelines',
          'Core iOS APIs',
          'TestFlight Integration',
          'App Store Optimization',
        ],
      },
      {
        icon: 'phone_iphone',
        title: 'Native Android Development',
        description:
          'Feature-rich Android applications built with Kotlin and Java, designed for the diverse Android ecosystem and Google Play Store.',
        features: [
          'Kotlin & Java',
          'Material Design',
          'Android Jetpack',
          'Google Play Services',
          'Cross-device Compatibility',
        ],
      },
      {
        icon: 'code',
        title: 'Flutter Development',
        description:
          "Cross-platform applications with near-native performance using Flutter's reactive framework and Dart programming language.",
        features: ['Single Codebase', 'Hot Reload', 'Custom Widgets', 'Native Performance', 'Consistent UI'],
      },
      {
        icon: 'integration_instructions',
        title: 'Cross-Platform Solutions',
        description:
          'Cost-effective applications that run on multiple platforms from a single codebase, reducing development time and maintenance costs.',
        features: ['Code Sharing', 'Unified Logic', 'Consistent Experience', 'Faster Development', 'Easier Maintenance'],
      },
      {
        icon: 'query_stats',
        title: 'App Optimization',
        description:
          'Performance tuning and optimization services to ensure your app runs smoothly, loads quickly, and provides an exceptional user experience.',
        features: ['Speed Enhancement', 'Memory Management', 'Battery Optimization', 'Size Reduction', 'Smooth Animations'],
      },
      {
        icon: 'shield',
        title: 'App Maintenance',
        description:
          'Ongoing support and maintenance services to keep your application secure, up-to-date, and performing at its best.',
        features: ['Regular Updates', 'Security Patches', 'Feature Enhancements', 'Bug Fixes', 'Platform Compatibility'],
      },
    ],
    showcase: {
      eyebrow: 'Technology Stack',
      title: 'Mobile Technologies We Use',
      description:
        'We select native, cross-platform, and backend technologies around performance, maintainability, timeline, and budget.',
      items: [
        {
          title: 'Flutter',
          description:
            'Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
        },
        {
          title: 'iOS',
          description:
            'Native development for Apple devices using Swift, SwiftUI, UIKit, Core Data, and TestFlight.',
        },
        {
          title: 'Android',
          description:
            'Native development using Kotlin, Java, Jetpack, Room, and Material Design for the Android ecosystem.',
        },
        {
          title: 'React Native',
          description:
            'Near-native mobile applications using JavaScript, React, Redux, Native Modules, and Expo.',
        },
        {
          title: 'Backend Services',
          description:
            'Secure APIs, real-time databases, authentication, and cloud services that power mobile apps reliably.',
        },
        {
          title: 'App Extensions',
          description:
            'Push notifications, widgets, in-app purchases, and third-party integrations that extend core app capabilities.',
        },
      ],
    },
    processSection: {
      eyebrow: 'Our Process',
      title: 'App Development Methodology',
      description:
        'We follow a structured, collaborative approach to ensure your mobile application is delivered on time, within budget, and exceeds expectations.',
    },
    process: [
      {
        title: 'Discovery & Planning',
        description:
          'We begin by understanding your business goals, target audience, and app requirements. This phase includes detailed discussions, market research, and planning to establish project scope and timelines.',
        steps: [
          'Requirements gathering',
          'Market research',
          'User persona development',
          'Feature prioritization',
          'Project roadmap creation',
        ],
      },
      {
        title: 'UX/UI Design',
        description:
          'Our designers create intuitive, engaging interfaces tailored for mobile experiences. We develop wireframes, mockups, and interactive prototypes that align with platform guidelines and your brand identity.',
        steps: [
          'Wireframing',
          'Interface design',
          'Prototype development',
          'User flow mapping',
          'Design system creation',
        ],
      },
      {
        title: 'Development',
        description:
          'Our engineers build your app using the appropriate technologies for your requirements. We focus on clean architecture, performance optimization, and adherence to platform guidelines.',
        steps: [
          'Frontend development',
          'Backend integration',
          'API development',
          'Authentication implementation',
          'Third-party integrations',
        ],
      },
      {
        title: 'Testing & QA',
        description:
          'Rigorous testing ensures your app functions flawlessly across devices. We conduct functional, performance, security, and usability testing to identify and resolve any issues before launch.',
        steps: [
          'Functional testing',
          'Device compatibility testing',
          'Performance optimization',
          'Security testing',
          'Usability testing',
        ],
      },
      {
        title: 'Deployment',
        description:
          'We handle the app store submission process, ensuring compliance with platform guidelines and optimizing your store presence for visibility and downloads.',
        steps: [
          'App store optimization',
          'Store listing creation',
          'Screenshot generation',
          'Metadata preparation',
          'Submission management',
        ],
      },
      {
        title: 'Maintenance & Updates',
        description:
          'Our partnership continues after launch with support and update services. We monitor performance, implement enhancements, and ensure compatibility with the latest OS versions.',
        steps: [
          'Bug fixes and updates',
          'Performance monitoring',
          'Feature enhancements',
          'Platform compatibility updates',
          'Analytics review',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the app development process?',
        answer:
          'Our app development process includes discovery and planning, UI/UX design, development and coding, testing and quality assurance, deployment, and post-launch support and maintenance. We follow agile methodologies to ensure efficient delivery and consistent communication throughout.',
      },
      {
        question: 'How long does it take to develop a mobile app?',
        answer:
          'The timeline varies based on complexity and features. Simple apps can take 2-3 months, while complex applications might require 4-9 months. We provide detailed timelines during the initial consultation.',
      },
      {
        question: 'What platforms do you develop for?',
        answer:
          'We develop native apps for iOS and Android, as well as cross-platform solutions using Flutter or React Native. Our team can recommend the best approach based on your requirements, target audience, and budget.',
      },
      {
        question: 'How do you ensure app security?',
        answer:
          'We implement secure authentication, data encryption, secure API communications, regular security testing, and compliance with platform-specific security guidelines.',
      },
      {
        question: 'Do you provide app maintenance after launch?',
        answer:
          'Yes, we offer post-launch support and maintenance packages that include bug fixes, performance optimization, compatibility updates, security patches, and feature enhancements.',
      },
      {
        question: 'Can you help with publishing my app to app stores?',
        answer:
          'Yes. We handle preparation for Apple App Store and Google Play Store submissions, including assets, store listings, compliance checks, and review process support.',
      },
    ],
    cta: {
      title: 'Ready to Launch Your App?',
      description:
        "Partner with our app development team to create a polished mobile experience for your customers, team, or product ecosystem.",
      buttonLabel: 'Start Your App Project',
    },
  },
  {
    slug: 'digital-marketing',
    serviceId: 'marketing',
    path: servicePath('digital-marketing'),
    navLabel: 'Digital Marketing',
    eyebrow: 'Digital Marketing',
    title: 'Elevate Your Digital Marketing Impact',
    description:
      'Transform your online presence with cutting-edge strategies that deliver measurable results. We combine creativity with analytics to drive growth.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Digital marketing analytics dashboard on a laptop',
    highlights: [
      { title: 'Discover', description: 'Find your target audience' },
      { title: 'Engage', description: 'Connect with prospects' },
      { title: 'Convert', description: 'Turn visitors into customers' },
      { title: 'Grow', description: 'Scale your business ROI' },
    ],
    heroVisual: {
      type: 'marketing',
      sceneTitle: 'growth-dashboard',
      background:
        'radial-gradient(circle at 18% 22%, rgba(251,146,60,0.5), transparent 30%), radial-gradient(circle at 78% 18%, rgba(250,204,21,0.35), transparent 32%), linear-gradient(135deg, #1f1300 0%, #7c2d12 46%, #111827 100%)',
      accent: '#facc15',
      accent2: '#fb923c',
      chips: ['SEO', 'Meta Ads', 'GA4 events'],
      metrics: [
        { value: '+38%', label: 'campaign lift' },
        { value: '4.2x', label: 'ROAS track' },
        { value: '12k', label: 'visits mapped' },
      ],
    },
    seo: {
      title: 'Digital Marketing Services | Finlec Technologies',
      description:
        'SEO, social media marketing, PPC campaigns, email marketing, content marketing, and analytics services from Finlec Technologies.',
      keywords: ['digital marketing', 'SEO services', 'social media marketing', 'PPC campaigns', 'content marketing'],
    },
    offerSection: {
      eyebrow: 'Our Marketing Arsenal',
      title: 'Comprehensive Digital Marketing Services',
      description:
        'We combine creativity, strategy, and technology to deliver marketing solutions that drive measurable growth for your business.',
    },
    offerings: [
      {
        icon: 'query_stats',
        title: 'Search Engine Optimization',
        description:
          "Improve your website's visibility in search results to drive more organic traffic and qualified leads.",
        features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy', 'Link Building'],
      },
      {
        icon: 'campaign',
        title: 'Social Media Marketing',
        description:
          'Build brand awareness and engage with your target audience across all relevant social platforms.',
        features: ['Platform Strategy', 'Content Creation', 'Community Management', 'Paid Campaigns', 'Analytics'],
      },
      {
        icon: 'payments',
        title: 'Pay-Per-Click (PPC)',
        description:
          'Drive immediate traffic and conversions with targeted advertising campaigns that maximize ROI.',
        features: ['Campaign Strategy', 'Keyword Targeting', 'Ad Creation', 'A/B Testing', 'Conversion Tracking'],
      },
      {
        icon: 'forum',
        title: 'Email Marketing',
        description:
          'Nurture leads and drive conversions with personalized email campaigns that deliver value.',
        features: ['List Building', 'Sequence Design', 'Personalization', 'Automation', 'Performance Analysis'],
      },
      {
        icon: 'draw',
        title: 'Content Marketing',
        description:
          'Establish authority in your industry with high-quality content that educates and converts.',
        features: ['Content Strategy', 'Blog Management', 'Lead Magnets', 'Content Distribution', 'SEO Integration'],
      },
      {
        icon: 'monitoring',
        title: 'Analytics & Reporting',
        description:
          'Gain actionable insights with comprehensive analytics that measure and improve performance.',
        features: ['KPI Tracking', 'Custom Dashboards', 'Conversion Analysis', 'A/B Testing', 'Monthly Reports'],
      },
    ],
    processSection: {
      eyebrow: 'Our Process',
      title: 'A Strategic Approach to Digital Marketing',
      description:
        'Our systematic process ensures that every campaign is strategic, measurable, and aligned with your business goals.',
    },
    process: [
      {
        title: 'Research & Analysis',
        description:
          'We analyze your business, audience, competitors, and market trends to identify opportunities.',
        steps: [
          'Market Opportunity Analysis',
          'Audience Persona Development',
          'Competitor Benchmarking',
          'Channel Viability Assessment',
        ],
      },
      {
        title: 'Strategy Development',
        description:
          'We create a data-driven marketing strategy tailored to your specific business goals.',
        steps: [
          'Channel Selection & Prioritization',
          'Budget Allocation Modeling',
          'Campaign Framework Development',
          'Conversion Path Mapping',
        ],
      },
      {
        title: 'Implementation',
        description:
          'Our team executes the strategy across selected channels with continuous optimization.',
        steps: [
          'Channel Setup & Configuration',
          'Campaign Launch Sequence',
          'Content Creation & Publishing',
          'Integration With Analytics',
        ],
      },
      {
        title: 'Monitoring & Optimization',
        description:
          'We track performance in real time and make data-driven adjustments to maximize results.',
        steps: [
          'Real-time Performance Monitoring',
          'Budget Reallocation Based on Results',
          'A/B Testing & Optimization',
          'Conversion Rate Optimization',
        ],
      },
      {
        title: 'Reporting & Strategy Refinement',
        description:
          'Comprehensive reporting with actionable insights to continuously improve strategy.',
        steps: [
          'Comprehensive Performance Reporting',
          'Growth Opportunity Identification',
          'Strategic Insight Generation',
          'Strategy Evolution Planning',
        ],
      },
    ],
    faqs: [
      {
        question: 'How quickly will I see results from digital marketing?',
        answer:
          'Results vary based on strategy, industry, and competition. Paid advertising can deliver immediate visibility, while SEO usually takes 3-6 months to show significant improvements. Our approach focuses on quick wins and sustainable long-term growth.',
      },
      {
        question: 'How do you measure campaign success?',
        answer:
          'We establish KPIs aligned with your business objectives before launching any campaign. These may include conversion rate, cost per acquisition, return on ad spend, organic traffic growth, engagement, and revenue impact.',
      },
      {
        question: 'What digital marketing channels will work best for my business?',
        answer:
          'The best channel mix depends on your industry, target audience, competition, and goals. During strategy development, we identify where your audience is most active and recommend a prioritized channel plan.',
      },
      {
        question: 'How much should I budget for digital marketing?',
        answer:
          'Effective budget allocation depends on growth goals, competition, and current digital presence. We develop strategies scaled to your budget and focus on maximizing ROI with transparent recommendations.',
      },
      {
        question: 'Do I need to be on all social media platforms?',
        answer:
          'No. We recommend focusing on the platforms where your target audience is most active and engaged. A focused approach usually produces better content quality, consistency, and ROI.',
      },
      {
        question: 'Can you work with our in-house marketing team?',
        answer:
          'Yes. We often collaborate with in-house teams as channel specialists, strategic advisors, or implementation partners, depending on what your team already handles.',
      },
    ],
    cta: {
      title: 'Ready to Boost Your Digital Marketing Results?',
      description:
        "Partner with our expert team to create data-driven marketing strategies that deliver measurable ROI. Let's grow your business together.",
      buttonLabel: 'Start Your Marketing',
    },
  },
  {
    slug: 'whatsapp-business',
    serviceId: 'whatsapp',
    path: servicePath('whatsapp-business'),
    navLabel: 'WhatsApp Business API',
    eyebrow: 'WhatsApp Business API',
    title: 'Transform Your Business Communication',
    description:
      "Transform your business communication with WhatsApp's official Business API. Engage customers, automate responses, and scale your operations seamlessly.",
    image:
      'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'WhatsApp Business communication on a mobile phone',
    highlights: [
      { title: 'Official API', description: 'Meta Business Partner setup' },
      { title: '98%', description: 'Message reading rate' },
      { title: '24/7', description: 'Customer support automation' },
      { title: 'Green Tick', description: 'Official verification guidance' },
    ],
    heroVisual: {
      type: 'whatsapp',
      sceneTitle: 'Business Messages',
      background:
        'radial-gradient(circle at 18% 18%, rgba(37,211,102,0.48), transparent 32%), radial-gradient(circle at 78% 72%, rgba(220,248,198,0.24), transparent 34%), linear-gradient(135deg, #052e1b 0%, #128c7e 46%, #071b14 100%)',
      accent: '#25d366',
      accent2: '#dcf8c6',
      chips: ['Cloud API', 'Templates', 'Green tick'],
      metrics: [
        { value: '98%', label: 'read rate' },
        { value: '24/7', label: 'auto reply' },
        { value: '1', label: 'team inbox' },
      ],
    },
    seo: {
      title: 'WhatsApp Business API Services | Finlec Technologies',
      description:
        'WhatsApp Business API setup, automation, template messages, analytics, green tick support, chatbots, and industry messaging flows from Finlec Technologies.',
      keywords: ['WhatsApp Business API', 'WhatsApp automation', 'WhatsApp chatbot', 'green tick verification'],
    },
    offerSection: {
      eyebrow: 'Communication Automation',
      title: 'Transform Your Business Communication',
      description:
        'Leverage WhatsApp Business API features to enhance customer engagement and streamline operations.',
    },
    offerings: [
      {
        icon: 'chat',
        title: 'Automated Responses',
        description:
          'Set up automated replies for common queries and provide instant support to your customers 24/7.',
        features: ['FAQ replies', 'Lead capture', 'Support routing', 'Business-hour flows'],
      },
      {
        icon: 'verified_user',
        title: 'Official Verification',
        description:
          "Get guidance for the coveted green tick mark that establishes your business's authenticity on WhatsApp.",
        features: ['Business verification', 'Documentation review', 'Application support', 'Profile readiness'],
      },
      {
        icon: 'groups',
        title: 'Multiple Users',
        description:
          'Enable your entire team to handle customer conversations from a single business account.',
        features: ['Team inbox', 'Role access', 'Conversation assignment', 'Human handoff'],
      },
      {
        icon: 'support_agent',
        title: '24/7 Availability',
        description:
          'Stay connected with your customers round the clock with automated messaging systems.',
        features: ['Always-on responses', 'Escalation rules', 'Follow-up flows', 'Support history'],
      },
      {
        icon: 'monitoring',
        title: 'Analytics Dashboard',
        description:
          'Track message metrics, response times, and customer engagement with detailed analytics.',
        features: ['Message metrics', 'Response time tracking', 'Campaign reports', 'Conversation insights'],
      },
      {
        icon: 'forum',
        title: 'Template Messages',
        description:
          'Create and send approved message templates for marketing and transactional communications.',
        features: ['Template drafting', 'Approval guidance', 'Broadcast campaigns', 'Transactional alerts'],
      },
    ],
    showcase: {
      eyebrow: 'Industry Specific',
      title: 'Industry Solutions',
      description:
        'Discover how WhatsApp Business API can transform communication across various industries.',
      items: [
        {
          title: 'Education',
          description:
            'Send automated updates on admissions, timetables, exam schedules, reminders, and FAQs.',
        },
        {
          title: 'Real Estate',
          description:
            'Share property details, schedule site visits, send brochures, and automate follow-ups.',
        },
        {
          title: 'Automotive Industry',
          description:
            'Automate service reminders, send promotional offers, and provide instant customer support.',
        },
        {
          title: 'Travel & Tourism',
          description:
            'Automate bookings, itinerary details, and 24/7 support with AI-powered WhatsApp chatbots.',
        },
        {
          title: 'Health & Wellness',
          description:
            'Enhance patient engagement with appointment scheduling, reminders, and instant support.',
        },
        {
          title: 'E-commerce',
          description:
            'Support catalog sharing, automated invoicing, order updates, and customer engagement.',
        },
        {
          title: 'Restaurants & Food Businesses',
          description:
            'Simplify order management, menu sharing, and online payments with WhatsApp automation.',
        },
        {
          title: 'Marketing Agencies',
          description:
            'Send personalized offers, retarget customers, and increase conversions with automated campaigns.',
        },
      ],
    },
    processSection: {
      eyebrow: 'Implementation Flow',
      title: 'How WhatsApp API Comes Together',
      description:
        'We set up the account, define the messaging flows, configure templates, test automation, and help your team launch confidently.',
    },
    process: [
      {
        title: 'Business Setup',
        description:
          'We review your Meta Business details, phone number readiness, verification status, and WhatsApp profile requirements.',
        steps: ['Meta Business review', 'Phone number readiness', 'Display name guidance', 'Business profile setup'],
      },
      {
        title: 'Flow Planning',
        description:
          'We identify customer journeys such as inquiries, order updates, reminders, support, and campaign use cases.',
        steps: ['Use-case mapping', 'Conversation paths', 'Human handoff rules', 'Compliance checks'],
      },
      {
        title: 'Automation Build',
        description:
          'We configure automated replies, webhook integrations, CRM sync, templates, and campaign-ready flows.',
        steps: ['Chatbot responses', 'Webhook setup', 'CRM integration', 'Template drafting'],
      },
      {
        title: 'Testing & Launch',
        description:
          'We test templates, response timing, team inbox setup, campaign reporting, and launch readiness.',
        steps: ['Template approval checks', 'Flow testing', 'Team training', 'Campaign launch support'],
      },
    ],
    faqs: [
      {
        question: 'What is WhatsApp Business API?',
        answer:
          'WhatsApp Business API is designed for medium to large businesses that want to communicate with customers at scale. It supports integrations, multiple users, automation, chatbots, and advanced metrics.',
      },
      {
        question: 'How long does green tick verification take?',
        answer:
          "The WhatsApp Green Tick process typically takes 2-4 weeks after submission, depending on business documentation, verification requirements, and Meta's review process.",
      },
      {
        question: 'Can WhatsApp chatbots handle complex customer inquiries?',
        answer:
          'Yes. WhatsApp chatbots can understand context, provide relevant information, process requests, and transfer to human agents when needed.',
      },
      {
        question: 'What businesses benefit most from WhatsApp Business API?',
        answer:
          'Retail, e-commerce, financial services, travel, healthcare, education, and customer service-intensive businesses often see strong value because WhatsApp has high customer engagement.',
      },
      {
        question: 'Are there message limits or restrictions?',
        answer:
          'Yes. WhatsApp uses customer-initiated session messages and business-initiated template messages. Templates require approval and must follow WhatsApp policies.',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Business Communication?',
      description:
        'Get started with WhatsApp Business API solutions tailored to your specific industry needs.',
      buttonLabel: 'Request a Demo',
    },
  },
  {
    slug: 'ui-ux-design',
    serviceId: 'uiux',
    path: servicePath('ui-ux-design'),
    navLabel: 'UI / UX Design',
    eyebrow: 'UI/UX Design',
    title: 'Design Experiences That Delight & Convert',
    description:
      'Our strategic UI/UX design transforms digital products into intuitive, enjoyable experiences that solve real user problems and drive business growth.',
    image:
      'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'UI and UX design work displayed on a desk',
    highlights: [
      { title: 'User-Centered', description: 'Research-driven solutions' },
      { title: 'Visual Design', description: 'Beautiful and functional UI' },
      { title: 'Interactive', description: 'Engaging experiences' },
      { title: 'Conversion', description: 'Results-oriented design' },
    ],
    heroVisual: {
      type: 'uiux',
      sceneTitle: 'design-system.fig',
      background:
        'radial-gradient(circle at 16% 18%, rgba(244,114,182,0.46), transparent 32%), radial-gradient(circle at 84% 18%, rgba(129,140,248,0.45), transparent 30%), linear-gradient(135deg, #241134 0%, #4338ca 48%, #111827 100%)',
      accent: '#f0abfc',
      accent2: '#a5b4fc',
      chips: ['Wireframes', 'Prototype', 'Design system'],
      metrics: [
        { value: '6', label: 'flows' },
        { value: '32', label: 'components' },
        { value: 'A11y', label: 'checked' },
      ],
    },
    seo: {
      title: 'UI/UX Design Services | Finlec Technologies',
      description:
        'User research, information architecture, UI design, wireframing, prototyping, usability testing, and implementation support from Finlec Technologies.',
      keywords: ['UI UX design', 'user research', 'wireframing', 'prototyping', 'usability testing'],
    },
    offerSection: {
      eyebrow: 'Comprehensive Services',
      title: 'Comprehensive UI/UX Design Services',
      description:
        'Our strategic approach to design solves real business problems while creating exceptional user experiences.',
    },
    offerings: [
      {
        icon: 'groups',
        title: 'User Research & Strategy',
        description:
          "Understand your users' needs, behaviors, and motivations to inform design decisions.",
        features: ['User Interviews & Surveys', 'Competitive Analysis', 'Persona Development', 'User Journey Mapping'],
      },
      {
        icon: 'workflow',
        title: 'Information Architecture',
        description:
          'Structure and organize your content for optimal user navigation and findability.',
        features: ['Site Mapping', 'Content Hierarchy', 'Navigation Systems', 'User Flow Design'],
      },
      {
        icon: 'design_services',
        title: 'UI Design & Branding',
        description:
          'Create visually stunning interfaces that align with your brand identity.',
        features: ['Visual Design Systems', 'Color & Typography', 'Icon & Illustration Design', 'Brand Identity Integration'],
      },
      {
        icon: 'draw',
        title: 'Wireframing & Prototyping',
        description:
          'Visualize layouts and interactions before full development to save time and resources.',
        features: ['Low & High Fidelity Wireframes', 'Interactive Prototypes', 'Responsive Layouts', 'Component Libraries'],
      },
      {
        icon: 'verified_user',
        title: 'Usability Testing',
        description:
          'Validate designs with real users to identify issues and optimize the experience.',
        features: ['User Testing Sessions', 'A/B Testing', 'Heatmap Analysis', 'Accessibility Evaluation'],
      },
      {
        icon: 'code',
        title: 'Implementation Support',
        description:
          'Bridge the gap between design and development for seamless execution.',
        features: ['Design Specifications', 'Developer Handoff', 'Implementation Guidance', 'Quality Assurance'],
      },
    ],
    processSection: {
      eyebrow: 'Our Process',
      title: 'Design Process',
      description:
        'Our systematic approach ensures every design decision is purposeful and user-centered, delivering exceptional digital experiences.',
    },
    process: [
      {
        title: 'Research',
        description:
          'Understanding user needs, market trends, and business goals through comprehensive research and analysis.',
        steps: ['User interviews', 'Competitive analysis', 'Market research', 'Requirements gathering'],
      },
      {
        title: 'Information Architecture',
        description:
          'Organizing and structuring content to create intuitive navigation and user flows.',
        steps: ['Site mapping', 'User journey mapping', 'Content strategy', 'Navigation structure'],
      },
      {
        title: 'Wireframing',
        description:
          'Creating low-fidelity blueprints that outline the basic structure and layout of each page.',
        steps: ['Layout planning', 'Content hierarchy', 'Functionality mapping', 'User flow design'],
      },
      {
        title: 'Visual Design',
        description:
          'Developing the visual identity with colors, typography, and imagery that align with your brand.',
        steps: ['Brand integration', 'Color schemes', 'Typography selection', 'Visual elements'],
      },
      {
        title: 'Prototyping',
        description:
          'Building interactive prototypes to test user interactions and validate design decisions.',
        steps: ['Interactive mockups', 'User testing', 'Design validation', 'Feedback integration'],
      },
      {
        title: 'Developer Handoff',
        description:
          'Providing detailed specifications and assets to ensure accurate implementation of the design.',
        steps: ['Design specifications', 'Asset delivery', 'Developer support', 'Quality assurance'],
      },
    ],
    showcase: {
      eyebrow: 'Design Principles',
      title: 'How We Approach UX/UI Design',
      description:
        'Our approach to UI/UX design is guided by time-tested principles that ensure intuitive, effective, and beautiful digital experiences.',
      items: [
        {
          title: 'User-Centered',
          description:
            "Every design decision is backed by user research and testing to ensure we create experiences that truly serve your audience's needs.",
        },
        {
          title: 'Visual Design',
          description:
            'We balance aesthetics with usability, creating interfaces that are visually strong, intuitive, and accessible.',
        },
        {
          title: 'Interactive',
          description:
            'Through thoughtful micro-interactions and seamless transitions, we create engaging user journeys.',
        },
        {
          title: 'Conversion',
          description:
            'Our designs are strategically crafted to drive business goals, including conversions, engagement, and satisfaction.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is UI/UX design and why is it important?',
        answer:
          'UI design focuses on the visual elements users interact with, while UX design ensures the overall experience is intuitive and valuable. Together, they improve engagement, reduce friction, and increase conversions.',
      },
      {
        question: 'How long does a typical UI/UX design project take?',
        answer:
          'The timeline varies based on project complexity, but a typical process ranges from 4-12 weeks, including research, wireframing, prototyping, visual design, and testing phases.',
      },
      {
        question: 'Do you work with existing brands or create new visual identities?',
        answer:
          'We do both. For established brands, we align with existing guidelines. For new businesses, we can develop a complete visual identity alongside the UI/UX design.',
      },
      {
        question: 'How do you ensure designs are accessible?',
        answer:
          'We follow accessibility principles including color contrast, keyboard navigation, clear structure, appropriate alt text, and usability testing with diverse user needs in mind.',
      },
      {
        question: 'What deliverables can I expect?',
        answer:
          'Deliverables may include research reports, personas, journey maps, information architecture, wireframes, prototypes, UI style guides, design systems, and production-ready design files.',
      },
      {
        question: 'How do you measure success?',
        answer:
          'We define success metrics at the start, such as conversion rate, task completion, satisfaction scores, reduced bounce rate, or fewer support requests.',
      },
    ],
    cta: {
      title: 'Ready to Create an Exceptional User Experience?',
      description:
        "Let's collaborate to design interfaces that delight your users and drive business results.",
      buttonLabel: 'Start Your Project',
    },
  },
  {
    slug: 'graphics-designing',
    serviceId: 'graphics',
    path: servicePath('graphics-designing'),
    navLabel: 'Graphics Designing',
    eyebrow: 'Graphics Design',
    title: 'Visuals That Captivate & Inspire',
    description:
      "Our creative design studio transforms ideas into compelling visual stories that connect with your audience and elevate your brand's presence.",
    image:
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1400&q=85&auto=format&fit=crop',
    secondaryImage:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&q=85&auto=format&fit=crop',
    imageAlt: 'Branding and graphic design workspace',
    highlights: [
      { title: 'Custom Illustrations', description: 'Unique artwork for your brand' },
      { title: 'Brand Identity', description: 'Cohesive visual language' },
      { title: 'Print & Digital', description: 'Cross-media visual solutions' },
      { title: 'Art Direction', description: 'Strategic visual guidance' },
    ],
    heroVisual: {
      type: 'graphics',
      sceneTitle: 'Visual system',
      background:
        'radial-gradient(circle at 18% 16%, rgba(255,209,102,0.5), transparent 32%), radial-gradient(circle at 80% 72%, rgba(239,71,111,0.45), transparent 34%), linear-gradient(135deg, #2b1117 0%, #7f1d1d 44%, #111827 100%)',
      accent: '#ffd166',
      accent2: '#ef476f',
      chips: ['Logo kit', 'Print ready', 'Social pack'],
      metrics: [
        { value: '4', label: 'formats' },
        { value: 'RGB', label: 'digital' },
        { value: 'CMYK', label: 'print' },
      ],
    },
    seo: {
      title: 'Graphics Designing Services | Finlec Technologies',
      description:
        'Graphic design, brand identity, custom illustrations, print design, digital design, packaging, marketing materials, and visual identity services from Finlec Technologies.',
      keywords: ['graphics designing', 'graphic design', 'brand identity', 'logo design', 'marketing materials'],
    },
    offerSection: {
      eyebrow: 'Design Services',
      title: 'Our Graphics Design Services',
      description:
        'Transform your brand with our professional graphics design services, tailored to capture attention and communicate your message effectively.',
    },
    offerings: [
      {
        icon: 'draw',
        title: 'Custom Illustrations',
        description:
          'Unique artwork tailored to your brand identity and messaging needs.',
        features: ['Hand-drawn artwork', 'Digital illustrations', 'Character design', 'Icon creation'],
      },
      {
        icon: 'palette',
        title: 'Brand Identity',
        description:
          'Cohesive visual language that represents your brand across all touchpoints.',
        features: ['Logo design', 'Brand guidelines', 'Color palettes', 'Typography systems'],
      },
      {
        icon: 'print',
        title: 'Print & Digital',
        description:
          'Cross-media visual solutions optimized for both digital and print applications.',
        features: ['Business cards', 'Brochures', 'Social media graphics', 'Web banners'],
      },
      {
        icon: 'design_services',
        title: 'Art Direction',
        description:
          'Strategic visual guidance to ensure consistent and impactful brand communication.',
        features: ['Creative strategy', 'Visual concepts', 'Brand consistency', 'Creative oversight'],
      },
      {
        icon: 'public',
        title: 'Marketing Materials',
        description:
          'Eye-catching designs for all your marketing and promotional needs.',
        features: ['Flyers & posters', 'Email templates', 'Advertisement design', 'Presentation design'],
      },
      {
        icon: 'shopping_bag',
        title: 'Packaging Design',
        description:
          'Compelling packaging solutions that stand out on shelves and online.',
        features: ['Product packaging', 'Label design', 'Box design', 'Sustainable solutions'],
      },
    ],
    processSection: {
      eyebrow: 'Design Process',
      title: 'Our Design Process',
      description:
        'We follow a structured, collaborative approach to bring your vision to life.',
    },
    process: [
      {
        title: 'Discovery & Brief',
        description:
          'We learn about your business, target audience, and project goals to create a comprehensive design brief.',
        steps: ['Brand questionnaire', 'Competitive analysis', 'Goal setting', 'Timeline planning'],
      },
      {
        title: 'Research & Concept Development',
        description:
          'We conduct research and develop initial concepts that align with your brand and project goals.',
        steps: ['Market research', 'Mood boarding', 'Concept sketching', 'Direction exploration'],
      },
      {
        title: 'Initial Design Concepts',
        description:
          'We present initial design concepts for your review, explaining the rationale behind each design decision.',
        steps: ['Multiple concepts', 'Design presentations', 'Concept rationale', 'Visual directions'],
      },
      {
        title: 'Revisions & Refinement',
        description:
          'Based on your feedback, we refine the selected concept to ensure it perfectly matches your vision.',
        steps: ['Feedback integration', 'Design iterations', 'Detail refinement', 'Color adjustments'],
      },
      {
        title: 'Final Delivery',
        description:
          'We deliver finalized design files in all necessary formats for your immediate use.',
        steps: ['Print-ready files', 'Web-optimized assets', 'Source files', 'Usage guidelines'],
      },
      {
        title: 'Support & Future Growth',
        description:
          'We provide ongoing support and guidance for implementing your new designs and planning for future needs.',
        steps: ['Implementation support', 'Design adaptation', 'Growth strategy', 'Brand evolution'],
      },
    ],
    showcase: {
      eyebrow: 'Design Philosophy',
      title: 'Design Principles We Follow',
      description:
        'Our design approach is guided by fundamental principles that ensure effective visual communication.',
      items: [
        {
          title: 'Visual Hierarchy',
          description:
            'We organize elements by importance, guiding viewers through content in a deliberate order.',
        },
        {
          title: 'Color Theory',
          description:
            'We use color purposefully to evoke emotions, strengthen branding, and enhance usability.',
        },
        {
          title: 'Typography',
          description:
            'We select and pair typefaces that enhance readability while reinforcing brand personality.',
        },
        {
          title: 'Balance & Composition',
          description:
            'We arrange visual elements to create stability, flow, and visual interest within designs.',
        },
        {
          title: 'Consistency',
          description:
            'We maintain uniform design elements across all touchpoints to strengthen brand recognition.',
        },
        {
          title: 'Simplicity',
          description:
            'We create designs that communicate clearly without unnecessary complexity.',
        },
      ],
    },
    faqs: [
      {
        question: 'What is your graphic design process like?',
        answer:
          'Our design process typically involves discovery and brief, research and concept development, initial concepts, revisions and refinement, final delivery, and support for future growth.',
      },
      {
        question: 'How long does a typical graphic design project take?',
        answer:
          'Project timelines vary based on complexity and scope. A logo design might take 2-3 weeks, while a complete brand identity package could take 4-8 weeks.',
      },
      {
        question: 'What file formats will I receive?',
        answer:
          'We provide industry-standard file formats for digital and print applications, including vector files, raster files, and specialized formats required for your use case.',
      },
      {
        question: 'Do you offer brand guidelines?',
        answer:
          'Yes, we offer brand guidelines as part of brand identity packages, covering logo usage, color specifications, typography rules, imagery style, and application examples.',
      },
      {
        question: 'What information do you need to start?',
        answer:
          'We need details about your business, target audience, project goals, design preferences, competitors, and any existing brand elements.',
      },
      {
        question: 'Can you work with our existing brand elements?',
        answer:
          'Yes. We can refresh, extend, or create new graphics within your existing brand framework to keep visual communication consistent.',
      },
    ],
    cta: {
      title: 'Ready to Transform Your Visual Identity?',
      description:
        "Let's discuss how our graphic design expertise can elevate your brand and help you connect with your audience more effectively.",
      buttonLabel: 'Start Your Graphics Project',
    },
  },
];

export const serviceDetailBySlug = Object.fromEntries(
  serviceDetailPages.map((page) => [page.slug, page])
);

export const serviceDetailByServiceId = Object.fromEntries(
  serviceDetailPages.map((page) => [page.serviceId, page])
);
