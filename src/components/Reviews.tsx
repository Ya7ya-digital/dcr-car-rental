"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { REVIEWS } from "@shared/const";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
    setAutoPlay(false);
  };

  const currentReview = REVIEWS[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-slate-800">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-blue-200">
            See what our satisfied customers have to say
          </p>
        </div>

        {/* Review Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-500/50 animate-fade-in">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: currentReview.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-lg text-blue-100 text-center mb-6 italic leading-relaxed">
              "{currentReview.comment}"
            </p>

            {/* Author */}
            <div className="text-center mb-8 pb-8 border-b border-blue-500/30">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                {currentReview.name}
              </h3>
              <p className="text-sm text-blue-300 mt-2">
                {new Date(currentReview.date).toLocaleDateString()}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-2 hover:bg-blue-600/50 rounded-full transition-all duration-300 border border-blue-500/30 hover:border-blue-400"
              >
                <ChevronLeft className="w-6 h-6 text-blue-300" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {REVIEWS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setAutoPlay(false);
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-orange-400 to-pink-500 w-8"
                        : "bg-blue-500/50 w-2"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={goToNext}
                className="p-2 hover:bg-blue-600/50 rounded-full transition-all duration-300 border border-blue-500/30 hover:border-blue-400"
              >
                <ChevronRight className="w-6 h-6 text-blue-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
