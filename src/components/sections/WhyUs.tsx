import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Shield, Clock, Award, TrendingUp, Building, Users } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

interface FeatureProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface IntegrationProps {
  name: string;
  category: string;
  image:string;
}

interface PerformanceDataProps {
  name: string;
  value: number;
}

const WhyChooseUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const performanceData: PerformanceDataProps[] = [
    { name: 'Before HotelOps', value: 75 },
    { name: 'With HotelOps', value: 95 }
  ];

  const integrations: IntegrationProps[] = [
    { 
      name: 'Booking.com', 
      category: 'Booking Platforms', 
      image: 'https://logo.clearbit.com/booking.com' 
    },
    { 
      name: 'Expedia', 
      category: 'Booking Platforms', 
      image: 'https://logo.clearbit.com/expedia.com' 
    },
    { 
      name: 'Stripe', 
      category: 'Payment', 
      image: 'https://logo.clearbit.com/stripe.com' 
    },
    { 
      name: 'PayPal', 
      category: 'Payment', 
      image: 'https://logo.clearbit.com/paypal.com' 
    },
    { 
      name: 'Salesforce', 
      category: 'CRM', 
      image: 'https://logo.clearbit.com/salesforce.com' 
    },
    { 
      name: 'Slack', 
      category: 'Communication', 
      image: 'https://logo.clearbit.com/slack.com' 
    }
  ];

  const stats: StatProps[] = [
    {
      icon: <Building className="w-8 h-8" />,
      value: "2000+",
      label: "Hotels Worldwide",
      description: "Trusted by properties across the globe"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1M+",
      label: "Guests Served",
      description: "Monthly active users on our platform"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on"
    }
  ];

  const features: FeatureProps[] = [
    {
      title: "Security First",
      icon: <Shield className="w-6 h-6" />,
      description: "Enterprise-grade security with end-to-end encryption and compliance with global standards."
    },
    {
      title: "24/7 Support",
      icon: <Clock className="w-6 h-6" />,
      description: "Round-the-clock expert support team ready to help you succeed."
    },
    {
      title: "Industry Leading",
      icon: <Award className="w-6 h-6" />,
      description: "Recognized as the top hotel management platform by industry experts."
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Leading Hotels Choose HotelOps
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by thousands of properties worldwide
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-50 rounded-xl p-8 transform transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-600 mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Performance Comparison */}
       {/* Performance Comparison */}

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Seamless Integrations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-3">
                  <img
                    src={integration.image}
                    alt={integration.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-sm font-medium text-gray-900">{integration.name}</div>
                <div className="text-xs text-gray-600">{integration.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;