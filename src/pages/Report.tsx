
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import PageTransition from '@/components/ui/PageTransition';
import { Globe, Shield, BarChart3, Truck, Bell, Users, Database, GitBranch } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import FeatureIcon from '@/components/ui/FeatureIcon';

const Report = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Project Report: Supply Chain Risk Management</h1>
          <p className="text-xl text-muted-foreground mb-6">A comprehensive analysis of the platform's architecture, features, and technical stack</p>
          
          <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Supply Chain Dashboard" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-bold">Sentinel Platform</h2>
                <p>Supply Chain Risk Management with AI-Powered Insights</p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Architecture</CardTitle>
                <CardDescription>Modern React SPA with API integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                    alt="Code Architecture" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>React Router for navigation</li>
                  <li>Context-based state management</li>
                  <li>Responsive design with Tailwind CSS</li>
                  <li>shadcn/ui component library</li>
                  <li>Supabase integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>Modern web technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="Technology Stack" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <h4 className="font-semibold">Frontend</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>React with TypeScript</li>
                      <li>Vite build tool</li>
                      <li>Tailwind CSS</li>
                      <li>shadcn/ui components</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Backend & Data</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Supabase integration</li>
                      <li>TanStack Query</li>
                      <li>Recharts visualizations</li>
                      <li>Mapbox for geo-mapping</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Features</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={Shield} className="bg-blue-50" iconClassName="text-blue-600" />
                <div>
                  <CardTitle className="text-lg">Authentication</CardTitle>
                  <CardDescription>Secure user management</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Login/signup functionality, protected routes, and user profile management with Supabase integration.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={BarChart3} className="bg-indigo-50" iconClassName="text-indigo-600" />
                <div>
                  <CardTitle className="text-lg">Dashboard</CardTitle>
                  <CardDescription>Data visualization</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Interactive dashboard with risk metrics, KPIs, and real-time supply chain insights.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={Users} className="bg-red-50" iconClassName="text-red-600" />
                <div>
                  <CardTitle className="text-lg">Supplier Risk</CardTitle>
                  <CardDescription>Risk assessment</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Supplier risk scoring, monitoring, and mitigation recommendations powered by AI.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={Truck} className="bg-green-50" iconClassName="text-green-600" />
                <div>
                  <CardTitle className="text-lg">Logistics</CardTitle>
                  <CardDescription>Shipment tracking</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Real-time tracking of shipments, route optimization, and delay predictions.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={GitBranch} className="bg-amber-50" iconClassName="text-amber-600" />
                <div>
                  <CardTitle className="text-lg">Scenario Planning</CardTitle>
                  <CardDescription>Disruption modeling</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  What-if scenario planning tools for modeling potential supply chain disruptions.
                </p>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="flex-row gap-4 items-center">
                <FeatureIcon icon={Bell} className="bg-purple-50" iconClassName="text-purple-600" />
                <div>
                  <CardTitle className="text-lg">Alerts</CardTitle>
                  <CardDescription>Real-time notifications</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-2 flex-grow">
                <p className="text-sm text-muted-foreground">
                  Customizable alert system for supply chain disruptions and risk threshold violations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Interactive Map Integration</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="relative h-[300px] mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Global Supply Chain Map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">Global Supply Chain Visibility</h3>
                    <p className="text-sm">Interactive maps powered by Mapbox integration</p>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>The platform features interactive global maps that visualize the entire supply chain network:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Supplier locations and risk levels</li>
                  <li>Warehouse and distribution centers</li>
                  <li>Shipping routes with real-time status</li>
                  <li>Port congestion and delay visualization</li>
                  <li>Risk hotspots and disruption alerts</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Implementation Status</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Development</CardTitle>
                <CardDescription>Feature implementation status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[200px] mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                    alt="Development Status" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Completed Features</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>UI Framework and Navigation</li>
                      <li>Authentication System</li>
                      <li>Dashboard Layout</li>
                      <li>Initial Data Visualization</li>
                      <li>Supabase Integration Structure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">In Progress</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Advanced Risk Algorithms</li>
                      <li>Data Migration Tools</li>
                      <li>Real-time Alerts System</li>
                      <li>API Integration for External Data</li>
                      <li>Performance Optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-6">Recommendations</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
                <CardDescription>Recommended implementation priorities</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li><strong>Supabase Configuration:</strong> Complete environment variable setup for full backend functionality</li>
                  <li><strong>Component Refactoring:</strong> Break down larger components like DataMigrationPanel for better maintainability</li>
                  <li><strong>Data Modeling:</strong> Finalize database schema and relationships</li>
                  <li><strong>Testing Suite:</strong> Implement comprehensive test coverage</li>
                  <li><strong>Documentation:</strong> Create developer and user documentation</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-10" />

        <div className="text-center text-sm text-muted-foreground">
          <p>Report generated on {new Date().toLocaleDateString()} | Supply Chain Risk Management Platform</p>
        </div>
      </div>
    </PageTransition>
  );
};

export default Report;
