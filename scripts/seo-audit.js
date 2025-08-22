const fs = require('fs')
const path = require('path')

// SEO Audit Script
function runSEOAudit() {
  console.log('🔍 Running SEO Audit...\n')
  
  const results = {
    passed: [],
    warnings: [],
    errors: []
  }
  
  // Check if essential SEO files exist
  checkEssentialFiles(results)
  
  // Check meta tags in layout
  checkMetaTags(results)
  
  // Check sitemap structure
  checkSitemap(results)
  
  // Check robots.txt
  checkRobotsTxt(results)
  
  // Check environment variables
  checkEnvironmentVariables(results)
  
  // Display results
  displayResults(results)
}

function checkEssentialFiles(results) {
  const essentialFiles = [
    'app/sitemap.ts',
    'app/robots.ts',
    'lib/seo.ts',
    'lib/analytics.ts',
    'public/og-image.jpg',
    'public/site.webmanifest'
  ]
  
  essentialFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file)
    if (fs.existsSync(filePath)) {
      results.passed.push(`✅ ${file} exists`)
    } else {
      results.errors.push(`❌ Missing essential file: ${file}`)
    }
  })
}

function checkMetaTags(results) {
  const layoutPath = path.join(__dirname, '..', 'app/layout.tsx')
  
  if (fs.existsSync(layoutPath)) {
    const layoutContent = fs.readFileSync(layoutPath, 'utf8')
    
    // Check for essential meta tags
    const requiredTags = [
      'viewport',
      'description',
      'og:title',
      'og:description',
      'twitter:card'
    ]
    
    requiredTags.forEach(tag => {
      if (layoutContent.includes(tag)) {
        results.passed.push(`✅ Meta tag found: ${tag}`)
      } else {
        results.warnings.push(`⚠️ Meta tag missing or not found: ${tag}`)
      }
    })
  } else {
    results.errors.push('❌ Layout file not found')
  }
}

function checkSitemap(results) {
  const sitemapPath = path.join(__dirname, '..', 'app/sitemap.ts')
  
  if (fs.existsSync(sitemapPath)) {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8')
    
    if (sitemapContent.includes('MetadataRoute.Sitemap')) {
      results.passed.push('✅ Sitemap properly configured')
    } else {
      results.warnings.push('⚠️ Sitemap may not be properly configured')
    }
    
    // Check for essential pages
    const essentialPages = ['/about', '/services', '/contact']
    essentialPages.forEach(page => {
      if (sitemapContent.includes(page)) {
        results.passed.push(`✅ Sitemap includes: ${page}`)
      } else {
        results.warnings.push(`⚠️ Sitemap missing page: ${page}`)
      }
    })
  }
}

function checkRobotsTxt(results) {
  const robotsPath = path.join(__dirname, '..', 'app/robots.ts')
  
  if (fs.existsSync(robotsPath)) {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8')
    
    if (robotsContent.includes('sitemap:')) {
      results.passed.push('✅ Robots.txt includes sitemap reference')
    } else {
      results.warnings.push('⚠️ Robots.txt missing sitemap reference')
    }
  }
}

function checkEnvironmentVariables(results) {
  const envPath = path.join(__dirname, '..', '.env.local')
  
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8')
    
    const requiredVars = [
      'NEXT_PUBLIC_GA_MEASUREMENT_ID',
      'NEXT_PUBLIC_SITE_URL',
      'NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION'
    ]
    
    requiredVars.forEach(variable => {
      if (envContent.includes(variable)) {
        results.passed.push(`✅ Environment variable set: ${variable}`)
      } else {
        results.warnings.push(`⚠️ Environment variable missing: ${variable}`)
      }
    })
  } else {
    results.warnings.push('⚠️ .env.local file not found')
  }
}

function displayResults(results) {
  console.log('📊 SEO Audit Results:\n')
  
  if (results.passed.length > 0) {
    console.log('✅ PASSED CHECKS:')
    results.passed.forEach(item => console.log(`   ${item}`))
    console.log('')
  }
  
  if (results.warnings.length > 0) {
    console.log('⚠️  WARNINGS:')
    results.warnings.forEach(item => console.log(`   ${item}`))
    console.log('')
  }
  
  if (results.errors.length > 0) {
    console.log('❌ ERRORS:')
    results.errors.forEach(item => console.log(`   ${item}`))
    console.log('')
  }
  
  // Summary
  const total = results.passed.length + results.warnings.length + results.errors.length
  const score = Math.round((results.passed.length / total) * 100)
  
  console.log(`📈 SEO Score: ${score}%`)
  console.log(`   Passed: ${results.passed.length}`)
  console.log(`   Warnings: ${results.warnings.length}`)
  console.log(`   Errors: ${results.errors.length}`)
  
  if (score >= 90) {
    console.log('\n🎉 Excellent SEO setup!')
  } else if (score >= 70) {
    console.log('\n👍 Good SEO setup, minor improvements needed')
  } else {
    console.log('\n🔧 SEO setup needs attention')
  }
}

// Run audit if called directly
if (require.main === module) {
  runSEOAudit()
}

module.exports = { runSEOAudit }