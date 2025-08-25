
import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Solutions': [
      { name: 'Clinical Decision Support', path: '/solutions' },
      { name: 'Remote Patient Monitoring', path: '/solutions' },
      { name: 'Medical Billing & Claims', path: '/solutions' },
      { name: 'Lab Integration Services', path: '/solutions' },
      { name: 'AI Chatbot', path: '/solutions' }
    ],
    'Industries': [
      { name: 'Healthcare', path: '/industries/healthcare' },
      { name: 'Finance', path: '/industries/finance' },
      { name: 'Biotech', path: '/industries/biotech' },
      { name: 'Defence', path: '/industries/defence' },
      { name: 'Cybersecurity', path: '/industries/cybersecurity' },
      { name: 'Agriculture', path: '/industries/agriculture' },
      { name: 'Pharma', path: '/industries/pharma' },
      { name: 'Manufacturing', path: '/industries/manufacturing' }
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Insights', path: '/insights' },
      { name: 'Contact', path: '/contact' }
    ],
    'Resources': [
      { name: 'Documentation', path: '#' },
      { name: 'Case Studies', path: '#' },
      { name: 'White Papers', path: '#' },
      { name: 'Blog', path: '#' },
      { name: 'Support', path: '#' }
    ]
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link to="/" className="text-2xl font-light text-gray-900 hover:text-gray-700 transition-colors duration-300">
                Zerokost Healthcare
              </Link>
            </div>
            <p className="minimal-text mb-8 leading-relaxed max-w-md">
              Pioneering the future of AI innovation across industries. We transform businesses with cutting-edge artificial intelligence solutions.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gray-600" strokeWidth={1} />
                <a href="mailto:info@zerokost.com" className="minimal-text hover:text-gray-900 transition-colors duration-300">
                  info@zerokost.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gray-600" strokeWidth={1} />
                <a href="tel:+917981643250" className="minimal-text hover:text-gray-900 transition-colors duration-300">
                  +91 7981643250
                </a>
              </div>
              <div className="flex items-center space-x-5">
                <MapPin className="w-4 h-4 text-gray-600" strokeWidth={1} />
                <span className="minimal-text"><h1 className="text-black">Registered Office</h1>SSH, Gokul Plot 84 & 85, Near Prajay Megapolis, KPHB 9th Phase, Hyderabad,Telangana-500085
                </span>
                <span className="minimal-text"><h1 className="text-black">Development Office</h1>Flat No : 202 SM Reddy Complex, Capital Pk Rd,Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081
                </span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-light text-gray-900 mb-6">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="minimal-text hover:text-gray-900 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="silent-card p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-gray-900 mb-2">Stay Updated</h3>
            <p className="minimal-text">Get the latest AI insights and industry updates</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-200 rounded-full px-6 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition-colors duration-300"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-light transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="minimal-text mb-4 md:mb-0 text-sm">
            © 2024 Zerokost Healthcare Pvt Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/privacy" className="minimal-text hover:text-gray-900 transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="minimal-text hover:text-gray-900 transition-colors text-sm">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="border border-gray-200 p-2 rounded-full hover:bg-gray-50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4 text-gray-600" strokeWidth={1} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
