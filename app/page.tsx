'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ConsultationSection } from '@/components/sections/ConsultationSection'
import { StructuredData } from '@/components/StructuredData'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Structured Data */}
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData 
        type="service" 
        data={{
          name: 'Software Development Services',
          description: 'Comprehensive software development, web development, mobile apps, UI/UX design, cybersecurity, and digital marketing services in Nigeria',
          packages: [
            { name: 'Web Development', description: 'Custom website development' },
            { name: 'Mobile Apps', description: 'Native and cross-platform mobile applications' },
            { name: 'UI/UX Design', description: 'User interface and experience design' },
            { name: 'Cybersecurity', description: 'Security consulting and implementation' },
            { name: 'Digital Marketing', description: 'Strategic digital marketing solutions' }
          ]
        }}
      />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Optimized Background for other sections */}
      <div className="relative">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/2 to-purple-500/2 rounded-full blur-3xl" />
        </div>
      
        {/* Stats Section */}
        <StatsSection />
        
        {/* Services Section */}
        <ServicesSection />
        
        {/* Case Studies Section */}
        <CaseStudiesSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Consultation Section */}
        <ConsultationSection />
      </div>
    </div>
  )
}