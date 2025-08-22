import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import { StructuredData } from '@/components/StructuredData'
import ServicesPageClient from './ServicesPageClient'

export const metadata: Metadata = generateSEO({
  title: 'Professional Software Development Services in Nigeria | Web Development, Mobile Apps, UI/UX Design | Ghreatness Labs',
  description: 'Expert software development services in Lagos, Nigeria. Specializing in web development, mobile apps, UI/UX design, cybersecurity, digital marketing, and custom software solutions. Get a free quote today!',
  keywords: [
    'software development services Nigeria',
    'web development Lagos',
    'mobile app development Nigeria',
    'UI UX design services Lagos',
    'cybersecurity services Nigeria',
    'digital marketing Lagos',
    'custom software development Nigeria',
    'professional web design Lagos',
    'enterprise software solutions Nigeria',
    'software company services Lagos'
  ],
  canonical: '/services',
})



export default function ServicesPage() {
  return (
    <>
      <StructuredData 
        type="service" 
        data={{
          name: 'Professional Software Development Services',
          description: 'Comprehensive software development, web development, mobile apps, UI/UX design, cybersecurity, and digital marketing services in Nigeria',
          packages: [
            { name: 'UI/UX Design', description: 'User interface and experience design services starting from $164' },
            { name: 'Web Development', description: 'Custom website development starting from $314' },
            { name: 'Mobile Apps', description: 'Native and cross-platform mobile applications starting from $480' },
            { name: 'Cybersecurity', description: 'Security consulting and implementation starting from $517' },
            { name: 'Digital Marketing', description: 'Strategic digital marketing solutions starting from $21/month' },
            { name: 'Graphic Design', description: 'Brand identity and visual design starting from $23' },
            { name: 'Video Editing', description: 'Professional video editing services starting from $173' }
          ]
        }}
      />
      <ServicesPageClient />
    </>
  )
}