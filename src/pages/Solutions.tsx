import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Solutions = () => {
  const location = useLocation();

  const solutions = [
    {
      id: 'clinical-decision',
      title: 'Clinical Decision Support',
      description: 'Advanced clinical decision support system powered by AI for accurate diagnosis and treatment planning.',
      features: [
        'AI-Powered Diagnosis',
        'Treatment Recommendations',
        'Clinical Guidelines Integration',
        'Risk Assessment'
      ],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
    },
    {
      id: 'remote-monitoring',
      title: 'Remote Patient Monitoring',
      description: 'Comprehensive remote monitoring solutions for continuous patient care and early intervention.',
      features: [
        'Real-time Vital Monitoring',
        'Alert System',
        'Patient Data Analytics',
        'Mobile Health Integration'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
    },
    {
      id: 'medical-billing',
      title: 'Medical Billing & Claims',
      description: 'Streamlined medical billing and claims processing system for healthcare providers.',
      features: [
        'Automated Claims Processing',
        'Revenue Cycle Management',
        'Insurance Verification',
        'Payment Processing'
      ],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
    },
    {
      id: 'lab-integration',
      title: 'Lab Integration Services',
      description: 'Seamless integration solutions for laboratory systems and healthcare providers.',
      features: [
        'Lab Results Management',
        'Order Processing',
        'Data Synchronization',
        'Report Generation'
      ],
      image: 'https://i.ytimg.com/vi/8CsnFL5ir0Q/maxresdefault.jpg'
    },
    {
      id: 'appointment',
      title: 'Appointment Scheduling System',
      description: 'Intelligent appointment scheduling system for healthcare facilities.',
      features: [
        'Online Booking',
        'Calendar Management',
        'Automated Reminders',
        'Resource Allocation'
      ],
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot for Patient Queries',
      description: 'Intelligent chatbot system for handling patient inquiries and support.',
      features: [
        'Natural Language Processing',
        '24/7 Support',
        'Multi-language Support',
        'Integration with EHR'
      ],
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80'
    },
    {
      id: 'eurva',
      title: 'Eruvaaka',
      description: 'Advanced AI-powered solution for translation the magazine articles into indian regional, enhancing accessibility and understanding.',
      features: [
        'AI Analytics',
        'Healthcare Automation',
        'Patient Engagement',
        'Clinical Workflow'
      ],
      image: 'https://eruvaaka.com/wp-content/uploads/2023/10/Eruvaaka-Logo.png'
    },
    {
      id: 'ai-translator',
      title: 'AI Translator',
      description: 'Real-time medical language translation powered by artificial intelligence.',
      features: [
        'Medical Terminology Translation',
        'Multi-language Support',
        'Real-time Translation',
        'Context-aware Translation'
      ],
      image: 'https://softwareaccountant.com/wp-content/uploads/2023/05/Best-AI-Translation-Tools.jpg'
    }
  ];

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-light mb-6">Our Solutions</h1>
              <p className="text-xl opacity-90">
                Explore our cutting-edge technology solutions designed to drive innovation and transform healthcare delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <section 
              key={solution.id} 
              id={solution.id}
              className="scroll-mt-24"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${solution.image})` }}
                />
                <div className="p-8">
                  <h2 className="text-2xl font-light mb-4 text-blue-900">
                    {solution.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="space-y-3">
                    {solution.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-blue-50 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors duration-300"
                      >
                        <p className="text-blue-900">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;