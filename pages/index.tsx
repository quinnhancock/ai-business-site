import Navbar from './components/Navbar';
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">


      {/* Sticky Navbar */}
      <Navbar />

{/* Hero Section */}
<section className="relative bg-gray-50 text-[#0b2a4a] py-24 px-8 overflow-hidden rounded-b-3xl shadow-lg">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

    {/* Left Side: Text */}
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="text-5xl font-extrabold leading-tight text-[#0b2a4a]">
        Keeping Homes Pest‑Free
      </h1>

      <p className="text-xl leading-relaxed text-gray-700 max-w-md">
        EchoPest Defense protects your home inside and out year‑round at an affordable cost — no upsells, no hidden fees, no nonsense.
      </p>

      {/* Promo Badge + Box */}
      <div className="mt-8">
        <span className="inline-block bg-[#5b7b3a] text-white text-sm font-bold px-4 py-1 rounded-full mb-3">
          Limited Offer
        </span>

        <div className="bg-white text-[#0b2a4a] rounded-2xl p-8 shadow-2xl inline-block border border-[#5b7b3a]/40 transform hover:scale-[1.04] transition-all duration-300">
          <h3 className="text-4xl font-extrabold mb-3 text-[#0b2a4a] tracking-tight">
            Save $100 
          </h3>

          <p className="text-lg mb-6 text-gray-700">
 First 100 customers to sign up saves $100 on any selected contract!
          </p>

          <a
            href="#quote"
            className="inline-block bg-[#0b2a4a] text-white font-semibold px-10 py-4 rounded-xl shadow hover:bg-[#5b7b3a] transition text-lg"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="md:w-1/2 flex justify-center relative">
      <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl"></div>
      <img
        src="/EchoPest.png"
        alt="Utah home pest control"
        className="relative rounded-2xl shadow-2xl border border-gray-200"
      />
    </div>
  </div>
</section>



{/* Target Pests Section */}
<section className="py-20 px-8 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Pests We Treat</h2>
    <p className="text-lg text-gray-600 mb-12">
      Comprehensive protection against all common household and outdoor pests.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm text-gray-800">
      {/* Each pest name is small, clean, and evenly spaced */}
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Spiders</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Ants</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Earwigs</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Centipedes</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Millipedes</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Crickets</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Mice</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Rats</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Sow Bugs / Pill Bugs</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Silverfish</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Beetles</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Fleas</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Ticks</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Carpenter Ants</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Oriental Roaches</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Wasps</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Yellow Jackets</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Bees</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Hornets</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Moths</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Bed Bugs</div>
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">Box Elder / Elm Seed Bugs</div>
    </div>
  </div>
</section>


