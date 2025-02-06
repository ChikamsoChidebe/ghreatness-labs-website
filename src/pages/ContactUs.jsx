import { MapPin, Phone, Mail, Star } from "lucide-react";
import bellsUni from "../assets/bellsUni.png";
import ConsultationForm from "../ui/ConsultationForm";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Review Card */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={bellsUni}
         className="w-full h-full object-cover"
        />

        {/* Review Card */}
        <div className="absolute top-12 left-4 max-w-md rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm">
          <div className=" flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
            <div className="space-y-2">
              <p className="font-medium">
                Bell University Km. 8 Idiroko Rd, Benja village, Ota 112104,
                Ogun State
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">4.2</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">70 reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Contact Form Section */}
<div className="bg-stone-50">
  <div className="mx-auto max-w-4xl px-4 py-12">
    <div className="mb-8 space-y-2 text-center">
      <p className="font-medium">WHETHER YOU HAVE A COMMENT TO SHARE</p>
      <p className="font-medium">WE LOOK FORWARD TO HEARING FROM YOU</p>
      <p className="text-sm text-gray-600">
        PLEASE COMPLETE THE FORM AND WE'LL GET BACK TO YOU WITHIN 1 - 2
        BUSINESS DAYS. WE LOOK FORWARD TO WORKING WITH YOU.
      </p>
    </div>

    <div className="flex flex-col gap-8 md:flex-row">
      {/* Contact Information */}
      <div className="flex flex-col space-y-4 md:w-1/2">
      <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <p>Bell University Of Technology Ota Ogun State </p>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <p>+2348123000000</p>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <p>gksamission@gmail.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4 md:w-1/2">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded border p-2 focus:outline-none focus:ring-1 focus:ring-black"
        />

        <div className="text-center">
          <button
            type="submit"
            className="rounded bg-black px-8 py-2 text-white transition-colors hover:bg-gray-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

      <ConsultationForm/>
    </div>
  );
}
