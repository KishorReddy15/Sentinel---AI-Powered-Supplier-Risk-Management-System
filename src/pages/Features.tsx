
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const Features = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Predictive Risk Forecasting</h2>
            <p className="text-gray-700">
              Our AI-powered risk forecasting identifies potential supply chain disruptions before they occur, allowing you to take proactive measures.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Dynamic Supplier Risk Scoring</h2>
            <p className="text-gray-700">
              Real-time risk scoring of your suppliers based on multiple factors including financial health, geopolitical risks, and historical performance.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Real-Time Risk Visualization</h2>
            <p className="text-gray-700">
              Interactive maps and dashboards that visualize your supply chain risks geographically and categorically for better decision making.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Scenario Planning</h2>
            <p className="text-gray-700">
              Model different scenarios to understand potential impacts and prepare contingency plans for various supply chain disruptions.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Intelligent Alerts</h2>
            <p className="text-gray-700">
              Receive contextual, predictive alerts about emerging risks, allowing your team to address issues before they impact your business.
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Supply Chain Optimization</h2>
            <p className="text-gray-700">
              AI-driven recommendations to optimize your supply chain for resilience, efficiency, and cost-effectiveness.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Features;
