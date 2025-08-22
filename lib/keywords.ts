// SEO Keywords and Content Optimization

export const primaryKeywords = [
  'software development Nigeria',
  'web development Lagos',
  'mobile app development Nigeria',
  'UI UX design Lagos',
  'cybersecurity Nigeria',
  'digital marketing Lagos',
  'software company Nigeria',
  'tech solutions Lagos'
]

export const longTailKeywords = [
  'best software development company in Nigeria',
  'professional web development services Lagos',
  'custom mobile app development Nigeria',
  'expert UI UX design services Lagos',
  'cybersecurity consulting Nigeria',
  'digital marketing agency Lagos',
  'enterprise software development Nigeria',
  'responsive web design Lagos',
  'e-commerce development Nigeria',
  'software development outsourcing Lagos'
]

export const localKeywords = [
  'software developers in Lagos Nigeria',
  'web designers Lagos Island',
  'mobile app developers Victoria Island',
  'tech companies in Lekki Lagos',
  'software development firms Ikeja',
  'digital agencies in Lagos Nigeria',
  'IT companies Lagos State',
  'technology solutions providers Nigeria'
]

export const serviceKeywords = {
  webDevelopment: [
    'React development Nigeria',
    'Next.js developers Lagos',
    'WordPress development Nigeria',
    'e-commerce website development Lagos',
    'custom web applications Nigeria',
    'responsive website design Lagos'
  ],
  mobileApps: [
    'React Native development Nigeria',
    'Flutter app development Lagos',
    'iOS app development Nigeria',
    'Android app development Lagos',
    'cross-platform mobile apps Nigeria'
  ],
  uiuxDesign: [
    'user experience design Lagos',
    'user interface design Nigeria',
    'mobile app design Lagos',
    'website design Nigeria',
    'brand identity design Lagos'
  ],
  cybersecurity: [
    'cybersecurity consulting Nigeria',
    'penetration testing Lagos',
    'security audit Nigeria',
    'data protection services Lagos',
    'network security Nigeria'
  ],
  digitalMarketing: [
    'social media marketing Lagos',
    'SEO services Nigeria',
    'digital advertising Lagos',
    'content marketing Nigeria',
    'email marketing Lagos'
  ]
}

export const competitorKeywords = [
  'alternative to Andela Nigeria',
  'better than Decagon Nigeria',
  'compete with Flutterwave developers',
  'alternative to Paystack developers',
  'Nigeria tech talent',
  'Lagos software outsourcing'
]

export const industryKeywords = [
  'fintech development Nigeria',
  'e-commerce solutions Lagos',
  'healthcare software Nigeria',
  'education technology Lagos',
  'logistics software Nigeria',
  'real estate tech Lagos',
  'agriculture technology Nigeria',
  'oil and gas software Lagos'
]

// Content optimization helpers
export function optimizeContentForSEO(content: string, targetKeywords: string[]): string {
  let optimizedContent = content
  
  // Ensure primary keywords appear naturally
  targetKeywords.forEach(keyword => {
    if (!optimizedContent.toLowerCase().includes(keyword.toLowerCase())) {
      // Add keyword naturally to content
      optimizedContent += ` Our expertise in ${keyword} ensures exceptional results.`
    }
  })
  
  return optimizedContent
}

export function generateMetaDescription(service: string, location: string = 'Nigeria'): string {
  const templates = [
    `Professional ${service} services in ${location}. Expert team delivering cutting-edge solutions with proven results. Get a free consultation today!`,
    `Leading ${service} company in ${location}. Specializing in custom solutions that drive business growth. Contact us for a free quote!`,
    `Top-rated ${service} services in ${location}. Transform your business with our innovative solutions. Trusted by 500+ clients.`,
    `Expert ${service} solutions in ${location}. Custom development, design, and consulting services. Start your project today!`
  ]
  
  return templates[Math.floor(Math.random() * templates.length)]
}

export function generatePageTitle(service: string, location: string = 'Nigeria'): string {
  const templates = [
    `Professional ${service} Services in ${location} | Ghreatness Labs`,
    `Expert ${service} Company in ${location} | Custom Solutions | Ghreatness Labs`,
    `${service} Services ${location} | Top-Rated Development Company | Ghreatness Labs`,
    `Leading ${service} Agency in ${location} | Innovative Solutions | Ghreatness Labs`
  ]
  
  return templates[Math.floor(Math.random() * templates.length)]
}

// Schema markup generators
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  features: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Ghreatness Labs',
      url: 'https://ghreatnesslabs.com.ng'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nigeria'
    },
    offers: service.price ? {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    } : undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: service.features.map((feature, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: feature
        }
      }))
    }
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}