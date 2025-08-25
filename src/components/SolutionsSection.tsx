
import React, { useState } from 'react';
import { Brain, Database, Eye, Cpu, Network, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  const [activeCard, setActiveCard] = useState(0);

  const solutions = [
    {
      icon: Brain,
      title: 'Clinical Decision Support',
      subtitle: 'AI-Powered Healthcare',
      description: 'Advanced clinical decision support system powered by AI for accurate diagnosis and treatment planning.',
      features: ['AI-Powered Diagnosis', 'Treatment Recommendations', 'Clinical Guidelines Integration', 'Risk Assessment'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: Eye,
      title: 'Remote Patient Monitoring',
      subtitle: 'Continuous Care',
      description: 'Comprehensive remote monitoring solutions for continuous patient care and early intervention.',
      features: ['Real-time Vital Monitoring', 'Alert System', 'Patient Data Analytics', 'Mobile Health Integration'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Database,
      title: 'Medical Billing & Claims',
      subtitle: 'Streamlined Processing',
      description: 'Streamlined medical billing and claims processing system for healthcare providers.',
      features: ['Automated Claims Processing', 'Revenue Cycle Management', 'Insurance Verification', 'Payment Processing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Network,
      title: 'Lab Integration Services',
      subtitle: 'Seamless Integration',
      description: 'Seamless integration solutions for laboratory systems and healthcare providers.',
      features: ['Lab Results Management', 'Order Processing', 'Data Synchronization', 'Report Generation'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Cpu,
      title: 'Appointment Scheduling',
      subtitle: 'Smart Scheduling',
      description: 'Intelligent appointment scheduling system for healthcare facilities.',
      features: ['Online Booking', 'Calendar Management', 'Automated Reminders', 'Resource Allocation'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Lightbulb,
      title: 'AI Chatbot',
      subtitle: 'Intelligent Support',
      description: 'Intelligent chatbot system for handling patient inquiries and support.',
      features: ['Natural Language Processing', '24/7 Support', 'Multi-language Support', 'Integration with EHR'],
      color: 'from-yellow-500 to-orange-500'
    }
    
  ];

  return (
    <section id="solutions" className="py-20 relative particle-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            Our AI Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Comprehensive AI solutions designed to solve complex business challenges and drive innovation across industries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className={`group relative glass-effect rounded-lg overflow-hidden transition-all duration-500 cursor-pointer animate-fade-in-up ${
                activeCard === index ? 'ai-glow scale-105' : 'hover:ai-glow'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="mb-6">
                  <solution.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300 ai-glow" />
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">{solution.title}</h3>
                  <p className="text-primary font-medium">{solution.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary ai-glow"></div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary border border-primary/30 px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                  Learn More
                </button>
              </div>

              {/* Flip Effect Back */}
              <div className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <div className="text-center p-6">
                  <solution.icon className="w-16 h-16 text-primary mx-auto mb-4 ai-glow" />
                  <h4 className="text-xl font-semibold text-white mb-4 neon-text">{solution.title}</h4>
                  <p className="text-gray-300 mb-6">Ready to implement this solution?</p>
                  <Link to="/solutions" className="bg-primary hover:bg-primary/80 text-primary-foreground px-6 py-3 rounded-lg transition-all duration-300 ai-glow">
                    Get Started</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
