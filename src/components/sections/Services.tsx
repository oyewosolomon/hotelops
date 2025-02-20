
import React, { useState } from 'react';
import { 
  Paintbrush, 
  Wrench, 
  Trees, 
  Home, 
  Zap, 
  Droplets,
  Plus,
  ArrowRight,
  LucideIcon
} from 'lucide-react';

// Define prop types for the ServiceCard component
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  popular?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, popular = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-xl transition-all duration-300 ${
        isHovered ? 'bg-blue-600 -translate-y-2' : 'bg-white hover:bg-blue-600'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {popular && (
        <span className="absolute -top-3 right-4 px-3 py-1 bg-yellow-400 text-xs font-semibold rounded-full">
          Popular
        </span>
      )}
      
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
        isHovered ? 'bg-white' : 'bg-blue-50'
      }`}>
        <Icon className={`w-6 h-6 ${isHovered ? 'text-blue-600' : 'text-blue-600'}`} />
      </div>
      
      <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
        isHovered ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      
      <p className={`transition-colors duration-300 ${
        isHovered ? 'text-blue-50' : 'text-gray-600'
      }`}>
        {description}
      </p>
      
      <div className={`mt-4 flex items-center transition-colors duration-300 ${
        isHovered ? 'text-white' : 'text-blue-600'
      }`}>
        <span className="font-medium">Learn more</span>
        <ArrowRight className="w-4 h-4 ml-2" />
      </div>
    </div>
  );
};

// Define service type
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  popular?: boolean;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      icon: Paintbrush,
      title: "Interior Painting",
      description: "Professional painting services for rooms of any size. Includes prep work and cleanup.",
      popular: true
    },
    {
      icon: Wrench,
      title: "Plumbing Services",
      description: "Expert plumbing repair and installation services available 24/7.",
      popular: false
    },
    {
      icon: Trees,
      title: "Landscaping",
      description: "Complete outdoor maintenance including lawn care, tree trimming, and garden design.",
      popular: true
    },
    {
      icon: Home,
      title: "Home Cleaning",
      description: "Thorough house cleaning services customized to your needs.",
      popular: false
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Licensed electricians for all your electrical installation and repair needs.",
      popular: false
    },
    {
      icon: Droplets,
      title: "Pool Services",
      description: "Complete pool maintenance, repair, and cleaning services.",
      popular: false
    }
  ];

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Services That Make a Difference
          </h2>
          <p className="text-xl text-gray-600">
            Discover our wide range of professional home services, all backed by our satisfaction guarantee.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            <Plus className="w-5 h-5 mr-2" />
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;













