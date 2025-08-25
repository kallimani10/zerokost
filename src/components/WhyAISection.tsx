
import React from 'react';
import { Zap, Target, TrendingUp, Clock, Shield, DollarSign } from 'lucide-react';

const WhyAISection = () => {
  const benefits = [
    { icon: Zap, title: 'Enhanced Efficiency', description: 'Automate complex processes and reduce operational overhead', stat: '80%' },
    { icon: Target, title: 'Unmatched Accuracy', description: 'Achieve precision levels that surpass human capabilities', stat: '99.9%' },
    { icon: TrendingUp, title: 'Predictive Insights', description: 'Forecast trends and patterns with advanced algorithms', stat: '95%' },
    { icon: Clock, title: 'Real-time Processing', description: 'Process millions of data points instantaneously', stat: '<1ms' },
    { icon: Shield, title: 'Enhanced Security', description: 'Proactive threat detection and automated response', stat: '24/7' },
    { icon: DollarSign, title: 'Cost Optimization', description: 'Reduce operational costs while maximizing ROI', stat: '60%' }
  ];

  return (
    <section id="why-ai" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-heading mb-6 slide-up">
            Why Choose AI?
          </h2>
          <p className="text-xl minimal-text max-w-3xl mx-auto slide-up stagger-1 font-light">
            Artificial Intelligence isn't just the future – it's the competitive advantage your business needs today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`silent-card p-8 subtle-hover slide-up stagger-${(index % 3) + 1}`}
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-gray-600" strokeWidth={1} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-light mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="minimal-text mb-4 text-sm leading-relaxed">{benefit.description}</p>
                  <span className="text-2xl font-light text-gray-900">{benefit.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="silent-card p-12 max-w-4xl mx-auto slide-up stagger-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light mb-4 text-gray-900">The AI Advantage</h3>
            <p className="minimal-text">See how AI transforms business operations across key metrics</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-lg font-light text-gray-900">10x</span>
              </div>
              <h4 className="font-light text-gray-900 mb-2">Faster Processing</h4>
              <p className="text-sm minimal-text">Than traditional methods</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-lg font-light text-gray-900">50%</span>
              </div>
              <h4 className="font-light text-gray-900 mb-2">Error Reduction</h4>
              <p className="text-sm minimal-text">Compared to manual processes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-lg font-light text-gray-900">24/7</span>
              </div>
              <h4 className="font-light text-gray-900 mb-2">Availability</h4>
              <p className="text-sm minimal-text">Continuous operation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-lg font-light text-gray-900">∞</span>
              </div>
              <h4 className="font-light text-gray-900 mb-2">Scalability</h4>
              <p className="text-sm minimal-text">Unlimited growth potential</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
