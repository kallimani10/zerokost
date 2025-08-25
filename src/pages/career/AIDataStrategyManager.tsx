import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const AIDataStrategyManager: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="AI Data Strategy Manager Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-sky-200 px-6 py-3 text-sky-900 font-bold text-lg shadow-lg">AI Data Strategy Manager</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-sky-100 px-4 py-2 text-sky-700 font-semibold text-sm">Consulting</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Gurugram)</span>
        </div>
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-sky-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                AI Data Strategy Managers are responsible for planning and executing the data lifecycle strategy needed to support scalable and reliable AI systems. They ensure data availability, integrity, quality, and governance across the AI training pipeline.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-sky-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Strong knowledge of data lakes, data warehousing, and pipeline orchestration</li>
                <li>Familiarity with governance frameworks, data lineage, and cataloging tools</li>
                <li>Proficiency in SQL, Python, and tools like Airflow, dbt, Apache Beam</li>
                <li>Understanding of annotation, labeling workflows, and ML data requirements</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-sky-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Define data readiness and annotation standards for AI model training</li>
                <li>Lead initiatives to build automated ingestion, validation, and transformation pipelines</li>
                <li>Monitor data drift and model training dataset updates</li>
                <li>Align data architecture with MLOps practices for reproducibility and compliance</li>
                <li>Collaborate across engineering, compliance, and AI teams to streamline data ops</li>
              </ul>
            </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AIDataStrategyManager;
