// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track conversions
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'NGN',
    })
  }
}

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'engagement',
    label: formName,
  })
}

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'click',
    category: 'engagement',
    label: `${buttonName} - ${location}`,
  })
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage,
  })
}

// Enhanced ecommerce tracking for service inquiries
export const trackServiceInquiry = (serviceName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'NGN',
      value: value || 0,
      items: [{
        item_id: serviceName.toLowerCase().replace(/\s+/g, '_'),
        item_name: serviceName,
        item_category: 'service_inquiry',
        quantity: 1,
      }]
    })
  }
}

// Track user engagement
export const trackEngagement = (engagementType: string, details?: string) => {
  event({
    action: engagementType,
    category: 'user_engagement',
    label: details,
  })
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}