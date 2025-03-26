
import React from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import DataMigrationPanel from '@/components/admin/DataMigrationPanel';
import { Shield, AlertTriangle } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Navigate } from 'react-router-dom';
import { usingMockSupabase } from '@/lib/supabase';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Admin = () => {
  const { user, isAuthenticated } = useAuth();

  // If not authenticated, redirect to auth page
  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold flex items-center">
            <Shield className="mr-2 h-7 w-7" />
            Admin Panel
          </h1>
          <div className="text-right">
            <p className="font-medium">
              {user?.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user?.email.split('@')[0]}
            </p>
            <p className="text-sm text-gray-500">{user?.company || 'Company'}</p>
          </div>
        </div>

        {usingMockSupabase && (
          <Alert variant="warning" className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Supabase Configuration Missing</AlertTitle>
            <AlertDescription>
              You're using a mock Supabase connection. To use real Supabase services, please set 
              the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Database Management</h2>
            <GlassCard className="p-6">
              <DataMigrationPanel />
            </GlassCard>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default Admin;
