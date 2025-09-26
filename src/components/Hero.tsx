import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation particles
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      type: 'book' | 'code' | 'lightbulb' | 'atom';

      constructor(canvasWidth: number, canvasHeight: number) {
        this.type = ['book', 'code', 'lightbulb', 'atom'][Math.floor(Math.random() * 4)] as any;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 25 + 10;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, ${Math.random() * 100 + 200}, ${Math.random() * 0.3 + 0.1})`;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvasWidth) this.x = 0;
        if (this.x < 0) this.x = canvasWidth;
        if (this.y > canvasHeight) this.y = 0;
        if (this.y < 0) this.y = canvasHeight;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = this.color;
        
        switch (this.type) {
          case 'book':
            // Book icon
            ctx.fillRect(this.x - this.size/2, this.y - this.size/3, this.size, this.size/1.5);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            for (let i = 1; i <= 3; i++) {
              ctx.beginPath();
              ctx.moveTo(this.x - this.size/2 + 2, this.y - this.size/3 + (this.size/1.5)/4 * i);
              ctx.lineTo(this.x + this.size/2 - 2, this.y - this.size/3 + (this.size/1.5)/4 * i);
              ctx.stroke();
            }
            break;
          
          case 'code':
            // Code brackets
            ctx.font = `${this.size}px Arial`;
            ctx.fillText('{}', this.x - this.size/2, this.y + this.size/3);
            break;
          
          case 'lightbulb':
            // Lightbulb
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.moveTo(this.x, this.y - this.size/2);
            ctx.lineTo(this.x - this.size/4, this.y + this.size/4);
            ctx.lineTo(this.x + this.size/4, this.y + this.size/4);
            ctx.closePath();
            ctx.fill();
            break;
          
          case 'atom':
            // Atom symbol
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size/2, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.size/2, this.size/4, Math.PI/4, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.ellipse(this.x, this.y, this.size/2, this.size/4, -Math.PI/4, 0, Math.PI * 2);
            ctx.stroke();
            break;
        }
        
        ctx.restore();
      }
    }

    const particles: Particle[] = [];
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width, canvas.height));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connection lines between particles
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 relative overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 animate-float">
        <div className="w-8 h-8 bg-blue-200 rounded-full opacity-40"></div>
      </div>
      
      <div className="absolute top-1/4 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-6 h-6 bg-purple-200 rounded-full opacity-30"></div>
      </div>
      
      <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-10 h-10 bg-green-200 rounded-full opacity-20"></div>
      </div>
      
      <div className="absolute top-1/2 right-1/3 animate-bounce">
        <div className="w-4 h-4 bg-yellow-200 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Student Image */}
          <div className="relative">
            <div className="relative z-10 animate-fade-in-up">
              <img
                src="/hero-image.webp"
                alt="Student learning"
                className="rounded-2xl shadow-2xl w-full h-[800px] object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating stats */}
            <div className="absolute top-8 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-bounce hover:animate-none cursor-pointer transform hover:scale-110 transition-transform">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-600 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">1000+</p>
                  <p className="text-xs text-gray-600">Courses</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 animate-bounce hover:animate-none cursor-pointer transform hover:scale-110 transition-transform" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">50k+</p>
                  <p className="text-xs text-gray-600">Students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-8">
            <div className="mb-6 animate-fade-in-right">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium transform hover:scale-105 transition-transform">
                <Award className="h-4 w-4 animate-spin" style={{ animationDuration: '3s' }} />
                #1 Learning Platform
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
              {t('heroTitle') || 'Transform Your Future with Expert-Led Courses'}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t('heroSubtitle') || 'Join thousands of students worldwide in mastering new skills, advancing careers, and unlocking potential through our comprehensive online learning platform.'}
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-blue-600 mb-1 animate-count">1000+</div>
                <div className="text-sm text-gray-600">Expert Courses</div>
              </div>
              <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-1 animate-count" style={{ animationDelay: '0.1s' }}>50k+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center p-4 transform hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-green-600 mb-1 animate-count" style={{ animationDelay: '0.2s' }}>98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
                {t('getStarted') || 'Get Started Today'}
                <ArrowRight className="h-5 w-5 animate-bounce-x" />
              </button>
              <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 hover:shadow-lg">
                <Play className="h-5 w-5 animate-pulse" />
                {t('learnMore') || 'Watch Demo'}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-6 border-t border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <p className="text-sm text-gray-500 mb-3">Trusted by students from:</p>
              <div className="flex flex-wrap gap-6 opacity-60">
                {['Harvard', 'Stanford', 'MIT', 'Oxford'].map((uni, index) => (
                  <span 
                    key={uni}
                    className="text-gray-400 font-semibold transform hover:scale-110 transition-transform cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    {uni}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        
        @keyframes count {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }
        
        .animate-count {
          animation: count 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;