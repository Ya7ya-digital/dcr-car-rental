"use client";

import { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { CARS } from "@shared/const";

export default function Booking() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [selectedCar, setSelectedCar] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupDate || !returnDate || !selectedCar) {
      alert("Please fill in all fields");
      return;
    }

    const car = CARS.find((c) => c.id === selectedCar);
    const message = encodeURIComponent(
      `Hello, I want to book ${car?.name}\nPickup Date: ${pickupDate}\nReturn Date: ${returnDate}\nPlease confirm availability.`
    );
    const whatsappNumber = "971561577142";
    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-800 to-blue-900">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Car
          </h2>
          <p className="text-lg text-blue-200">
            Select your dates and preferred vehicle to get started
          </p>
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 shadow-lg border border-blue-500/50 backdrop-blur-sm animate-fade-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Pickup Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Pickup Date
                </label>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-500/50 rounded-lg bg-slate-700/50 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-blue-500/50 rounded-lg bg-slate-700/50 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>

            {/* Car Selection */}
            <div>
              <label className="block text-sm font-semibold text-blue-200 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Select Car
              </label>
              <select
                value={selectedCar}
                onChange={(e) => setSelectedCar(e.target.value)}
                className="w-full px-4 py-3 border-2 border-blue-500/50 rounded-lg bg-slate-700/50 text-white focus:border-orange-400 focus:outline-none transition-colors"
                required
              >
                <option value="" className="bg-slate-700 text-white">Choose a vehicle...</option>
                {CARS.map((car) => (
                  <option key={car.id} value={car.id} className="bg-slate-700 text-white">
                    {car.name} - AED {car.pricePerDay}/day
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full btn-gradient-accent btn-shine py-3 text-lg font-semibold"
            >
              Proceed to WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
