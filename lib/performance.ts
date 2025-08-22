// Core Web Vitals tracking and optimization utilities

export interface WebVitalsMetric {
  id: string
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
}

// Track Core Web Vitals
export function trackWebVitals(metric: WebVitalsMetric) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    })
  }
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return

  const criticalImages = ['/logo.jpeg', '/og-image.jpg']
  criticalImages.forEach(image => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = image
    link.as = 'image'
    document.head.appendChild(link)
  })
}

// Resource hints for better performance
export function addResourceHints() {
  if (typeof document === 'undefined') return

  const hints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
  ]

  hints.forEach(hint => {
    const link = document.createElement('link')
    link.rel = hint.rel
    link.href = hint.href
    document.head.appendChild(link)
  })
}