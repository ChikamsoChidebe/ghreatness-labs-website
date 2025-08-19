'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, CheckCircle, Star, Users, Award, Zap, Shield, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

function ModernHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Modern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
              <Star size={16} className="text-blue-400" />
              <span className="text-sm text-blue-300">Trusted by 1000+ Companies</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Build the Future with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Ghreatness Labs
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Professional web development, software solutions, and digital marketing services. 
              Transform your business with cutting-edge technology and expert craftsmanship.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: Zap, text: "Fast Delivery" },
                { icon: Shield, text: "Secure & Reliable" },
                { icon: Globe, text: "Global Reach" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg">
                  <feature.icon size={16} className="text-blue-400" />
                  <span className="text-sm text-gray-300">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
                >
                  Get Started <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link href="/company">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all flex items-center gap-2"
                >
                  <Play size={20} /> Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="https://ghreatnesslab.vercel.app/assets/aboutCover-By__m7AD.png"
                alt="Ghreatness Labs"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function QuickStats() {
  const stats = [
    { value: '1000+', label: 'Happy Clients' },
    { value: '500+', label: 'Projects Completed' },
    { value: '50+', label: 'Expert Team' },
    { value: '99.9%', label: 'Uptime' }
  ]

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technology.'
    },
    {
      icon: Zap,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.'
    }
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">Professional solutions for modern businesses</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all"
            >
              <service.icon size={48} className="text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              View All Services
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Let's discuss your project and create something amazing together.
        </p>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Start Your Project
          </motion.button>
        </Link>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <div className="relative">
      <ModernHero />
      <QuickStats />
      <ServicesPreview />
      <CallToAction />
    </div>
  )
}