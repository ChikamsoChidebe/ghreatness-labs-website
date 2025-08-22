'use client'

import Script from 'next/script'

interface ServiceSchema {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
}

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'article' | 'breadcrumb'
  data?: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getSchema = () => {
    const baseUrl = 'https://ghreatnesslabs.com.ng'
    
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': `${baseUrl}/#organization`,
          name: 'Ghreatness Labs',
          url: baseUrl,
          logo: `${baseUrl}/logo.jpeg`,
          description: 'Leading software development and digital solutions company in Nigeria, specializing in web development, mobile apps, UI/UX design, cybersecurity, and digital marketing.',
          foundingDate: '2020',
          founders: [
            {
              '@type': 'Person',
              name: 'Tunde Olamide Charles',
              jobTitle: 'CEO & Cybersecurity Expert'
            }
          ],
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'Nigeria',
            addressRegion: 'Lagos State',
            addressLocality: 'Lagos',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+234-XXX-XXX-XXXX',
              contactType: 'Customer Service',
              availableLanguage: 'English',
              areaServed: 'NG'
            }
          ],
          sameAs: [
            'https://twitter.com/ghreatnesslabs',
            'https://linkedin.com/company/ghreatness-labs',
            'https://facebook.com/ghreatnesslabs',
            'https://instagram.com/ghreatnesslabs',
          ],
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Digital Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Web Development',
                  description: 'Custom website development using modern technologies'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Mobile App Development',
                  description: 'Native and cross-platform mobile application development'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'UI/UX Design',
                  description: 'User interface and user experience design services'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Cybersecurity',
                  description: 'Comprehensive cybersecurity solutions and consulting'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Digital Marketing',
                  description: 'Strategic digital marketing and social media management'
                }
              }
            ]
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '50',
            bestRating: '5',
            worstRating: '1'
          }
        }

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${baseUrl}/#website`,
          name: 'Ghreatness Labs',
          url: baseUrl,
          description: 'Leading software development and digital solutions company in Nigeria',
          publisher: {
            '@id': `${baseUrl}/#organization`
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/search?q={search_term_string}`
            },
            'query-input': 'required name=search_term_string'
          },
          inLanguage: 'en-US'
        }

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data?.name || 'Software Development Services',
          description: data?.description || 'Professional software development and digital solutions',
          provider: {
            '@type': 'Organization',
            name: 'Ghreatness Labs',
            '@id': `${baseUrl}/#organization`
          },
          areaServed: {
            '@type': 'Country',
            name: 'Nigeria'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Service Packages',
            itemListElement: data?.packages || []
          },
          review: {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Client Review'
            }
          }
        }

      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data?.title,
          description: data?.description,
          image: data?.image || `${baseUrl}/og-image.jpg`,
          author: {
            '@type': 'Organization',
            name: 'Ghreatness Labs',
            '@id': `${baseUrl}/#organization`
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ghreatness Labs',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.jpeg`
            }
          },
          datePublished: data?.datePublished || new Date().toISOString(),
          dateModified: data?.dateModified || new Date().toISOString(),
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url || baseUrl
          }
        }

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data?.breadcrumbs?.map((crumb: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: crumb.name,
            item: `${baseUrl}${crumb.url}`
          })) || []
        }

      default:
        return null
    }
  }

  const schema = getSchema()

  if (!schema) return null

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  )
}