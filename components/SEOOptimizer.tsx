'use client'

import { useEffect } from 'react'
import { trackWebVitals, preloadCriticalResources, addResourceHints } from '@/lib/performance'
import { pageview } from '@/lib/analytics'
import { usePathname } from 'next/navigation'

interface SEOOptimizerProps {
  children: React.ReactNode
}

export function SEOOptimizer({ children }: SEOOptimizerProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    pageview(pathname)
    
    // Preload critical resources
    preloadCriticalResources()
    
    // Add resource hints
    addResourceHints()
    
    // Track Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(trackWebVitals)
        getFID(trackWebVitals)
        getFCP(trackWebVitals)
        getLCP(trackWebVitals)
        getTTFB(trackWebVitals)
      })
    }
    
    // Optimize images lazily
    const images = document.querySelectorAll('img[data-src]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src || ''
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })
    
    images.forEach(img => imageObserver.observe(img))
    
    // Add structured data for breadcrumbs
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: generateBreadcrumbs(pathname)
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(breadcrumbSchema)
    document.head.appendChild(script)
    
    return () => {
      document.head.removeChild(script)
    }
  }, [pathname])

  return <>{children}</>
}

function generateBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean)
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ghreatnesslabs.com.ng'
    }
  ]
  
  let currentPath = ''
  paths.forEach((path, index) => {
    currentPath += `/${path}`
    breadcrumbs.push({
      '@type': 'ListItem',
      position: index + 2,
      name: path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' '),
      item: `https://ghreatnesslabs.com.ng${currentPath}`
    })
  })
  
  return breadcrumbs
}

// SEO Content Optimizer Component
interface SEOContentProps {
  title: string
  content: string
  keywords: string[]
  className?: string
}

export function SEOContent({ title, content, keywords, className = '' }: SEOContentProps) {
  // Optimize content for keywords
  const optimizedContent = optimizeContentForKeywords(content, keywords)
  
  return (
    <div className={className}>
      <h1 className="seo-title">{title}</h1>
      <div 
        className="seo-content"
        dangerouslySetInnerHTML={{ __html: optimizedContent }}
      />
    </div>
  )
}

function optimizeContentForKeywords(content: string, keywords: string[]): string {
  let optimized = content
  
  // Ensure keyword density is optimal (1-3%)
  keywords.forEach(keyword => {
    const keywordCount = (optimized.match(new RegExp(keyword, 'gi')) || []).length
    const wordCount = optimized.split(' ').length
    const density = (keywordCount / wordCount) * 100
    
    // If density is too low, add keyword naturally
    if (density < 1 && keywordCount === 0) {
      optimized = optimized.replace(
        /\. ([A-Z])/g, 
        `. Our expertise in ${keyword} ensures $1`
      )
    }
  })
  
  return optimized
}

// Schema Markup Component
interface SchemaMarkupProps {
  type: 'Article' | 'Service' | 'Organization' | 'LocalBusiness'
  data: any
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }
    
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [type, data])
  
  return null
}

// Critical CSS Inliner
export function CriticalCSS({ css }: { css: string }) {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = css
    style.setAttribute('data-critical', 'true')
    document.head.appendChild(style)
    
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style)
      }
    }
  }, [css])
  
  return null
}