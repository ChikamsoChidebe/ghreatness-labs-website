import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = generateSEO({
  title: 'Contact Ghreatness Labs - Get Free Quote for Software Development Services in Nigeria | Lagos',
  description: 'Contact Ghreatness Labs for professional software development, web development, mobile apps, and digital solutions in Nigeria. Get a free consultation and quote. Located in Lagos, serving all of Nigeria.',
  keywords: [
    'contact ghreatness labs',
    'software development quote Nigeria',
    'web development consultation Lagos',
    'free software development quote Nigeria',
    'contact software company Lagos',
    'get quote mobile app development Nigeria',
    'software development consultation Lagos',
    'contact tech company Nigeria',
    'hire developers Lagos Nigeria',
    'software development inquiry Nigeria'
  ],
  canonical: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <StructuredData 
        type="organization"
        data={{
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+234-XXX-XXX-XXXX',
            contactType: 'Customer Service',
            availableLanguage: 'English',
            areaServed: 'NG',
            hoursAvailable: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00'
            }
          }
        }}
      />
      <ContactPageClient />
    </>
  )
}