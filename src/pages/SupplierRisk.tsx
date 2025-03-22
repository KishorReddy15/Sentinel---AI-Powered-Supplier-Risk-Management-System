
import React, { useState } from 'react';
import PageTransition from '@/components/ui/PageTransition';
import GlassCard from '@/components/ui/GlassCard';
import GlobalMap from '@/components/maps/GlobalMap';
import { supplierData } from '@/data/dummyData';
import { Plus, Map, AlertTriangle, RefreshCw, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

const SupplierRisk = () => {
  const [suppliers, setSuppliers] = useState(supplierData);
  const [selectedSupplier, setSelectedSupplier] = useState<any>(null);
  const [newSupplier, setNewSupplier] = useState({
    name: '',
    location: '',
    riskFactors: '',
    coordinates: ['0', '0'] as [string, string],
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  
  // Map data
  const mapLocations = suppliers.map(supplier => {
    // Generate coordinate if none provided
    let coordinates: [number, number] = [0, 0];
    
    if (supplier.location.includes("China")) {
      coordinates = [116.4, 39.9]; // Beijing
    } else if (supplier.location.includes("Germany")) {
      coordinates = [13.4, 52.5]; // Berlin
    } else if (supplier.location.includes("USA")) {
      coordinates = [-83.0, 42.3]; // Detroit
    } else if (supplier.location.includes("Taiwan")) {
      coordinates = [121.5, 25.0]; // Taipei
    } else if (supplier.location.includes("Brazil")) {
      coordinates = [-46.6, -23.5]; // São Paulo
    } else {
      // Random coordinates
      coordinates = [
        -180 + Math.random() * 360,
        -90 + Math.random() * 180
      ];
    }
    
    return {
      id: supplier.id,
      name: supplier.name,
      location: supplier.location,
      coordinates: coordinates,
      type: 'supplier' as const,
      details: {
        riskScore: supplier.riskScore,
        riskLevel: supplier.riskLevel,
        riskFactors: supplier.riskFactors.join(', ')
      }
    };
  });

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new supplier with default values for demo
    const supplier = {
      id: suppliers.length + 1,
      name: newSupplier.name,
      location: newSupplier.location,
      riskScore: Math.floor(Math.random() * 100),
      riskLevel: Math.random() > 0.6 ? "High" : Math.random() > 0.3 ? "Medium" : "Low",
      riskFactors: newSupplier.riskFactors.split(',').map(factor => factor.trim()),
      trend: Math.random() > 0.6 ? "up" : Math.random() > 0.3 ? "stable" : "down",
      lastUpdated: new Date().toISOString()
    };
    
    // Add to state
    setSuppliers([...suppliers, supplier]);
    setOpenDialog(false);
    
    // Reset form
    setNewSupplier({
      name: '',
      location: '',
      riskFactors: '',
      coordinates: ['0', '0'],
    });
    
    toast.success(`Added supplier: ${supplier.name}`);
  };

  const handleSupplierClick = (location: any) => {
    const supplier = suppliers.find(s => s.id === location.id);
    if (supplier) {
      setSelectedSupplier(supplier);
      toast.info(`Viewing details for ${supplier.name}`);
    }
  };

  const handleRiskAssessment = () => {
    if (!selectedSupplier) return;
    
    toast.info(`Running AI risk assessment for ${selectedSupplier.name}...`);
    
    // Simulate risk assessment 
    setTimeout(() => {
      toast.success(`Risk assessment complete for ${selectedSupplier.name}`);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Supplier Risk Management</h1>
          <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Supplier
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <form onSubmit={handleAddSupplier}>
                <DialogHeader>
                  <DialogTitle>Add New Supplier</DialogTitle>
                  <DialogDescription>
                    Enter the details of your new supplier. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newSupplier.name}
                      onChange={(e) => setNewSupplier({...newSupplier, name: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input
                      id="location"
                      value={newSupplier.location}
                      onChange={(e) => setNewSupplier({...newSupplier, location: e.target.value})}
                      className="col-span-3"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="riskFactors" className="text-right">
                      Risk Factors
                    </Label>
                    <Input
                      id="riskFactors"
                      value={newSupplier.riskFactors}
                      onChange={(e) => setNewSupplier({...newSupplier, riskFactors: e.target.value})}
                      className="col-span-3"
                      placeholder="Enter comma-separated risk factors"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="longitude" className="text-right">
                      Longitude
                    </Label>
                    <Input
                      id="longitude"
                      value={newSupplier.coordinates[0]}
                      onChange={(e) => setNewSupplier({...newSupplier, coordinates: [e.target.value, newSupplier.coordinates[1]]})}
                      className="col-span-3"
                      placeholder="Longitude (optional)"
                      type="number"
                      min="-180"
                      max="180"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="latitude" className="text-right">
                      Latitude
                    </Label>
                    <Input
                      id="latitude"
                      value={newSupplier.coordinates[1]}
                      onChange={(e) => setNewSupplier({...newSupplier, coordinates: [newSupplier.coordinates[0], e.target.value]})}
                      className="col-span-3"
                      placeholder="Latitude (optional)"
                      type="number"
                      min="-90"
                      max="90"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save Supplier</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center mb-4">
              <Map className="mr-2 text-primary" />
              <h2 className="text-2xl font-semibold">Supplier Risk Map</h2>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-700">
                Our AI-powered risk scoring system provides real-time monitoring of your suppliers, with detailed analysis of potential risks around the globe.
              </p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowHeatmap(!showHeatmap)}
                >
                  {showHeatmap ? 'Hide Risk Heatmap' : 'Show Risk Heatmap'}
                </Button>
              </div>
            </div>
            <GlobalMap 
              locations={mapLocations} 
              height="500px"
              onLocationClick={handleSupplierClick}
              showHeatmap={showHeatmap}
              focusLocation={selectedSupplier ? mapLocations.find(l => l.id === selectedSupplier.id) : null}
            />
            <div className="flex justify-end mt-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <span className="text-sm">High Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm">Medium Risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm">Low Risk</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
        
        {selectedSupplier && (
          <div className="mb-10">
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {selectedSupplier.name} - Risk Profile
                </h3>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRiskAssessment}
                >
                  <AlertCircle className="mr-2 h-4 w-4" /> Run Risk Assessment
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg mb-2">Overview</h4>
                  <p><strong>Location:</strong> {selectedSupplier.location}</p>
                  <p><strong>Last Updated:</strong> {new Date(selectedSupplier.lastUpdated).toLocaleDateString()}</p>
                  <p><strong>Risk Level:</strong> 
                    <span className={
                      selectedSupplier.riskLevel === "High" ? "text-red-500 ml-2 font-semibold" : 
                      selectedSupplier.riskLevel === "Medium" ? "text-yellow-500 ml-2 font-semibold" : 
                      "text-green-500 ml-2 font-semibold"
                    }>
                      {selectedSupplier.riskLevel}
                    </span>
                  </p>
                  <p><strong>Risk Score:</strong> {selectedSupplier.riskScore}/100</p>
                  <p className="flex items-center">
                    <strong>Trend:</strong>
                    <span className="ml-2">
                      {selectedSupplier.trend === "up" ? 
                        <TrendingUp className="text-red-500" /> : 
                        selectedSupplier.trend === "down" ? 
                        <TrendingDown className="text-green-500" /> : 
                        "→"
                      }
                    </span>
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg mb-2">Risk Factors</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedSupplier.riskFactors.map((factor: string, index: number) => (
                      <li key={index}>{factor}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg mb-2">Recommended Actions</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedSupplier.riskLevel === "High" ? (
                      <>
                        <li>Conduct immediate supplier audit</li>
                        <li>Identify alternative suppliers</li>
                        <li>Create mitigation strategy</li>
                        <li>Increase monitoring frequency</li>
                      </>
                    ) : selectedSupplier.riskLevel === "Medium" ? (
                      <>
                        <li>Schedule review meeting</li>
                        <li>Request additional documentation</li>
                        <li>Consider risk insurance</li>
                      </>
                    ) : (
                      <>
                        <li>Maintain regular monitoring</li>
                        <li>Annual compliance check</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => setSelectedSupplier(null)}>
                  Close Details
                </Button>
              </div>
            </GlassCard>
          </div>
        )}
        
        <div className="mb-10">
          <GlassCard className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <AlertTriangle className="mr-2 text-yellow-500" />
                <h2 className="text-2xl font-semibold">Supplier Risk Table</h2>
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" /> Refresh Risk Data
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border">Supplier</th>
                    <th className="px-4 py-2 border">Risk Score</th>
                    <th className="px-4 py-2 border">Location</th>
                    <th className="px-4 py-2 border">Risk Factors</th>
                    <th className="px-4 py-2 border">Trend</th>
                    <th className="px-4 py-2 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier) => (
                    <tr key={supplier.id} className={selectedSupplier?.id === supplier.id ? "bg-primary/10" : ""}>
                      <td className="px-4 py-2 border">{supplier.name}</td>
                      <td className={`px-4 py-2 border ${
                        supplier.riskLevel === "High" ? "text-red-500" : 
                        supplier.riskLevel === "Medium" ? "text-yellow-500" : 
                        "text-green-500"
                      }`}>
                        {supplier.riskLevel} ({supplier.riskScore}/100)
                      </td>
                      <td className="px-4 py-2 border">{supplier.location}</td>
                      <td className="px-4 py-2 border">{supplier.riskFactors.join(', ')}</td>
                      <td className="px-4 py-2 border">
                        {supplier.trend === "up" ? 
                        <TrendingUp className="text-red-500" /> : 
                        supplier.trend === "down" ? 
                        <TrendingDown className="text-green-500" /> : 
                        "→"}
                      </td>
                      <td className="px-4 py-2 border">
                        <Button 
                          variant="link" 
                          size="sm" 
                          onClick={() => setSelectedSupplier(supplier)}
                        >
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
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
