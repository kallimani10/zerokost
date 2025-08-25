import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80";

const EmbeddedAIDeveloper: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
    <Navbar />
    <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Embedded AI Developer Background" className="w-full h-full object-cover opacity-80" style={{ filter: 'blur(1px)' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 to-blue-100/20" />
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ type: "spring", stiffness: 180, damping: 18 }} className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-indigo-200 px-6 py-3 text-indigo-900 font-bold text-lg shadow-lg">Embedded AI Developer</span>
        </div>
        <div className="mb-8 pt-10 text-center">
          <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-semibold text-sm">Engineering</span>
          <span className="ml-3 text-xs text-gray-500">Full-time | Onsite (Pune)</span>
        </div>
        <div className="space-y-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Role Description</h2>
            <p className="text-gray-700 text-base">
              Embedded AI Developers focus on deploying machine learning models to edge devices such as microcontrollers, drones, wearables, and robotics platforms. Their work requires optimizing models for performance, power efficiency, and real-time constraints. This role intersects embedded systems engineering and AI/ML workflows.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Skills/Qualifications Required</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Proficiency in embedded programming (C/C++, MicroPython) and Linux-based systems</li>
              <li>Experience with platforms like NVIDIA Jetson, STM32, Coral Edge TPU, and Raspberry Pi</li>
              <li>Familiarity with model optimization techniques like quantization, pruning, and ONNX</li>
              <li>Understanding of real-time signal processing, sensor integration, and hardware acceleration</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Roles and Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-700 text-base">
              <li>Convert and compress AI models for edge deployment using TFLite, ONNX, or TensorRT</li>
              <li>Build inference pipelines for video, audio, and sensor data on microcontroller systems</li>
              <li>Integrate CV algorithms and ML inference with I/O interfaces and drivers</li>
              <li>Benchmark latency, throughput, and memory usage on edge devices</li>
              <li>Collaborate with robotics or hardware teams to embed intelligence in physical systems</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default EmbeddedAIDeveloper;
