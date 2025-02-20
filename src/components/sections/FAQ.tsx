import React, { useState } from 'react';
import { ChevronDown, Search, MessageCircle } from 'lucide-react';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'pricing', name: 'Pricing & Billing' },
    { id: 'consultations', name: 'Consultations' },
    { id: 'technical', name: 'Technical' },
    { id: 'security', name: 'Security & Privacy' }
  ];

  const faqs = [
    {
      id: '1',
      category: 'general',
      question: 'How does ConsultHub verify its experts?',
      answer: 'ConsultHub implements a rigorous verification process that includes professional background checks, credential verification, and expertise assessment. Each consultant undergoes a detailed review of their qualifications, work history, and industry expertise. We also collect and verify references from previous clients and employers.'
    },
    {
      id: '2',
      category: 'pricing',
      question: 'How does the billing process work?',
      answer: 'Billing is handled securely through our platform. You\'ll only be charged after each consultation session is completed. For monthly subscriptions, billing occurs at the start of each billing cycle. We accept all major credit cards and provide detailed invoices for all transactions.'
    },
    {
      id: '3',
      category: 'consultations',
      question: 'What happens if I need to reschedule a session?',
      answer: 'You can reschedule your consultation up to 24 hours before the scheduled time at no cost. Cancellations made within 24 hours may incur a fee. To reschedule, simply log into your dashboard and select a new time slot that works for both you and the consultant.'
    },
    {
      id: '4',
      category: 'technical',
      question: 'What technical requirements are needed for video consultations?',
      answer: 'You\'ll need a stable internet connection (minimum 5 Mbps), a device with a camera and microphone, and an up-to-date web browser. Our platform works best with Chrome, Firefox, or Safari. We\'ll automatically test your setup before each session to ensure everything works smoothly.'
    },
    {
      id: '5',
      category: 'security',
      question: 'How does ConsultHub protect my data and conversations?',
      answer: 'We employ bank-level encryption for all data transmission and storage. All video consultations are encrypted end-to-end, and we never store recording without explicit consent. Our platform complies with GDPR, CCPA, and other relevant data protection regulations.'
    },
    {
      id: '6',
      category: 'general',
      question: 'Can I switch consultants if I\'m not satisfied?',
      answer: 'Yes, you can switch consultants at any time. If you\'re not satisfied with your current consultant, we\'ll help you find a better match at no additional cost. Your satisfaction is our priority, and we offer a money-back guarantee for your first session with a new consultant.'
    }
  ];

  const toggleQuestion = (id: string) => {
    setOpenQuestions(prev => 
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-white" id='faqs'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about ConsultHub</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search your question..."
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-500 transition-transform ${
                    openQuestions.includes(faq.id) ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openQuestions.includes(faq.id)
                    ? 'max-h-96 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-blue-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">Our support team is here to help you 24/7</p>
          <button className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            <MessageCircle className="mr-2 h-5 w-5" />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;