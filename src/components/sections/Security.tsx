import React from 'react';
import { ShieldCheck, Lock, Key, EyeOff, Server, ArrowRight } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: "End-to-End Encryption",
      description: "All consultations and shared documents are protected with end-to-end encryption, ensuring your data remains private and secure."
    },
    {
      icon: <Lock className="w-8 h-8 text-blue-600" />,
      title: "Secure Payment Processing",
      description: "We use industry-standard payment gateways with PCI-DSS compliance to ensure your transactions are safe and secure."
    },
    {
      icon: <Key className="w-8 h-8 text-blue-600" />,
      title: "Two-Factor Authentication (2FA)",
      description: "Add an extra layer of security to your account with 2FA, protecting your login and personal information."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-blue-600" />,
      title: "Privacy-First Approach",
      description: "Your data is never shared with third parties. We adhere to strict privacy policies to safeguard your information."
    },
    {
      icon: <Server className="w-8 h-8 text-blue-600" />,
      title: "Regular Security Audits",
      description: "Our platform undergoes frequent security audits to identify and address vulnerabilities, ensuring a safe environment for all users."
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Your Security is Our Priority
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At ConsultHub, we are committed to providing a secure and trustworthy platform for all your consultation needs. Here’s how we protect you:
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions about our security measures? We’re here to help.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;