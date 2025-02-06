import { Newspaper } from "lucide-react";
import { useState } from "react";
import avatar from "../assets/avatar.png";
import univyx from "../assets/univyx.png";
import misplaceMe from "../assets/misplaceMe.png";
import athlegame from "../assets/athlegame.png";
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
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-[#2b4d5e] px-6 pb-24 pt-12">
        <h1 className="mb-12 text-4xl font-bold text-white">Success Stories</h1>

        {/* Navigation Tabs */}
        <div className="flex space-x-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 rounded-lg px-4 py-2 transition-colors ${activeTab === tab.id ? "bg-white bg-opacity-10 text-white" : "text-white text-opacity-70 hover:text-opacity-100"}`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-stone-100">
      <div className="mx-auto py-16 max-w-7xl px-6 ">
        {/* Brands Grid */}
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex h-40 w-40 items-center justify-center"
            >
              <img
                src={brand.logo || "/placeholder.svg"}
                alt={brand.name}
                className=""
              />
            </div>
          ))}
        </div>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Research and Development
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className={`relative ${index === 2 ? "md:mt-8" : ""}`}
              >
                <div className="transform overflow-hidden rounded-lg bg-[#28536B] shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                  <div className="relative h-[300px]">
                    <img
                      src={avatar || "/placeholder.svg"}
                      alt={`Team member ${index}`}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4 text-white">
                    <h3 className="mb-2 text-lg font-semibold">John Doe</h3>
                    <p className="text-sm">
                      Lead Developer with a passion for technology and
                      innovation.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
      <ConsultationForm/>
    </div>
  );
}
