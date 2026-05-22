"use client";

import { Phone, MessageCircle, ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@shared/const";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I want to book a car from DCR Rental. Please confirm availability."
    );
    const whatsappNumber = WHATSAPP_NUMBER.replace(/^0/, "971");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  // Only scroll indicator disappears (after 50px scroll)
  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 100);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url(/images/dcr_hero_mustang_26bf18bc.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>

      {/* Content - Always Visible */}
      <div className="relative z-10 container mx-auto px-4 w-full h-full flex flex-col items-start justify-center">
        <div className="max-w-2xl animate-slide-up">
          {/* Badge with Rating */}
          <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span className="text-blue-300 text-sm font-semibold">Best Rates in Ajman</span>
            <div className="flex items-center gap-1 ml-2 pl-2 border-l border-blue-400/50">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-yellow-300 text-xs font-bold ml-1">4.9 Reviews</span>
            </div>
          </div>

          {/* Main Heading - Optimized for Mobile */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            Rent Smart,<br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Pay Less
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 font-light leading-relaxed max-w-xl">
            Affordable and reliable car rental services in Ajman. Book your perfect ride today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={handleWhatsApp}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <MessageCircle className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Book Now</span>
            </button>

            <button
              onClick={() => document.getElementById("fleet")?.scrollIntoView({ behavior: "smooth" })}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              View Fleet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only This Disappears on Scroll */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce transition-opacity duration-300"
        style={{ opacity: scrollIndicatorOpacity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white text-xs font-semibold tracking-widest">SCROLL</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
