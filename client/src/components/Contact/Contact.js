import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    businessEmail: '',
    companyName: '',
    industry: '',
    contactNumber: '',
    subscribeNewsletter: false
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          businessEmail: '',
          companyName: '',
          industry: '',
          contactNumber: '',
          subscribeNewsletter: false
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for your message. We'll get back to you soon!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
            There was an error submitting your message. Please try again.
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email*
                </label>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry*
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                  required
                >
                  <option value="">Select Industry</option>
                  <option value="banking">Banking & Financial Services</option>
                  <option value="insurance">Insurance</option>
                  <option value="retail">Retail</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="energy">Energy & Utilities</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number*
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full rounded-md border p-2"
                  required
                />
              </div>
            </div>

            <div className="flex items-start mt-4">
              <input
                type="checkbox"
                name="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="ml-2 text-sm text-gray-600">
                Keep me updated with innovation insights and news
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors ${
                submitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;