{/* Pricing Plans Section */}
<section className="py-24 px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-4">Choose the plan that fits your home.</h2>
    <p className="text-lg text-gray-600 mb-12">
      Simple coverage options built around how you want your home protected.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Core Plan – Outdoor Only */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
        <h3 className="text-2xl font-bold mb-2">Core</h3>
        <p className="text-green-600 font-semibold mb-4">$24.99 / month</p>

        <p className="text-gray-700 mb-4">
          Outdoor‑only protection that stops pests before they ever reach your home. 
          Our exterior treatment kills essentially all common pests on contact and keeps a barrier around your home.
        </p>
        <p className="text-gray-700 mb-6">
          Includes foundation protection, perimeter spray, and seasonal exterior defense.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Covers:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Exterior spiders</li>
          <li>Ants</li>
          <li>Wasps (ground level)</li>
          <li>Seasonal perimeter pests</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call or Text
        </a>
      </div>

      {/* Plus Plan – In & Out */}
      <div className="bg-green-50 border border-green-200 rounded-2xl shadow-lg p-8 text-left relative">
        <span className="absolute top-6 right-6 bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>

        <h3 className="text-2xl font-bold mb-2">Plus</h3>
        <p className="text-green-600 font-semibold mb-4">$34.99 / month</p>

        <p className="text-gray-700 mb-4">
          Full interior + exterior protection. Our treatment kills essentially all pests inside and outside, 
          giving you year‑round coverage and peace of mind.
        </p>
        <p className="text-gray-700 mb-6">
          Includes indoor spot treatments, crack‑and‑crevice protection, and boosted exterior coverage.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Covers:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Interior pests</li>
          <li>Exterior pests</li>
          <li>Rodents (exclusion‑based)</li>
          <li>Seasonal high‑pressure pests</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call or Text
        </a>
      </div>

      {/* Elite Plan – In, Out, Yard, Mosquito */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
        <h3 className="text-2xl font-bold mb-2">Elite</h3>
        <p className="text-green-600 font-semibold mb-4">$49.99 / month</p>

        <p className="text-gray-700 mb-4">
          Complete home + yard coverage including mosquitoes. This plan kills essentially all pests across your entire property.
        </p>
        <p className="text-gray-700 mb-6">
          Ideal for homes with yards, heavy pest pressure, or anyone wanting the strongest protection available.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Covers:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Interior pests</li>
          <li>Exterior pests</li>
          <li>Yard pests</li>
          <li>Mosquitoes</li>
          <li>Rodents</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call or Text
        </a>
      </div>

    </div>

    {/* Price Variation Note */}
    <p className="text-sm text-gray-600 mt-12 max-w-3xl mx-auto">
      *Pricing may vary slightly depending on the size of your home.
      Every home is different, and we tailor your service to match your exact needs.
    </p>

  </div>
</section>



{/* Get a Quote Section */}
<section id="quote" className="py-24 px-8 bg-white animate-fadeIn">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Get a Quote</h2>
    <p className="text-lg text-gray-600 mb-12">
      Fill out your information below and we’ll reach out with a personalized quote.
    </p>

    <form 
      action="https://formspree.io/f/xppaavyo" 
      method="POST"
      className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
    >
      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">First Name</label>
        <input 
          type="text" 
          name="firstName"
          className="p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 font-medium mb-2">Last Name</label>
        <input 
          type="text" 
          name="lastName"
          className="p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-col md:col-span-2">
        <label className="text-gray-700 font-medium mb-2">Email</label>
        <input 
          type="email" 
          name="email"
          className="p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-col md:col-span-2">
        <label className="text-gray-700 font-medium mb-2">Phone Number</label>
        <input 
          type="tel" 
          name="phone"
          className="p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <div className="flex flex-col md:col-span-2">
        <label className="text-gray-700 font-medium mb-2">Address</label>
        <input 
          type="text" 
          name="zip"
          className="p-3 border border-gray-300 rounded-lg"
          required
        />
      </div>

      <button 
        type="submit"
        className="mt-10 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition text-lg md:col-span-2"
      >
        Submit Quote Request
      </button>
    </form>
  </div>
</section>


{/* Meet the Team Section */}
<section className="py-20 px-8 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold mb-4 text-center">Meet the Team</h2>

  <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
    
    {/* Quinn Hancock */}
    <div className="flex flex-col items-center justify-between h-[400px]">
      <img
        src="/headshot.jpg"
        alt="Quinn Hancock"
        className="w-full h-64 object-cover object-[center_20%] rounded-lg shadow-md"
      />
      <div>
        <h3 className="text-xl font-semibold mt-4">Quinn Hancock</h3>
        <p className="text-gray-600">Business Owner</p>
      </div>
    </div>

    {/* Jack Feldman */}
    <div className="flex flex-col items-center justify-between h-[400px]">
      <img
        src="/Jack4.0.jpeg"
        alt="Jack Feldman"
        className="w-full h-64 object-cover object-[center_100%] rounded-lg shadow-md"
      />
      <div>
        <h3 className="text-xl font-semibold mt-4">Jack Feldman</h3>
        <p className="text-gray-600">Technician</p>
      </div>
    </div>

    {/* Bre Gibb */}
    <div className="flex flex-col items-center justify-between h-[400px]">
      <img
        src="/Breanne.JPG"
        alt="Bre Gibb"
        className="w-full h-64 object-cover object-[center_0%] rounded-lg shadow-md"
      />
      <div>
        <h3 className="text-xl font-semibold mt-4">Bre Gibb</h3>
        <p className="text-gray-600">Marketing Director</p>
      </div>
    </div>

  </div>
</section>




      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-blue-700 text-white text-center px-8 flex flex-col items-center justify-center animate-fadeIn"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-xl mb-12 max-w-2xl">
          Reach out to schedule service or ask any questions — we're here to help.
        </p>

        

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-lg md:text-xl">
          <div className="space-y-4">
            <p><strong>Email:</strong> echopestdefense@gmail.com</p>
            <p><strong>Phone:</strong> (206) 833-8687</p>
          </div>

          <div className="space-y-4">
            <p><strong>Office Hours:</strong> 8 AM – 5 PM</p>
            <p><strong>Open:</strong> Monday – Friday</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} EchoPest Defense. All rights reserved.
      </footer>

    </div>
  );
}
