import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const EnterpriseAIProductManager: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-amber-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Enterprise AI Product Manager Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-amber-200 px-6 py-3 text-amber-800 font-bold text-lg shadow-lg">Enterprise AI Product Manager</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-amber-800 font-semibold text-sm">Product</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Bengaluru)</span>
        </div>
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-amber-800 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                Enterprise AI Product Managers define and lead the development of AI-powered features and tools that solve key business problems. They work closely with cross-functional teams to translate AI capabilities into scalable products with measurable impact.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-amber-800 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Experience with AI product lifecycle, user research, and data-backed feature prioritization</li>
                <li>Knowledge of ML models, APIs, metrics (precision, latency, hallucination rate)</li>
                <li>Strong communication, Agile planning, and stakeholder management skills</li>
                <li>Familiarity with tools like Jira, Confluence, Figma, and Mixpanel</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-amber-800 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Define AI product roadmap and OKRs in collaboration with leadership</li>
                <li>Translate technical AI concepts into user-centered product requirements</li>
                <li>Align data science, engineering, and design teams on feature delivery</li>
                <li>Track product performance, user adoption, and model effectiveness metrics</li>
                <li>Drive go-to-market strategy and cross-functional execution for AI launches</li>
              </ul>
            </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default EnterpriseAIProductManager;
