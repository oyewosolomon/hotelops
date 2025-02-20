import React, { useEffect, useState } from 'react';
import { ArrowRight, Hotel, Users, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <Hotel className="w-6 h-6" />, value: "2000+", label: "Properties" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "25%", label: "Occupancy Increase" },
    { icon: <Star className="w-6 h-6" />, value: "40%", label: "Satisfaction Boost" },
    { icon: <Users className="w-6 h-6" />, value: "50K+", label: "Daily Users" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container mx-auto px-4 py-24">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Hotel Operations
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Streamline management, boost occupancy, and delight guests with the most comprehensive hotel management platform
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Book Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-white mb-2 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;