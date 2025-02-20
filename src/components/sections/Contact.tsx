import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare, 
  Book, 
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      city: "Boston",
      country: "USA",
      address: "100 PatientCare Drive",
      phone: "+1 (617) 555-0123",
      coordinates: [42.3601, -71.0589] as [number, number]
    },
    {
      city: "London",
      country: "UK",
      address: "15 Research Square",
      phone: "+44 20 7123 4567",
      coordinates: [51.5074, -0.1278] as [number, number]
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "88 Science Park Drive",
      phone: "+65 6789 0123",
      coordinates: [1.3521, 103.8198] as [number, number]
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat Support",
      description: "Get instant help from our support team",
      availability: "24/7 Support"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Extensive documentation and tutorials",
      availability: "Self-service"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Forum",
      description: "Connect with other researchers",
      availability: "Always available"
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Contact & Support
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            We're Here to Help
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Get in touch with our team for personalized assistance and support
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-500 mb-4">{option.description}</p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {option.availability}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Presence</h3>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="h-96 w-full rounded-lg overflow-hidden">
              <MapContainer
                center={locations[activeLocation].coordinates}
                zoom={3}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={location.coordinates}
                    eventHandlers={{
                      click: () => setActiveLocation(index),
                    }}
                  >
                    <Popup>
                      <div className="text-center">
                        <h4 className="font-medium text-gray-900">
                          {location.city}, {location.country}
                        </h4>
                        <p className="text-sm text-gray-500">{location.address}</p>
                        <p className="text-sm text-gray-500">{location.phone}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeLocation === index
                      ? 'bg-blue-50 border-blue-200 border'
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveLocation(index)}
                >
                  <div className="flex items-start">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                      activeLocation === index ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {location.city}, {location.country}
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">{location.address}</p>
                      <p className="text-sm text-gray-500 mt-1">{location.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Additional Contact Methods */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-8 text-white">
              <h4 className="text-xl font-medium mb-6">Other Ways to Reach Us</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@PatientCare.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+1 (800) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h4 className="text-xl font-medium text-gray-900 mb-4">Support Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday - Friday</span>
                  <span className="text-gray-900">24/7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sunday</span>
                  <span className="text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;