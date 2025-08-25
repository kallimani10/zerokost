import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const AgenticAIPlatformEngineer: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Agentic AI Platform Engineer Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-indigo-200 px-6 py-3 text-indigo-900 font-bold text-lg shadow-lg">Agentic AI Platform Engineer</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-semibold text-sm">Engineering</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Remote</span>
        </div>
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                Agentic AI Platform Engineers develop intelligent multi-agent systems where specialized LLM-based agents collaborate to complete complex tasks. These engineers architect and optimize agent communication, memory persistence, and action orchestration across workflows that include tool use, RAG, and planning.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Proficiency in Python and agent orchestration libraries (LangGraph, AutoGen, CrewAI)</li>
                <li>Understanding of inter-agent protocols, memory design, and action planning</li>
                <li>Experience with API integration, tool chains, and LangChain ecosystem</li>
                <li>Familiarity with LLM behavior and safe interaction handling</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Build, deploy, and monitor agentic platforms for real-time coordination</li>
                <li>Design stateful agents with long-term memory and contextual reasoning</li>
                <li>Define custom tools, toolchains, and fallback strategies for agent tasks</li>
                <li>Evaluate agent output quality and improve collaboration logic</li>
                <li>Integrate third-party systems, APIs, and vector DBs with agent workflows</li>
              </ul>
            </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AgenticAIPlatformEngineer;
