import React from 'react';
import { ArrowRight } from 'lucide-react';
import ourProjectsCover from "../assets/ourProjectsCover.png";
import ConsultationForm from '../ui/ConsultationForm';
import Testimonials from '../ui/Testimonials';

const ProjectCard = ({ title, description }) => (
  <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 p-6 shadow-lg transition-all hover:scale-105 hover:shadow-blue-500/10">
    <div className="absolute inset-0.5 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    <h3 className="text-2xl font-bold text-white tracking-tight mb-2">{title}</h3>
    <p className="text-gray-300 line-clamp-3 mb-4">{description}</p>
    <button className="relative flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-all">
      Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </button>
  </div>
);

const Industries = () => {
  const currentProjects = [
    { title: "misplaceMe", description: "Innovative mobile solutions for everyday challenges." },
    { title: "univyx", description: "A web platform transforming digital experiences." },
    { title: "athlegame", description: "Scalable desktop applications for performance tracking." }
  ];

  const upcomingProjects = [
    { title: "Project Alpha", description: "Revolutionizing business analytics with AI-driven insights." },
    { title: "Project Beta", description: "Next-gen cloud solutions for enterprises." },
    { title: "Project Gamma", description: "Cutting-edge security solutions for modern threats." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
       <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
             <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10"></div>
             <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                 <div className="flex flex-col justify-center">
                   <div className="inline-flex items-center rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400">
                     <span className="mr-2">✨</span>  Driving Innovation Across Industries
                   </div>
                   <h1 className="mt-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
                   Transforming Ideas into Reality
                   </h1>
                   <p className="mt-6 text-xl text-gray-300">
                   Explore our industry-leading projects and innovative solutions that drive success in a rapidly evolving world.
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
                       src={ourProjectsCover} 
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

      {/* Current Projects Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Next Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
      <ConsultationForm />
    </div>
  );
};

export default Industries;
