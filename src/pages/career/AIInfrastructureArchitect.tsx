import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80";

const AIInfrastructureArchitect: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="AI Infrastructure Architect Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-emerald-200 px-6 py-3 text-emerald-900 font-bold text-lg shadow-lg">AI Infrastructure Architect</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 font-semibold text-sm">Infrastructure</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Hybrid (Hyderabad)</span>
        </div>
        <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-emerald-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                AI Infrastructure Architects design and manage high-performance computing infrastructure to support AI training, experimentation, and model deployment. They ensure systems are cost-optimized, resilient, and scalable for large-scale AI workloads.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-emerald-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Deep knowledge of GPU/TPU-based architecture, hybrid cloud/on-prem deployment</li>
                <li>Experience with container orchestration (Kubernetes, Argo), resource scaling, and devops for AI</li>
                <li>Proficiency with Terraform, Prometheus, Grafana, and HPC cluster management</li>
                <li>Understanding of networking, storage (Ceph, NFS), and security for distributed compute</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-emerald-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Design infrastructure for model training and distributed inference workloads</li>
                <li>Optimize GPU utilization, autoscaling, and cost-performance benchmarks</li>
                <li>Lead setup of GPU clusters with job scheduling and environment reproducibility</li>
                <li>Ensure infrastructure observability, alerting, and failover readiness</li>
                <li>Collaborate with MLOps and data platform teams to support evolving AI needs</li>
              </ul>
            </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AIInfrastructureArchitect;
