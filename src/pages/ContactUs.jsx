import { Mail, MapPin, Phone, Star } from "lucide-react";
import bellsUni from "../assets/bellsUni.png";
import { useState } from "react";


export default function ContactUs() {
  
  const [result, setResult] = useState("");
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "f3f3441f-e5d2-4d73-a33d-047c9388a7e2");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
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
            <div className="flex items-center gap-3 cursor-pointer">
                <Phone className="h-6 w-6 text-gray-700" />
                <a href="tel:+2348164816721" className="text-gray-800">+234 816-481-6721</a>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <Mail className="h-6 w-6 text-gray-700" />
              <a href="mailto:ghreatnessmanagement@gmal.com" className="text-gray-800"> ghreatnessmanagement@gmal.com</a>
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
              className="w-full rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-gray-800 mb-4"
            >
              Send Message
            </button>
            <span className="text-lg text-black font-bold mt-2">{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
}
