
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const About = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">About Sentinel</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <GlassCard className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Sentinel, we're on a mission to empower medium-sized businesses with enterprise-grade supply chain intelligence. We believe that by leveraging the power of AI and advanced analytics, companies of all sizes can build resilient, efficient supply chains that drive competitive advantage.
              </p>
              <p className="text-gray-700">
                Our platform is designed to democratize access to sophisticated supply chain risk management tools, making them accessible, affordable, and actionable for businesses that traditionally couldn't access such technology.
              </p>
            </GlassCard>
          </div>
          
          <div>
            <GlassCard className="p-6 h-full">
              <h2 className="text-2xl font-semibold mb-4">Why Sentinel?</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Purpose-built for medium-sized businesses</li>
                <li>AI-powered risk forecasting that predicts disruptions before they occur</li>
                <li>Dynamic supplier risk scoring based on multiple risk factors</li>
                <li>Real-time visualization of your supply chain risks</li>
                <li>Scenario planning to prepare for potential disruptions</li>
                <li>Intelligent alerts that provide context and recommended actions</li>
                <li>Intuitive interface designed for busy supply chain professionals</li>
              </ul>
            </GlassCard>
          </div>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">How Sentinel Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Data Integration</h3>
                <p className="text-gray-600 text-sm">
                  Connect your existing supply chain data sources or use our templates to quickly get started.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Our AI engine analyzes your data alongside external risk factors to provide comprehensive risk intelligence.
                </p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Actionable Insights</h3>
                <p className="text-gray-600 text-sm">
                  Receive clear, actionable insights and recommendations to optimize your supply chain resilience.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
