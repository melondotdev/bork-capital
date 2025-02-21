import React, { useState, useEffect } from 'react';
import { Rocket, Coins, Users, FileCheck, Sparkles } from 'lucide-react';

interface Milestone {
  id: number;
  icon: React.ReactNode;
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  features: string[];
}

const milestones: Milestone[] = [
  {
    id: 1,
    icon: <Rocket className="text-blue-600" size={24} />,
    date: "Q1 2025",
    title: "Community Tooling & Onboarding",
    description: "Launch of essential community tools and initial onboarding for early adopters.",
    status: 'current',
    features: [
      "Interactive socialfi dashboard",
      "Early partnership announcements",
      "User-friendly onboarding experience"
    ]
  },
  {
    id: 2,
    icon: <Users className="text-blue-600" size={24} />,
    date: "Q2 2025",
    title: "Partnership Expansion",
    description: "Form strategic alliances and expand community partnerships for broader reach.",
    status: 'upcoming',
    features: [
      "Collaborations with key influencers",
      "Integration with community platforms",
      "Joint events and campaigns"
    ]
  },
  {
    id: 3,
    icon: <FileCheck className="text-blue-600" size={24} />,
    date: "Q3 2025",
    title: "Enhanced Governance",
    description: "Rollout of advanced governance features to empower community decisions.",
    status: 'upcoming',
    features: [
      "Delegation system",
      "Multi-sig treasury",
      "Advanced voting mechanisms"
    ]
  },
  {
    id: 4,
    icon: <Coins className="text-blue-600" size={24} />,
    date: "Q4 2025",
    title: "???",
    description: "[REDACTED]",
    status: 'upcoming',
    features: [
      "[REDACTED]",
      "[REDACTED]",
      "[REDACTED]"
    ]
  }
];

export function Roadmap() {
  const [activeMilestone, setActiveMilestone] = useState<number>(1);
  const [visibleMilestones, setVisibleMilestones] = useState<Set<number>>(new Set([1]));

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.milestone-card');
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          const rect = element.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.8;
          if (isVisible) {
            const id = Number(element.dataset.id);
            setVisibleMilestones((prev) => new Set([...prev, id]));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Roadmap & Future Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey from Q1 2025 to Q4 2025 to revolutionize decentralized peer review,
            with a focus on community tooling, strategic partnerships, and next-generation governance.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />
          {milestones.map((milestone) => (
            <button
              key={milestone.id}
              onClick={() => setActiveMilestone(milestone.id)}
              className={`relative z-10 transition-all duration-300 ${
                activeMilestone === milestone.id ? 'scale-110' : ''
              }`}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors
                  ${
                    activeMilestone === milestone.id
                      ? 'bg-blue-600 text-white'
                      : milestone.status === 'completed'
                      ? 'bg-green-100 text-green-600'
                      : milestone.status === 'current'
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {milestone.icon}
              </div>
              <div
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium
                  ${activeMilestone === milestone.id ? 'text-blue-600' : 'text-gray-600'}`}
              >
                {milestone.date}
              </div>
            </button>
          ))}
        </div>

        {/* Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-20">
          {milestones.map((milestone) => (
            <div
              key={milestone.id}
              data-id={milestone.id}
              className={`milestone-card bg-white rounded-xl shadow-sm p-8 transition-all duration-500
                ${
                  visibleMilestones.has(milestone.id)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${
                    milestone.status === 'completed'
                      ? 'bg-green-100'
                      : milestone.status === 'current'
                      ? 'bg-blue-100'
                      : 'bg-gray-100'
                  }`}
                >
                  {milestone.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>

              <div className="space-y-3">
                {milestone.features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 transition-all duration-500 delay-${index * 100}
                      ${
                        visibleMilestones.has(milestone.id)
                          ? 'opacity-100 translate-x-0'
                          : 'opacity-0 -translate-x-4'
                      }`}
                  >
                    <Sparkles className="text-blue-600" size={16} />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Status Badge */}
              <div
                className={`mt-6 inline-flex items-center px-3 py-1 rounded-full text-sm
                  ${
                    milestone.status === 'completed'
                      ? 'bg-green-100 text-green-700'
                      : milestone.status === 'current'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
              >
                {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
