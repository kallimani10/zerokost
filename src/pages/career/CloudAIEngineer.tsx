import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

const CloudAIEngineer: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Cloud AI Engineer Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-emerald-200 px-6 py-3 text-emerald-900 font-bold text-lg shadow-lg">Cloud AI Engineer</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold text-sm">Infrastructure</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Bengaluru / Remote</span>
        </div>
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">Role Description</h2>
            <p className="text-gray-700 text-base">
              Cloud AI Engineers design, build, and deploy AI models and pipelines on cloud platforms like AWS, Azure, and GCP. They work on scalable, serverless architectures and optimize performance, cost, and security of AI workloads using cloud-native services.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">Skills/Qualifications Required</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Proficiency in Python and cloud SDKs (boto3, google-cloud, azureml)</li>
              <li>Experience with Vertex AI, Azure AI Studio, and AWS SageMaker</li>
              <li>Familiarity with containerization (Docker), orchestration (Kubernetes), and CI/CD practices</li>
              <li>Strong understanding of security, billing, and scalability principles in cloud environments</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">Roles and Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Develop cloud-native AI/ML training and deployment pipelines</li>
              <li>Integrate APIs and real-time data sources with model endpoints</li>
              <li>Optimize infrastructure cost and autoscaling strategies</li>
              <li>Monitor model performance and handle pipeline retraining</li>
              <li>Ensure secure access and data privacy across cloud resources</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default CloudAIEngineer;
