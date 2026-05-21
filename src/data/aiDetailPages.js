export const aiSolutionPages = {
  chatbots: {
    slug: 'chatbots',
    path: '/ai/chatbots',
    navLabel: 'AI-Powered Chatbots',
    category: 'AI-Powered Chatbots',
    icon: 'smart_toy',
    title: 'Transform Customer Experience with AI Chatbots',
    description:
      'Deploy intelligent conversational agents that understand context, learn from interactions, and deliver personalized experiences 24/7—increasing efficiency while delighting your customers.',
    image: '/ai-chatbots-hero.jpg',
    imageAlt: 'AI chatbot interface on a digital screen',
    ctaTitle: 'Ready to Transform Your Customer Experience?',
    ctaDescription:
      "Let's build an AI chatbot that delights your customers and grows your business.",
    statCards: [
      { value: '95%', label: 'Customer Satisfaction', description: 'Average satisfaction score' },
      { value: '70%', label: 'Response Time Reduction', description: 'Compared to human agents' },
      { value: '24/7', label: 'Availability', description: 'Always-on customer support' },
      { value: '40%', label: 'Cost Reduction', description: 'Average operational savings' },
      { value: '500+', label: 'Concurrent Users', description: 'Per chatbot instance' },
      { value: '99.9%', label: 'Uptime Guarantee', description: 'Enterprise reliability' },
    ],
    capabilitySection: {
      eyebrow: 'Powerful Capabilities',
      title: 'Intelligent Features',
      description:
        'Our AI chatbots are equipped with state-of-the-art capabilities designed to deliver exceptional customer experiences and drive measurable business results.',
      items: [
        {
          title: 'Natural Language Understanding',
          description:
            'Our chatbots understand context, slang, and even misspellings to maintain natural conversations.',
          icon: 'chat',
        },
        {
          title: 'Continuous Learning',
          description: 'AI chatbots that improve over time by learning from every interaction.',
          icon: 'auto_awesome',
        },
        {
          title: '24/7 Automated Support',
          description:
            'Handle customer inquiries around the clock, providing instant responses without delay.',
          icon: 'support_agent',
        },
        {
          title: 'Advanced Analytics',
          description:
            'Gain insights into customer queries, sentiment trends, and chatbot performance.',
          icon: 'monitoring',
        },
        {
          title: 'Knowledge Base Integration',
          description:
            'Connect to your existing knowledge repositories to provide accurate, consistent information.',
          icon: 'integration_instructions',
        },
        {
          title: 'Easy Integration',
          description:
            'Seamlessly integrate with your existing websites, apps, and customer service platforms.',
          icon: 'code',
        },
        {
          title: 'Instant Deployment',
          description:
            'Get your chatbot up and running in days, not months, with our streamlined implementation.',
          icon: 'arrow_forward',
        },
        {
          title: 'Multi-Language Support',
          description:
            'Break language barriers with chatbots that communicate fluently in over 50 languages.',
          icon: 'language',
        },
        {
          title: 'Enterprise Security',
          description:
            'Bank-level encryption and compliance with global security and privacy standards.',
          icon: 'shield',
        },
      ],
    },
    industrySection: {
      eyebrow: 'Versatile Solutions',
      title: 'Industries We Serve',
      description:
        'Our AI chatbots are customized to meet the specific needs of various industries, providing tailored solutions that address unique challenges and opportunities.',
      items: [
        {
          title: 'Enterprise',
          description:
            'Streamline operations and enhance internal communication with intelligent chatbot assistants.',
          points: ['Employee onboarding', 'IT helpdesk', 'Knowledge management'],
        },
        {
          title: 'E-commerce',
          description:
            'Boost sales and improve customer satisfaction with personalized shopping assistants.',
          points: ['Product recommendations', 'Order tracking', 'Inventory queries'],
        },
        {
          title: 'Healthcare',
          description:
            'Provide 24/7 patient support, appointment scheduling, and health information access.',
          points: ['Appointment booking', 'Symptom assessment', 'Medication reminders'],
        },
        {
          title: 'Financial Services',
          description:
            'Enhance customer service with secure account management and financial guidance.',
          points: ['Account inquiries', 'Fraud alerts', 'Financial advisory'],
        },
        {
          title: 'Education',
          description:
            'Support students and staff with instant information access and administrative assistance.',
          points: ['Course information', 'Assignment help', 'Campus services'],
        },
        {
          title: 'Travel & Hospitality',
          description:
            'Simplify booking processes and provide real-time travel assistance and recommendations.',
          points: ['Booking assistance', 'Itinerary management', 'Local recommendations'],
        },
        {
          title: 'Real Estate',
          description: 'Assist clients with property searches, viewings, and application processes.',
          points: ['Property matching', 'Virtual tours', 'Paperwork assistance'],
        },
        {
          title: 'Logistics',
          description:
            'Optimize customer service for shipping, tracking, and delivery information.',
          points: ['Delivery tracking', 'Returns processing', 'Shipping estimates'],
        },
        {
          title: 'Insurance',
          description:
            'Streamline claims processing and policy management with intelligent assistance.',
          points: ['Claims filing', 'Policy information', 'Coverage questions'],
        },
        {
          title: 'Government',
          description: 'Improve citizen services with 24/7 access to information and assistance.',
          points: ['Service information', 'Form assistance', 'Permit applications'],
        },
      ],
    },
    faq: [
      {
        question: 'How long does it take to implement an AI chatbot?',
        answer:
          'Implementation time varies based on complexity and requirements. A basic chatbot can be deployed in 2-4 weeks, while more sophisticated solutions with custom integrations may take 6-12 weeks. We work closely with your team to establish a realistic timeline based on your specific needs.',
      },
      {
        question: 'Can the chatbot integrate with our existing systems?',
        answer:
          'Yes, our AI chatbots are designed to integrate seamlessly with your existing systems, including CRM platforms, knowledge bases, ticketing systems, and custom databases. We provide robust APIs and pre-built connectors for popular business applications to ensure smooth data flow.',
      },
      {
        question: 'How accurate are the AI chatbot responses?',
        answer:
          'Our AI chatbots achieve accuracy rates of 92-98% depending on the domain and training data quality. The system continuously learns from interactions to improve over time. For complex or uncertain queries, the chatbot can be configured to escalate to human agents, ensuring customers always receive accurate information.',
      },
      {
        question: 'Can the chatbot handle multiple languages?',
        answer:
          "Yes, our AI chatbots support multilingual capabilities and can be configured to communicate in virtually any language. The system automatically detects the user's language and responds accordingly, ensuring a seamless experience for global audiences.",
      },
      {
        question: 'How secure is the chatbot for handling sensitive information?',
        answer:
          'Security is paramount in our design. Our chatbots incorporate end-to-end encryption, secure authentication methods, and comply with industry standards like GDPR, HIPAA, and PCI DSS where required. For healthcare, financial, and other sensitive applications, we implement additional security measures tailored to your compliance requirements.',
      },
      {
        question: 'What kind of analytics and reporting is available?',
        answer:
          'Our chatbots come with comprehensive analytics dashboards that provide insights into user interactions, common queries, resolution rates, satisfaction scores, and operational metrics. Custom reports can be configured for specific KPIs, and data can be exported or integrated with your business intelligence tools.',
      },
    ],
  },
  'custom-solutions': {
    slug: 'custom-solutions',
    path: '/ai/custom-solutions',
    navLabel: 'Custom AI Solutions',
    category: 'AI Innovation',
    icon: 'auto_awesome',
    title: 'Custom AI Solutions for Business Transformation',
    description:
      'Harness the power of artificial intelligence with tailor-made solutions that solve your unique business challenges and create sustainable competitive advantages.',
    image: '/ai-custom-solutions-hero.jpg',
    imageAlt: 'AI robot hand interacting with a digital interface',
    ctaTitle: 'Transform Your Business with AI',
    ctaDescription:
      "Let's discuss how custom AI solutions can solve your most challenging business problems and create sustainable competitive advantages.",
    capabilitySection: {
      eyebrow: 'Our Solutions',
      title: 'Powerful AI Solutions for Every Need',
      description:
        'Our custom AI solutions are designed to address specific business challenges and create tangible value across your organization.',
      items: [
        {
          title: 'Predictive Analytics',
          description:
            'Forecast trends, customer behavior, and business outcomes using machine learning models trained on your data.',
          icon: 'monitoring',
          points: ['Sales forecasting', 'Customer churn prediction', 'Inventory optimization'],
        },
        {
          title: 'Recommendation Systems',
          description:
            'Increase engagement and sales with personalized recommendations for products, content, or services.',
          icon: 'shopping_bag',
          points: ['Product recommendations', 'Content personalization', 'Cross-selling opportunities'],
        },
        {
          title: 'Computer Vision',
          description:
            'Extract insights from images and video with custom models for object detection, classification, and more.',
          icon: 'query_stats',
          points: ['Object detection', 'Image classification', 'Visual inspection'],
        },
        {
          title: 'Natural Language Processing',
          description:
            'Analyze text data, generate content, and build conversational interfaces with advanced language models.',
          icon: 'chat',
          points: ['Sentiment analysis', 'Text classification', 'Content generation'],
        },
        {
          title: 'Process Automation',
          description:
            'Streamline operations by automating repetitive tasks with intelligent AI systems that learn and improve.',
          icon: 'integration_instructions',
          points: ['Workflow optimization', 'Document processing', 'Operational efficiency'],
        },
        {
          title: 'Custom Machine Learning',
          description:
            'Solve your unique business challenges with bespoke machine learning solutions tailored to your specific needs.',
          icon: 'auto_awesome',
          points: ['Custom algorithms', 'Specialized models', 'Domain-specific solutions'],
        },
      ],
    },
    secondarySection: {
      eyebrow: 'Capabilities',
      title: 'Our AI Capabilities',
      description: 'Comprehensive AI capabilities tailored to meet your business needs',
      items: [
        {
          title: 'Custom AI Development',
          description:
            'Bespoke AI solutions tailored to your unique business challenges, from concept to deployment.',
          icon: 'code',
        },
        {
          title: 'AI Model Integration',
          description:
            'Seamlessly integrate AI models into your existing systems and workflows for enhanced automation.',
          icon: 'smart_toy',
        },
        {
          title: 'API Integrations',
          description:
            'Connect your AI solutions with other applications and data sources through robust API integrations.',
          icon: 'integration_instructions',
        },
        {
          title: 'Scalable Infrastructure',
          description:
            'Build AI solutions on a scalable infrastructure that grows with your business needs and evolving demands.',
          icon: 'public',
        },
        {
          title: 'Security & Compliance',
          description:
            'Ensure the security and compliance of your AI solutions with industry-leading security measures and compliance standards.',
          icon: 'shield',
        },
        {
          title: 'Dashboarding & Visualization',
          description:
            'Monitor and visualize the performance of your AI solutions with intuitive dashboards and interactive visualizations.',
          icon: 'monitoring',
        },
      ],
    },
    processSection: {
      eyebrow: 'Our Process',
      title: 'Our Development Process',
      description: 'A structured approach to building custom AI solutions that deliver results',
      steps: [
        {
          title: 'Discovery & Planning',
          description:
            'We start by understanding your business goals and challenges to define a clear AI strategy.',
        },
        {
          title: 'Data Collection & Preparation',
          description:
            "We gather, clean, and prepare your data to ensure it's ready for AI model training.",
        },
        {
          title: 'Model Development & Training',
          description:
            'Our AI experts build and train custom models tailored to your specific needs.',
        },
        {
          title: 'Integration & Deployment',
          description:
            'We seamlessly integrate AI solutions into your existing systems and workflows.',
        },
        {
          title: 'Monitoring & Optimization',
          description:
            'We continuously monitor and optimize AI performance to ensure ongoing success.',
        },
      ],
    },
    industrySection: {
      eyebrow: 'Industries',
      title: 'Industry Solutions',
      description:
        'We deliver custom AI solutions tailored to the unique challenges and opportunities in your industry.',
      items: [
        {
          title: 'Enterprise',
          description: 'Process automation, document analysis, and knowledge management solutions.',
        },
        {
          title: 'Healthcare',
          description:
            'Patient outcome prediction, medical image analysis, and clinical decision support.',
        },
        {
          title: 'Retail',
          description:
            'Personalized recommendations, demand forecasting, and inventory optimization.',
        },
        {
          title: 'Finance',
          description:
            'Risk assessment, fraud detection, algorithmic trading, and customer insights.',
        },
        {
          title: 'Manufacturing',
          description:
            'Predictive maintenance, quality control, and supply chain optimization.',
        },
        {
          title: 'Logistics',
          description: 'Route optimization, demand forecasting, and delivery time prediction.',
        },
      ],
    },
    technicalSection: {
      eyebrow: 'Technical Details',
      title: 'Our Technical Approach',
      description:
        'We leverage the latest technologies and frameworks to build robust, scalable, and maintainable AI solutions.',
      items: [
        {
          title: 'Security & Compliance',
          description: 'Enterprise-grade security for your AI solutions',
          points: [
            'End-to-end data encryption',
            'GDPR, CCPA, and HIPAA compliance',
            'Regular security audits and testing',
            'Role-based access controls',
            'Data anonymization capabilities',
          ],
        },
        {
          title: 'Scalable Architecture',
          description: 'Built to grow with your business needs',
          points: [
            'Microservices architecture',
            'Containerized deployment (Docker)',
            'Horizontal and vertical scaling',
            'Cloud-native design patterns',
            'Multi-region deployment options',
          ],
        },
        {
          title: 'Integration Capabilities',
          description: 'Seamless connection with your ecosystem',
          points: [
            'RESTful and GraphQL APIs',
            'Webhooks and event-driven architecture',
            'Enterprise system connectors (SAP, Salesforce, etc.)',
            'Database integration (SQL and NoSQL)',
            'Legacy system compatibility',
          ],
        },
      ],
    },
  },
  integration: {
    slug: 'integration',
    path: '/ai/integration',
    navLabel: 'AI Integration & API',
    category: 'API Solutions',
    icon: 'integration_instructions',
    title: 'AI Integration & API Services',
    description:
      'Connect your systems seamlessly with our powerful AI integration platform. Build scalable, secure, and intelligent connections between your applications and AI services.',
    image: '/ai-integration-hero.jpg',
    imageAlt: 'Developer working with code and API integration dashboards',
    ctaTitle: 'Ready to Transform Your AI Integration?',
    ctaDescription:
      'Connect with our integration experts to discuss how we can help you build seamless AI connections.',
    statCards: [
      { value: '99.9%', label: 'API Uptime', description: 'Enterprise-grade reliability' },
      {
        value: '120+',
        label: 'Integration Options',
        description: 'Connect with virtually any system',
      },
      {
        value: '85%',
        label: 'Development Time Saved',
        description: 'Accelerate your development cycle',
      },
      {
        value: '75M+',
        label: 'Monthly API Calls Processed',
        description: 'Scalable infrastructure',
      },
    ],
    capabilitySection: {
      eyebrow: 'Integration Capabilities',
      title: 'Our Integration Capabilities',
      description:
        'Our platform provides all the tools and capabilities you need to build robust, secure, and scalable AI integrations.',
      items: [
        {
          title: 'Seamless API Connectivity',
          description:
            'Connect your systems with our comprehensive API suite designed for maximum flexibility and minimal integration effort.',
          icon: 'smart_toy',
        },
        {
          title: 'Real-time Data Processing',
          description:
            'Process massive datasets in real-time with our high-performance computing infrastructure and optimized algorithms.',
          icon: 'monitoring',
        },
        {
          title: 'Multi-environment Support',
          description:
            'Develop, test, and deploy across multiple environments with environment-specific configurations and variables.',
          icon: 'public',
        },
        {
          title: 'Enterprise Security',
          description:
            'Bank-grade encryption, automated security scanning, and comprehensive audit logs protect your sensitive data.',
          icon: 'shield',
        },
        {
          title: 'AI Model Integration',
          description:
            'Connect to leading AI models from OpenAI, Anthropic, Google AI, and more through a single unified interface.',
          icon: 'auto_awesome',
        },
        {
          title: 'Scalable Infrastructure',
          description:
            'Our cloud-native architecture automatically scales to handle your workloads, from startup to enterprise scale.',
          icon: 'domain',
        },
      ],
    },
    technicalSection: {
      eyebrow: 'Technologies',
      title: 'Supported Technologies',
      description:
        'We support a wide range of integration protocols and technologies to ensure seamless connectivity.',
      items: [
        { title: 'RESTful APIs', description: 'Standard HTTP-based APIs for easy integration' },
        { title: 'GraphQL', description: 'Flexible queries with precise data selection' },
        { title: 'WebSockets', description: 'Real-time bidirectional communication' },
        { title: 'OpenAPI', description: 'Standardized API documentation' },
        { title: 'OAuth 2.0', description: 'Secure authentication and authorization' },
        { title: 'Webhooks', description: 'Event-driven integrations' },
        { title: 'gRPC', description: 'High-performance RPC framework' },
        { title: 'Apache Kafka', description: 'Distributed event streaming platform' },
      ],
    },
    processSection: {
      eyebrow: 'Our Process',
      title: 'Our Integration Approach',
      description:
        'We follow a structured methodology to ensure successful integration of AI capabilities into your systems.',
      steps: [
        {
          title: 'Discovery & Requirements',
          description:
            'We analyze your existing infrastructure and document integration requirements in detail.',
        },
        {
          title: 'Architecture Design',
          description:
            'Our team designs a solution architecture that aligns with your technical ecosystem.',
        },
        {
          title: 'Development & Testing',
          description:
            'We implement the integration using best practices and conduct thorough testing.',
        },
        {
          title: 'Deployment',
          description:
            'The solution is deployed to your environment with minimal disruption to operations.',
        },
        {
          title: 'Monitoring & Optimization',
          description:
            'We continuously monitor performance and optimize the integration over time.',
        },
      ],
    },
  },
  analytics: {
    slug: 'analytics',
    path: '/ai/analytics',
    navLabel: 'Data Analytics & Insights',
    category: 'Advanced Analytics Solutions',
    icon: 'monitoring',
    title: 'Data Analytics & Insights',
    description:
      'Transform your business with powerful data analytics solutions. Uncover hidden patterns, make data-driven decisions, and gain competitive insights with our advanced analytics platform.',
    image: '/ai-analytics-hero.jpg',
    imageAlt: 'Business analytics dashboard with charts and reports',
    ctaTitle: 'Turn Your Data into Competitive Advantage',
    ctaDescription:
      'Let our data analytics experts help you discover the insights that will drive your business forward.',
    statCards: [
      {
        value: '67%',
        label: 'Better Decision Making',
        description: 'Empowered by data-driven insights',
      },
      { value: '3.5x', label: 'Return on Analytics Investment', description: 'Average client ROI' },
      { value: '42%', label: 'Cost Reduction', description: 'Through process optimization' },
      { value: '85+', label: 'AI Analysis Models', description: 'For diverse business needs' },
    ],
    capabilitySection: {
      eyebrow: 'Capabilities',
      title: 'Analytics Capabilities',
      description:
        'Our comprehensive suite of data analytics solutions helps you extract maximum value from your data assets.',
      items: [
        {
          title: 'Predictive Analytics',
          description:
            'Leverage machine learning to forecast trends, anticipate customer behavior, and predict future outcomes with remarkable accuracy.',
          icon: 'monitoring',
        },
        {
          title: 'Business Intelligence',
          description:
            'Transform complex data into actionable insights with interactive dashboards, visual reports, and intelligent alerts.',
          icon: 'query_stats',
        },
        {
          title: 'Pattern Recognition',
          description:
            'Identify hidden patterns and correlations in your data that drive business performance, growth, and customer satisfaction.',
          icon: 'auto_awesome',
        },
        {
          title: 'Custom Reporting',
          description:
            'Create tailored reports that focus on your most important KPIs and business metrics with automated data pipelines.',
          icon: 'smart_toy',
        },
        {
          title: 'Natural Language Processing',
          description:
            'Extract insights from unstructured text data including customer feedback, social media, and support interactions.',
          icon: 'chat',
        },
        {
          title: 'Real-time Analytics',
          description:
            'Monitor business metrics in real-time with streaming analytics and instant notifications on critical changes.',
          icon: 'integration_instructions',
        },
      ],
    },
    processSection: {
      eyebrow: 'Our Process',
      title: 'Our Analytics Approach',
      description:
        'We follow a structured methodology to ensure your data analytics projects deliver maximum business value.',
      steps: [
        {
          title: 'Data Collection',
          description:
            'We gather data from all relevant sources, including CRMs, ERPs, websites, social media, and IoT devices.',
        },
        {
          title: 'Data Preparation',
          description:
            'Our team cleans, transforms, and standardizes your data to ensure accuracy and consistency.',
        },
        {
          title: 'Data Analysis',
          description:
            'We apply advanced statistical models and machine learning algorithms to extract insights from your data.',
        },
        {
          title: 'Visualization',
          description:
            'Complex findings are transformed into intuitive dashboards and interactive visualizations.',
        },
        {
          title: 'Implementation',
          description:
            'We help you integrate insights into your decision-making processes and operational workflows.',
        },
      ],
    },
    industrySection: {
      eyebrow: 'Solutions',
      title: 'Industry Solutions',
      description:
        'We deliver specialized analytics solutions tailored to the unique challenges of your industry.',
      items: [
        {
          title: 'Healthcare',
          description:
            'Improve patient outcomes and operational efficiency through predictive analytics and resource optimization.',
          points: [
            'Reduced readmission rates by 32%',
            'Improved resource allocation by 45%',
            'Decreased average length of stay by 18%',
          ],
        },
        {
          title: 'Retail & E-commerce',
          description:
            'Enhance customer experience and optimize inventory with customer segmentation and demand forecasting.',
          points: [
            'Increased sales conversion by 24%',
            'Reduced stockouts by 53%',
            'Improved customer retention by 31%',
          ],
        },
        {
          title: 'Financial Services',
          description:
            'Minimize risk and identify opportunities with fraud detection and portfolio optimization analytics.',
          points: [
            'Fraud detection improvement of 48%',
            'Portfolio optimization gain of 17%',
            'Customer churn reduction of 28%',
          ],
        },
        {
          title: 'Manufacturing',
          description:
            'Streamline production and improve quality control through predictive maintenance and process optimization.',
          points: [
            'Production efficiency increased by 29%',
            'Defect reduction of 35%',
            'Maintenance cost reduction of 42%',
          ],
        },
      ],
    },
    benefitSection: {
      eyebrow: 'Benefits',
      title: 'Benefits of Data Analytics',
      description: 'Unlock the power of your data to transform your business',
      items: [
        'Make data-driven decisions with confidence',
        'Identify new revenue opportunities',
        'Optimize operations and reduce costs',
        'Understand customer behavior and preferences',
        'Predict trends and anticipate market changes',
        'Automate routine analysis tasks',
        'Detect anomalies and prevent issues',
        'Measure the effectiveness of business initiatives',
      ],
    },
  },
};

export const aiSolutionPageList = Object.values(aiSolutionPages);
