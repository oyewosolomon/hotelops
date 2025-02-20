import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Search, Filter } from 'lucide-react';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ai', name: 'AI in Healthcare' },
    { id: 'research', name: 'Research' },
    { id: 'case-studies', name: 'Case Studies' },
    { id: 'industry', name: 'Industry News' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "AI Reduces Diagnosis Time by 45% in Emergency Departments",
      excerpt: "New study shows how AI-powered triage systems are revolutionizing emergency care with faster, more accurate patient assessments.",
      category: "research",
      readTime: "5 min read",
      date: "Feb 15, 2025",
        image: "/images/b-2.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Future of Healthcare: Predictive Analytics in Patient Care",
      excerpt: "Exploring how predictive analytics is transforming preventive care and patient outcomes across healthcare institutions.",
      category: "ai",
      readTime: "8 min read",
      date: "Feb 12, 2025",
      image: "/images/b-2.jpg"
    },
    {
      id: 3,
      title: "Metropolitan Hospital Achieves 40% Reduction in Wait Times",
      excerpt: "How one of our partner hospitals transformed their operations using PatientCare AI's smart scheduling system.",
      category: "case-studies",
      readTime: "6 min read",
      date: "Feb 10, 2025",
       image: "/images/b-3.jpg"
    },
    {
      id: 4,
      title: "Healthcare Industry Embraces AI for Better Patient Outcomes",
      excerpt: "Latest trends show accelerated adoption of AI technologies in healthcare institutions worldwide.",
      category: "industry",
      readTime: "4 min read",
      date: "Feb 8, 2025",
      image: "/images/b-2.jpg"
    },
    {
      id: 5,
      title: "HIPAA Compliance in the Age of AI",
      excerpt: "Understanding the intersection of AI technology and healthcare privacy regulations.",
      category: "industry",
      readTime: "7 min read",
      date: "Feb 5, 2025",
      image: "/images/b-3.jpg"
    },
    {
      id: 6,
      title: "Machine Learning Models Improve Diagnosis Accuracy",
      excerpt: "New developments in machine learning are helping doctors make more accurate diagnoses.",
      category: "ai",
      readTime: "6 min read",
      date: "Feb 3, 2025",
      image: "/images/b-2.jpg"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments in healthcare AI and success stories from our partners.
          </p>
        </div>

        {/* Featured Post */}
        {filteredPosts.find(post => post.featured) && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src="/images/b-2.jpg"
                    alt="Featured post"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
                    Featured
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Feb 15, 2025
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      5 min read
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    AI Reduces Diagnosis Time by 45% in Emergency Departments
                  </h3>
                  <p className="text-gray-600 mb-6">
                    New study shows how AI-powered triage systems are revolutionizing emergency care with faster, more accurate patient assessments.
                  </p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex space-x-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm transition ${
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
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured).map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="flex items-center text-blue-600 hover:text-blue-700 transition">
                  <span>Read More</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with Our Newsletter
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to receive the latest insights, research, and news about healthcare AI directly in your inbox.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-gray-900 text-white rounded-r-lg hover:bg-gray-800 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;