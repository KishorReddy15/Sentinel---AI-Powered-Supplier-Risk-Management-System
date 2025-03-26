
import React, { useState } from 'react';
import { createTables, migrateAllData, migrateSuppliers, migrateLogistics, migrateScenarios, migrateAlerts, migrateUsers } from '../../utils/dataMigration';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { AlertCircle, CheckCircle, Database, Upload, Info } from 'lucide-react';
import { usingMockSupabase } from '@/lib/supabase';
import { Alert, AlertDescription } from '../ui/alert';

const DataMigrationPanel = () => {
  const [isMigrating, setIsMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState<{
    suppliers: boolean;
    logistics: boolean;
    scenarios: boolean;
    alerts: boolean;
    users: boolean;
  }>({
    suppliers: false,
    logistics: false,
    scenarios: false,
    alerts: false,
    users: false
  });
  const [sqlInstructions, setSqlInstructions] = useState('');

  const handleCreateTables = async () => {
    try {
      const instructions = await createTables();
      setSqlInstructions(instructions);
      toast.success('Table creation instructions generated!');
    } catch (error) {
      console.error('Error generating table creation instructions:', error);
      toast.error('Error generating table creation instructions');
    }
  };

  const handleMigrateAll = async () => {
    setIsMigrating(true);
    try {
      toast.info('Starting data migration to Supabase...');
      
      try {
        await migrateSuppliers();
        setMigrationStatus(prev => ({ ...prev, suppliers: true }));
      } catch (error) {
        console.error('Error migrating suppliers:', error);
      }
      
      try {
        await migrateLogistics();
        setMigrationStatus(prev => ({ ...prev, logistics: true }));
      } catch (error) {
        console.error('Error migrating logistics:', error);
      }
      
      try {
        await migrateScenarios();
        setMigrationStatus(prev => ({ ...prev, scenarios: true }));
      } catch (error) {
        console.error('Error migrating scenarios:', error);
      }
      
      try {
        await migrateAlerts();
        setMigrationStatus(prev => ({ ...prev, alerts: true }));
      } catch (error) {
        console.error('Error migrating alerts:', error);
      }
      
      try {
        await migrateUsers();
        setMigrationStatus(prev => ({ ...prev, users: true }));
      } catch (error) {
        console.error('Error migrating users:', error);
      }
      
      toast.success('Data migration complete!');
    } catch (error) {
      console.error('Error during migration:', error);
      toast.error('Error during migration');
    } finally {
      setIsMigrating(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Data Migration to Supabase
        </CardTitle>
        <CardDescription>
          Migrate your demo data to Supabase tables
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {usingMockSupabase && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Environment Variables Missing:</strong> Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment to connect to your real Supabase project.
              </AlertDescription>
            </Alert>
          )}

          <div className="bg-muted p-4 rounded-md">
            <h3 className="font-medium mb-2">Migration Steps:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Click "Generate Table SQL" and run the SQL in your Supabase project
                <span className="ml-2">
                  {sqlInstructions ? <CheckCircle className="inline-block h-4 w-4 text-green-500" /> : null}
                </span>
              </li>
              <li>
                Configure your Supabase URL and anon key in the environment variables
                <div className="text-xs ml-6 mt-1 bg-gray-100 p-2 rounded">
                  VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
                </div>
              </li>
              <li>
                Click "Migrate All Data" to transfer your demo data to Supabase
                <span className="ml-2">
                  {Object.values(migrationStatus).every(Boolean) ? <CheckCircle className="inline-block h-4 w-4 text-green-500" /> : null}
                </span>
              </li>
            </ol>
          </div>

          {sqlInstructions && (
            <div className="bg-gray-100 p-4 rounded-md overflow-auto max-h-60">
              <pre className="text-xs">{sqlInstructions}</pre>
            </div>
          )}

          <div className="space-y-2">
            <h3 className="font-medium">Migration Status:</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span>Suppliers:</span>
                {migrationStatus.suppliers ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <AlertCircle className="h-4 w-4 text-gray-300" />}
              </div>
              <div className="flex items-center gap-2">
                <span>Logistics:</span>
                {migrationStatus.logistics ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <AlertCircle className="h-4 w-4 text-gray-300" />}
              </div>
              <div className="flex items-center gap-2">
                <span>Scenarios:</span>
                {migrationStatus.scenarios ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <AlertCircle className="h-4 w-4 text-gray-300" />}
              </div>
              <div className="flex items-center gap-2">
                <span>Alerts:</span>
                {migrationStatus.alerts ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <AlertCircle className="h-4 w-4 text-gray-300" />}
              </div>
              <div className="flex items-center gap-2">
                <span>Users:</span>
                {migrationStatus.users ? 
                  <CheckCircle className="h-4 w-4 text-green-500" /> : 
                  <AlertCircle className="h-4 w-4 text-gray-300" />}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleCreateTables} disabled={isMigrating || usingMockSupabase}>
          <Database className="mr-2 h-4 w-4" />
          Generate Table SQL
        </Button>
        <Button onClick={handleMigrateAll} disabled={isMigrating || usingMockSupabase}>
          {isMigrating ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
              Migrating...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Migrate All Data
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DataMigrationPanel;
