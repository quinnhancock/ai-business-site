import Navbar from './components/Navbar';
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">


      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-blue-100 text-gray-900 py-28 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          {/* Left Side */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left animate-fadeIn">
            <h1 className="text-6xl font-extrabold leading-tight text-blue-700">
              Cleaner. Safer. Protected.
            </h1>
            <p className="text-xl leading-relaxed text-gray-700 max-w-md">
              Expert pest control that keeps your home safe, clean, and worry‑free.
              We stop bugs before they become a problem — guaranteed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8">
              <a
                href="#quote"
                className="px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition text-lg cursor-pointer"
              >
                Get a Quote
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-blue-700 text-blue-700 font-semibold rounded-xl hover:bg-blue-700 hover:text-white transition text-lg cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center relative animate-fadeIn">
            <div className="absolute inset-0 bg-blue-700/10 rounded-full blur-3xl"></div>
            <Image
              src="/EchoPest.png"
              alt="Pest Patrol Logo"
              width={500}
              height={500}
              className="relative rounded-xl shadow-2xl border border-gray-200"
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

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-800">
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
      <div className="border border-gray-200 rounded-lg py-3 px-2 hover:bg-gray-50 transition">German Roaches</div>
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
    <h2 className="text-4xl font-bold mb-4">Choose the plan that fits your home.
</h2>
    <p className="text-lg text-gray-600 mb-12">
    Find the level of protection built for your pest needs.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* Core Plan */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
        <h3 className="text-2xl font-bold mb-2">Core</h3>
        <p className="text-green-600 font-semibold mb-4">Call for pricing</p>
        <p className="text-gray-700 mb-4">
          Reliable protection against common household pests with routine inspections and targeted treatments to keep your home comfortable.
        </p>
        <p className="text-gray-700 mb-6">
          Seasonally timed visits aligned to local pest activity—so you stay ahead as conditions change.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Add‑Ons:</h4>
        <ul className="grid grid-cols-2 gap-x-4 text-gray-700 mb-6 list-disc list-inside">
          <li>Outdoor rodents</li>
          <li>Pantry pests</li>
          <li>Slugs</li>
          <li>Snails</li>
          <li>Aphids</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call Now
        </a>
      </div>

      {/* Plus Plan */}
      <div className="bg-green-50 border border-green-200 rounded-2xl shadow-lg p-8 text-left relative">
        <span className="absolute top-6 right-6 bg-yellow-300 text-sm font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
        <h3 className="text-2xl font-bold mb-2">Plus</h3>
        <p className="text-green-600 font-semibold mb-4">Call for pricing</p>
        <p className="text-gray-700 mb-4">
          Expanded protection that tackles a wider range of household pests with targeted, year‑round treatments for stronger prevention.
        </p>
        <p className="text-gray-700 mb-6">
          More frequent service during spring and summer when pest pressure spikes—then steady maintenance the rest of the year.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
        <ul className="grid grid-cols-2 gap-x-4 text-gray-700 mb-6 list-disc list-inside">
          <li>Outdoor rodents</li>
          <li>Pantry pests</li>
          <li>Slugs</li>
          <li>Snails</li>
          <li>Aphids</li>
        </ul>

        <h4 className="font-semibold text-gray-800 mb-2">Add‑Ons:</h4>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>Mosquitoes</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call Now
        </a>
      </div>

      {/* Elite Plan */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-8 text-left">
        <h3 className="text-2xl font-bold mb-2">Elite</h3>
        <p className="text-green-600 font-semibold mb-4">Call for pricing</p>
        <p className="text-gray-700 mb-4">
          Our most complete plan—tailored visits that match local pest pressure and coverage that includes mosquitoes.
        </p>
        <p className="text-gray-700 mb-6">
          Our highest visit cadence year‑round, with extra attention during peak season to help stop problems before they spread.
        </p>

        <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
        <ul className="grid grid-cols-2 gap-x-4 text-gray-700 mb-6 list-disc list-inside">
          <li>Outdoor rodents</li>
          <li>Pantry pests</li>
          <li>Slugs</li>
          <li>Snails</li>
          <li>Aphids</li>
          <li>Mosquitoes</li>
        </ul>

        <a
          href="#contact"
          className="block w-full text-center bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Call Now
        </a>
      </div>

    </div>
  </div>
</section>




      {/* Get a Quote Section */}
      <section id="quote" className="py-24 px-8 bg-white animate-fadeIn">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get a Quote</h2>
          <p className="text-lg text-gray-600 mb-12">
            Fill out your information below and we’ll reach out with a personalized quote.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">First Name</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-2">Last Name</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-2">Email</label>
              <input type="email" className="p-3 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-2">Phone Number</label>
              <input type="tel" className="p-3 border border-gray-300 rounded-lg" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="text-gray-700 font-medium mb-2">Zip Code</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg" />
            </div>
          </form>

          <button className="mt-10 px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl shadow hover:bg-blue-800 transition text-lg">
            Submit Quote Request
          </button>
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
            <p><strong>Email:</strong> EchoPestDefense@gmail.com</p>
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
