import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";

const backgroundImage = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80";

const PromptEngineer: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100">
      <Navbar />
      <div className="relative flex items-center justify-center pt-32 pb-16 px-4">
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt="Prompt Engineer Background"
            className="w-full h-full object-cover opacity-80"
            style={{ filter: 'blur(1px)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-indigo-100/20" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative w-full max-w-2xl mx-auto rounded-3xl bg-white/60 shadow-2xl p-10 backdrop-blur z-10"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <span className="inline-block rounded-full bg-indigo-200 px-6 py-3 text-indigo-900 font-bold text-lg shadow-lg">Prompt Engineer</span>
          </div>
          <div className="mb-8 pt-10 text-center">
            <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-indigo-700 font-semibold text-sm">Engineering</span>
            <span className="ml-3 text-xs text-gray-500">Contract | Remote</span>
          </div>
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Role Description</h2>
              <p className="text-gray-700 text-base">
                Prompt Engineers are responsible for designing, testing, and optimizing inputs for large language models (LLMs) such as GPT-4, Claude, and Gemini. They ensure that prompts guide the model to produce accurate, safe, and contextually relevant responses across diverse enterprise use cases. Prompt engineers bridge natural language understanding and model behavior tuning.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Skills/Qualifications Required</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>In-depth knowledge of LLM behavior and prompt patterns (few-shot, zero-shot, chain-of-thought)</li>
                <li>Familiarity with prompt injection prevention, safety protocols, and output moderation</li>
                <li>Experience with OpenAI, Anthropic, Hugging Face APIs</li>
                <li>Strong command over English, logic, and task decomposition</li>
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <h2 className="text-xl font-bold text-indigo-900 mb-2">Roles and Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 text-base">
                <li>Design reusable prompt templates for classification, summarization, extraction, and Q&A</li>
                <li>Experiment with different model parameters (temperature, top_p) and sampling strategies</li>
                <li>Build evaluation frameworks for testing prompt robustness and quality</li>
                <li>Integrate prompt workflows into product pipelines using LangChain or similar</li>
                <li>Collaborate with UX, NLP, and product teams to iterate on output quality</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default PromptEngineer;
