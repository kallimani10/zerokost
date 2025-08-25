import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101178521-c52471f9b7c7?auto=format&fit=crop&w=1200&q=80";

const AISecurityAnalyst: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-rose-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="AI Security Analyst Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-rose-200 px-6 py-3 text-rose-900 font-bold text-lg shadow-lg">AI Security Analyst</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-rose-100 px-4 py-2 text-rose-700 font-semibold text-sm">Governance/Legal</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Remote</span>
        </div>
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-rose-900 mb-2">Role Description</h2>
            <p className="text-gray-700 text-base">
              AI Security Analysts ensure the safety, reliability, and privacy of AI systems. They assess threats specific to AI/ML workflows, including adversarial inputs, model theft, and prompt injection. Their role spans proactive risk mitigation and reactive threat response across AI applications.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold text-rose-900 mb-2">Skills/Qualifications Required</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Knowledge of traditional cybersecurity fundamentals (network, API, auth)</li>
              <li>Familiarity with AI-specific threats (prompt injection, data poisoning, model inversion)</li>
              <li>Experience with monitoring tools, secure LLM APIs, and red teaming techniques</li>
              <li>Comfort with risk frameworks like NIST AI RMF and OWASP LLM Top 10</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl font-bold text-rose-900 mb-2">Roles and Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Monitor AI APIs and endpoints for anomalous behaviors and misuse</li>
              <li>Test models for adversarial vulnerabilities and data leakage risks</li>
              <li>Work with GenAI developers to implement safe prompting protocols and guardrails</li>
              <li>Draft security policies and incident response playbooks specific to LLMs and AI platforms</li>
              <li>Conduct AI red teaming exercises and simulations of threat scenarios</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AISecurityAnalyst;
