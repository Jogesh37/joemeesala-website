import React from 'react';

const KeyAchievements = () => {
  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
        
        <div className="space-y-8">
          {/* Industry Firsts */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Industry Firsts</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Pioneered the World's First Digital Broking Platform</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Developed and launched a comprehensive digital platform for the Global Specialty Insurance industry, supporting policy submissions to renewals across 200+ business lines, including Aviation, Cargo, Casualty, Energy, and Renewable Sectors.</li>
                  <li>Designed to consolidate transactions in a data-driven environment, the platform bridges brokers and insurers, offering seamless handling for specialty insurance.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Cost & Operational Efficiency */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Cost & Operational Efficiency</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Significant OPEX Reductions</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Achieved a <strong>30% reduction in operational expenses</strong> within 8 months by implementing a modern microservices platform that brought down Azure costs from £550k to £50k, enabling scalable and cost-effective digital transformations.</li>
                  <li>Delivered a £4 million saving for <strong>Nationwide</strong> by optimizing contractor negotiations, implementing tactical solutions, and building a permanent team with cross-functional skills.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Team Building & Leadership */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Team Building & Leadership</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Established and Scaled Cross-Functional Teams</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Founded and managed a robust <strong>Engineering & Architecture</strong> team of 40–50, including engineers, tech leads, solution architects, QA, DevOps, and Cloud experts, to support major digital initiatives.</li>
                  <li>Spearheaded recruitment, mentorship, and performance management, promoting upskilling and cross-skilling to align technical and business objectives.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Strategic Partnerships & Vendor Management */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Strategic Partnerships & Vendor Management</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Developed a Multi-Vendor Environment</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Built a competitive, multi-vendor landscape by managing contracts and resource allocations with key partners like Infosys, TCS, Accenture, and Microsoft, ensuring efficient project delivery and resource flexibility.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Digital Transformation & Technical Leadership */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Digital Transformation & Technical Leadership</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Led High-Impact Transformation Projects</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Directed the <strong>CI/CD and DevOps Transformation Programme</strong> for A1 Telecom, Austria, and <strong>private cloud migration</strong> for Uniper, Germany, setting a foundation for agile and scalable cloud solutions.</li>
                  <li>Defined and implemented software delivery governance for <strong>Lloyds Banking Group's</strong> £9 billion portfolios, managing 1000+ projects across digital transformation and operations from inception to implementation.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Product Lifecycle Management & Cloud Solutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Product Lifecycle Management & Cloud Solutions</h3>
            <ul className="space-y-4">
              <li className="space-y-2">
                <strong>Full Lifecycle Oversight and Modernization</strong>:
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Led <strong>24/7 product lifecycle management</strong> for technical products, overseeing architecture, development, testing, deployment, and cloud support for insurance lines such as Casualty, Aviation, Cargo, and Structured Credit in an API-first environment.</li>
                  <li>Transitioned legacy systems to a flexible and highly scalable Azure-based framework, leveraging the latest in cloud-native and microservices architecture.</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;