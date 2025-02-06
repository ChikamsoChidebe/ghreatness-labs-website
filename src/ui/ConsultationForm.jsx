
import { Paperclip } from "lucide-react"

export default function ConsultationForm() {
  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row gap-12">
      {/* Form Section */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-6">BOOK A FREE CONSULTATION</h2>
        <form className="space-y-6">
          <div>
            <input type="text" placeholder="NAME" className="w-full border-b border-black pb-2 focus:outline-none" />
          </div>
          <div>
            <input
              type="email"
              placeholder="CORPORATE EMAIL"
              className="w-full border-b border-black pb-2 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="PHONE NUMBER"
              className="w-full border-b border-black pb-2 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="DESCRIBE YOUR PROJECT REQUIREMENT"
              className="w-full border-b border-black pb-2 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <button type="button" className="flex items-center gap-2">
              <Paperclip size={20} />
              <span>ATTACH FILE</span>
            </button>
            <span className="text-gray-500 text-xs">
              Not more than four files may be attached up to 5mb each formats Doc, Docx, PDF, Ppt, Pptx
            </span>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-3 rounded-sm hover:bg-gray-800 transition-colors"
          >
            Send Request
          </button>
        </form>
      </div>

      {/* Steps Section */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-8">WHAT HAPPEN NEXT?</h2>
        <div className="space-y-12">
          <div className="flex gap-6 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">1</div>
            <p className="font-medium">COMPREHENSIVE ASSESSMENT REPORT</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">2</div>
            <p className="font-medium">TECHNOLOGY STRATEGY DEVELOPMENT</p>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">3</div>
            <p className="font-medium">SOLUTION DESIGN AND PLANNING</p>
          </div>
        </div>
      </div>
    </div>
  )
}

