
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const ScenarioPlanning = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Scenario Planning</h1>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Scenario Simulation</h2>
            <p className="text-gray-700 mb-4">
              Our AI-powered scenario planning tool allows you to model potential disruptions and their impacts on your supply chain.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center mb-4">
              <p className="text-gray-500">Scenario simulation interface will appear here</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Financial Impact Analysis</h2>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Financial impact chart will appear here</p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Risk Mitigation Options</h2>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Risk mitigation options will appear here</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Saved Scenarios</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Scenario Name</th>
                    <th className="px-4 py-2 border">Created</th>
                    <th className="px-4 py-2 border">Type</th>
                    <th className="px-4 py-2 border">Impact Level</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Port Strike - West Coast</td>
                    <td className="px-4 py-2 border">Sep 10, 2023</td>
                    <td className="px-4 py-2 border">Labor Disruption</td>
                    <td className="px-4 py-2 border text-red-500">High</td>
                    <td className="px-4 py-2 border">
                      <button className="text-blue-500 mr-2">View</button>
                      <button className="text-blue-500">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Semiconductor Shortage</td>
                    <td className="px-4 py-2 border">Aug 28, 2023</td>
                    <td className="px-4 py-2 border">Material Shortage</td>
                    <td className="px-4 py-2 border text-red-500">High</td>
                    <td className="px-4 py-2 border">
                      <button className="text-blue-500 mr-2">View</button>
                      <button className="text-blue-500">Edit</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">European Energy Crisis</td>
                    <td className="px-4 py-2 border">Sep 5, 2023</td>
                    <td className="px-4 py-2 border">Energy Disruption</td>
                    <td className="px-4 py-2 border text-yellow-500">Medium</td>
                    <td className="px-4 py-2 border">
                      <button className="text-blue-500 mr-2">View</button>
                      <button className="text-blue-500">Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default ScenarioPlanning;
