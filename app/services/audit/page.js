import React from 'react'

const AuditPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Audit & <span className="text-blue-600">Assurance</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive audit services ensuring financial accuracy and compliance with regulatory standards.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed">
            Our audit and assurance services are designed to provide a high level of confidence to your stakeholders. We conduct our audits with a deep understanding of your business and the industry in which you operate. Our approach is tailored to your specific needs and is designed to identify and mitigate risks, improve business processes, and ensure compliance with regulatory requirements.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuditPage
