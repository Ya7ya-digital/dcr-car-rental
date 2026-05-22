"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 backdrop-blur-md border-b border-slate-700/50 shadow-lg">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
            <span className="text-white font-black text-xl">DCR</span>
          </div>
          <div>
            <h1 className="font-black text-white text-lg leading-tight">DCR</h1>
            <p className="text-xs text-blue-300 font-semibold">Ajman Rental</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("fleet")}
            className="text-slate-300 hover:text-blue-400 font-semibold transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Fleet
          </button>
          <button
            onClick={() => scrollToSection("why-us")}
            className="text-slate-300 hover:text-blue-400 font-semibold transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Why Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-slate-300 hover:text-blue-400 font-semibold transition-colors duration-300 text-sm uppercase tracking-wide"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700/50 animate-slide-up">
          <div className="container py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("fleet")}
              className="text-left text-slate-300 hover:text-blue-400 font-semibold py-2 transition-colors uppercase tracking-wide text-sm"
            >
              Fleet
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-left text-slate-300 hover:text-blue-400 font-semibold py-2 transition-colors uppercase tracking-wide text-sm"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-slate-300 hover:text-blue-400 font-semibold py-2 transition-colors uppercase tracking-wide text-sm"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
