"use client";

import { MessageCircle, Phone } from "lucide-react";
import { Car, WHATSAPP_NUMBER, PHONE_NUMBER } from "@shared/const";

interface CarCardProps {
  car: Car;
  categoryColor: string;
}

export default function CarCard({ car, categoryColor }: CarCardProps) {
  const handleBookWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello, I want to book ${car.name}\nPickup Date: [Select Date]\nReturn Date: [Select Date]\nPlease confirm availability.`
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

  return (
    <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl card-hover border border-blue-500/30">
      {/* Car Image */}
      <div className="relative h-64 overflow-hidden bg-slate-600">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg`}>
          {car.category.charAt(0).toUpperCase() + car.category.slice(1)}
        </div>
      </div>

      {/* Car Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{car.name}</h3>
        <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent mb-6">
          AED {car.pricePerDay}
          <span className="text-sm text-blue-300 font-normal">/day</span>
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleBookWhatsApp}
            className="flex-1 btn-gradient-accent btn-shine flex items-center justify-center gap-2 py-2 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </button>
          <button
            onClick={handleCall}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/50"
          >
            <Phone className="w-4 h-4" />
            Call Us
          </button>
        </div>
      </div>
    </div>
  );
}
