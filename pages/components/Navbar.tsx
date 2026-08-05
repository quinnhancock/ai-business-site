"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex">
  <span style={{ color: "var(--brand-blue)" }}>Echo</span>
  <span style={{ color: "var(--brand-green)" }}>Pest</span>
  <span style={{ color: "var(--brand-blue)" }}>Defense</span>
</Link>







        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-lg font-medium">

          <a href="#quote" className="hover:text-green-700">
            Get a Quote
          </a>

          <a href="#contact" className="hover:text-green-700">
            Contact
          </a>

          {/* Phone Number (Desktop) */}
          <a
  href="tel:(206)8338687"
  className="font-semibold transition"
  style={{ color: "#228B22" }}
>
  📞 (206) 833‑8687
</a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-lg">

          <a href="#quote" onClick={() => setOpen(false)}>
            Get a Quote
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

          {/* Phone Number (Mobile) */}
          <a
            href="tel:2068338687"
            onClick={() => setOpen(false)}
            className="font-semibold text-green-700"
          >
            Call: 206‑833‑8687
          </a>
        </div>
      )}
    </nav>
  );
}
