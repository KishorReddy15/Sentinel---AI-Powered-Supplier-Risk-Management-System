
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';

const Logistics = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Logistics Management</h1>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Route Optimization</h2>
            <p className="text-gray-700 mb-4">
              Our AI systems analyze multiple variables to identify the most efficient and reliable delivery routes.
            </p>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Route optimization map will appear here</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Delivery Performance</h2>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Delivery performance chart will appear here</p>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Delay Predictions</h2>
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="text-gray-500">Delay prediction chart will appear here</p>
            </div>
          </GlassCard>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Active Shipments</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Shipment ID</th>
                    <th className="px-4 py-2 border">Origin</th>
                    <th className="px-4 py-2 border">Destination</th>
                    <th className="px-4 py-2 border">Status</th>
                    <th className="px-4 py-2 border">ETA</th>
                    <th className="px-4 py-2 border">Delay Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">SH-12345</td>
                    <td className="px-4 py-2 border">Los Angeles, CA</td>
                    <td className="px-4 py-2 border">Chicago, IL</td>
                    <td className="px-4 py-2 border">In Transit</td>
                    <td className="px-4 py-2 border">Sep 15, 2023</td>
                    <td className="px-4 py-2 border text-green-500">Low</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">SH-12346</td>
                    <td className="px-4 py-2 border">Shanghai, China</td>
                    <td className="px-4 py-2 border">New York, NY</td>
                    <td className="px-4 py-2 border">Port Processing</td>
                    <td className="px-4 py-2 border">Oct 3, 2023</td>
                    <td className="px-4 py-2 border text-red-500">High</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">SH-12347</td>
                    <td className="px-4 py-2 border">Berlin, Germany</td>
                    <td className="px-4 py-2 border">Paris, France</td>
                    <td className="px-4 py-2 border">Customs Clearance</td>
                    <td className="px-4 py-2 border">Sep 12, 2023</td>
                    <td className="px-4 py-2 border text-yellow-500">Medium</td>
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

export default Logistics;
