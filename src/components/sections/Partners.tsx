import React from 'react';
import { Shield, FileCheck, BadgeCheck, Award } from 'lucide-react';

const Partners = () => {
  const verificationSteps = [
    {
      icon: FileCheck,
      title: "Background Checks",
      description: "Comprehensive background screening of all service providers including criminal and employment history."
    },
    {
      icon: BadgeCheck,
      title: "License Verification",
      description: "Validation of professional licenses, certifications, and insurance coverage."
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Multi-step identity verification process including document and photo verification."
    },
    {
      icon: Award,
      title: "Quality Monitoring",
      description: "Ongoing performance monitoring through customer reviews and regular quality assessments."
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-600 font-medium mb-4">
            Trust & Safety
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Rigorous Provider Verification Process
          </h2>
          <p className="text-xl text-gray-600">
            We take your safety seriously. Every provider goes through our comprehensive verification process before joining our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {verificationSteps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Verified Providers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <p className="text-gray-600">Insurance Coverage</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-600">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;