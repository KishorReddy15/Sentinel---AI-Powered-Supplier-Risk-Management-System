
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const SupplierRisk = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Supplier Risk Management</h1>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Supplier Risk Dashboard</h2>
            <p className="text-gray-700 mb-4">
              Our AI-powered risk scoring system provides real-time monitoring of your suppliers, with detailed analysis of potential risks.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Supplier risk map visualization will appear here</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Supplier Risk Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Supplier</th>
                    <th className="px-4 py-2 border">Risk Score</th>
                    <th className="px-4 py-2 border">Location</th>
                    <th className="px-4 py-2 border">Risk Factors</th>
                    <th className="px-4 py-2 border">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Global Manufacturing Co.</td>
                    <td className="px-4 py-2 border text-red-500">High (78/100)</td>
                    <td className="px-4 py-2 border">Shanghai, China</td>
                    <td className="px-4 py-2 border">Political instability, port congestion</td>
                    <td className="px-4 py-2 border">↑</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">European Electronics Ltd.</td>
                    <td className="px-4 py-2 border text-yellow-500">Medium (45/100)</td>
                    <td className="px-4 py-2 border">Berlin, Germany</td>
                    <td className="px-4 py-2 border">Labor shortages, energy costs</td>
                    <td className="px-4 py-2 border">→</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">American Parts Inc.</td>
                    <td className="px-4 py-2 border text-green-500">Low (23/100)</td>
                    <td className="px-4 py-2 border">Detroit, USA</td>
                    <td className="px-4 py-2 border">Transportation delays</td>
                    <td className="px-4 py-2 border">↓</td>
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

export default SupplierRisk;
