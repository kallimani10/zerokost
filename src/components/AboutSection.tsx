
import React from 'react';
import { Users, Award, Globe, Rocket } from 'lucide-react';

const AboutSection = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Zerokost Healthcare was founded with a vision to democratize AI across industries'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first healthcare AI diagnostic tools, helping hospitals improve patient outcomes'
    },
    {
      year: '2022',
      title: 'Industry Expansion',
      description: 'Extended our AI solutions to finance, defence, and biotech sectors'
    },
    {
      year: '2023',
      title: 'Global Recognition',
      description: 'Received multiple awards for AI innovation and ethical technology development'
    },
    {
      year: '2024',
      title: 'Next-Gen AI',
      description: 'Pioneering breakthrough AI technologies for agriculture, retail, and cybersecurity'
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'AI Experts' },
    { icon: Award, value: '50+', label: 'Industry Awards' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Rocket, value: '1000+', label: 'Projects Delivered' }
  ];

  return (
    <section id="about" className="py-20 relative particle-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-fade-in-up">
            About Zerokost Healthcare
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Leading the AI revolution with cutting-edge solutions that transform industries and empower businesses worldwide.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-effect rounded-lg p-6 text-center hover:ai-glow transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 ai-glow" />
              <div className="text-3xl font-bold text-foreground mb-2 neon-text">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="glass-effect rounded-lg p-8 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To democratize artificial intelligence by making advanced AI solutions accessible, ethical, and transformative for businesses across all industries. We believe AI should enhance human potential, not replace it.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary ai-glow"></div>
                <span className="text-foreground">Ethical AI development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent ai-glow"></div>
                <span className="text-foreground">Human-centric design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary ai-glow"></div>
                <span className="text-foreground">Sustainable innovation</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-lg p-8 animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To be the global leader in AI innovation, creating a future where intelligent systems seamlessly integrate with human expertise to solve the world's most complex challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary ai-glow"></div>
                <span className="text-foreground">Global AI leadership</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-accent ai-glow"></div>
                <span className="text-foreground">Transformative solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-secondary ai-glow"></div>
                <span className="text-foreground">Positive global impact</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default AboutSection;
