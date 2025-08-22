import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'
import AboutPageClient from './AboutPageClient'

export const metadata: Metadata = generateSEO({
  title: 'About Ghreatness Labs - Leading Software Development Company in Nigeria | Expert Team & Services',
  description: 'Learn about Ghreatness Labs, Nigeria\'s premier software development company. Meet our expert team of developers, designers, and cybersecurity specialists delivering cutting-edge digital solutions in Lagos and across Africa.',
  keywords: [
    'about ghreatness labs',
    'software development company Nigeria',
    'tech company Lagos',
    'software development team Nigeria',
    'web development experts Lagos',
    'cybersecurity company Nigeria',
    'digital agency Lagos',
    'software engineers Nigeria',
    'tech startup Lagos',
    'IT solutions company Nigeria'
  ],
  canonical: '/about',
})

export default function AboutPage() {
  return <AboutPageClient />
}