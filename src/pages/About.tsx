import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kumar Thirukkovalur',
      role: 'Executive Director & CEO',
      image: '/Ashwin.png',
      bio: '12+ years in Pharma & IT, leading R\&D, marketing, and strategic partnerships, with 2 patents and 20+ publications. Pursuing a DBA in Generative AI with extensive certifications in AI, cloud, and quality systems.'
    },
    {
      name: 'Ananya Parikibandla',
      role: 'Executive Director & CQO',
      image: '/Ananya.png',
      bio: 'Master of Pharmacy with 12+ years in Pharma & IT, specializing in quality, regulatory, and formulation development, with 6+ publications and key certifications. Skilled in strategic leadership and team management.'
    }
  ];


  // Card data for both rows, with backgrounds, icons, and descriptions
  const cards = [
    {
      title: 'Completed Projects',
      number: '300+',
      bg: 'bg-blue-100',
      grid: 'bg-[url("/grid-blue.svg")]',
     icon: (
  <svg
    width="80"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563EB"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9v3l2 1" />
  </svg>
),

      arrow: true,
      bullets: [
        'Medvoice(Translation, Transcription)', 
        'CRM Agent(5+)', 
        'Avatar (learning platform)',  
        'LMS (Semiconductor, AI, UPSE)', 
        'Stock market (Predective, Sentimental)',
        'Mock interview',  
        'Braille translation' 
      ]
    },
    {
      title: 'On Going Projects',
      number: '120+',
      bg: 'bg-blue-100',
      grid: 'bg-[url("/grid-blue.svg")]',
     icon: (
  <svg
    width="80"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563EB"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 17.58A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 4 16.25" />
    <polyline points="8 16 10 18 8 20" />
    <polyline points="16 16 14 18 16 20" />
  </svg>
),

      arrow: true,
      bullets: [
        'NMRI', 
'RCM', 
'Defence', 
'LLM', 
'MCP', 
'Eruvaaka', 
'Payment gate', 
'Airlines', 
'Veeva vault', 
'QA regulatory', 
'RFE AP govt', 
'Cell Therapy',
'Autism SAP'  
      ]
    },
    {
      title: 'Upcoming Projects',
      number: '80+',
      bg: 'bg-blue-100',
      grid: 'bg-[url("/grid-blue.svg")]',
     icon: (
  <svg
    width="80"
    height="60"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#2563EB"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1a7 7 0 0 0-4-12z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 9V6M15 12h3M9 12H6" />
  </svg>
),

      arrow: true,
      bullets: [
        '120+ projects in active development',
        'Cutting-edge fintech and insurance AI',
        'Collaborating with global partners'
      ]
    }
  ];

    // Second row: 3 cards for Complete Projects
    const completeProjects = [
      { number: '300+', label: 'Healthcare Projects' },
      { number: '120+', label: 'Finance Projects' },
      { number: '80+', label: 'AgriTech Projects' }
    ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-light mb-6">About Us</h1>
              <p className="text-xl opacity-90">
                Pioneering AI solutions for a better tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <AnimatePresence>
        <section className="container mx-auto px-6 py-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light text-blue-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Zerokost, we're dedicated to revolutionizing industries through innovative AI solutions. 
              Our mission is to make advanced technology accessible and affordable for businesses of all sizes, 
              helping them achieve their digital transformation goals efficiently and effectively.
            </p>
          </motion.div>
        </section>
      </AnimatePresence>

      {/* Blue Ribbon Section */}
      <section className="w-full bg-[#1e388c] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">100+</div>
              <div className="text-lg text-blue-100">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-lg text-blue-100">AI Solutions Deployed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-lg text-blue-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-lg text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>


      {/* Cards Section (Achievements + Complete Projects) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <div
                key={card.title}
                className={`relative rounded-xl p-8 flex flex-col justify-between min-h-[320px] ${card.bg} ${card.grid} shadow group transition-transform hover:-translate-y-1`}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-blue-900 font-serif">{card.title}</h3>
                  <div className="w-full flex justify-center mb-4">{card.icon}</div>
                  <p className="text-gray-700 text-base mb-8 min-h-[48px]">{card.description}</p>
                  <ul className="list-disc list-inside text-blue-800 text-left mt-2">
                    {card.bullets && card.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                {card.arrow && (
                  <div className="absolute bottom-4 right-4 text-blue-900 group-hover:translate-x-1 transition-transform">
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-light text-blue-900 mb-12 text-center">Our Leadership Team</h2>
        <motion.div 
  className="flex justify-center gap-10 flex-wrap"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {teamMembers.map((member, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-[400px] h-[500px]"
    >
      <div 
        className="h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${member.image})` }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">{member.name}</h3>
        <p className="text-blue-600 mb-4">{member.role}</p>
        <p className="text-gray-600">{member.bio}</p>
      </div>
    </motion.div>
  ))}
</motion.div>

      </section>

      <Footer />
    </div>
  );
};

export default About;