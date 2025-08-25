import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Healthcare from "./pages/industries/Healthcare";
import Finance from "./pages/industries/Finance";
import Pharma from "./pages/industries/Pharma";
import Agriculture from "./pages/industries/Agriculture";
import Manufacturing from "./pages/industries/Manufacturing";
import Retail from "./pages/industries/Retail";
import Defence from "./pages/industries/Defence";
import CyberSecurity from "./pages/industries/CyberSecurity";
import Biotech from "./pages/industries/Biotech";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Insights from "./pages/Insights";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RemoteMonitoring from "./pages/solutions/RemoteMonitoring";
import MedicalBilling from "./pages/solutions/MedicalBilling";
import LabIntegration from "./pages/solutions/LabIntegration";
import AppointmentScheduling from "./pages/solutions/AppointmentScheduling";
import AIChatbot from "./pages/solutions/AIChatbot";
import ClinicalDecision from "./pages/solutions/ClinicalDecision";
import GenAI from "./pages/industries/healthcare/GenAI";
import AgenticAI from "./pages/industries/healthcare/AgenticAI";
import NonInvasiveVentilator from "./pages/NonInvasiveVentilator";
import Law from "./pages/industries/Law";
import Aerospace from "./pages/industries/Aerospace";
import Education from "./pages/industries/Education";
import Semiconductor from "./pages/industries/Semiconductor";
import Nutrition from "./pages/industries/Nutrition";
import Meat from "./pages/industries/Meat";
import Insurance from "./pages/industries/Insurance";
import Robots from "./pages/industries/Robots";
import Drones from "./pages/industries/Drones";
import Career from './pages/Career';
import AIArchitect from './pages/career/AIArchitect';
import MLOpsEngineer from './pages/career/MLOpsEngineer';
import AIGovLead from './pages/career/AIGovLead';
import PromptEngineer from './pages/career/PromptEngineer';
import CloudAIEngineer from './pages/career/CloudAIEngineer';
import EmbeddedAIDeveloper from './pages/career/EmbeddedAIDeveloper';
import QuantumAIMLEngineer from './pages/career/QuantumAIMLEngineer';
import AISecurityAnalyst from './pages/career/AISecurityAnalyst';
import RAGSystemsEngineer from './pages/career/RAGSystemsEngineer';
import AIAutonomousSystemsLead from './pages/career/AIAutonomousSystemsLead';
import AIDataStrategyManager from './pages/career/AIDataStrategyManager';
import AgenticAIPlatformEngineer from './pages/career/AgenticAIPlatformEngineer';
import EnterpriseAIProductManager from './pages/career/EnterpriseAIProductManager';
import AIInfrastructureArchitect from './pages/career/AIInfrastructureArchitect';
import AIComplianceLegalExpert from './pages/career/AIComplianceLegalExpert';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/solutions/remote-monitoring" element={<RemoteMonitoring />} />
            <Route path="/solutions/medical-billing" element={<MedicalBilling />} />
            <Route path="/solutions/lab-integration" element={<LabIntegration />} />
            <Route path="/solutions/appointment-scheduling" element={<AppointmentScheduling />} />
            <Route path="/solutions/ai-chatbot" element={<AIChatbot />} />
            <Route path="/solutions/clinical-decision" element={<ClinicalDecision />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/healthcare/gen-ai" element={<GenAI />} />
            <Route path="/industries/healthcare/agentic-ai" element={<AgenticAI />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/pharma" element={<Pharma />} />
            <Route path="/industries/agriculture" element={<Agriculture />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/defence" element={<Defence />} />
            <Route path="/industries/cyber-security" element={<CyberSecurity />} />
            <Route path="/industries/biotech" element={<Biotech />} />
            <Route path="/career" element={<Career />} />
              <Route path="/career/ai-architect" element={<AIArchitect />} />
              <Route path="/career/mlops-engineer" element={<MLOpsEngineer />} />
              <Route path="/career/ai-gov-lead" element={<AIGovLead />} />
              <Route path="/career/prompt-engineer" element={<PromptEngineer />} />
              <Route path="/career/cloud-ai-engineer" element={<CloudAIEngineer />} />
              <Route path="/career/embedded-ai-developer" element={<EmbeddedAIDeveloper />} />
              <Route path="/career/quantum-ml-engineer" element={<QuantumAIMLEngineer />} />
              <Route path="/career/ai-security-analyst" element={<AISecurityAnalyst />} />
              <Route path="/career/rag-systems-engineer" element={<RAGSystemsEngineer />} />
              <Route path="/career/ai-autonomous-systems-lead" element={<AIAutonomousSystemsLead />} />
              <Route path="/career/ai-data-strategy-manager" element={<AIDataStrategyManager />} />
              <Route path="/career/agentic-ai-platform-engineer" element={<AgenticAIPlatformEngineer />} />
              <Route path="/career/enterprise-ai-product-manager" element={<EnterpriseAIProductManager />} />
              <Route path="/career/ai-infrastructure-architect" element={<AIInfrastructureArchitect />} />
              <Route path="/career/ai-compliance-legal-expert" element={<AIComplianceLegalExpert />} />
            <Route path="/products/ventilator" element={<NonInvasiveVentilator />} />
            <Route path="/industries/law" element={<Law />} />
            <Route path="/industries/aerospace" element={<Aerospace />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/semiconductor" element={<Semiconductor />} />
            <Route path="/industries/nutrition" element={<Nutrition />} />
            <Route path="/industries/meat" element={<Meat />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/industries/robots" element={<Robots />} />
            <Route path="/industries/drones" element={<Drones />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
