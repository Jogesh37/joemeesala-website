import React, { useState } from 'react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false);

  // Define the function before using it
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex-shrink-0">
              <span 
                className="text-2xl md:text-3xl font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer" 
                onClick={scrollToTop}
              >
                Joe Meesala
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" onClick={scrollToTop} className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </a>

              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Services
              </a>

              <a href="#unique-offerings" onClick={(e) => handleNavClick(e, 'unique-offerings')} className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Unique Offerings
              </a>

              {/* Insights Dropdown */}
              <div className="relative group px-4 py-2"
                   onMouseEnter={() => setShowInsightsDropdown(true)}
                   onMouseLeave={() => setShowInsightsDropdown(false)}>
                <a href="#insights" onClick={(e) => handleNavClick(e, 'insights')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Insights
                </a>
                {showInsightsDropdown && (
                  <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg w-48">
                    <a href="#newsletters" onClick={(e) => handleNavClick(e, 'newsletters')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Newsletters
                    </a>
                    <a href="#blogs" onClick={(e) => handleNavClick(e, 'blogs')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Blogs
                    </a>
                    <a href="#articles" onClick={(e) => handleNavClick(e, 'articles')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Articles
                    </a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div className="relative group px-4 py-2"
                   onMouseEnter={() => setShowAboutDropdown(true)}
                   onMouseLeave={() => setShowAboutDropdown(false)}>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                {showAboutDropdown && (
                  <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg w-48">
                    <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      About Me
                    </a>
                    <a href="#my-story" onClick={(e) => handleNavClick(e, 'my-story')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      My Story
                    </a>
                    <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
                      Key Achievements
                    </a>
                  </div>
                )}
              </div>

              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" onClick={scrollToTop} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </a>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </a>
                <a href="#unique-offerings" onClick={(e) => handleNavClick(e, 'unique-offerings')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Unique Offerings
                </a>
                <a href="#insights" onClick={(e) => handleNavClick(e, 'insights')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Insights
                </a>
                <a href="#newsletters" onClick={(e) => handleNavClick(e, 'newsletters')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors pl-6">
                  - Newsletters
                </a>
                <a href="#blogs" onClick={(e) => handleNavClick(e, 'blogs')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors pl-6">
                  - Blogs
                </a>
                <a href="#articles" onClick={(e) => handleNavClick(e, 'articles')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors pl-6">
                  - Articles
                </a>
                <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </a>
                <a href="#my-story" onClick={(e) => handleNavClick(e, 'my-story')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors pl-6">
                  - My Story
                </a>
                <a href="#achievements" onClick={(e) => handleNavClick(e, 'achievements')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors pl-6">
                  - Key Achievements
                </a>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Joe Meesala. All rights reserved.</p>
          <p className="text-sm text-gray-400">Innovation Thought Leader</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;