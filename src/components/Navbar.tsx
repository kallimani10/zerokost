import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare', subdomains: [ { name: 'Gen AI', id: 'gen-ai' }, { name: 'Agentic AI', id: 'agentic-ai' } ] },
    { name: 'Finance', href: '/industries/finance', subdomains: [ { name: 'Stock Market', id: 'stock-market' }, { name: 'Risk Management', id: 'risk-management' }, { name: 'Fraud Detection', id: 'fraud-detection' } ] },
    { name: 'Pharma', href: '/industries/pharma', subdomains: [ { name: 'Quality Assurance (QA)', id: 'quality-assurance' }, { name: 'Regulatory Affairs (RA)', id: 'regulatory-affairs' }, { name: 'CRM', id: 'crm' }, { name: 'Training', id: 'training' } ] },
    { name: 'Agriculture', href: '/industries/agriculture', subdomains: [ { name: 'Agri Drones', id: 'agri-drones' }, { name: 'Agri AI Magazine', id: 'agri-ai' }, { name: 'Eurva', id:'eurva'}, { name: 'LMS AI Agriculture', id:'lms-ai-agriculture'} ] },
    { name: 'Defence', href: '/industries/defence', subdomains: [ { name: 'AI Driven Defence', id: 'ai-driven-defence' }, { name: 'Drones', id:'drones' }, { name: 'Cyber Security Defence', id:'cyber-security-defence'} ] },
    { name: 'Cyber Security', href: '/industries/cyber-security', subdomains: [ { name: 'AI Driven Defence', id: 'ai-driven-defence' } ] },
    { name: 'Retail', href: '/industries/retail', subdomains: [ { name: 'Ecommerce', id: 'ecommerce' }, { name: 'B2B', id: 'b2b' }, { name: 'B2C', id: 'b2c' } ] },
    { name: 'Biotech', href: '/industries/biotech', subdomains: [ { name: 'Drug Discovery', id: 'gen-ai' }, { name: 'Drug Repurposing', id: 'agentic-ai' } ] },
    { name: 'Law', href: '/industries/law', subdomains: [ { name: 'AI Legal Research', id: 'ai-legal-research' }, { name: 'Contract Analysis', id: 'contract-analysis' } ] },
    { name: 'Aerospace', href: '/industries/aerospace', subdomains: [ { name: 'AI Aerospace Design', id: 'ai-aerospace-design' }, { name: 'AI Space Exploration', id: 'ai-space-exploration' } ] },
    { name: 'Education', href: '/industries/education', subdomains: [ { name: 'AI in EdTech', id: 'ai-edtech' }, { name: 'AI Education Analytics', id: 'ai-education-analytics' } ] },
    { name: 'Semiconductor', href: '/industries/semiconductor', subdomains: [ { name: 'AI Chip Design', id: 'ai-chip-design' }, { name: 'AI in Manufacturing', id: 'ai-manufacturing' } ] },
    { name: 'Nutrition', href: '/industries/nutrition', subdomains: [ { name: 'AI Nutrition Analysis', id: 'ai-nutrition-analysis' }, { name: 'AI Food Safety', id: 'ai-food-safety' } ] },
    { name: 'Meat', href: '/industries/meat', subdomains: [ { name: 'AI Meat Quality', id: 'ai-meat-quality' }, { name: 'AI Meat Production', id: 'ai-meat-production' } ] },
    { name: 'Insurance', href: '/industries/insurance', subdomains: [ { name: 'AI Risk Assessment', id: 'ai-risk-assessment' }, { name: 'AI Claims Processing', id: 'ai-claims-processing' } ] },
    { name: 'Robots', href: '/industries/robots', subdomains: [ { name: 'AI Robotics', id: 'ai-robotics' }, { name: 'AI Robot Control', id: 'ai-robot-control' } ] },
    { name: 'Drones', href: '/industries/drones', subdomains: [ { name: 'AI Drone Navigation', id: 'ai-drone-navigation' }, { name: 'AI Drone Analytics', id: 'ai-drone-analytics' } ] }
  ];

  const products = [
    { name: 'Non Invasive Ventilator', id: 'ventilator', path: '/products/ventilator' },
    { name: 'Electronic Health Records (EHR)', id: 'ehr' },
    { name: 'Telemedicine Platform', id: 'telemedicine' },
    { name: 'Health Monitoring App', id: 'health-monitoring' },
    { name: 'Hospital Management System (HMS)', id: 'hms' },
    { name: 'AI Diagnosis Assistant', id: 'ai-diagnosis' },
    { name: 'Patient Portal', id: 'patient-portal' }
  ];

  const solutions = [
    { name: 'Clinical Decision Support', id: 'clinical-decision' },
    { name: 'Remote Patient Monitoring', id: 'remote-monitoring' },
    { name: 'Medical Billing & Claims', id: 'medical-billing' },
    { name: 'Lab Integration Services', id: 'lab-integration' },
    { name: 'Appointment Scheduling System', id: 'appointment' },
    { name: 'AI Chatbot for Patient Queries', id: 'ai-chatbot' },
    { name: 'Eruvaaka', id:'eurva'},
    {name: 'AI Translator', id: 'ai-translator'}
  ];

  const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' }

  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/">
              <img src="/zerokost.png" alt="Logo" className="h-[150px] w-[150px]" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
              >
                {item.name}
              </Link>
            ))}
            <div className="relative group">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
              >
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-xl border-t border-gray-100 py-8 flex justify-center items-center z-50"
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <div className="w-full px-4 flex justify-center">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center overflow-y-auto max-h-[400px]">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={product.path ? product.path : `/products#${product.id}`}
                          className="block text-gray-900 hover:text-amber-600 transition-colors duration-300 py-2 text-base font-normal"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                onMouseEnter={() => setIsIndustriesOpen(true)}
              >
                Industries
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustriesOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white shadow-xl border-t border-gray-100 py-8 flex justify-center items-center z-50"
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <div className="w-full px-4 flex justify-center">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center text-center overflow-y-auto max-h-[500px]">
                      {industries.map((industry) => (
                        <div key={industry.name} className="space-y-2">
                          <Link
                            to={industry.href}
                            className="text-lg font-light text-gray-900 hover:text-amber-600 transition-colors duration-300 pb-1 border-b border-gray-100 text-center"
                            onClick={() => setIsIndustriesOpen(false)}
                          >
                            {industry.name}
                          </Link>
                          <div className="space-y-1">
                            {industry.subdomains.map((subdomain) => (
                              <Link
                                key={subdomain.id}
                                to={`${industry.href}#${subdomain.id}`}
                                className="block text-sm text-gray-900 hover:text-amber-600 transition-colors duration-300 py-1 text-center font-normal"
                                onClick={() => setIsIndustriesOpen(false)}
                              >
                                {subdomain.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-xl border-t border-gray-100 py-8 flex justify-center items-center z-50"
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <div className="w-full px-4 flex justify-center">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center text-center overflow-y-auto max-h-[400px]">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.id}
                          to={`/solutions#${solution.id}`}
                          className="block text-gray-900 hover:text-amber-600 transition-colors duration-300 py-2 text-base font-normal"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Career Service */}
            <div className="relative group">
              <Link
                to="/career"
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
              >
                Career
              </Link>
            </div>
            <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full transition-all duration-300 font-light">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-6 max-h-[80vh] overflow-y-auto">
            <div className="py-3">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                Products
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={product.path ? product.path : `/products#${product.id}`}
                      className="block text-sm text-gray-900 hover:text-amber-600 transition-colors duration-300 border-l-2 border-transparent hover:border-amber-400 pl-4"
                      onClick={() => {
                        setIsProductsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="py-3">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isSolutionsOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.id}
                      to={`/solutions#${solution.id}`}
                      className="block text-sm text-gray-900 hover:text-amber-600 transition-colors duration-300 border-l-2 border-transparent hover:border-amber-400 pl-4"
                      onClick={() => {
                        setIsSolutionsOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="py-3">
              <button
                className="flex items-center text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
              >
                Industries
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isIndustriesOpen && (
                <div className="pl-4 mt-2 space-y-4">
                  {industries.map((industry) => (
                    <div key={industry.name} className="space-y-2">
                      <Link
                        to={industry.href}
                        className="block text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                        onClick={() => {
                          setIsIndustriesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {industry.name}
                      </Link>
                      <div className="pl-4 space-y-2">
                        {industry.subdomains.map((subdomain) => (
                          <Link
                            key={subdomain.id}
                            to={`${industry.href}#${subdomain.id}`}
                            className="block text-sm text-gray-900 hover:text-amber-600 transition-colors duration-300 border-l-2 border-transparent hover:border-amber-400 pl-4"
                            onClick={() => {
                              setIsIndustriesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {subdomain.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-3 text-gray-900 hover:text-amber-600 transition-colors duration-300 font-light"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full mt-4 transition-all duration-300 font-light">
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
