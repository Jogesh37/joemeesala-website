import React from 'react';

const Newsletters = () => {
  return (
    <section id="newsletters" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Newsletters</h2>
        
        <p className="text-center text-lg mb-8">Please sign-up below for Newsletters</p>
        
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Business Email*</label>
                <input type="email" className="w-full rounded-md border p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                <input type="text" className="w-full rounded-md border p-2" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry*</label>
                <select className="w-full rounded-md border p-2" required>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number*</label>
                <input type="tel" className="w-full rounded-md border p-2" required />
              </div>
            </div>

            <div className="flex items-start mt-4">
              <input type="checkbox" className="mt-1" id="newsletter" />
              <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                I agree to receive newsletters and updates
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Sign Up for Newsletters
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletters;