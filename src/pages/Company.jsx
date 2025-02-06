import aboutCover from "../assets/aboutCover.png";
import avatar from "../assets/avatar.png";
import { CheckCircle, XCircle, Info, Users } from 'lucide-react';

function Company() {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="px-4 py-12 text-center e">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are dedicated to delivering exceptional services and creating lasting relationships with our clients.
        </p>
      </section>

      {/* About Us Section */}
      <section className="relative">
        <div className="bg-[#28536B]">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-white">
                <h2 className="text-3xl font-bold mb-6">About Us</h2>
                <p className="mb-4">
                  Our mission is to provide innovative solutions that help businesses thrive in a competitive landscape. 
                  We leverage technology and expertise to deliver results that exceed expectations.
                </p>
              </div>
              <div className="relative h-[300px]">
                <img
                  src={aboutCover || "/placeholder.svg"}
                  alt="Laptop with UI interface"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mt-20">
        <h2 className="text-center text-3xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#28536B] text-white rounded-lg shadow-lg p-6">
            <CheckCircle className="w-8 h-8 mb-4" />
            <h3 className="font-semibold mb-2">We Are Committed</h3>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nisi quia doloremque, soluta eum aliquam temporibus ipsam veritatis tempore placeat veniam repellat ducimus quas pariatur, reiciendis maiores eos rerum accusamus!</p>
          </div>

          <div className="bg-[#28536B] text-white rounded-lg shadow-lg p-6">
            <XCircle className="w-8 h-8 mb-4" />
            <h3 className="font-semibold mb-2">We Are Not Just Another Company</h3>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nisi quia doloremque, soluta eum aliquam temporibus ipsam veritatis tempore placeat veniam repellat ducimus quas pariatur, reiciendis maiores eos rerum accusamus!</p>
          </div>

          <div className="bg-[#28536B] text-white rounded-lg shadow-lg p-6">
            <Info className="w-8 h-8 mb-4" />
            <h3 className="font-semibold mb-2">What We Do</h3>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nisi quia doloremque, soluta eum aliquam temporibus ipsam veritatis tempore placeat veniam repellat ducimus quas pariatur, reiciendis maiores eos rerum accusamus!</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600 mb-8">Get to know the professionals behind our success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className={`relative ${index === 2 ? "md:mt-8" : ""}`}>
              <div className="bg-[#28536B] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02] duration-300">
                <div className="relative h-[300px]">
                  <img src={avatar || "/placeholder.svg"} alt={`Team member ${index}`} 
                       className="w-full h-full object-cover" />
                </div>
                
                  <div className="p-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">John Doe</h3>
                    <p className="text-sm">Lead Developer with a passion for technology and innovation.</p>
                  </div>
               
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="mb-4 text-gray-600">Stay updated with our latest news and offers!</p>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#28536B]"
            />
            <button 
              onClick={() => alert('Thank you for subscribing!')} 
              className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Company;
