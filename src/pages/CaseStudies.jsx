import { Newspaper } from "lucide-react";
import { useState } from "react";
import athlegame from "../assets/athlegame.png";
import avatar from "../assets/avatar.png";
import misplaceMe from "../assets/misplaceMe.png";
import univyx from "../assets/univyx.png";
import ConsultationForm from "../ui/ConsultationForm";

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Stories", icon: <Newspaper /> },
    { id: "company", label: "Company's Success Stories", icon: <Newspaper /> },
    {
      id: "customer",
      label: "Customer's Success Stories",
      icon: <Newspaper />,
    },
    { id: "school", label: "School's Success Stories", icon: <Newspaper /> },
  ];

  const brands = [
    { id: 1, name: "Misplace Me", logo: misplaceMe },
    { id: 2, name: "Univyx", logo: univyx },
    { id: 3, name: "Athlegame", logo: athlegame },
  ];

  const caseStudies = [
    {
      id: 1,
      title:
        "WHAT UNIQUE APPROACH DOES THE COMPANY TAKE TO DELIVER EXCEPTIONAL UX/UI DESIGN SERVICES?",
      image: avatar,
    },
    {
      id: 2,
      title:
        "HOW DOES THE COMPANY ENSURE ITS DEVELOPMENT TEAMS STAY UPDATED WITH THE LATEST TECHNOLOGIES AND TRENDS IN FRONTEND AND BACKEND DEVELOPMENT?",
      image: avatar,
    },
    {
      id: 3,
      title:
        "WHAT MEASURES DOES THE COMPANY TAKE TO ENSURE ROBUST CYBERSECURITY FOR ITS CLIENTS?",
      image: avatar,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 px-6 py-24 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Success Stories</h1>
          <p className="mt-4 text-lg text-gray-300">
            Discover how we empower businesses and individuals with innovative
            solutions.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-white bg-opacity-10 text-gray-300 hover:bg-opacity-20"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Featured Brands
          </h2>
          <div className="mt-12 grid grid-cols-1 place-items-center gap-12 sm:grid-cols-2 md:grid-cols-3">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex h-40 w-40 items-center justify-center"
              >
                <img
                  src={brand.logo || "/placeholder.svg"}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Research & Development
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="relative transform overflow-hidden rounded-xl bg-gray-800 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-4 text-gray-300">
                    Explore our journey in delivering impactful solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ConsultationForm />
    </div>
  );
}
