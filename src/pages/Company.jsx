import { ArrowRight, CheckCircle, Info, XCircle } from "lucide-react";
import aboutCover from "../assets/aboutCover.png";
import avatar from "../assets/avatar.png";
import olamide from "../assets/OlamideTunde.jpg"

const Company = () => {
  const teamMembers = [
    {
      name: "Olamide Tunde",
      role: "Lead Developer",
      description:
        "Lead Developer with a passion for technology and innovation.",
      image: olamide,
    },
    {
      name: "Jane Smith",
      role: "UX Designer",
      description:
        "Creative designer focused on delivering exceptional user experiences.",
      image: avatar,
    },
    {
      name: "Mike Johnson",
      role: "Project Manager",
      description:
        "Experienced manager dedicated to delivering successful projects.",
      image: avatar,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center rounded-full bg-blue-600/10 px-4 py-2 text-sm font-medium text-blue-400">
                <span className="mr-2">👋</span> Welcome to Our Company
              </div>
              <h1 className="mt-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl">
                Building the Future Together
              </h1>
              <p className="mt-6 text-xl text-gray-300">
                We are dedicated to delivering exceptional services and creating
                lasting relationships with our clients through innovative
                solutions.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <button className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-500">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg bg-white/5 p-2 backdrop-blur-sm">
                <img
                  src={aboutCover}
                  alt="Company overview"
                  className="rounded-lg shadow-2xl ring-1 ring-white/10"
                />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-lg bg-blue-600/20 backdrop-blur-sm"></div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-lg bg-purple-600/20 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-16 bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                We Are Committed
              </h3>
              <p className="mt-4 text-gray-600">
                Delivering innovative solutions that help businesses thrive in a
                competitive landscape.
              </p>
            </div>

            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                <XCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Not Just Another Company
              </h3>
              <p className="mt-4 text-gray-600">
                We stand out through our dedication to excellence and customer
                satisfaction.
              </p>
            </div>

            <div className="transform rounded-xl bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                <Info className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                What We Do
              </h3>
              <p className="mt-4 text-gray-600">
                Leveraging technology and expertise to deliver results that
                exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 bg-gradient-to-b from-gray-900 to-gray-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              Our Team
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Meet the Experts
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-300">
              Get to know the professionals behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="hover:scale-102 group relative overflow-hidden rounded-2xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl transition-all duration-300 hover:shadow-blue-500/10"
              >
                <div className="absolute inset-0.5 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-1">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/40 to-gray-900/90" />
                  </div>
                  <div className="relative p-6">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-blue-400">{member.role}</p>
                    <p className="text-gray-300">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
              Join Our Community
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Stay updated with our latest news and offers!
            </p>
            <div className="mx-auto max-w-md">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-500">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
