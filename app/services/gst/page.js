import React from 'react'

const GstPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 mt-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Goods and Services Tax <span className="text-blue-600">(GST)</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete GST compliance, filing, and advisory services for seamless business operations.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our GST Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We provide a comprehensive range of GST services, including registration, return filing, and advisory. Our team of experts will help you navigate the complexities of GST and ensure that your business is compliant with all the regulations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default GstPage
