import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const MLOpsEngineer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      <Navbar />
      <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="MLOps Engineer Background"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-100/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/70 shadow-2xl p-10 backdrop-blur z-10"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-full bg-indigo-200 px-6 py-3 text-indigo-900 font-bold text-lg shadow-lg">MLOps Engineer</span>
          </div>
          <div className="mb-8 pt-10 text-center">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-semibold text-sm">Engineering</span>
            <span className="ml-3 text-xs text-gray-500">Full-time | Remote</span>
          </div>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                MLOps Engineers are responsible for automating and operationalizing the lifecycle of machine learning models. They enable continuous integration, deployment, monitoring, and governance of AI systems at scale. MLOps is a critical function that ensures model reproducibility, reliability, and compliance in production environments.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Proficiency in CI/CD tools (GitHub Actions, Jenkins), Docker, Kubernetes, and MLflow</li>
                <li>Strong scripting skills in Python and Bash</li>
                <li>Familiar with feature stores, model registries, and experiment tracking</li>
                <li>Experience with cloud ML stacks: AWS SageMaker, GCP Vertex AI, Azure ML</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Build end-to-end pipelines for data ingestion, training, validation, and deployment</li>
                <li>Maintain experiment tracking and model metadata using MLflow or similar</li>
                <li>Automate performance monitoring and alerts for model drift or data skew</li>
                <li>Establish rollback and version control protocols for deployed models</li>
                <li>Collaborate with infra, DevOps, and data teams to scale AI workloads securely</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default MLOpsEngineer;
