import React from 'react';
import { ArrowRight, ChevronRight, Users, Award, Globe } from 'lucide-react';
import ConsultationForm from "../ui/ConsultationForm";
import Testimonials from "../ui/Testimonials";
import univyx from "../assets/univyx.png";
import misplaceMe from "../assets/misplaceMe.png";
import athlegame from "../assets/athlegame.png";
import uiIllustration from "../assets/uiIllustration.png";
import webIllustration from "../assets/webIllustration.png";
import securityImg from "../assets/securityImg.png"
import mobileIllustration from "../assets/mobileIllustration.png"


const Home = () => {
  const stats = [
    { 
      label: "Leading The Change In Tech Innovation",
      value: "",
      icon: Award,
      color: "text-blue-600"
    },
    { 
      label: "million users worldwide",
      value: "10.5",
      icon: Globe,
      color: "text-emerald-600"
    },
    { 
      label: "industry experts",
      value: "50",
      icon: Users,
      color: "text-purple-600"
    },
    { 
      label: "years of experience",
      value: "2",
      icon: Award,
      color: "text-orange-600"
    },
  ];

  const services = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: uiIllustration,
      bgColor: "bg-blue-50"
    },
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: webIllustration,
      bgColor: "bg-purple-50"
    },
    {
      title: "Security Solutions",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: securityImg,
      bgColor: "bg-green-50"
    },
    {
      title: "Mobile Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image: mobileIllustration,
      bgColor: "bg-orange-50"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "misplaceMe",
      logo: misplaceMe,
      description: "Innovative solutions for modern challenges",
      image: misplaceMe,
      category: "Mobile App",
      stats: { users: "50K+", rating: "4.8" }
    },
    {
      id: 2,
      title: "univyx",
      logo: univyx,
      description: "Transforming user experiences",
      image: univyx,
      category: "Web Platform",
      stats: { users: "100K+", rating: "4.9" }
    },
    {
      id: 3,
      title: "athlegame",
      logo: athlegame,
      description: "Building scalable solutions",
      image: athlegame,
      category: "Desktop App",
      stats: { users: "75K+", rating: "4.7" }
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400">
                <span className="mr-2">✨</span> Innovative Solutions for Modern Businesses
              </div>
              <h1 className="mt-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                Empowering businesses with cutting-edge solutions
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                UI/UX design, secure cybersecurity solutions, and innovative development experience. Your vision, our expertise - let's build the future together.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <button className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-500">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-white/10">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg bg-white/5 p-2 backdrop-blur-sm">
                <img 
                  src={uiIllustration}
                  alt="Hero illustration" 
                  className="rounded-lg shadow-2xl ring-1 ring-white/10"
                />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-blue-600/20 backdrop-blur-sm"></div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-purple-600/20 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative -mt-16 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="transform rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-xl ${service.bgColor} shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl`}
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/50"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  <button className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 transition-all hover:text-blue-500">
                    View More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
     <CaseStudiesSection caseStudies={caseStudies}/>

      <Testimonials />
      <ConsultationForm />
    </div>
  );
};

const CaseStudiesSection = ({ caseStudies }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-6">
          Featured Work
        </span>
        <h2 className="text-4xl font-bold text-white sm:text-5xl tracking-tight">
          Case Studies
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
          Explore Our Impactful Work and Proven Results
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl transition-all duration-300 hover:scale-102 hover:shadow-blue-500/10"
          >
            <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            
            <div className="relative p-1">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/90" />
              </div>

              <div className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-14 w-14 overflow-hidden rounded-xl bg-gray-800 p-2 ring-1 ring-white/10">
                    <img
                      src={study.logo}
                      alt={`${study.title} logo`}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="rounded-full bg-gray-800/80 px-3 py-1 text-sm font-medium text-gray-300 backdrop-blur-sm">
                    {study.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                  {study.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">
                      <span className="block text-gray-400">Users</span>
                      <span className="block text-white font-semibold">{study.stats.users}</span>
                    </div>
                    <div className="text-sm">
                      <span className="block text-gray-400">Rating</span>
                      <span className="block text-white font-semibold">{study.stats.rating}</span>
                    </div>
                  </div>
                </div>

                <button className="relative w-full group/btn">
                  <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur transition duration-300 group-hover/btn:opacity-50" />
                  <div className="relative flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Home;