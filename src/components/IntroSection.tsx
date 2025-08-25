
import React from 'react';
import { Brain, Zap, Target, Globe } from 'lucide-react';

const IntroSection = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI',
      description: 'Cutting-edge machine learning algorithms'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time processing and analysis'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Accurate predictions and insights'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Solutions that scale worldwide'
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-24">
            <div className="slide-up">
              <h2 className="section-heading mb-8">
                Pioneering the Future of AI Innovation
              </h2>
              <p className="text-xl minimal-text mb-8 leading-relaxed font-light">
                At Zerokost Healthcare Pvt Ltd, we craft intelligent solutions that transform entire industries. Our mission is to bridge the gap between cutting-edge artificial intelligence and real-world applications.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="minimal-text">Industry-leading AI research and development</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="minimal-text">Custom solutions for complex business challenges</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="minimal-text">Trusted by global enterprises and institutions</span>
                </div>
              </div>
            </div>

            <div className="slide-up stagger-2">
              <div className="relative">
                <div className="w-96 h-96 mx-auto rounded-full border border-gray-200 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full border border-gray-100 flex items-center justify-center">
                    <Brain className="w-32 h-32 text-gray-400" strokeWidth={0.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`silent-card p-8 subtle-hover slide-up stagger-${index + 1}`}
              >
                <feature.icon className="w-8 h-8 text-gray-600 mb-6" strokeWidth={1} />
                <h3 className="text-xl font-light mb-3 text-gray-900">{feature.title}</h3>
                <p className="minimal-text text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
