import securityImg from "../assets/securityImg.png";
import uiIllustration from "../assets/uiIllustration.png";
import webIllustration from "../assets/webIllustration.png";

const Services = () => {
  const services = [
    {
      title: "UI/UX DESIGN",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: uiIllustration,
    },
    {
      title: "FRONTEND DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: webIllustration,
    },
    {
      title: "BACKEND DEVELOPMENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: webIllustration,
    },
    {
      title: "CYBER SECURITY",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat.",
      image: securityImg,
    },
  ];

  return (
    <>
      <ContactForm />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-auto w-full rounded-lg"
                />
              </div>
              <div className="w-full space-y-4 md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
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
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Heading Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Our Services
          </h2>
          <p className="text-lg text-gray-300">
            We offer experienced and comprehensive support for your projects
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg bg-white/10 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>

            {/* Phone Input */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Your phone number"
              />
            </div>

            {/* Subject Input */}
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
          </div>

          {/* Message Input */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full resize-none rounded-lg border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 outline-none transition duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex transform items-center justify-center rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition duration-200 hover:scale-105 hover:bg-blue-700"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
