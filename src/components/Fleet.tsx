"use client";

import { CARS, CATEGORY_CONFIG } from "@shared/const";
import CarCard from "./CarCard";

type CategoryType = "economy" | "sedan" | "suv" | "sport";

const categories: CategoryType[] = ["economy", "sedan", "suv", "sport"];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-gradient-to-b from-slate-800 via-blue-900 to-slate-800">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Fleet
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Choose from our diverse selection of well-maintained vehicles, from
            affordable economy cars to premium sports cars.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => {
          const config = CATEGORY_CONFIG[category];
          const carsInCategory = CARS.filter((car) => car.category === category);

          return (
            <div key={category} className="mb-16 animate-fade-in">
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-1 h-8 bg-gradient-to-b ${config.color} rounded-full`}
                  ></div>
                  <h3 className={`text-3xl font-bold text-white`}>
                    {config.label}
                  </h3>
                </div>
                <p className="text-blue-200 ml-4">
                  {category === "economy" &&
                    "Affordable and fuel-efficient options for budget-conscious travelers."}
                  {category === "sedan" &&
                    "Comfortable and stylish vehicles for business and leisure."}
                  {category === "suv" &&
                    "Spacious and versatile vehicles for family trips and adventures."}
                  {category === "sport" &&
                    "High-performance vehicles for those who love excitement."}
                </p>
              </div>

              {/* Cars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {carsInCategory.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    categoryColor={config.color}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
