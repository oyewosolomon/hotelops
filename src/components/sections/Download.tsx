import React from 'react';
import { Apple, Smartphone, Check } from 'lucide-react';

const AppDownloadSection = () => {
  const features = [
    "Instant video consultations on the go",
    "Real-time health monitoring",
    "Push notifications for medication reminders",
    "Easy appointment scheduling",
    "Secure access to pet health records"
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Take Pet Care With You Everywhere
            </h2>
            
            <p className="text-xl text-blue-100">
              Download the PetCare Connect app and access expert veterinary care anytime, anywhere.
            </p>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-blue-500 rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Rating */}
            <div className="pt-8 border-t border-blue-500">
              <div className="flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="font-semibold">4.9 out of 5 stars</div>
                  <div className="text-blue-200">from 10,000+ reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm">
              <img 
                src="/images/app.webp" 
                alt="PetCare Connect mobile app" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-8 -right-4 bg-white text-gray-900 rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">Active Users</div>
              <div className="text-2xl font-bold">50k+</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white text-gray-900 rounded-lg p-4 shadow-lg">
              <div className="text-sm font-medium">App Rating</div>
              <div className="text-2xl font-bold">4.9/5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadSection;