'use client'

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  structuredData?: object
}

export function SEOHead({
  title = 'Ghreatness Labs - Leading Software Development Company in Nigeria',
  description = 'Top-rated software development company in Lagos, Nigeria. Expert web development, mobile apps, UI/UX design, cybersecurity, and digital marketing services.',
  keywords = 'software development Nigeria, web development Lagos, mobile app development, UI UX design, cybersecurity Nigeria, digital marketing Lagos',
  canonical,
  ogImage = '/og-image.jpg',
  structuredData,
}: SEOHeadProps) {
  const baseUrl = 'https://ghreatnesslabs.com.ng'
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${baseUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical ? `${baseUrl}${canonical}` : baseUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="Ghreatness Labs" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical ? `${baseUrl}${canonical}` : baseUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${baseUrl}${ogImage}`} />
      <meta property="twitter:creator" content="@ghreatnesslabs" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="Ghreatness Labs" />
      <meta name="publisher" content="Ghreatness Labs" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="NG-LA" />
      <meta name="geo.placename" content="Lagos, Nigeria" />
      <meta name="geo.position" content="6.5244;3.3792" />
      <meta name="ICBM" content="6.5244, 3.3792" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}