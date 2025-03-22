
import React, { useEffect } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <div className="text-right">
            <p className="font-medium">Welcome, {user?.name || 'User'}</p>
            <p className="text-sm text-gray-500">{user?.company || 'Company'}</p>
          </div>
        </div>
        
        {/* Risk Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold mb-2">Supplier Risk</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-2xl mr-4">
                12
              </div>
              <div>
                <p className="text-lg font-medium">High Risk Suppliers</p>
                <p className="text-sm text-gray-500">22% of your supplier base</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold mb-2">Logistics</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold text-2xl mr-4">
                8
              </div>
              <div>
                <p className="text-lg font-medium">Delayed Shipments</p>
                <p className="text-sm text-gray-500">15% of active shipments</p>
              </div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-lg font-semibold mb-2">Active Alerts</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-2xl mr-4">
                5
              </div>
              <div>
                <p className="text-lg font-medium">New Alerts</p>
                <p className="text-sm text-gray-500">3 high priority</p>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {/* Risk Map & Recent Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold mb-4">Global Risk Map</h2>
              <div className="bg-gray-100 h-64 rounded-md flex items-center justify-center">
                <p className="text-gray-500">Global risk map will appear here</p>
              </div>
            </GlassCard>
          </div>
          
          <div>
            <GlassCard className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 border border-red-100 rounded-md">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <p className="text-sm font-medium">Port congestion in Shanghai</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
                
                <div className="p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <p className="text-sm font-medium">Potential supplier strike</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
                
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <p className="text-sm font-medium">New trade regulations</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div 
              className="p-4 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate('/supplier-risk')}
            >
              <h3 className="font-medium mb-1">Supplier Risk</h3>
              <p className="text-sm text-gray-500">View and manage supplier risks</p>
            </div>
            
            <div 
              className="p-4 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate('/logistics')}
            >
              <h3 className="font-medium mb-1">Logistics</h3>
              <p className="text-sm text-gray-500">Track shipments and routes</p>
            </div>
            
            <div 
              className="p-4 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate('/scenario-planning')}
            >
              <h3 className="font-medium mb-1">Scenario Planning</h3>
              <p className="text-sm text-gray-500">Model potential disruptions</p>
            </div>
            
            <div 
              className="p-4 border border-gray-200 rounded-md bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate('/alerts')}
            >
              <h3 className="font-medium mb-1">Alerts</h3>
              <p className="text-sm text-gray-500">View and manage alerts</p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
