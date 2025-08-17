import React from 'react'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mt-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Ak&MK</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional Chartered Accountancy and Business Advisory Services
          </p>
        </div>

        {/* Company Description */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ak&MK is a leading Chartered Accountancy firm providing comprehensive financial services 
            to businesses and individuals. With years of experience in the industry, we specialize in 
            tax consultation, audit services, and business advisory.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our team of qualified professionals is committed to delivering excellence and helping 
            our clients achieve their financial goals with integrity and expertise.
          </p>
        </div>

        {/* Services Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Audit & Assurance</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Tax Services (GST & Income Tax)</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Startup Services</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Account & Advisory</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Business Consulting</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-700">Financial Planning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Ready to work with us? Get in touch for a consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
