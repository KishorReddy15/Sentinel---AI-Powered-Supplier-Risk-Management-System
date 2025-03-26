import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Pages
import Index from "@/pages/Index";
import Features from "@/pages/Features";
import SupplierRisk from "@/pages/SupplierRisk";
import Logistics from "@/pages/Logistics";
import ScenarioPlanning from "@/pages/ScenarioPlanning";
import Alerts from "@/pages/Alerts";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import Admin from "@/pages/Admin";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <TooltipProvider>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/auth" element={<Auth />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/supplier-risk" element={<SupplierRisk />} />
                  <Route path="/logistics" element={<Logistics />} />
                  <Route path="/scenario-planning" element={<ScenarioPlanning />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/admin" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </TooltipProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
