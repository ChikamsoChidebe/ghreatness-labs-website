import avatar from "../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonials() {
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
    autoplay: true,
    autoplaySpeed: 3000,
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
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-lg font-medium text-gray-600">
            At{" "}
            <span className="font-semibold text-[#00ACFF]">Greatness Labs</span>
            , we pride ourselves on delivering cutting-edge technology solutions
            that drive success. But don’t just take our word for it—hear what
            our clients have to say!
          </p>
          <h2 className="mb-12 text-4xl font-extrabold text-gray-900">
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
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-gray-100 to-transparent"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ name, role, testimonial }) => (
  <div className="rounded-lg bg-white p-8 shadow-lg transform transition-transform duration-300 hover:scale-105">
    <div className="mb-6 flex items-center">
      <img src={avatar} alt={name} className="h-16 w-16 rounded-full object-cover" />
      <div className="ml-4">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{testimonial}"</p>
  </div>
);

export default Testimonials;