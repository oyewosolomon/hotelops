import React from 'react';
import { Award, Users, Globe, Heart, Target, Shield } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: "20,000+", label: "Service Providers", icon: Users },
    { number: "$100M+", label: "Services Processed", icon: Globe },
    { number: "4.8/5", label: "Customer Satisfaction", icon: Heart },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We verify every provider and guarantee customer satisfaction on every service."
    },
    {
      icon: Target,
      title: "Quality First",
      description: "Maintaining the highest standards in home services through rigorous quality control."
    },
    {
      icon: Award,
      title: "Customer-Centric",
      description: "Everything we do is focused on providing the best experience for our customers."
    }
  ];

  return (
    <div className="bg-white py-20" id='about'>
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/team.jpg" 
                alt="Team at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Achievement Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Industry Leader</div>
                  <div className="text-sm text-gray-600">Top-rated home services platform</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-medium">About Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Transforming Home Services Since 2020
            </h2>
            <p className="text-xl text-gray-600">
              HomeServices Hub was founded with a simple mission: to make quality home services accessible to everyone. We've grown from a small startup to the nation's leading home services platform.
            </p>
            <p className="text-gray-600">
              Our platform connects homeowners with verified, skilled professionals for all their home service needs. We've built a community of trust, where quality work meets peace of mind.
            </p>
            
            {/* Mission Statement */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To revolutionize the home services industry by creating seamless connections between homeowners and qualified professionals, ensuring quality, trust, and satisfaction in every service.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These core values guide everything we do at HomeServices Hub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;