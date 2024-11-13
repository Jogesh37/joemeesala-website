import React from 'react';

const UniqueOfferings = () => {
  return (
    <section id="unique-offerings" className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Unique Offerings</h2>
        
        {/* Main Content with Mission */}
        <div className="mb-8 text-center">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            Innovation Eco Solutions (IES) helps customers across public and private sectors 
            to be 'pioneers' in their domain and expertise
          </p>
        </div>

        {/* Core Offerings */}
        <div className="grid gap-4 mb-8">
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-6 rounded-lg"> {/* One point lighter than Hero */}
            <ul className="space-y-3 text-white">
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Help Organisations to get International Standards Organisation's (ISO) newly launched ISO 56000 accreditation</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Across public and private sectors to be 'pioneers' in their domain and expertise</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Assess and Measure Business Innovation</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Benchmark innovation capabilities vs Industry leaders</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Sustainable growth and profits</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Increase EBITDA by 35%</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-1 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-lg font-semibold rounded-full mb-4">
            by
          </span>
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-6 rounded-lg"> {/* One point lighter than Hero */}
            <p className="text-lg text-white">360 degrees assessment on your organisational capabilities</p>
          </div>
        </div>

        {/* Tools & Experience */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-1 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-lg font-semibold rounded-full mb-4">
            Using
          </span>
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-6 rounded-lg"> {/* One point lighter than Hero */}
            <ul className="space-y-3 text-left text-white">
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>World's largest innovation database (100 countries+)</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>100 years of study, R&D in innovation management sciences</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>3 Horizon models</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Quantitative and Qualitative analysis</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 text-blue-100 mr-2">•</span>
                <span>Using AI and data-driven tools for Business Innovation</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Proven Results */}
        <div className="text-center">
          <span className="inline-block px-6 py-1 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-lg font-semibold rounded-full mb-4">
            Proven Against
          </span>
          <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-6 rounded-lg"> {/* One point lighter than Hero */}
            <ul className="space-y-3 text-center font-semibold text-lg text-white">
              <li>Unicorns</li>
              <li>Public & Private Sector</li>
              <li>Fortune 500 companies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueOfferings;