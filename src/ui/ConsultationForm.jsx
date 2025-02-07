import React from 'react';
import { Paperclip, ArrowRight, CheckCircle } from 'lucide-react';

export default function ConsultationForm() {
  const steps = [
    {
      number: 1,
      title: "Comprehensive Assessment Report",
      description: "We analyze your requirements and provide detailed insights"
    },
    {
      number: 2,
      title: "Technology Strategy Development",
      description: "Creating a tailored roadmap for your success"
    },
    {
      number: 3,
      title: "Solution Design and Planning",
      description: "Detailed execution plan with clear milestones"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600 mb-6">
            Get Started
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Free Consultation
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take the first step towards transforming your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5">
            <form className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Corporate Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 focus:outline-none"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 focus:outline-none"
                    placeholder="Describe your project needs"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                <button 
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <Paperclip className="h-5 w-5" />
                  Attach Files
                </button>
                <span className="text-sm text-gray-500">
                  Max 4 files (5MB each) - Doc, PDF, PPT
                </span>
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-500"
              >
                Submit Request
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          {/* Steps Section */}
          <div className="lg:pl-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What Happens Next?</h3>
            <div className="space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="flex gap-6 items-start group p-6 rounded-xl transition-all duration-200 hover:bg-gray-50"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 text-blue-600 font-semibold group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200">
              <div className="flex items-center gap-4 text-gray-900">
                <CheckCircle className="h-6 w-6 text-blue-600" />
                <p className="font-medium">
                  100% free consultation with no obligations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}