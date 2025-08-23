import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateSEO({
  title = 'Ghreatness Labs - Leading Software Development & Digital Solutions Company in Nigeria',
  description = 'Top-rated software development company in Lagos, Nigeria. Expert web development, mobile apps, UI/UX design, cybersecurity, and digital marketing services. Transform your business with cutting-edge technology solutions.',
  keywords = [
    'software development Nigeria',
    'web development Lagos',
    'mobile app development Nigeria',
    'UI UX design Lagos',
    'cybersecurity Nigeria',
    'digital marketing Lagos',
    'software company Nigeria',
    'tech solutions Lagos',
    'custom software development',
    'enterprise software Nigeria'
  ],
  canonical,
  ogImage = '/og-image.jpg',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseUrl = 'https://ghreatnesslabs.com.ng'
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Ghreatness Labs', url: baseUrl }],
    creator: 'Ghreatness Labs',
    publisher: 'Ghreatness Labs',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || '/',
    },
    openGraph: {
      title,
      description,
      url: canonical ? `${baseUrl}${canonical}` : baseUrl,
      siteName: 'Ghreatness Labs',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@ghreatnesslabs',
      site: '@ghreatnesslabs',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
    },
  }
}

export const jsonLd = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Ghreatness Labs',
    url: 'https://ghreatnesslabs.com.ng',
    logo: 'https://ghreatnesslabs.com.ng/logo.jpeg',
    description: 'Leading software development and digital solutions company in Nigeria, specializing in web development, mobile apps, UI/UX design, cybersecurity, and digital marketing.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Nigeria',
      addressRegion: 'Lagos',
      addressLocality: 'Lagos',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-XXX-XXX-XXXX',
      contactType: 'Customer Service',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://twitter.com/ghreatnesslabs',
      'https://linkedin.com/company/ghreatness-labs',
      'https://facebook.com/ghreatnesslabs',
      'https://instagram.com/ghreatnesslabs',
    ],
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    industry: 'Software Development',
    services: [
      'Web Development',
      'Mobile App Development',
      'UI/UX Design',
      'Cybersecurity',
      'Digital Marketing',
      'Software Consulting',
    ],
  },
  
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ghreatness Labs',
    url: 'https://ghreatnesslabs.com.ng',
    description: 'Leading software development and digital solutions company in Nigeria',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://ghreatnesslabs.com.ng/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ghreatnesslabs.com.ng',
    name: 'Ghreatness Labs',
    image: 'https://ghreatnesslabs.com.ng/logo.jpeg',
    url: 'https://ghreatnesslabs.com.ng',
    telephone: '+234-XXX-XXX-XXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      postalCode: '100001',
      addressCountry: 'NG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  },
}