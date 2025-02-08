import uiIllustration from "../assets/uiIllustration.png";
import webIllustration from "../assets/webIllustration.png";
import securityImg from "../assets/securityImg.png";



const Services = () => {
  const services = [
    {
      title: "UI/UX DESIGN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: uiIllustration,
    },
    {
      title: "FRONTEND DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: webIllustration,
    },
    {
      title: "BACKEND DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: webIllustration,
    },
    {
      title: "CYBER SECURITY",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: securityImg,
    }
  ];

  return (
    <>
          <ContactForm/>
    <section className="py-16 px-4 max-w-6xl mx-auto">

      <div className="space-y-24">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;



const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg">
            We offer experienced and comprehensive support for your projects
          </p>
        </div>

        {/* Form Section */}
        <form 
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200"
                placeholder="Your email"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label 
                htmlFor="phone" 
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200"
                placeholder="Your phone number"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label 
                htmlFor="subject" 
                className="block text-sm font-medium text-gray-200 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200"
                placeholder="Subject"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-200 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-white placeholder-gray-400 transition duration-200 resize-none"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 inline-flex items-center justify-center hover:scale-105 transform"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

