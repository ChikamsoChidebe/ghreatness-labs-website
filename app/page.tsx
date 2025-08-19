'use client'

import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ConsultationSection } from '@/components/sections/ConsultationSection'
import { ParticleBackground } from '@/components/3d/ParticleBackground'
import { FloatingElements } from '@/components/3d/FloatingElements'

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quantum Background for other sections */}
      <div className="relative">
        <ParticleBackground />
        <FloatingElements />
      
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