'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Zap, Globe, Award, TrendingUp, Code, Palette, Shield, Smartphone } from 'lucide-react'
import Image from 'next/image'

const stats = [
  { label: 'Clients', value: '1000+', icon: Users },
  { label: 'Industry Experts', value: '50', icon: Award },
  { label: 'Years Experience', value: '1+', icon: TrendingUp },
  { label: 'Projects Completed', value: '500+', icon: Target }
]

const services = [
  { name: 'UI/UX Design', icon: Palette, color: 'from-pink-500 to-rose-500' },
  { name: 'Web Development', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { name: 'Mobile Apps', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
  { name: 'Cybersecurity', icon: Shield, color: 'from-purple-500 to-violet-500' }
]

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About
                <span className="gradient-text block">Ghreatness Labs</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We are a technology solutions company dedicated to empowering businesses with cutting-edge digital experiences. 
                From innovative web development to comprehensive cybersecurity solutions, we transform visions into reality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Our Services
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500/10 transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass p-8 rounded-2xl">
                <Image
                  src="/images/about/Ghreatness Lab1.png"
                  alt="Ghreatness Labs"
                  width={500}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering exceptional results across industries and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl text-center hover-lift"
              >
                <div className="inline-block p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="inline-block p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower students with access, information, and opportunities that accelerate their career growth. 
                We provide direct access to verified internships, build professional networks, and offer skill development 
                resources that match evolving industry demands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="inline-block p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology solutions provider that bridges the gap between innovation and implementation, 
                creating digital experiences that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section ref={servicesRef} className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover-lift group cursor-pointer"
              >
                <div className={`inline-block p-4 bg-gradient-to-r ${service.color} bg-opacity-20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                <p className="text-gray-300 text-sm">
                  Professional {service.name.toLowerCase()} solutions designed for modern businesses
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community */}
      <section className="section-padding bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay updated with our latest projects, insights, and opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}