const fs = require('fs')
const path = require('path')

function generateSitemap() {
  const baseUrl = 'https://ghreatnesslabs.com.ng'
  const currentDate = new Date().toISOString()
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'weekly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
    { url: '/industries', priority: '0.7', changefreq: 'monthly' },
    { url: '/company', priority: '0.6', changefreq: 'monthly' }
  ]
  
  const services = [
    'web-development',
    'mobile-app-development',
    'ui-ux-design',
    'cybersecurity',
    'digital-marketing',
    'graphic-design',
    'video-editing'
  ]
  
  const servicePages = services.map(service => ({
    url: `/services/${service}`,
    priority: '0.8',
    changefreq: 'weekly'
  }))
  
  const allPages = [...staticPages, ...servicePages]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml')
  fs.writeFileSync(sitemapPath, sitemap)
  
  console.log('✅ Sitemap generated successfully!')
  console.log(`📍 Location: ${sitemapPath}`)
  console.log(`📊 Pages included: ${allPages.length}`)
}

function generateRobotsTxt() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/

Sitemap: https://ghreatnesslabs.com.ng/sitemap.xml

Crawl-delay: 1`

  const robotsPath = path.join(__dirname, '../public/robots.txt')
  fs.writeFileSync(robotsPath, robots)
  
  console.log('✅ Robots.txt generated successfully!')
  console.log(`📍 Location: ${robotsPath}`)
}

if (require.main === module) {
  generateSitemap()
  generateRobotsTxt()
}

module.exports = { generateSitemap, generateRobotsTxt }