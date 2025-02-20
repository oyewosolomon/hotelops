import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small hotels and B&Bs",
      monthlyPrice: 199,
      annualPrice: 179,
      features: [
        "Up to 50 rooms",
        "Basic reservation management",
        "Staff scheduling",
        "Guest service portal",
        "Email support",
        "Basic analytics",
      ],
      notIncluded: [
        "Revenue optimization",
        "API access",
        "Custom branding",
        "Advanced analytics",
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing properties",
      monthlyPrice: 399,
      annualPrice: 359,
      popular: true,
      features: [
        "Up to 200 rooms",
        "Advanced reservation system",
        "Staff management suite",
        "Guest service portal",
        "24/7 priority support",
        "Advanced analytics",
        "Revenue optimization",
        "API access",
        "Custom branding",
      ],
      notIncluded: [
        "White-label solution",
      ]
    },
    {
      name: "Enterprise",
      description: "For large hotels and chains",
      monthlyPrice: 899,
      annualPrice: 809,
      features: [
        "Unlimited rooms",
        "Full reservation suite",
        "Enterprise staff management",
        "VIP guest service portal",
        "Dedicated support team",
        "Custom analytics",
        "AI-powered optimization",
        "Full API access",
        "White-label solution",
        "Custom integrations",
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the perfect plan for your hotel
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <button 
              className="relative w-16 h-8 bg-blue-600 rounded-full p-1 transition-colors duration-300"
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <div 
                className={`absolute w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
              Annual
              <span className="ml-2 text-sm text-green-500 font-medium">
                Save 10%
              </span>
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:-translate-y-2 ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="text-4xl font-bold text-gray-900 mb-6">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  <span className="text-lg text-gray-600 font-normal">/mo</span>
                </div>

                <button className={`w-full py-3 px-6 rounded-lg mb-8 font-semibold transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  Get Started
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-left">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-left opacity-50">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our sales team for a tailored package that meets your specific requirements
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;