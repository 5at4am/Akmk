'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: 'Audit', href: '/services/audit' },
    { name: 'Goods and Services Tax', href: '/services/gst' },
    { name: 'Income Tax', href: '/services/income-tax' },
    { name: 'Startup Services', href: '/services/startup'},
    { name: 'Account and Advisory', href: '/services/advisory'},
    { name: 'Consultant', href: '/services/consultant'},
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-lg border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 justify-between">
            <Link href="/" className="flex items-center group">
              <img src="/CA-Logo.png" alt="Logo" className="h-9" />
              <span className="ml-3 text-xl font-bold text-gray-800">AKMK Company</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className=" flex items-baseline space-x-6">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-blue-100 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
              
              <Link
                href="/about"
                className="relative text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 group"
              >
                <span className="relative z-10">About Us</span>
                <div className="absolute inset-0 bg-blue-100 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="relative text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 flex items-center group"
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-blue-100 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <svg
                    className={`ml-2 h-5 w-5 transition-all duration-300 ${
                      isServicesOpen ? 'rotate-180 text-blue-600' : 'text-gray-500'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-2xl py-2 z-50 border border-gray-200 transform opacity-100 scale-100 transition-all duration-200">
                    <div className="px-2 py-1">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-3">Our Services</div>
                      {services.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 rounded-lg transition-all duration-200 hover:shadow-md group"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-200">{service.icon}</span>
                          <span className="font-medium">{service.name}</span>
                          <svg className="ml-auto h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="relative text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 group"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-blue-100 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>

              <Link
                href="/blog"
                className="relative text-gray-700 hover:text-blue-600 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-50 group"
              >
                <span className="relative z-10">Blog</span>
                <div className="absolute inset-0 bg-blue-100 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-500"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🏠 Home
            </Link>
            
            <Link
              href="/about"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ℹ️ About Us
            </Link>

            {/* Mobile Services */}
            <div className="px-4 py-3">
              <div className="text-base font-semibold text-gray-700 mb-3 flex items-center">
                <span className="mr-2">🛠️</span>
                Services
              </div>
              <div className="pl-6 space-y-2">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-lg transition-all duration-200 flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="mr-3">{service.icon}</span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              📞 Contact Us
            </Link>

            <Link
              href="/blog"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              📝 Blog
            </Link>

            <div className="px-4 py-3">
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl text-sm font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
