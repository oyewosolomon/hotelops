import React from 'react';
import { Search, Calendar, CheckCircle, Star, Video, FileText } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How ConsultHub Works</h2>
          <p className="text-xl text-gray-600">Get expert consultation in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Search,
              title: "Find Your Expert",
              description: "Browse through verified specialists across 50+ industries"
            },
            {
              icon: Calendar,
              title: "Schedule Session",
              description: "Book a time that works best for your consultation"
            },
            {
              icon: Video,
              title: "Connect Virtually",
              description: "Meet via secure video conferencing platform"
            },
            {
              icon: FileText,
              title: "Share & Collaborate",
              description: "Exchange documents and implement solutions"
            }
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-100" />
                )}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;