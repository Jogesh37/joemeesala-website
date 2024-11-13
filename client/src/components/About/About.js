import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Innovation Leader</h3>
            <p className="text-gray-600 mb-6">
              With nearly three decades of transformative leadership experience in technology and innovation,
              helping organizations achieve excellence through strategic innovation and ISO 56000 certification.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Total Experience:</h4>
                <p className="text-gray-600">
                  25+ years of hands-on and managerial experience covering entire SDLC in Waterfall, 
                  SAFe Agile / Lean, Scrum, and Kanban methodologies across Digital, Agile, DevOps, 
                  Cloud, and infrastructure transformations (UK & Offshore experience).
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Industry Expertise:</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>
                    <span className="font-medium">Banking & Financial Services:</span> Payments, 
                    Mortgage, Retail & Community Banking, Regulatory, Risk, Asset Management, 
                    Wealth Management, Finance
                  </li>
                  <li>
                    <span className="font-medium">Insurance:</span> Global Specialty, Life Insurance & 
                    Pensions
                  </li>
                  <li>Energy & Utilities</li>
                  <li>Telecommunications</li>
                  <li>Retail & e-Commerce</li>
                  <li>Edutech</li>
                  <li>Other Misc. Industries</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Education & Certifications</h3>
            <div className="space-y-4">
              {/* Academic Qualifications */}
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-blue-900">Academic Qualifications</h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Bachelor of Technology (Computer Science and Engineering) – Distinction</li>
                  <li>Artificial Intelligence Programme – Oxford SAID Business School</li>
                </ul>
              </div>

              {/* Professional Certifications */}
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-blue-900">Innovation & Management</h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Innovation Consultant & Practitioner Innovation360 (ISO 56000)</li>
                  <li>ITIL V4 Certified</li>
                  <li>ISEB Business Analysis Certification</li>
                </ul>
              </div>

              {/* Agile Certifications */}
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-blue-900">Agile & Scrum</h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>ICP-ACC Certified Agile Coach</li>
                  <li>SAFe 4.0 Agilist</li>
                  <li>Scrum Alliance Certified Scrum Master (SA-CSM)</li>
                  <li>Scrum Alliance Certified Product Owner (SA-CSPO)</li>
                </ul>
              </div>

              {/* Language Certification */}
              <div className="p-4 bg-white rounded-lg shadow">
                <h4 className="font-semibold text-blue-900">Business Communication</h4>
                <p className="text-gray-600">Business English Certificate – Cambridge University</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;