import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const AIGovLead: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-blue-100">
      <Navbar />
      <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="AI Governance Lead Background"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/40 to-blue-100/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-full bg-rose-200 px-6 py-3 text-rose-900 font-bold text-lg shadow-lg">AI Governance Lead</span>
          </div>
          <div className="mb-8 pt-10 text-center">
            <span className="inline-block rounded-full bg-rose-100 px-4 py-2 text-rose-700 font-semibold text-sm">Governance/Legal</span>
            <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Mumbai)</span>
          </div>
          <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <h2 className="text-xl font-bold text-rose-900 mb-2">Role Description</h2>
                <p className="text-gray-700 text-base">
                  AI Governance Leads manage the ethical, legal, and regulatory dimensions of enterprise AI systems. They establish policies for responsible AI usage and ensure compliance with frameworks like the EU AI Act and NIST AI RMF. They collaborate with legal, product, and engineering to embed fairness, accountability, and transparency in AI practices.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <h2 className="text-xl font-bold text-rose-900 mb-2">Skills/Qualifications Required</h2>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                  <li>Strong understanding of AI laws, model auditability, and governance best practices</li>
                  <li>Familiarity with explainability tools (SHAP, LIME), fairness toolkits (AIF360)</li>
                  <li>Experience conducting risk assessments and creating AI policy documents</li>
                  <li>Ability to lead internal audits and cross-functional governance initiatives</li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <h2 className="text-xl font-bold text-rose-900 mb-2">Roles and Responsibilities</h2>
                <ul className="list-disc pl-6 text-gray-700 text-base">
                  <li>Draft AI governance policies and acceptable use frameworks</li>
                  <li>Conduct regular model risk assessments and fairness audits</li>
                  <li>Maintain records for compliance and regulatory reporting</li>
                  <li>Review new AI use cases to assess potential ethical and legal risks</li>
                  <li>Educate stakeholders on AI risks, biases, and transparency requirements</li>
                </ul>
              </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AIGovLead;
