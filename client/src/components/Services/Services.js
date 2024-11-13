import React, { useState } from 'react';
import { Lightbulb, Target, RotateCw, Layers, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const ServiceCard = ({ title, icon: Icon, description, expandedContent, image, imageCredit }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className="border rounded-lg overflow-hidden transition-all duration-300">
      <div className="p-6 hover:shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex-grow">
            <Icon className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <button 
            className="ml-4 mt-2 transition-transform duration-300" 
            style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)' }}
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
        
        {isExpanded && (
          <div className="mt-6 pt-6 border-t transition-all duration-300 service-card-expanded">
            {expandedContent}
            {image && (
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                {imageLoading && (
                  <div className="w-full h-48 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img 
                  src={image}
                  alt={title}
                  className={`w-full h-auto rounded-lg shadow-sm transition-opacity duration-300 ${
                    imageLoading ? 'opacity-0' : 'opacity-100'
                  }`}
                  onLoad={() => setImageLoading(false)}
                />
                <p className="text-xs text-gray-500 mt-3 italic text-center">
                  {imageCredit || "Image contains trademarks and/or copyrights of Innovation360. Used with permission."}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Innovation Assessment & Benchmarking",
      icon: Lightbulb,
      description: "Through our InnoSurvey™ platform, we benchmark your innovation capabilities against industry leaders using the world's largest innovation database. We assess across key areas like Services, Customer Insights, Customer Experience, and more to identify capability gaps and growth opportunities.",
      expandedContent: (
        <div>
          <h4 className="text-lg font-semibold mb-4">How well-prepared is your team for innovation?</h4>
          <p className="text-gray-600 mb-4">
            Our comprehensive benchmarking system leverages data from thousands of organizations across 105+ countries, 
            providing detailed comparisons by country, industry, and organizational size. Through our unique InnovationIQ 
            metric, we deliver clear, actionable insights about your innovation readiness.
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Our Assessment Process:</h5>
            <ul className="list-disc pl-5 text-gray-600">
              <li>AI-powered InnoSurvey® analysis of 66 innovation capabilities</li>
              <li>Multi-lingual assessment available in 20+ languages</li>
              <li>15-minute comprehensive digital evaluation</li>
              <li>360-degree stakeholder perspective integration</li>
              <li>Qualitative analysis through workshops and stakeholder interviews</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/innovation-assessment-metrics.png"
    },
    {
      title: "ISO 56000 Compliance Consulting",
      icon: Target,
      description: "As leaders in innovation management, we guide organizations to achieve ISO 56000 certification. This involves a full assessment of your organization's innovation capabilities, gap analysis, tools, frameworks, and data to ensure compliance with ISO standards, positioning you as an innovative leader in your industry.",
      expandedContent: (
        <div>
          <h4 className="text-lg font-semibold mb-4">Prepare for Global Innovation Standards</h4>
          <p className="text-gray-600 mb-4">
            With ISO 56000 emerging as the global standard for innovation management, our comprehensive 
            readiness assessment helps organizations align with the eight pillars of ISO 56002 guidance.
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Our ISO 56000 Assessment Includes:</h5>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Complete evaluation using InnoSurvey® framework</li>
              <li>Analysis across all eight ISO 56000 pillars</li>
              <li>Detailed readiness report with actionable recommendations</li>
              <li>Implementation guidance for standard compliance</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/iso-56000-readiness.png"
    },
    {
      title: "Strategic Market Assessment",
      icon: RotateCw,
      description: "Our comprehensive approach combines culture analysis, ideation platforms, and transformation frameworks, creating a continuous cycle of innovation that adapts to market needs, enhances customer experiences, and supports sustainable growth.",
      expandedContent: (
        <div>
          <h4 className="text-lg font-semibold mb-4">Data-Driven Market Intelligence</h4>
          <p className="text-gray-600 mb-4">
            Using our PESTLED360™ tool, we conduct thorough market assessments covering Political, Economic, 
            Societal, Technology, Legal, Environmental, and Demographic trends. This comprehensive analysis 
            helps identify opportunities and threats while preparing for future uncertainties.
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Strategic Analysis Components:</h5>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Complete PESTLED analysis</li>
              <li>Scenario planning for future uncertainties</li>
              <li>Market opportunity identification</li>
              <li>Strategic uncertainty assessment</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/pestled-360.png",
      imageCredit: "PESTLED360™ is a trademark of Innovation360. Used with permission."
    },
    {
      title: "Innovation Capabilities Assessment",
      icon: Layers,
      description: "Our 360-degree assessment model covers four core innovation quadrants—Market, Offer, Sales, and Organization. We evaluate your business across dimensions like Value Proposition, Customer Channels, Brand, and Products to maximize competitive edge.",
      expandedContent: (
        <div>
          <h4 className="text-lg font-semibold mb-4">Bridge the Innovation Gap</h4>
          <p className="text-gray-600 mb-4">
            Using the world's largest innovation database and AI-powered InnoSurvey®, we provide a 
            comprehensive assessment of your innovation capabilities, leadership style, culture, and 
            innovation personas.
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Assessment Areas:</h5>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Innovation capabilities benchmarking</li>
              <li>Leadership style analysis</li>
              <li>Cultural assessment</li>
              <li>Innovation persona mapping</li>
              <li>Actionable growth insights</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/innovation-capabilities-wheel.png",
      imageCredit: "Innovation Capabilities Wheel - Patent US D813,884S. Innovation360® trademark. Used with permission."
    },
    {
      title: "Innovation Playbook",
      icon: BookOpen,
      description: "A comprehensive framework aligning business strategy with innovation goals, providing structured approaches for ideation, development, and commercialization.",
      expandedContent: (
        <div>
          <h4 className="text-lg font-semibold mb-4">Structured Innovation Framework</h4>
          <p className="text-gray-600 mb-4">
            Our Innovation Playbook creates a seamless structure connecting business strategy with 
            innovation initiatives through our enhanced 5i model: Identify, Iterate, Incubate, 
            Intensify, and Institutionalize.
          </p>
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Playbook Components:</h5>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Strategic decision-making frameworks</li>
              <li>Capability development roadmap</li>
              <li>Innovation metrics and KPIs</li>
              <li>Culture and leadership development</li>
              <li>Sustainable growth planning</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;