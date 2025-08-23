import { AppProps } from 'next/app'
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals'
import { trackWebVitals } from '@/lib/performance'

// Track Core Web Vitals
function reportWebVitals(metric: any) {
  trackWebVitals(metric)
}

export { reportWebVitals }

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}