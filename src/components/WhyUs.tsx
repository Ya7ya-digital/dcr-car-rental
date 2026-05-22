"use client";

import { Check, Zap, Shield, Clock, Users, Smile } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Affordable Prices",
    description: "Best rates in Ajman without compromising on quality",
    gradient: "from-yellow-500 to-orange-600",
    bgGradient: "from-yellow-500/20 to-orange-600/20",
    borderColor: "border-yellow-500/50",
  },
  {
    icon: Shield,
    title: "Well-Maintained Fleet",
    description: "All vehicles are regularly serviced and insured",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-500/50",
  },
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Simple and fast booking process via WhatsApp",
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/20 to-cyan-600/20",
    borderColor: "border-blue-500/50",
  },
  {
    icon: Users,
    title: "Professional Service",
    description: "Friendly and helpful staff ready to assist you",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/20 to-pink-600/20",
    borderColor: "border-purple-500/50",
  },
  {
    icon: Smile,
    title: "Customer Satisfaction",
    description: "Trusted by hundreds of happy customers",
    gradient: "from-red-500 to-rose-600",
    bgGradient: "from-red-500/20 to-rose-600/20",
    borderColor: "border-red-500/50",
  },
  {
    icon: Check,
    title: "Flexible Terms",
    description: "Easy cancellation and modification policies",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-500/20 to-blue-600/20",
    borderColor: "border-indigo-500/50",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-slate-800 via-blue-900 to-slate-800">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose DCR?
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            We provide professional, affordable, and reliable car rental
            services in Ajman
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.bgGradient} rounded-2xl p-8 shadow-xl hover:shadow-2xl card-hover border ${feature.borderColor} backdrop-blur-sm animate-fade-in transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent Line */}
                <div className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
