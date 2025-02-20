import React, { useState } from 'react';
import { Check, Minus, HelpCircle, ChevronDown, Search } from 'lucide-react';

const ProductShowCase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['all']);

  const categories = [
    { id: 'all', name: 'All Features' },
    { id: 'core', name: 'Core Features' },
    { id: 'collaboration', name: 'Collaboration Tools' },
    { id: 'security', name: 'Security & Privacy' },
    { id: 'support', name: 'Support & Training' }
  ];

  const features = [
    {
      category: 'core',
      name: 'Consultation Hours',
      description: 'Monthly allocation of consultation time',
      starter: '3 hours',
      professional: '10 hours',
      enterprise: 'Unlimited'
    },
    {
      category: 'core',
      name: 'Industry Access',
      description: 'Number of available industry experts',
      starter: '20+ Industries',
      professional: '50+ Industries',
      enterprise: 'All Industries + Dedicated Experts'
    },
    {
      category: 'collaboration',
      name: 'Video Conferencing',
      description: 'HD video consultation capabilities',
      starter: true,
      professional: 'Priority Access',
      enterprise: 'Premium + Recording'
    },
    {
      category: 'collaboration',
      name: 'Document Sharing',
      description: 'Secure file sharing and collaboration',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Enterprise-grade'
    },
    {
      category: 'security',
      name: 'End-to-End Encryption',
      description: 'Secure communication channels',
      starter: true,
      professional: true,
      enterprise: true
    },
    {
      category: 'security',
      name: 'Data Compliance',
      description: 'Regulatory compliance standards',
      starter: 'Basic',
      professional: 'Advanced',
      enterprise: 'Custom + Audit Logs'
    },
    {
      category: 'support',
      name: 'Support Response Time',
      description: 'Maximum response time for inquiries',
      starter: '48 hours',
      professional: '24 hours',
      enterprise: '4 hours'
    },
    {
      category: 'support',
      name: 'Training Sessions',
      description: 'Platform onboarding and training',
      starter: 'Self-service',
      professional: '2 sessions',
      enterprise: 'Unlimited'
    }
  ];

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredFeatures = features.filter(feature => {
    const matchesCategory = activeCategory === 'all' || feature.category === activeCategory;
    const matchesSearch = feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderFeatureValue = (value: any) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-green-500 mx-auto" />
      ) : (
        <Minus className="h-5 w-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-gray-900">{value}</span>;
  };

  return (
    <section className="py-20 bg-gray-50" id='experts'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Features</h2>
          <p className="text-xl text-gray-600">Detailed comparison of ConsultHub plans</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search features..."
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-6 bg-gray-50 border-b border-gray-200">
            <div className="text-lg font-semibold text-gray-900">Features</div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">Starter</div>
              <div className="text-sm text-gray-600">$99/month</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">Professional</div>
              <div className="text-sm text-gray-600">$199/month</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">Enterprise</div>
              <div className="text-sm text-gray-600">Custom pricing</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filteredFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 p-6 hover:bg-gray-50 transition-colors">
                <div>
                  <div className="font-medium text-gray-900 mb-1">{feature.name}</div>
                  <div className="text-sm text-gray-600">{feature.description}</div>
                </div>
                <div className="text-center">{renderFeatureValue(feature.starter)}</div>
                <div className="text-center">{renderFeatureValue(feature.professional)}</div>
                <div className="text-center">{renderFeatureValue(feature.enterprise)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to get started?</h3>
          <p className="text-gray-600 mb-8">Choose the plan that best fits your needs</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Need Help */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <HelpCircle className="h-5 w-5 text-blue-600" />
            <span>Need help choosing? Our team is happy to help you find the right plan.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowCase;