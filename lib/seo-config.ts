// Centralized SEO Configuration

export const seoConfig = {
  // Site Information
  siteName: 'Ghreatness Labs',
  siteUrl: 'https://ghreatnesslabs.com.ng',
  defaultTitle: 'Ghreatness Labs - Leading Software Development Company in Nigeria',
  defaultDescription: 'Top-rated software development company in Lagos, Nigeria. Expert web development, mobile apps, UI/UX design, cybersecurity, and digital marketing services. Transform your business with cutting-edge technology solutions.',
  
  // Business Information
  businessName: 'Ghreatness Labs',
  businessType: 'Technology Company',
  foundedYear: '2020',
  employees: '10-50',
  
  // Contact Information
  phone: '+234-XXX-XXX-XXXX',
  email: 'info@ghreatnesslabs.com.ng',
  address: {
    street: 'Your Street Address',
    city: 'Lagos',
    state: 'Lagos State',
    country: 'Nigeria',
    postalCode: '100001'
  },
  
  // Geographic Information
  coordinates: {
    latitude: 6.5244,
    longitude: 3.3792
  },
  
  // Social Media
  social: {
    twitter: '@ghreatnesslabs',
    facebook: 'ghreatnesslabs',
    linkedin: 'company/ghreatness-labs',
    instagram: 'ghreatnesslabs',
    youtube: '@ghreatnesslabs'
  },
  
  // Business Hours
  businessHours: {
    monday: '09:00-18:00',
    tuesday: '09:00-18:00',
    wednesday: '09:00-18:00',
    thursday: '09:00-18:00',
    friday: '09:00-18:00',
    saturday: 'Closed',
    sunday: 'Closed'
  },
  
  // Services
  services: [
    {
      name: 'Web Development',
      description: 'Custom website development using modern technologies',
      startingPrice: '$314',
      category: 'Development'
    },
    {
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      startingPrice: '$480',
      category: 'Development'
    },
    {
      name: 'UI/UX Design',
      description: 'User interface and user experience design services',
      startingPrice: '$164',
      category: 'Design'
    },
    {
      name: 'Cybersecurity',
      description: 'Comprehensive cybersecurity solutions and consulting',
      startingPrice: '$517',
      category: 'Security'
    },
    {
      name: 'Digital Marketing',
      description: 'Strategic digital marketing and social media management',
      startingPrice: '$21/month',
      category: 'Marketing'
    },
    {
      name: 'Graphic Design',
      description: 'Brand identity and visual design services',
      startingPrice: '$23',
      category: 'Design'
    },
    {
      name: 'Video Editing',
      description: 'Professional video editing and motion graphics',
      startingPrice: '$173',
      category: 'Media'
    }
  ],
  
  // Target Keywords
  primaryKeywords: [
    'software development Nigeria',
    'web development Lagos',
    'mobile app development Nigeria',
    'UI UX design Lagos',
    'cybersecurity Nigeria',
    'digital marketing Lagos'
  ],
  
  // Local Keywords
  localKeywords: [
    'software developers Lagos Nigeria',
    'web designers Lagos Island',
    'mobile app developers Victoria Island',
    'tech companies Lekki Lagos',
    'IT companies Lagos State'
  ],
  
  // Competitor Analysis
  competitors: [
    'Andela Nigeria',
    'Decagon Nigeria',
    'Flutterwave developers',
    'Paystack developers',
    'Interswitch developers'
  ],
  
  // Target Industries
  targetIndustries: [
    'Fintech',
    'E-commerce',
    'Healthcare',
    'Education',
    'Logistics',
    'Real Estate',
    'Agriculture',
    'Oil and Gas'
  ],
  
  // Analytics & Tracking
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    bingSiteVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
    yandexSiteVerification: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
  },
  
  // Performance Targets
  performanceTargets: {
    lcp: 2.5, // Largest Contentful Paint (seconds)
    fid: 100, // First Input Delay (milliseconds)
    cls: 0.1, // Cumulative Layout Shift
    pageSpeedScore: 90,
    mobileUsability: 100
  },
  
  // Content Strategy
  contentTopics: [
    'Software Development Trends Nigeria',
    'Web Development Best Practices',
    'Mobile App Development Guide',
    'Cybersecurity for Nigerian Businesses',
    'Digital Marketing Strategies Africa',
    'UI/UX Design Principles',
    'Technology Solutions for SMEs'
  ],
  
  // FAQ Data
  commonFAQs: [
    {
      question: 'How long does a typical software development project take?',
      answer: 'Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive maintenance and support packages including updates, security monitoring, performance optimization, and technical support.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is project-based and depends on requirements, complexity, and timeline. We provide detailed quotes after understanding your specific needs.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! While based in Lagos, Nigeria, we serve clients globally and work across different time zones.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Next.js, Node.js, Python, React Native, Flutter, and various cloud platforms, choosing the best tech stack for each project.'
    }
  ]
}

export default seoConfig