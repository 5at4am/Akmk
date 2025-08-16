import React from 'react'

const ConsultantPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Business <span className="text-blue-600">Consulting</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional consultation and expert advice for all your financial and business needs.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Consulting Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our consulting services are designed to help you solve your most pressing business challenges. We provide a wide range of services, including business process improvement, financial modeling, and strategic planning.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ConsultantPage
