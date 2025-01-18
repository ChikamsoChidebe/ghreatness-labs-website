import React from 'react';
import ourProjectsCover from "../assets/ourProjectsCover.png";
import avatar from "../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from 'lucide-react';
import Slider from 'react-slick';

const ProjectCard = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src="/api/placeholder/400/300" 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
      <button className="flex items-center gap-2 text-black font-medium hover:gap-3 transition-all duration-300">
        Read more <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const TestimonialCard = ({ name, role, testimonial }) => (
  <div className="p-6 bg-white rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <img src={avatar} alt={name} className="w-16 h-16 rounded-full" />
      <div className="ml-4">
        <h4 className="font-bold text-lg text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600">{testimonial}</p>
  </div>
);

const Industries = () => {
  const currentProjects = [
    {
      title: "misplace me",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    },
    {
      title: "univyx",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "athlegame",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    }
  ];

  const upcomingProjects = [
    {
      title: "Project Alpha",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Project Beta",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Project Gamma",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  const testimonials = [
    {
      name: "Robert Jackson",
      role: "CEO, TechCorp",
      testimonial:
        "Working with Greatness Labs has been a game-changer for our business. Their expertise in cloud solutions helped us seamlessly migrate our systems.",
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, InnovateX",
      testimonial:
        "Their user interface and experience design for our platform were flawless. Our customers love the new design, and so do we!",
    },
    {
      name: "Emily Davis",
      role: "IT Director, SecureTech",
      testimonial:
        "We faced constant cyber threats until Greatness Labs stepped in. Their cybersecurity solutions safeguarded our data and strengthened our defenses.",
    },
    {
      name: "Michael Brown",
      role: "CTO, FutureLab",
      testimonial:
        "Greatness Labs delivered cutting-edge technology that boosted our efficiency and reduced costs. They're more than a vendor—they're a partner.",
    },
    {
      name: "Jessica Wilson",
      role: "Founder, StartupWorks",
      testimonial:
        "Their commitment to understanding our business needs set them apart. The solutions they provided drove our success to the next level.",
    },
    {
      name: "John Smith",
      role: "Operations Head, GlobeNet",
      testimonial:
        "Our collaboration with Greatness Labs resulted in a seamless infrastructure transformation. Their professionalism is unmatched.",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img 
          src={ourProjectsCover}
          alt="Our Projects Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-6 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              We are proud to show what we have done
            </p>
          </div>
        </div>
      </div>

      {/* Current Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Our Next Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
       {/* Testimonial Section */}
       <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="container mx-auto px-6">
    <div className="text-center max-w-2xl mx-auto">
      <p className="text-lg text-gray-600 font-medium mb-6">
        At <span className="text-[#00ACFF] font-semibold">Greatness Labs</span>, we pride ourselves on delivering cutting-edge technology solutions that drive success. But don’t just take our word for it—hear what our clients have to say!
      </p>
      <h2 className="text-4xl font-extrabold text-gray-900 mb-12">
        What Our Clients Say
      </h2>
    </div>
    <div className="relative">
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4">
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-gray-100 to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none"></div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Industries;