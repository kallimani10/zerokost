import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const AIComplianceLegalExpert: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-rose-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="AI Compliance & Legal Expert Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-rose-200 px-6 py-3 text-rose-900 font-bold text-lg shadow-lg">AI Compliance & Legal Expert</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-2 text-rose-700 font-semibold text-sm">Governance/Legal</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Remote</span>
        </div>
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-rose-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                AI Compliance & Legal Experts ensure that AI systems operate within legal and regulatory boundaries. They bridge the gap between AI capabilities and legal constraints, especially regarding transparency, fairness, and responsible deployment.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-rose-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Strong background in data protection laws (GDPR, DPDPA), IP, and emerging AI regulations (EU AI Act)</li>
                <li>Familiarity with AI model audit tools, transparency documentation, and compliance workflows</li>
                <li>Ability to write legal position papers, risk registers, and policy guidelines for AI use</li>
                <li>Experience advising engineering/product teams on legal implications of AI features</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-rose-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Draft internal policies for ethical AI development and deployment</li>
                <li>Conduct legal reviews and compliance audits for AI features and datasets</li>
                <li>Stay updated on global regulatory changes and interpret impact on AI products</li>
                <li>Liaise with external regulators and legal teams during audits or disclosures</li>
                <li>Educate stakeholders on responsible AI, model documentation, and LLM risks</li>
              </ul>
            </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AIComplianceLegalExpert;
