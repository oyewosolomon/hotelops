import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  submenu?: Array<{
    label: string;
    href: string;
  }>;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { 
      label: 'Products',
      href: '#',
      submenu: [
        { label: 'Reservation Management', href: '#' },
        { label: 'Staff Management', href: '#' },
        { label: 'Guest Services', href: '#' },
        { label: 'Analytics Dashboard', href: '#' },
      ]
    },
    { 
      label: 'Solutions',
      href: '#',
      submenu: [
        { label: 'For Small Hotels', href: '#' },
        { label: 'For Luxury Resorts', href: '#' },
        { label: 'For Hotel Chains', href: '#' },
      ]
    },
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
              HotelOps
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center space-x-1 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  } hover:text-blue-500 transition-colors`}
                >
                  <span>{item.label}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>

                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 mt-2 bg-white rounded-lg shadow-lg py-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={`${
              isScrolled ? 'text-gray-700' : 'text-white'
            } hover:text-blue-500 transition-colors`}>
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                <button className="text-gray-700 w-full text-left px-4 py-2 hover:bg-blue-50">
                  {item.label}
                </button>
                {item.submenu && (
                  <div className="pl-8 mt-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block text-gray-600 px-4 py-2 hover:bg-blue-50"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200 py-4 px-4">
              <button className="w-full text-center text-gray-700 hover:text-blue-500 mb-2">
                Sign In
              </button>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;