import React, { useState } from 'react';
import { Shield, Coins, GraduationCap } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  stats: {
    label: string;
    value: string;
    suffix?: string;
  };
  details: string[];
}

const benefits: Benefit[] = [
  {
    icon: <Shield className="text-blue-600" size={24} />,
    title: "Unwavering Confidence",
    description:
      "Never selling treasury tokens and only holding/staking builds trust in our ecosystem, encouraging others to do the same.",
    stats: {
      label: "Community Commitment",
      value: "100",
      suffix: "%"
    },
    details: [
      "No sell-offs—only staking",
      "Positive market sentiment",
      "Aligned long-term vision"
    ]
  },
  {
    icon: <Coins className="text-blue-600" size={24} />,
    title: "Treasury Flywheel",
    description:
      "Protocol fees from staked tokens continuously reinvest back into the treasury, creating a self-sustaining growth cycle.",
    stats: {
      label: "Expected Treasury Growth",
      value: "69420",
      suffix: "%"
    },
    details: [
      "Reinvestment of protocol fees",
      "Sustainable economic model",
      "Self-reinforcing ecosystem"
    ]
  },
  {
    icon: <GraduationCap className="text-blue-600" size={24} />,
    title: "Committed Development",
    description:
      "A dedicated team drives community growth and supports long-term projects that people truly believe in.",
    stats: {
      label: "Team Dedication",
      value: "∞",
      suffix: "%"
    },
    details: [
      "Early community supporters",
      "Continuous innovation",
      "Long-term builders"
    ]
  }
];

export function Features() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Building a Resilient, Community-Driven Economy
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Bork Capital's unique approach of never selling, reinvesting protocol fees, and a dedicated team
          creates a positive flywheel effect that inspires confidence and drives long-term growth.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`relative group bg-white rounded-xl shadow-sm transition-all duration-300 
              ${activeCard === index ? 'shadow-xl scale-105' : 'hover:shadow-lg hover:scale-102'}`}
            onMouseEnter={() => {
              setActiveCard(index);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setActiveCard(null);
              setIsHovering(false);
            }}
          >
            {/* Card Content */}
            <div className="p-8">
              <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>

              {/* Stats */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">{benefit.stats.label}</p>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-blue-600">
                    {benefit.stats.value}
                  </span>
                  {benefit.stats.suffix && (
                    <span className="ml-1 text-gray-600">{benefit.stats.suffix}</span>
                  )}
                </div>
              </div>

              {/* Expandable Details */}
              <div className={`space-y-2 transition-all duration-300 
                ${isHovering && activeCard === index ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0'} 
                overflow-hidden`}>
                {benefit.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Gradient */}
            <div className={`absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
              bg-gradient-to-t from-blue-50/50 to-transparent
              ${activeCard === index ? 'opacity-100' : 'opacity-0'}`} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
