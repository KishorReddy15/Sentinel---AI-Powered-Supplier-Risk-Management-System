
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const Alerts = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Intelligent Alerts</h1>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Alert Dashboard</h2>
            <p className="text-gray-700 mb-4">
              Our AI-powered alert system monitors your supply chain 24/7 and notifies you of potential disruptions before they impact your business.
            </p>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Active Alerts</h2>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <h3 className="font-medium text-red-700">High Risk</h3>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="mt-2">Port congestion detected at Shanghai port. Expected delays of 3-5 days for shipments SH-12346 and SH-12350.</p>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm text-blue-500 mr-3">View Details</button>
                  <button className="text-sm text-gray-500">Dismiss</button>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <h3 className="font-medium text-yellow-700">Medium Risk</h3>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
                <p className="mt-2">Labor strike predicted at European Electronics Ltd. within next 30 days (65% probability).</p>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm text-blue-500 mr-3">View Details</button>
                  <button className="text-sm text-gray-500">Dismiss</button>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <h3 className="font-medium text-blue-700">Information</h3>
                  </div>
                  <span className="text-sm text-gray-500">3 days ago</span>
                </div>
                <p className="mt-2">New regulations affecting cross-border shipping between USA and Mexico coming into effect Oct 1, 2023.</p>
                <div className="mt-2 flex justify-end">
                  <button className="text-sm text-blue-500 mr-3">View Details</button>
                  <button className="text-sm text-gray-500">Dismiss</button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Alert Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Email notifications</span>
                <div className="w-10 h-5 bg-green-500 rounded-full flex items-center p-1">
                  <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>SMS alerts for high risk events</span>
                <div className="w-10 h-5 bg-green-500 rounded-full flex items-center p-1">
                  <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Daily digest</span>
                <div className="w-10 h-5 bg-gray-300 rounded-full flex items-center p-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Alert History</h2>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Alert history chart will appear here</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default Alerts;
