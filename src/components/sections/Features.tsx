import React from 'react';
import { Calendar, Users, LineChart, Bell, Shield, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Reservations",
      description: "Intelligent booking system with automated optimization for maximum occupancy and revenue.",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff Management",
      description: "Streamline scheduling, task allocation, and performance tracking for your entire team.",
      color: "bg-green-500"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into occupancy rates, revenue, and guest satisfaction metrics.",
      color: "bg-purple-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Guest Services",
      description: "Manage guest requests, preferences, and feedback in one unified platform.",
      color: "bg-red-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance for hospitality regulations.",
      color: "bg-indigo-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "AI-Powered Insights",
      description: "Predictive analytics for demand forecasting and personalized guest experiences.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Run Your Hotel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools designed specifically for modern hotel operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;