import React from 'react';

const Hero = () => {
  const scrollToServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const offset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="pt-8 pb-12 bg-gradient-to-r from-blue-900 to-blue-700" id="home">
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        <div className="w-1/2 text-white pr-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Empowering Sustainable Growth through Strategic Innovation
          </h1>
          <p className="text-xl mb-6">
            We help organizations reach their full potential with data-driven innovation strategies
            and compliance with ISO 56000 standards for sustainable growth.
          </p>
          <p className="text-lg mb-8">
            At Innovation Eco Solutions, we are committed to unlocking the potential of organizations
            through transformative innovation strategies, helping clients reach EBITDA levels of up to 35%.
          </p>
          <div className="flex space-x-4">
            <button 
              onClick={scrollToServices} 
              className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="rounded-full w-64 h-64 overflow-hidden border-4 border-white shadow-xl mb-8">
            <img
              src="/images/profile.png"
              alt="Joe Meesala"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Gold colored box with matching button */}
          <div className="bg-amber-600/90 p-4 rounded-lg text-white text-center max-w-sm shadow-lg">
            <p className="mb-4">
              If you wish to be world's first ISO 56000 certified Innovative company in your domain then you have to be quick before your competitors get there!
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-amber-600 px-6 py-2 rounded-md hover:bg-amber-50 transition-colors font-semibold"
            >
              Click Here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;