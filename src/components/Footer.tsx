"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16 border-t border-slate-700/50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">DCR</span>
              </div>
              <div>
                <h3 className="font-black text-lg text-white">DCR</h3>
                <p className="text-xs text-blue-300 font-semibold">Ajman Rental</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Affordable and professional car rental services in Ajman, UAE. We provide quality vehicles at competitive prices with exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-blue-400 uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("fleet")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-300 font-semibold"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("why-us")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-300 font-semibold"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-blue-400 transition-colors duration-300 font-semibold"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-6 text-blue-400 uppercase tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">📞</span>
                <a href="tel:0561577142" className="hover:text-blue-400 transition-colors duration-300 font-semibold">
                  0561577142
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-400 font-bold">💬</span>
                <a href="https://wa.me/971561577142" className="hover:text-blue-400 transition-colors duration-300 font-semibold">
                  WhatsApp: 0561577142
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-400 font-bold">📍</span>
                <span className="font-semibold">Ajman, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm font-semibold">
              © {currentYear} DCR - Discount Car Rental. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1 font-semibold">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Ajman, UAE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
