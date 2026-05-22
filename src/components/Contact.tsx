"use client";

import { Phone, MessageCircle, MapPin, Navigation, Clock } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@shared/const";

export default function Contact() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I would like to inquire about your car rental services."
    );
    const whatsappNumber = WHATSAPP_NUMBER.replace(/^0/, "971");
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  const handleDirections = () => {
    window.open("https://maps.app.goo.gl/9BAMSK9xkLq433zPA?g_st=ic", "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-300">
            Choose your preferred way to contact us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6 animate-slide-up">
            {/* Call Us Card */}
            <div className="group relative bg-gradient-to-br from-blue-600/20 to-blue-700/20 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-400/30 p-8 hover:border-blue-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-blue-500/50 transition-shadow">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Call Us</h3>
                    <p className="text-blue-200 text-sm">Direct phone support</p>
                  </div>
                </div>
                <p className="text-white text-3xl font-bold mb-8">{PHONE_NUMBER}</p>
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Call Now
                </button>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative bg-gradient-to-br from-green-600/20 to-green-700/20 backdrop-blur-md rounded-2xl overflow-hidden border border-green-400/30 p-8 hover:border-green-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-green-500/50 transition-shadow">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-green-200 text-sm">Fast messaging support</p>
                  </div>
                </div>
                <p className="text-white text-3xl font-bold mb-8">{WHATSAPP_NUMBER}</p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  Message on WhatsApp
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="group relative bg-gradient-to-br from-red-600/20 to-red-700/20 backdrop-blur-md rounded-2xl overflow-hidden border border-red-400/30 p-8 hover:border-red-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-red-500/50 transition-shadow">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">Location</h3>
                    <p className="text-red-200 text-sm">Visit us in Ajman</p>
                  </div>
                </div>
                <p className="text-white text-3xl font-bold mb-8">Ajman, UAE</p>
                <button
                  onClick={handleDirections}
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="animate-fade-in space-y-6">
            <div className="bg-slate-700 rounded-2xl overflow-hidden shadow-2xl border border-slate-600 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5!2d55.41!3d25.355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8c8c8c8c8d%3A0xwuVVR7e5fUfhayX38!2sDCR%20Car%20Rental%20Ajman!5e0!3m2!1sen!2sae!4v1715770000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-600/50">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Operating Hours</h4>
                  <p className="text-slate-300 text-sm">
                    Available 24/7 for bookings and inquiries
                  </p>
                </div>
              </div>
              <button
                onClick={() => window.open('https://maps.app.goo.gl/wuVVR7e5fUfhayX38?g_st=ic', '_blank')}
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg active:scale-95"
              >
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
