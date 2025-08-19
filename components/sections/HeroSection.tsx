'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Zap, Globe, Shield, Code, Palette, Video, TrendingUp } from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Float } from '@react-three/drei'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Hero3DScene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#764ba2" />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 100, 200]} scale={2.5}>
          <MeshDistortMaterial
            color="#667eea"
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.5, 50, 100]} position={[3, 2, -2]} scale={1}>
          <MeshDistortMaterial
            color="#764ba2"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={1.5}>
        <Sphere args={[0.3, 30, 60]} position={[-2.5, -1.5, 1]} scale={0.8}>
          <MeshDistortMaterial
            color="#f093fb"
            attach="material"
            distort={0.3}
            speed={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  )
}

function ParticleField() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: Math.random() * 3 + 2,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, -40, -20],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function ServiceIcon({ icon: Icon, delay }: { icon: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="absolute"
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
    >
      <motion.div
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/10"
      >
        <Icon size={24} className="text-blue-400" />
      </motion.div>
    </motion.div>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const serviceIcons = [
    { icon: Palette, delay: 0.5 },
    { icon: Code, delay: 0.7 },
    { icon: Globe, delay: 0.9 },
    { icon: Video, delay: 1.1 },
    { icon: TrendingUp, delay: 1.3 },
    { icon: Shield, delay: 1.5 },
  ]

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      
      {/* Client-side only elements */}
      {isMounted && (
        <>
          <ParticleField />
          <div className="absolute inset-0 pointer-events-none">
            {serviceIcons.map((service, index) => (
              <ServiceIcon key={index} icon={service.icon} delay={service.delay} />
            ))}
          </div>
          <motion.div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none"
            animate={{
              x: mousePosition.x * 50,
              y: mousePosition.y * 50,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 30 }}
          />
        </>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-4rem)]">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full border border-blue-500/20 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-sm text-blue-300">Cutting-Edge Technology Solutions</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="heading-xl gradient-text leading-tight"
          >
            Empowering Businesses with{' '}
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300% animate-gradient"
            >
              Cutting-Edge Solutions
            </motion.span>
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Website development, software solutions, design services, marketing, and more — 
            delivering exceptional UI/UX design, robust cybersecurity solutions, and innovative 
            development experiences. Your vision, our expertise — together, let's build the future.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            {[
              { icon: Zap, text: "Lightning Fast" },
              { icon: Shield, text: "Secure & Reliable" },
              { icon: Globe, text: "Global Reach" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg backdrop-blur-sm">
                <feature.icon size={16} className="text-blue-400" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/company">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-transparent border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-blue-500 hover:text-white flex items-center gap-2"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>Learn More</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-8 justify-center lg:justify-start pt-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50</div>
              <div className="text-sm text-gray-400">Industry Experts</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[400px] sm:h-[500px] lg:h-[600px] relative order-last lg:order-last"
        >
          <div className="relative h-full rounded-3xl overflow-hidden">
            <Image
              src="https://ghreatnesslab.vercel.app/assets/aboutCover-By__m7AD.png"
              alt="Ghreatness Labs Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          
          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-10 glass p-4 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white">System Online</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-10 glass p-4 rounded-2xl"
          >
            <div className="flex items-center gap-3">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-white">AI Powered</span>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  )
}