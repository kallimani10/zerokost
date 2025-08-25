
import React, { useState } from 'react';
import { Heart, DollarSign, Dna, Shield, Lock, Pill, Wheat, ShoppingCart, ChevronDown } from 'lucide-react';

interface IndustriesSectionProps {
  onIndustryClick: (path: string) => void;
}

const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onIndustryClick }) => {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  const industries = [
    { 
      icon: Heart, 
      title: 'Healthcare', 
      description: 'Transforming patient care with AI-powered diagnostics and treatment optimization.',
      subdomains: ['Gen AI', 'Agentic AI'],
      path: '/industries/healthcare'
    },
    { 
      icon: DollarSign, 
      title: 'Finance', 
      description: 'Enhancing financial services with algorithmic trading and fraud detection.',
      subdomains: ['Stock Market', 'Risk Management', 'Fraud Detection'],
      path: '/industries/finance'
    },
    { 
      icon: Pill, 
      title: 'Pharma', 
      description: 'Optimizing pharmaceutical research and clinical trials.',
      subdomains: ['QA', 'RA', 'CRM', 'Training'],
      path: '/industries/pharma'
    },
    { 
      icon: Wheat, 
      title: 'Agriculture', 
      description: 'Revolutionizing farming with precision agriculture technologies.',
      subdomains: ['Plant Disease Prediction', 'Crop Yield Optimization', 'Smart Irrigation'],
      path: '/industries/agriculture'
    },
    { icon: Shield, title: 'Defence', description: 'Strengthening security with AI-driven threat detection systems.', path: '/industries/defence' },
    { icon: Lock, title: 'Cybersecurity', description: 'Protecting digital assets with intelligent threat detection.', path: '/industries/cyber-security' },
    { icon: Dna, title: 'Biotech', description: 'Accelerating drug discovery and genetic analysis through advanced AI.', path: '/industries/biotech' },
    { icon: ShoppingCart, title: 'Retail', description: 'Enhancing customer experience with personalized recommendations.', path: '/industries/retail' }
  ];

  const handleIndustryClick = (industry: any) => {
    if (industry.path) {
      onIndustryClick(industry.path);
    } else {
      setExpandedIndustry(expandedIndustry === industry.title ? null : industry.title);
    }
  };

  return (
    <section id="industries" className="py-32 bg-gradient-to-br from-sky-50/30 to-amber-50/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6 slide-up">
            AI Solutions Across Industries
          </h2>
          <p className="text-xl minimal-text max-w-3xl mx-auto slide-up stagger-1 font-light">
            Our cutting-edge AI technologies are transforming businesses across multiple sectors, delivering unprecedented value and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <div 
              key={industry.title}
              className={`silent-card p-8 subtle-hover slide-up stagger-${(index % 4) + 1} group cursor-pointer border-l-4 border-l-transparent hover:border-l-amber-400 transition-all duration-300`}
              onClick={() => handleIndustryClick(industry)}
            >
              <div className="flex justify-between items-start mb-6">
                <industry.icon className="w-8 h-8 text-sky-600 group-hover:text-amber-600 transition-colors duration-300" strokeWidth={1} />
                {industry.subdomains && (
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedIndustry === industry.title ? 'rotate-180' : ''}`} 
                    strokeWidth={1.5} 
                  />
                )}
              </div>
              <h3 className="text-xl font-light mb-4 golden-text">{industry.title}</h3>
              <p className="minimal-text text-sm leading-relaxed mb-4">{industry.description}</p>
              
              {expandedIndustry === industry.title && industry.subdomains && (
                <div className="mt-4 space-y-2 border-t pt-4 border-gray-100">
                  {industry.subdomains.map((subdomain) => (
                    <div 
                      key={subdomain}
                      className="text-sm text-gray-600 hover:text-amber-600 transition-colors duration-300 pl-4 border-l-2 border-transparent hover:border-amber-400"
                    >
                      {subdomain}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
