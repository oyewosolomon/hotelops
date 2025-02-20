import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Building2, Users, Clock, Brain, ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 0,
      hospital: "Metropolitan General Hospital",
      location: "New York, NY",
      beds: 500,
      description: "One of the first hospitals to implement PatientCare AI, achieving remarkable improvements in patient care and operational efficiency.",
      results: [
        "Reduced average wait time from 55 to 32 minutes",
        "Improved diagnosis accuracy by 42%",
        "Increased patient satisfaction score from 7.2 to 9.1",
        "Processing 2,000+ patient interactions daily"
      ],
      data: [
        { month: 'Jan', waitTime: 55, accuracy: 72 },
        { month: 'Feb', waitTime: 48, accuracy: 78 },
        { month: 'Mar', waitTime: 42, accuracy: 82 },
        { month: 'Apr', waitTime: 38, accuracy: 86 },
        { month: 'May', waitTime: 35, accuracy: 89 },
        { month: 'Jun', waitTime: 32, accuracy: 92 }
      ]
    },
    {
      id: 1,
      hospital: "Valley Medical Center",
      location: "Los Angeles, CA",
      beds: 350,
      description: "Transformed their emergency department operations with AI-powered patient management and resource allocation.",
      results: [
        "Decreased patient processing time by 35%",
        "Reduced operational costs by 28%",
        "Improved staff scheduling efficiency by 45%",
        "Managing 1,500+ daily patient records"
      ],
      data: [
        { month: 'Jan', waitTime: 62, accuracy: 70 },
        { month: 'Feb', waitTime: 52, accuracy: 76 },
        { month: 'Mar', waitTime: 45, accuracy: 81 },
        { month: 'Apr', waitTime: 40, accuracy: 85 },
        { month: 'May', waitTime: 36, accuracy: 88 },
        { month: 'Jun', waitTime: 33, accuracy: 91 }
      ]
    },
    {
      id: 2,
      hospital: "Central Health System",
      location: "Chicago, IL",
      beds: 750,
      description: "Large-scale implementation across multiple facilities, showcasing the scalability of PatientCare AI.",
      results: [
        "Standardized care protocols across 5 facilities",
        "Improved cross-department communication by 60%",
        "Reduced administrative workload by 40%",
        "Handling 3,000+ patient interactions daily"
      ],
      data: [
        { month: 'Jan', waitTime: 58, accuracy: 71 },
        { month: 'Feb', waitTime: 50, accuracy: 77 },
        { month: 'Mar', waitTime: 44, accuracy: 82 },
        { month: 'Apr', waitTime: 39, accuracy: 86 },
        { month: 'May', waitTime: 35, accuracy: 90 },
        { month: 'Jun', waitTime: 32, accuracy: 93 }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how leading healthcare institutions have transformed their operations with PatientCare AI.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Case Study Navigation */}
          <div className="lg:col-span-2 space-y-4">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeCase === index 
                    ? 'bg-white shadow-lg border-l-4 border-blue-600' 
                    : 'bg-gray-100 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveCase(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg text-gray-900">{study.hospital}</h3>
                  {activeCase === index && (
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-2">{study.location}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Building2 className="w-4 h-4" />
                  <span>{study.beds} beds</span>
                </div>
              </div>
            ))}
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {caseStudies[activeCase].hospital}
              </h3>
              <p className="text-gray-600 mb-6">
                {caseStudies[activeCase].description}
              </p>
              
              {/* Results Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {caseStudies[activeCase].results.map((result, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-900 text-sm">{result}</p>
                  </div>
                ))}
              </div>

              {/* Performance Chart */}
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={caseStudies[activeCase].data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="waitTime" 
                      stroke="#2563eb" 
                      name="Wait Time (mins)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="accuracy" 
                      stroke="#16a34a" 
                      name="Accuracy (%)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Healthcare Operations?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join these leading healthcare institutions in revolutionizing patient care with AI-powered solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;