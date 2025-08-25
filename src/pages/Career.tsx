import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/**
 * Simple Tooltip (no external deps)
 */
const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({ text, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
      <AnimatePresence>
        {open && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-lg"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

/**
 * Toast (simple, scoped to this page)
 */
const Toast: React.FC<{ show: boolean; message: string; onClose: () => void }> = ({ show, message, onClose }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-blue-900 px-5 py-3 text-white shadow-xl"
      >
        <div className="flex items-center gap-3">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-white" />
          <p className="text-sm font-medium">{message}</p>
          <button onClick={onClose} className="ml-3 rounded-lg bg-white/10 px-2 py-1 text-xs hover:bg-white/20">
            Close
          </button>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**
 * Modal
 */
const Modal: React.FC<{ open: boolean; onClose: () => void; children: React.ReactNode; title?: string }> = ({
  open,
  onClose,
  children,
  title,
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
        onMouseDown={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.98, opacity: 0, y: 8 }}
          transition={{ type: 'spring', stiffness: 220, damping: 20 }}
          className="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-blue-900">{title ?? 'Apply'}</h3>
            <button
              onClick={onClose}
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          {children}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

/**
 * Data types
 */
type Job = {
  id: string;
  title: string;
  track: "Engineering" | "Infrastructure" | "Governance/Legal" | "Product" | "Consulting";
  summary: string;
  skills: string[];
  responsibilities: string[];
  location?: string;
  type?: "Full-time" | "Contract" | "Remote" | "Hybrid";
};

/**
 * ROLE DATA — derived from your uploaded document.
 * (Summaries/skills/responsibilities condensed & phrased for a career page.)
 */
const JOBS: Job[] = [
  {
    id: "ai-architect",
    title: "AI Architect",
    track: "Infrastructure",
    summary:
      "Lead end-to-end AI system architecture — training infra, pipelines, real-time serving, governance & cost optimization.",
    skills: [
      "System design, distributed computing",
      "MLOps (Kubeflow/MLflow), model serving",
      "Cloud (AWS/GCP/Azure), IaC (Terraform)",
      "Data pipelines, GPU infra, containers",
    ],
    responsibilities: [
      "Design scalable AI/ML architectures & deployment blueprints",
      "Collaborate with product, DS & DevOps to translate business needs",
      "Set up GPU/accelerator infra for training & inference",
      "Ensure data governance, auditability & explainability",
    ],
    location: "Hybrid (Bengaluru)",
    type: "Full-time",
  },
  {
    id: "mlops-engineer",
    title: "MLOps Engineer",
    track: "Engineering",
    summary:
      "Automate ML lifecycle: CI/CD, experiment tracking, model registry, monitoring, rollback & governance at scale.",
    skills: ["CI/CD, Docker, K8s", "MLflow, model registry", "AWS/GCP/Azure ML", "Python, Bash"],
    responsibilities: [
      "Build data→train→validate→deploy pipelines",
      "Automate monitoring for drift & data quality",
      "Harden rollback/versioning & reproducibility",
      "Scale AI workloads securely with platform teams",
    ],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "ai-gov-lead",
    title: "AI Governance Lead",
    track: "Governance/Legal",
    summary:
      "Own the ethical, legal and regulatory posture across AI initiatives: policies, audits, risk & transparency.",
    skills: ["AI laws & policy", "Explainability (SHAP/LIME)", "Fairness toolkits", "Risk frameworks (NIST AI RMF)"],
    responsibilities: [
      "Draft Responsible AI policies & acceptable-use frameworks",
      "Run model risk/fairness assessments & maintain evidence",
      "Review new use cases for ethical/legal risks",
      "Educate teams on bias, transparency & compliance",
    ],
    location: "Hybrid (Mumbai)",
    type: "Full-time",
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    track: "Engineering",
    summary:
      "Design robust prompts & templates for LLM tasks, mitigate prompt attacks, evaluate output quality at scale.",
    skills: ["LLM prompt patterns", "Safety/guardrails", "OpenAI/Anthropic/HF APIs", "LangChain/LangGraph"],
    responsibilities: [
      "Create reusable prompt templates for core tasks",
      "Tune parameters (temperature/top_p) & sampling",
      "Build evaluation harnesses for prompt robustness",
      "Integrate prompts into product workflows",
    ],
    location: "Remote",
    type: "Contract",
  },
  {
    id: "cloud-ai-engineer",
    title: "Cloud AI Engineer",
    track: "Infrastructure",
    summary:
      "Design & deploy AI pipelines on AWS/Azure/GCP with serverless & container-native patterns, optimize cost/perf.",
    skills: ["Python & cloud SDKs", "SageMaker/Vertex/Azure AI", "Docker/K8s", "Security & autoscaling"],
    responsibilities: [
      "Ship cloud-native training & inference pipelines",
      "Integrate live data streams & APIs",
      "Optimize infra cost & scaling strategies",
      "Monitor performance & automate retraining",
    ],
    location: "Bengaluru / Remote",
    type: "Full-time",
  },
  {
    id: "embedded-ai-dev",
    title: "Embedded AI Developer",
    track: "Engineering",
    summary:
      "Deploy compact ML to edge devices (uC, Jetson, TPU). Optimize latency, memory & power for real-time inference.",
    skills: ["C/C++/MicroPython", "Jetson/Coral/STM32", "Quantization/Pruning/ONNX", "Signal processing"],
    responsibilities: [
      "Convert/compress models (TFLite/ONNX/TensorRT)",
      "Build inference for video/audio/sensors",
      "Benchmark latency & memory on device",
      "Integrate with hardware/robotics I/O",
    ],
    location: "Onsite (Pune)",
    type: "Full-time",
  },
  {
    id: "quantum-ml-eng",
    title: "Quantum AI/ML Engineer",
    track: "Engineering",
    summary:
      "Explore hybrid quantum–classical ML for optimization/simulation. Prototype circuits & compare to classical baselines.",
    skills: ["Quantum basics & linear algebra", "Qiskit/PennyLane", "QAOA/VQE", "Noise models & circuit opt"],
    responsibilities: [
      "Design quantum circuits for ML workloads",
      "Develop hybrid pipelines with classical ML",
      "Simulate & benchmark vs classical methods",
      "Track hardware landscape (IBM Q, IonQ, Rigetti)",
    ],
    location: "Hybrid (Bengaluru)",
    type: "Full-time",
  },
  {
    id: "ai-security-analyst",
    title: "AI Security Analyst",
    track: "Governance/Legal",
    summary:
      "Secure AI/LLM systems against adversarial inputs, prompt injection, model theft; draft playbooks & monitor misuse.",
    skills: ["AppSec & network basics", "Adversarial ML & LLM risks", "Monitoring & red teaming", "OWASP LLM Top 10"],
    responsibilities: [
      "Monitor AI endpoints for anomalies",
      "Test models for adversarial & leakage risks",
      "Implement safe prompting & guardrails",
      "Author incident response playbooks",
    ],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "rag-systems-eng",
    title: "RAG Systems Engineer",
    track: "Engineering",
    summary:
      "Build retrieval-augmented generation: ingestion, chunking, embeddings, retrieval/reranking & prompt integration.",
    skills: ["Embeddings & vector DBs", "LangChain/LlamaIndex", "Hybrid (keyword+vector)", "Latency optimization"],
    responsibilities: [
      "Ingest & index large corpora with metadata",
      "Tune retrieval strategies & rerankers",
      "Integrate RAG with LLM prompts & logging",
      "Evaluate relevance & close feedback loops",
    ],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "autonomy-lead",
    title: "AI Autonomous Systems Lead",
    track: "Engineering",
    summary:
      "Lead perception, planning & control for robotics/AGVs: SLAM, object detection, realtime deployment & safety.",
    skills: ["Robotics/controls, CV", "Path planning (A*, RRT), SLAM", "ROS/ROS2, Python/C++", "Simulation (Gazebo, CARLA)"],
    responsibilities: [
      "Define autonomy system architecture",
      "Fuse LiDAR/GPS/IMU with CV models",
      "Optimize onboard inference latency",
      "Simulate & validate safety logic",
    ],
    location: "Onsite (Chennai)",
    type: "Full-time",
  },
  {
    id: "data-strategy-mgr",
    title: "AI Data Strategy Manager",
    track: "Consulting",
    summary:
      "Own data lifecycle for AI: readiness, quality, governance, lineage; align pipelines with MLOps & compliance.",
    skills: ["Data lakes/warehouses", "Governance, lineage, catalog", "SQL/Python, Airflow/dbt/Beam", "Labeling ops"],
    responsibilities: [
      "Define data standards for training",
      "Automate ingestion/validation/transform",
      "Monitor drift & dataset refresh",
      "Align arch with MLOps for reproducibility",
    ],
    location: "Hybrid (Gurugram)",
    type: "Full-time",
  },
  {
    id: "agentic-platform-eng",
    title: "Agentic AI Platform Engineer",
    track: "Engineering",
    summary:
      "Build multi-agent systems (planning, tools, memory). Orchestrate collaboration & evaluate agent output quality.",
    skills: ["Python, LangGraph/AutoGen/CrewAI", "Tool use & action planning", "Vector DB integration", "Safe LLM I/O"],
    responsibilities: [
      "Design stateful agents with memory",
      "Define tools/toolchains & fallbacks",
      "Monitor/evaluate collaboration quality",
      "Integrate external APIs & data systems",
    ],
    location: "Remote",
    type: "Full-time",
  },
  {
    id: "enterprise-ai-pm",
    title: "Enterprise AI Product Manager",
    track: "Product",
    summary:
      "Translate AI capabilities into business value; own roadmap, metrics, adoption, GTM & x-functional execution.",
    skills: ["AI product lifecycle", "Metrics (precision, latency, hallucination)", "User research", "Agile, comms"],
    responsibilities: [
      "Define roadmap & OKRs with leadership",
      "Write clear PRDs for AI features",
      "Track adoption & model effectiveness",
      "Drive GTM & stakeholder alignment",
    ],
    location: "Hybrid (Bengaluru)",
    type: "Full-time",
  },
  {
    id: "ai-infra-architect",
    title: "AI Infrastructure Architect",
    track: "Infrastructure",
    summary:
      "Design/manage HPC & GPU clusters for training/inference; observability, autoscaling, cost-performance.",
    skills: ["K8s/Argo, Terraform", "GPU/TPU, HPC clusters", "Prometheus/Grafana", "Networking & storage"],
    responsibilities: [
      "Architect infra for distributed training",
      "Optimize GPU utilization & autoscaling",
      "Ensure observability & failover",
      "Partner with MLOps & data platforms",
    ],
    location: "Hybrid (Hyderabad)",
    type: "Full-time",
  },
  {
    id: "ai-legal-expert",
    title: "AI Compliance & Legal Expert",
    track: "Governance/Legal",
    summary:
      "Ensure AI features are lawful & responsible: GDPR/DPDPA/EU AI Act compliance, audits, documentation & guidance.",
    skills: ["Privacy & IP law", "Model audit tools & transparency docs", "Policy writing", "Stakeholder advisory"],
    responsibilities: [
      "Draft internal policies & guardrails",
      "Lead legal reviews & audits",
      "Track global regulatory changes",
      "Educate teams on responsible AI",
    ],
    location: "Remote",
    type: "Full-time",
  },
];

/**
 * Utility: nice badges per track
 */
const trackBadge: Record<Job["track"], string> = {
  Engineering: "bg-indigo-100 text-indigo-700",
  Infrastructure: "bg-emerald-100 text-emerald-700",
  "Governance/Legal": "bg-rose-100 text-rose-700",
  Product: "bg-amber-100 text-amber-800",
  Consulting: "bg-sky-100 text-sky-700",
};

const Career: React.FC = () => {
  const [query, setQuery] = useState("");
  const [track, setTrack] = useState<"All" | Job["track"]>("All");
  const [openJob, setOpenJob] = useState<Job | null>(null);
  const [toast, setToast] = useState<{ show: boolean; msg: string }>({ show: false, msg: "" });
  const [redirectJobId, setRedirectJobId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return JOBS.filter((j) => {
      const matchQ =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.summary.toLowerCase().includes(q) ||
        j.skills.join(" ").toLowerCase().includes(q) ||
        j.responsibilities.join(" ").toLowerCase().includes(q);
      const matchT = track === "All" ? true : j.track === track;
      return matchQ && matchT;
    });
  }, [query, track]);

  const handleApplySubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setOpenJob(null);
    setToast({ show: true, msg: "Application submitted successfully. Our team will get back to you soon!" });
    setTimeout(() => setToast({ show: false, msg: "" }), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />

      {/* Add margin-top to push content below navbar */}
      <div className="pt-32"> {/* Adjust pt-32 as needed for your navbar height */}
      {/* HERO */}
      <section className="container mx-auto px-6 pt-0 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 160, damping: 20 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl font-bold text-blue-900 sm:text-5xl">Join Zerokost — Build the AI Future</h1>
          <p className="mt-4 text-lg text-gray-700">
            We’re hiring across engineering, infrastructure, governance, and product. Help us deliver reliable, secure,
            and scalable AI for the real world.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Tooltip text="Search any role, skill, or keyword">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search roles… (e.g., MLOps, RAG, governance)"
                className="w-full max-w-md rounded-xl border border-blue-200 bg-white/80 px-4 py-3 text-sm shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
              />
            </Tooltip>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value as any)}
              className="rounded-xl border border-blue-200 bg-white/80 px-3 py-3 text-sm text-blue-900 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
            >
              <option value="All">All Tracks</option>
              <option value="Engineering">Engineering</option>
              <option value="Infrastructure">Infrastructure</option>
              <option value="Governance/Legal">Governance/Legal</option>
              <option value="Product">Product</option>
              <option value="Consulting">Consulting</option>
            </select>
          </div>
        </motion.div>
      </section>

  {/* ROLE GRID */}
  <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((job) => (
            <motion.article
              key={job.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-white p-6 shadow-lg transition"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${trackBadge[job.track]}`}>
                  {job.track}
                </span>
                <span className="text-xs text-gray-500">{job.type ?? "Full-time"}</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 group-hover:text-blue-800">{job.title}</h3>
              <p className="mt-2 text-sm text-gray-700">{job.summary}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs text-gray-500">{job.location ?? "Remote"}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.open("https://zerokost.fillout.com/careerpage", "_blank")}
                    className="rounded-xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => {
                      if (job.id === 'ai-architect') {
                        window.location.href = '/career/ai-architect';
                      } else if (job.id === 'mlops-engineer') {
                        window.location.href = '/career/mlops-engineer';
                      } else if (job.id === 'ai-gov-lead') {
                        window.location.href = '/career/ai-gov-lead';
                      } else if (job.id === 'prompt-engineer') {
                        window.location.href = '/career/prompt-engineer';
                      } else if (job.id === 'cloud-ai-engineer') {
                        window.location.href = '/career/cloud-ai-engineer';
                      } else if (job.id === 'embedded-ai-dev') {
                        window.location.href = '/career/embedded-ai-developer';
                      } else if (job.id === 'quantum-ml-eng') {
                        window.location.href = '/career/quantum-ml-engineer';
                      } else if (job.id === 'ai-security-analyst') {
                        window.location.href = '/career/ai-security-analyst';
                      } else if (job.id === 'rag-systems-eng') {
                        window.location.href = '/career/rag-systems-engineer';
                      } else if (job.id === 'autonomy-lead') {
                        window.location.href = '/career/ai-autonomous-systems-lead';
                      } else if (job.id === 'data-strategy-mgr') {
                        window.location.href = '/career/ai-data-strategy-manager';
                      } else if (job.id === 'agentic-platform-eng') {
                        window.location.href = '/career/agentic-ai-platform-engineer';
                      } else if (job.id === 'enterprise-ai-pm') {
                        window.location.href = '/career/enterprise-ai-product-manager';
                      } else if (job.id === 'ai-infra-architect') {
                        window.location.href = '/career/ai-infrastructure-architect';
                      } else if (job.id === 'ai-legal-expert') {
                        window.location.href = '/career/ai-compliance-legal-expert';
                      } else {
                        setRedirectJobId(job.id);
                      }
                    }}
                    className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-16 text-center text-gray-600">
            No roles matched your search. Try a different keyword or filter.
          </div>
        )}
      </section>

  {/* APPLICATION MODAL */}
      <Modal open={!!openJob} onClose={() => setOpenJob(null)} title={openJob ? `Apply — ${openJob.title}` : "Apply"}>
        <form className="space-y-5" onSubmit={handleApplySubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm text-gray-700">Full Name</label>
              <input
                type="text"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-700">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Role</label>
            <input
              type="text"
              readOnly
              value={openJob?.title ?? ""}
              className="w-full cursor-not-allowed rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Location Preference</label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Remote / City"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Resume (PDF)</label>
            <input type="file" accept=".pdf" className="w-full text-sm" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-gray-700">Short Note</label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              placeholder="Tell us why you're a great fit…"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500">We typically respond in 5–7 business days.</span>
            <button
              type="submit"
              className="rounded-xl bg-blue-900 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-800"
            >
              Submit Application
            </button>
          </div>
        </form>
      </Modal>

  {/* CTA + ABOUT */}
  <section className="container mx-auto px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-xl">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
            >
              <h2 className="text-2xl font-bold text-blue-900">Life at Zerokost</h2>
              <p className="mt-2 text-gray-700">
                We’re building production-grade AI: resilient infra, safe LLMs, measurable product impact. You’ll work
                with GPUs, agents, RAG, and rigorous governance — shipping real value for customers.
              </p>
              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
                <li>Modern stack: K8s, MLflow, vector DBs, LangChain/LangGraph</li>
                <li>Clear metrics: latency, accuracy, hallucination rate, safety</li>
                <li>Craft + impact: elegant systems that scale in the wild</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 p-6 text-white shadow-2xl">
                <p className="text-lg font-semibold">Benefits</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>Flexible remote/hybrid options</li>
                  <li>Learning budget & GPU credits</li>
                  <li>Wellness & inclusive culture</li>
                </ul>
                <div className="mt-5 rounded-xl bg-white/10 p-3 text-sm">
                  ✨ Tip: Use the search box to find roles by skill (e.g., “TensorRT”, “governance”, “RAG”).
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />

      <Toast show={toast.show} message={toast.msg} onClose={() => setToast({ show: false, msg: "" })} />
      </div>
    </div>
  );
};

export default Career;
