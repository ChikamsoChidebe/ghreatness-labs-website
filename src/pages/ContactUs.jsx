import { Mail, MapPin, Phone, Star } from "lucide-react";
import bellsUni from "../assets/bellsUni.png";

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <img
          src={bellsUni}
          className="h-full w-full object-cover opacity-30"
          alt="Bell University"
        />

        <div className="absolute left-4 top-12 max-w-md rounded-lg bg-white/90 p-4 shadow-xl backdrop-blur-md">
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-gray-700" />
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">
                Bell University, Km. 8 Idiroko Rd, Benja Village, Ota, Ogun
                State
              </p>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">4.2</span>
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

      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
          <p className="mt-2 text-lg text-gray-600">
            Whether you have a question or just want to say hello, we’d love to
            hear from you!
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-12 px-6 md:flex-row md:items-start">
          <div className="flex flex-col space-y-6 md:w-1/2">
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-gray-700" />
              <p className="text-gray-800">Bell University, Ota, Ogun State</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-gray-700" />
              <p className="text-gray-800">+234 812 300 0000</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-gray-700" />
              <p className="text-gray-800">gksamission@gmail.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border-gray-300 p-3 focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-md border-gray-300 p-3 focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md border-gray-300 p-3 focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-md border-gray-300 p-3 focus:ring-2 focus:ring-black"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
