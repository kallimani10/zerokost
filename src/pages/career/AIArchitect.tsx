import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "/ca01.jpg"; // AI-themed Unsplash image

const AIArchitect: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      <Navbar />
      {/* Main content with Unsplash AI background image and overlay */}
      <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="AI Architect Background"
            className="w-full h-full object-cover opacity-100"
            style={{ filter: 'blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/5 to-indigo-100/5" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/70 shadow-2xl p-10 backdrop-blur z-10"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-full bg-blue-200 px-6 py-3 text-blue-900 font-bold text-lg shadow-lg">AI Architect</span>
          </div>
          <div className="mb-8 pt-10 text-center">
            <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold text-sm">Infrastructure</span>
            <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Bengaluru)</span>
          </div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                AI Architects lead the design and implementation of scalable and secure AI systems for enterprise-scale applications. They create architectural blueprints for AI/ML deployment pipelines, model training infrastructure, and real-time inference systems. They work cross-functionally with data engineers, DevOps, product, and data science teams to ensure AI solutions are robust, cost-effective, and compliant.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Strong foundation in system design, distributed computing, and software engineering principles</li>
                <li>Expertise in MLOps tools (Kubeflow, MLflow), model serving (Triton, TorchServe), and orchestration frameworks</li>
                <li>Proficiency with cloud platforms (AWS/GCP/Azure) and infrastructure-as-code (Terraform, CloudFormation)</li>
                <li>Understanding of data pipeline design, GPU infrastructure, and containerization technologies</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-xl font-bold text-blue-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Design and oversee AI architecture for scalable model development and deployment</li>
                <li>Collaborate with product managers and data scientists to translate business problems into scalable AI solutions</li>
                <li>Evaluate and implement GPU infrastructure (on-prem/cloud) for training/inference</li>
                <li>Ensure compliance with data governance, audit trails, and explainability standards</li>
                <li>Lead AI infrastructure modernization and cost optimization efforts</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Footer remains default, outside background image/overlay */}
      <Footer />
    </div>
  );
};

export default AIArchitect;
