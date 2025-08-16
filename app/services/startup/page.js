import React from 'react'

const StartupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Startup <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized support and guidance for new businesses, entrepreneurs, and startups.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Startup Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide a wide range of services to help startups get off the ground, including business registration, financial planning, and fundraising. Our team of experts will help you navigate the challenges of starting a new business and set you up for success.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StartupPage
