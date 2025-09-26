import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Mail, Phone, MapPin, GraduationCap, BookOpen, Users, Award, Zap, Target, Globe, TrendingUp, Code, Brain, Rocket, Shield } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);

  useEffect(() => {
    // Stagger animation of feature cards
    const timer = setTimeout(() => {
      setAnimatedCards([0, 1, 2, 3]);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/zerokost_29/', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Youtube, href: 'https://www.youtube.com/@ZerokostHealthcare', label: 'YouTube', color: 'hover:text-red-600' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-700' },
    { icon: Twitter, href: 'https://x.com/zerokost', label: 'Twitter', color: 'hover:text-blue-400' }
  ];

  const quickLinks = [
    { name: t('courses'), href: '#courses' },
    { name: t('about'), href: '#about' },
    { name: t('contact'), href: '#contact' },
    { name: t('blog'), href: '#blog' },
    { name: 'Careers', href: '#careers' },
    { name: 'Help Center', href: '#help' }
  ];

  const categories = [
    { name: t('artificialIntelligence'), href: '#ai' },
    { name: t('development'), href: '#development' },
    { name: t('graphicDesign'), href: '#design' },
    { name: t('marketing'), href: '#marketing' },
    { name: t('dataScience'), href: '#data-science' },
    { name: 'Business', href: '#business' }
  ];

  const learningFeatures = [
    { 
      icon: Brain, 
      title: 'AI-Powered Learning', 
      description: 'Personalized learning paths with cutting-edge AI technology',
      stats: '98% Success Rate',
      bgIcon: Code,
      delay: 0
    },
    { 
      icon: Rocket, 
      title: 'Industry Experts', 
      description: 'Learn from top professionals at Google, Microsoft, Meta & more',
      stats: '500+ Instructors',
      bgIcon: Target,
      delay: 200
    },
    { 
      icon: Globe, 
      title: 'Global Community', 
      description: 'Join 50,000+ learners from 150+ countries worldwide',
      stats: '24/7 Support',
      bgIcon: Users,
      delay: 400
    },
    { 
      icon: Shield, 
      title: 'Verified Certificates', 
      description: 'Blockchain-verified certificates recognized by 1000+ companies',
      stats: '100% Authentic',
      bgIcon: Award,
      delay: 600
    }
  ];

  // Floating tech icons for background animation
  const FloatingIcon = ({ icon: Icon, className, delay }: { icon: any, className: string, delay: number }) => (
    <div 
      className={`absolute opacity-10 ${className}`}
      style={{
        animation: `float 6s ease-in-out infinite ${delay}s, rotate 20s linear infinite`
      }}
    >
      <Icon className="w-8 h-8" />
    </div>
  );

  return (
    <footer className="bg-gray-900 text-white">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }

        @keyframes slide-in {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes tech-grid {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }

        .animated-bg {
          background: linear-gradient(45deg, #1e3a8a, #7c3aed, #1e40af, #8b5cf6);
          background-size: 400% 400%;
          animation: tech-grid 15s ease infinite;
        }

        .feature-card-enter {
          animation: slide-in 0.8s ease-out forwards;
        }

        .glow-effect {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Learning Features Section */}
      <div className="relative overflow-hidden animated-bg py-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Tech Icons */}
          <FloatingIcon icon={Code} className="top-10 left-10" delay={0} />
          <FloatingIcon icon={Brain} className="top-20 right-20" delay={1} />
          <FloatingIcon icon={Zap} className="bottom-32 left-1/4" delay={2} />
          <FloatingIcon icon={Target} className="top-1/3 right-1/3" delay={3} />
          <FloatingIcon icon={TrendingUp} className="bottom-20 right-10" delay={4} />
          <FloatingIcon icon={Globe} className="top-40 left-1/3" delay={5} />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              animation: 'tech-grid 20s linear infinite'
            }}
          ></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Rocket className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Next-Generation Learning Platform</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Why Choose Our Platform?
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Experience revolutionary online education powered by AI, backed by industry experts, 
              and trusted by professionals worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningFeatures.map((feature, index) => (
              <div 
                key={index} 
                className={`relative group ${animatedCards.includes(index) ? 'feature-card-enter' : 'opacity-0'}`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Background Tech Icon */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <feature.bgIcon className="w-16 h-16" />
                </div>
                
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 h-full border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 glow-effect group">
                  {/* Icon Container with Pulse Effect */}
                  <div className="relative bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-10 w-10 text-white group-hover:text-yellow-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl animate-pulse"></div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-yellow-100 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-blue-100 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Stats Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-400/30">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-100 text-sm font-semibold">{feature.stats}</span>
                  </div>
                  
                  {/* Hover Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">Active Learners</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">Expert Courses</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  150+
                </div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">Countries</div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  98%
                </div>
                <div className="text-blue-100 text-sm uppercase tracking-wide">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <img 
                  src="/Zerokost-LOGO 1.png" 
                  alt="Zerokost Logo" 
                  className="h-20 w-auto mr-3"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Zerokost education theme, built specifically for the education centers which is dedicated to teaching and involve learners.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">info@zerokost.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">+91 80085 02829</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="h-4 w-4 mr-3 text-blue-400" />
                  <span className="text-sm">SM Reddy Complex, 202, Capital Pk Rd, Cyber Hills Colony, VIP Hills, Jaihind Enclave, Madhapur, Hyderabad, Telangana 500081</span>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-gray-700`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={category.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Stay Updated</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Subscribe to our newsletter for the latest courses and updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                />
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Subscribe Now
                </button>
              </div>
              
              {/* Learning Stats */}
              <div className="mt-6 bg-gray-800 rounded-lg p-4">
                <h5 className="text-white font-medium mb-3">Learning Stats</h5>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Active Learners</span>
                    <span className="text-green-400 font-medium">50K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Courses Completed</span>
                    <span className="text-blue-400 font-medium">100K+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Success Rate</span>
                    <span className="text-purple-400 font-medium">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Zerokost. All rights reserved. Powered by Zerokost Technologies.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;