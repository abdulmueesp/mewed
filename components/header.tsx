
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ For menu & close icons
import { Exo_2, Nunito } from "next/font/google";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200">
      <div className="h-[70px] px-6 flex items-center justify-between md:pl-20">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={30}
            height={30}
            className="sm:w-[35px] sm:h-[35px]"
          />
          <span
            className={`text-xl sm:text-2xl font-bold ${exo2.className}`}
          >
            <span className="text-gray-800">TOZYO</span>
            <span className="inline-block bg-gradient-to-r from-[#e23a03] to-[#9c1607] text-transparent bg-clip-text">
              TECH
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className={`hidden md:flex justify-center space-x-8 font-semibold ${nunito.className} pr-30`}
        >
          <Link href="/" className="hover:text-secondary">Home</Link>
          <Link href="/about" className="hover:text-secondary">About</Link>
          <Link href="/services" className="hover:text-secondary">Services</Link>
          <Link href="/contact" className="hover:text-secondary">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Slide from Left) */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setMenuOpen(false)}>
            <Image src="/logo.png" alt="Logo" width={30} height={30} />
            <span className={`text-xl font-bold ${exo2.className}`}>
              <span className="text-gray-800">TOZYO</span>
              <span className="bg-gradient-to-r from-[#e23a03] to-[#9c1607] text-transparent bg-clip-text">
                TECH
              </span>
            </span>
          </Link>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <nav
          className={`flex flex-col p-6 space-y-4 text-lg font-semibold ${nunito.className}`}
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>

      {/* Overlay for background dim when menu open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

