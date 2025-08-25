import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80";

const QuantumAIMLEngineer: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Quantum AI/ML Engineer Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-indigo-200 px-6 py-3 text-indigo-900 font-bold text-lg shadow-lg">Quantum AI/ML Engineer</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-semibold text-sm">Engineering</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Bengaluru)</span>
        </div>
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Role Description</h2>
            <p className="text-gray-700 text-base">
              Quantum AI/ML Engineers are at the forefront of combining quantum computing with machine learning to solve problems in optimization, simulation, and cryptography. They work with quantum circuits and hybrid classical-quantum systems to enhance ML algorithm efficiency.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Skills/Qualifications Required</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Solid background in quantum mechanics, linear algebra, and classical ML</li>
              <li>Experience with quantum programming frameworks (Qiskit, PennyLane, TensorFlow Quantum)</li>
              <li>Familiarity with hybrid quantum-classical models (QAOA, VQE)</li>
              <li>Understanding of noise models, decoherence, and circuit optimization</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Roles and Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Design quantum circuits for data encoding, model training, and inference</li>
              <li>Develop hybrid pipelines where classical ML components interface with quantum backends</li>
              <li>Simulate quantum models and evaluate performance compared to classical baselines</li>
              <li>Collaborate with physics and research teams to push boundaries in quantum ML applications</li>
              <li>Monitor and adapt algorithms to evolving quantum hardware capabilities (IBM Q, IonQ, Rigetti)</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default QuantumAIMLEngineer;
