import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/sonner";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import MobileNav from '@/components/layout/MobileNav';
import Loader from '@/components/ui/Loader';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import { AuthProvider } from '@/context/AuthContext';
import { useMobile } from '@/hooks/use-mobile';
import './App.css';

// Lazy load pages for better performance
const Index = lazy(() => import('@/pages/Index'));
const Features = lazy(() => import('@/pages/Features'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Auth = lazy(() => import('@/pages/Auth'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const SupplierRisk = lazy(() => import('@/pages/SupplierRisk'));
const Logistics = lazy(() => import('@/pages/Logistics'));
const ScenarioPlanning = lazy(() => import('@/pages/ScenarioPlanning'));
const Alerts = lazy(() => import('@/pages/Alerts'));
const Admin = lazy(() => import('@/pages/Admin'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const Report = lazy(() => import('@/pages/Report'));

// Create a Query client for data fetching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  const isMobile = useMobile();

  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <div className={`min-h-screen flex flex-col ${isMobile ? 'pb-16' : ''}`}>
              <Navbar />
              <main className="flex-grow">
                <Suspense fallback={<Loader />}>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/report" element={<Report />} />
                    
                    {/* Protected Routes */}
                    <Route element={<ProtectedRoute />}>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/supplier-risk" element={<SupplierRisk />} />
                      <Route path="/logistics" element={<Logistics />} />
                      <Route path="/scenario-planning" element={<ScenarioPlanning />} />
                      <Route path="/alerts" element={<Alerts />} />
                      <Route path="/admin" element={<Admin />} />
                    </Route>
                    
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </main>
              {isMobile && <MobileNav />}
              <Footer />
              <Toaster />
            </div>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
