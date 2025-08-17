import React from 'react'

const AdvisoryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Account & <span className="text-blue-600">Advisory</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Strategic guidance and consulting to help your business grow, scale, and succeed.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Advisory Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our advisory services are designed to help you make informed decisions and achieve your business objectives. We provide a wide range of services, including financial planning, risk management, and business strategy.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AdvisoryPage
