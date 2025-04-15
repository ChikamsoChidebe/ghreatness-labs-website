import { ArrowRight, CheckCircle, Paperclip } from "lucide-react";

export default function ConsultationForm() {
  const steps = [
    {
      number: 1,
      title: "Comprehensive Assessment Report",
      description: "We analyze your requirements and provide detailed insights",
    },
    {
      number: 2,
      title: "Technology Strategy Development",
      description: "Creating a tailored roadmap for your success",
    },
    {
      number: 3,
      title: "Solution Design and Planning",
      description: "Detailed execution plan with clear milestones",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-6 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-600">
            Get Started
          </span>
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Book Your Free Consultation
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Take the first step towards transforming your business
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5">
            <form className="space-y-6">
              <div className="space-y-6">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@company.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Project Requirements
                  </label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe your project needs"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-4">
                <button
                  type="button"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
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
                className="group inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-500"
              >
                Submit Request
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

          <div className="lg:pl-8">
            <h3 className="mb-8 text-2xl font-bold text-gray-900">
              What Happens Next?
            </h3>
            <div className="space-y-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group flex items-start gap-6 rounded-xl p-6 transition-all duration-200 hover:bg-gray-50"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 font-semibold text-blue-600 transition-colors group-hover:bg-blue-500 group-hover:text-white">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">
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
