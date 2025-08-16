import React from 'react'

const IncomeTaxPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Income <span className="text-blue-600">Tax</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert tax planning, filing, and consultation for individuals and businesses of all sizes.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Income Tax Services</h2>
          <p className="text-gray-700 leading-relaxed">
            Our income tax services are designed to help you minimize your tax liability and maximize your savings. We provide a wide range of services, including tax planning, return filing, and representation before the tax authorities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default IncomeTaxPage
