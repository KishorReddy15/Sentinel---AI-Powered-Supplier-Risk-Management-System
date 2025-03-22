
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChartBar,
  AlertTriangle,
  BarChart3,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import AnimatedCard from '@/components/ui/AnimatedCard';
import GlassCard from '@/components/ui/GlassCard';
import FeatureIcon from '@/components/ui/FeatureIcon';

const features = [
  {
    icon: AlertTriangle,
    title: 'Predictive Risk Forecasting',
    description: 'AI-driven predictive analytics to identify and assess potential supply chain risks before they impact your business.',
  },
  {
    icon: BarChart3,
    title: 'Dynamic Supplier Risk Scoring',
    description: 'Real-time supplier risk assessments using AI-powered algorithms that continuously monitor multiple risk factors.',
  },
  {
    icon: Globe,
    title: 'Real-Time Risk Visualization',
    description: 'Interactive maps and dashboards that provide immediate visibility into your global supply chain risks.',
  },
  {
    icon: ChartBar,
    title: 'Scenario Planning',
    description: 'Advanced simulation tools to evaluate potential disruption scenarios and develop effective mitigation strategies.',
  },
  {
    icon: Shield,
    title: 'Intelligent Alerts',
    description: 'Proactive notifications about emerging risks and automated recommendations for risk mitigation.',
  },
  {
    icon: Zap,
    title: 'Fast Implementation',
    description: 'Quick setup and seamless integration with your existing systems for immediate risk management improvements.',
  },
];

const Index = () => {
  const { isAuthenticated, demoLogin } = useAuth();

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-sentinel-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 tracking-tight">
                AI-Powered Supply Chain
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sentinel-600 to-sentinel-400">
                  {' '}Risk Management
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Transform your supply chain risk management with AI-driven insights, real-time monitoring, and predictive analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {isAuthenticated ? (
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" className="min-w-[200px]">
                    <Link to="/auth?mode=signup">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={demoLogin}
                    className="min-w-[200px]"
                  >
                    Try Demo
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              )}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <GlassCard className="p-6">
              <div className="text-4xl font-bold text-sentinel-600 mb-2">45%</div>
              <div className="text-gray-600">Risk Reduction</div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-4xl font-bold text-sentinel-600 mb-2">2.5x</div>
              <div className="text-gray-600">Faster Response</div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-4xl font-bold text-sentinel-600 mb-2">92%</div>
              <div className="text-gray-600">Prediction Accuracy</div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="text-4xl font-bold text-sentinel-600 mb-2">30%</div>
              <div className="text-gray-600">Cost Savings</div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4"
            >
              Comprehensive Risk Management Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Everything you need to identify, assess, and mitigate supply chain risks in one powerful platform.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedCard
                key={feature.title}
                delay={index * 0.1}
                className="p-6"
              >
                <FeatureIcon icon={feature.icon} className="mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sentinel-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-6"
            >
              Ready to transform your supply chain risk management?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Join leading companies using Sentinel to protect their supply chains and drive business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {isAuthenticated ? (
                <Button asChild size="lg" className="min-w-[200px]">
                  <Link to="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              ) : (
                <>
                  <Button asChild size="lg" className="min-w-[200px]">
                    <Link to="/auth?mode=signup">
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={demoLogin}
                    className="min-w-[200px]"
                  >
                    Try Demo Account
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
