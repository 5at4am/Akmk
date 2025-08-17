'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            alt="Professional Business Meeting"
            className="w-full h-full object-cover  opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Empowering Your Financial Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Expert chartered accountancy services for a brighter financial future.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/about" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Core Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Audit & Assurance',
              description: 'Comprehensive audit services ensuring financial accuracy and compliance with regulatory standards.',
              icon: '📊',
              color: 'from-blue-100 to-blue-200',
              borderColor: 'border-blue-300',
              iconBg: 'bg-blue-500',
              href: '/services/audit'
            },
            {
              title: 'Tax Services',
              description: 'Expert tax planning, filing, and consultation for individuals and businesses of all sizes.',
              icon: '💰',
              color: 'from-green-100 to-green-200',
              borderColor: 'border-green-300',
              iconBg: 'bg-green-500',
              href: '/services/income-tax'
            },
            {
              title: 'Business Advisory',
              description: 'Strategic guidance and consulting to help your business grow, scale, and succeed.',
              icon: '🚀',
              color: 'from-purple-100 to-purple-200',
              borderColor: 'border-purple-300',
              iconBg: 'bg-purple-500',
              href: '/services/advisory'
            },
            {
              title: 'Startup Services',
              description: 'Specialized support and guidance for new businesses, entrepreneurs, and startups.',
              icon: '💡',
              color: 'from-orange-100 to-orange-200',
              borderColor: 'border-orange-300',
              iconBg: 'bg-orange-500',
              href: '/services/startup'
            },
            {
              title: 'GST Services',
              description: 'Complete GST compliance, filing, and advisory services for seamless business operations.',
              icon: '📋',
              color: 'from-red-100 to-red-200',
              borderColor: 'border-red-300',
              iconBg: 'bg-red-500',
              href: '/services/gst'
            },
            {
              title: 'Consulting',
              description: 'Professional consultation and expert advice for all your financial and business needs.',
              icon: '🎯',
              color: 'from-indigo-100 to-indigo-200',
              borderColor: 'border-indigo-300',
              iconBg: 'bg-indigo-500',
              href: '/services/consultant'
            }
          ].map((service, index) => (
            <Link href={service.href} key={index} className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${service.borderColor} group cursor-pointer`}>
              <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
                  Learn More
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-blue-600">Get Started</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Contact us today for a free consultation and discover how we can help your business thrive and grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Consultation
            </Link>
            <Link href="/about" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105">
              Download Brochure
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
